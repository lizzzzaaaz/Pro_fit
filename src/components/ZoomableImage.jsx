import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function ZoomableImage({ src, alt, style = {} }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  if (!src) return null;

  const lightbox = open && createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Просмотр изображения'}
      onClick={() => setOpen(false)}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: 'rgba(15, 15, 15, 0.88)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        boxSizing: 'border-box',
      }}
    >
      <button
        type="button"
        aria-label="Закрыть"
        onClick={() => setOpen(false)}
        style={{
          position: 'absolute',
          top: '20px',
          right: '24px',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.25)',
          backgroundColor: 'rgba(255,255,255,0.12)',
          color: '#fff',
          fontSize: '24px',
          lineHeight: 1,
          cursor: 'pointer',
        }}
      >
        ×
      </button>

      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 'min(1200px, 92vw)',
          maxHeight: '90vh',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          borderRadius: '8px',
          boxShadow: '0 24px 80px rgba(0,0,0,0.45)',
        }}
      />
    </div>,
    document.body,
  );

  const openPreview = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(true);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={openPreview}
        onMouseDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        title="Нажмите, чтобы увеличить"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          cursor: 'zoom-in',
          ...style,
        }}
      />
      {lightbox}
    </>
  );
}
