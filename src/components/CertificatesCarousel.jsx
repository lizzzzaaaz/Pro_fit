import { useEffect, useRef, useState } from 'react';
import * as pdfjs from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { colors, fonts } from '../theme';

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const CARD_WIDTH = 220;
const CARD_GAP = 20;

function CertificatePreview({ href, title }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let renderTask = null;
    let lastWidth = 0;

    const renderPage = async () => {
      const wrap = wrapRef.current;
      const canvas = canvasRef.current;
      if (!wrap || !canvas) return;

      const wrapWidth = wrap.clientWidth || CARD_WIDTH;
      if (Math.abs(wrapWidth - lastWidth) < 2 && canvas.width > 0) return;
      lastWidth = wrapWidth;

      setFailed(false);

      try {
        const doc = await pdfjs.getDocument(href).promise;
        if (cancelled) return;

        const page = await doc.getPage(1);
        if (cancelled) return;

        const baseViewport = page.getViewport({ scale: 1 });
        const scale = wrapWidth / baseViewport.width;
        const viewport = page.getViewport({ scale });

        const context = canvas.getContext('2d');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);

        renderTask = page.render({ canvasContext: context, viewport });
        await renderTask.promise;
      } catch {
        if (!cancelled) setFailed(true);
      }
    };

    renderPage();

    const observer = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(() => { renderPage(); })
      : null;

    if (observer && wrapRef.current) {
      observer.observe(wrapRef.current);
    }

    return () => {
      cancelled = true;
      renderTask?.cancel?.();
      observer?.disconnect();
    };
  }, [href]);

  return (
    <div
      ref={wrapRef}
      className="cert-preview"
      style={{
        width: '100%',
        backgroundColor: colors.white,
        border: `1px solid ${colors.border}`,
        borderRadius: '6px',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      {!failed ? (
        <canvas
          ref={canvasRef}
          title={title}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      ) : (
        <div style={{ aspectRatio: '210 / 297', position: 'relative' }}>
          <iframe
            title={title}
            src={`${href}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            scrolling="no"
            tabIndex={-1}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              pointerEvents: 'none',
            }}
          />
        </div>
      )}
    </div>
  );
}

function CertificateCard({ title, href, fileName, fullWidth = false }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download={fileName}
      className={fullWidth ? 'certificate-card certificate-card--grid' : 'certificate-card'}
      style={{
        flex: fullWidth ? undefined : `0 0 ${CARD_WIDTH}px`,
        width: fullWidth ? '100%' : undefined,
        textDecoration: 'none',
        color: colors.text,
        display: 'block',
        minWidth: 0,
      }}
    >
      <CertificatePreview href={href} title={title} />
      <p
        className="certificate-card__title"
        style={{
          margin: '10px 0 0 0',
          fontSize: '13px',
          lineHeight: '1.45',
          textAlign: 'center',
          color: colors.textMuted,
          fontFamily: fonts.base,
        }}
      >
        {title}
      </p>
    </a>
  );
}

function NavArrow({ direction, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      style={{
        width: '32px',
        height: '32px',
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        color: colors.darkBlue,
        fontSize: '22px',
        lineHeight: 1,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'color 0.2s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.color = colors.primary; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = colors.darkBlue; }}
    >
      {direction === 'left' ? '‹' : '›'}
    </button>
  );
}

export default function CertificatesCarousel({
  items,
  onViewAll,
  showViewAll = true,
}) {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const step = (CARD_WIDTH + CARD_GAP) * 2;
    trackRef.current?.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section style={{ marginTop: '48px', fontFamily: fonts.base }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
        marginBottom: '24px',
        flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
          <h2 style={{
            margin: 0,
            fontSize: '18px',
            fontWeight: '800',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: colors.text,
          }}>
            Лицензии и сертификаты
          </h2>
          <NavArrow direction="left" onClick={() => scroll(-1)} label="Предыдущие документы" />
          <NavArrow direction="right" onClick={() => scroll(1)} label="Следующие документы" />
        </div>

        {showViewAll && onViewAll && (
          <button
            type="button"
            onClick={onViewAll}
            style={{
              padding: '10px 22px',
              borderRadius: '999px',
              border: `1px solid ${colors.primary}`,
              backgroundColor: colors.white,
              color: colors.text,
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: fonts.base,
              transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.primary;
              e.currentTarget.style.color = colors.white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.white;
              e.currentTarget.style.color = colors.text;
            }}
          >
            Смотреть все
          </button>
        )}
      </div>

      <div
        ref={trackRef}
        className="certificates-track"
        style={{
          display: 'flex',
          gap: `${CARD_GAP}px`,
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingBottom: '8px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {items.map((item) => (
          <CertificateCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export function CertificatesGrid({ items }) {
  return (
    <div className="certificates-grid">
      {items.map((item) => (
        <CertificateCard key={item.id} {...item} fullWidth />
      ))}
    </div>
  );
}
