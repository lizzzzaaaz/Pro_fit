import { colors } from '../theme';

const linkStyle = {
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  color: colors.primary,
  font: 'inherit',
};

const containerStyle = {
  marginBottom: '28px',
  fontSize: '13px',
  letterSpacing: '0.5px',
  fontWeight: '500',
  color: colors.textFaint,
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  flexWrap: 'wrap',
};

export default function Breadcrumbs({ items, setActivePage, style }) {
  return (
    <nav aria-label="Навигация" style={{ ...containerStyle, ...style }}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const isLink = !isLast && (item.page || item.onClick);

        return (
          <span key={`${item.label}-${index}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            {index > 0 && <span style={{ color: colors.borderNeutral }}>/</span>}
            {isLink ? (
              <button
                type="button"
                onClick={() => {
                  if (item.onClick) item.onClick();
                  else if (item.page) setActivePage(item.page);
                }}
                style={linkStyle}
              >
                {item.label}
              </button>
            ) : (
              <span style={{ color: colors.text, fontWeight: '600' }}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
