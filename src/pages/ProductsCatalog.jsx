import controllersImg from '../assets/kut300-pk.png';
import telemetryImg from '../assets/КУТ300-АК.png';
import powerImg from '../assets/kut300-b03.png';
import Breadcrumbs from '../components/Breadcrumbs';
import { colors, fonts } from '../theme';

const categories = [
  {
    page: 'industrial-controllers',
    title: 'Промышленные контроллеры',
    img: controllersImg,
  },
  {
    page: 'autonomous-telemetry',
    title: 'Комплексы телеметрии',
    img: telemetryImg,
  },
  {
    page: 'power-modules',
    title: 'Барьеры искрозащиты',
    img: powerImg,
  },
  {
    page: 'software-products',
    title: 'Программное обеспечение',
  },
];

export default function ProductsCatalog({ setActivePage }) {
  return (
    <div style={{ backgroundColor: colors.white, fontFamily: fonts.base, padding: '40px 0 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <Breadcrumbs
          setActivePage={setActivePage}
          items={[
            { label: 'ГЛАВНАЯ', page: 'main' },
            { label: 'ПРОДУКЦИЯ' },
          ]}
        />

        <h1 style={{ margin: '0 0 36px 0', fontSize: '28px', fontWeight: '800', color: colors.text, letterSpacing: '-0.02em' }}>
          Продукция
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {categories.map(({ page, title, img }) => (
            <button
              key={page}
              type="button"
              onClick={() => setActivePage(page)}
              style={{
                backgroundColor: colors.white,
                border: `1px solid ${colors.border}`,
                borderRadius: '12px',
                overflow: 'hidden',
                textAlign: 'left',
                padding: 0,
                cursor: 'pointer',
                font: 'inherit',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
                boxShadow: '0 2px 8px rgba(74, 67, 56, 0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = colors.primary;
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(201, 162, 39, 0.14)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(74, 67, 56, 0.04)';
              }}
            >
              <div style={{
                width: '100%',
                aspectRatio: '4 / 3',
                backgroundColor: colors.lightBlueBg,
                borderBottom: `1px solid ${colors.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                boxSizing: 'border-box',
              }}>
                {img ? (
                  <img
                    src={img}
                    alt={title}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <span style={{ fontSize: '13px', color: colors.textLight, textAlign: 'center' }}>
                    Программное обеспечение
                  </span>
                )}
              </div>

              <div style={{ padding: '18px 20px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  margin: '0 0 auto 0',
                  paddingBottom: '16px',
                  fontSize: '15px',
                  fontWeight: '700',
                  color: colors.darkBlue,
                  lineHeight: '1.45',
                  minHeight: '44px',
                }}>
                  {title}
                </h3>

                <span style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: colors.primary,
                }}>
                  Перейти →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
