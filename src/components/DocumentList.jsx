import { colors } from '../theme';

function PdfIcon() {
  return (
    <svg width="28" height="32" viewBox="0 0 28 32" fill="none" aria-hidden="true">
      <path
        d="M6 0h10.5L26 9.5V28c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4V4C2 1.8 3.8 0 6 0z"
        fill={colors.lightBlueBg}
        stroke={colors.border}
      />
      <path d="M16 0v8c0 1.1.9 2 2 2h8" fill={colors.white} stroke={colors.border} />
      <rect x="5" y="18" width="18" height="8" rx="1.5" fill={colors.darkBlue} />
      <text x="14" y="24.5" textAnchor="middle" fill={colors.white} fontSize="5.5" fontWeight="700" fontFamily="sans-serif">
        PDF
      </text>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v11m0 0l4-4m-4 4l-4-4M5 19h14"
        stroke={colors.darkBlue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function DocumentList({ items }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {items.map(({ title, size, href, fileName }) => (
        <a
          key={fileName}
          href={href}
          download={fileName}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            padding: '14px 18px',
            backgroundColor: colors.white,
            border: `1px solid ${colors.border}`,
            borderRadius: '8px',
            textDecoration: 'none',
            color: colors.text,
            transition: 'border-color 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors.primary;
            e.currentTarget.style.boxShadow = '0 2px 12px rgba(201, 162, 39, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = colors.border;
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <span style={{ flexShrink: 0, display: 'flex' }}>
            <PdfIcon />
          </span>

          <span style={{ flex: 1, fontSize: '14px', lineHeight: '1.45', color: colors.textMuted }}>
            {title}
            {size && (
              <span style={{ color: colors.textFaint }}>{' '}({size})</span>
            )}
          </span>

          <span style={{ flexShrink: 0, display: 'flex', opacity: 0.85 }}>
            <DownloadIcon />
          </span>
        </a>
      ))}
    </div>
  );
}
