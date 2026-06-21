import { useRef } from 'react';
import { colors, fonts } from '../theme';

const CARD_WIDTH = 220;
const CARD_HEIGHT = Math.round(CARD_WIDTH * (4.2 / 3));
const SCROLLBAR_CLIP = 24;
const CARD_GAP = 24;

function CertificatePreview({ href, title }) {
  return (
    <div style={{
      width: '100%',
      height: `${CARD_HEIGHT}px`,
      backgroundColor: colors.white,
      border: `1px solid ${colors.border}`,
      overflow: 'hidden',
      position: 'relative',
      boxSizing: 'border-box',
    }}>
      <iframe
        title={title}
        src={`${href}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
        scrolling="no"
        tabIndex={-1}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${CARD_WIDTH + SCROLLBAR_CLIP}px`,
          height: `${CARD_HEIGHT}px`,
          border: 'none',
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      />
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
      style={{
        flex: fullWidth ? undefined : `0 0 ${CARD_WIDTH}px`,
        width: fullWidth ? '100%' : undefined,
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
      }}
    >
      <CertificatePreview href={href} title={title} />
      <p style={{
        margin: '12px 0 0 0',
        fontSize: '13px',
        lineHeight: '1.45',
        textAlign: 'center',
        color: colors.textMuted,
        fontFamily: fonts.base,
      }}>
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
              color: colors.primary,
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: fonts.base,
              transition: 'background-color 0.2s, color 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.primary;
              e.currentTarget.style.color = colors.white;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.white;
              e.currentTarget.style.color = colors.primary;
            }}
          >
            Смотреть все
          </button>
        )}
      </div>

      <div
        ref={trackRef}
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
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(${CARD_WIDTH}px, 1fr))`,
      gap: '28px 24px',
    }}>
      {items.map((item) => (
        <CertificateCard key={item.id} {...item} fullWidth />
      ))}
    </div>
  );
}
