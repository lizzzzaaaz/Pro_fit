import controllersImg from '../assets/kut300-pk.png';
import telemetryImg from '../assets/Комплекс_КУТ300АК_БЕЗ220.png';
import barriersImg from '../assets/БИЗ-ИП9.png';
import batteryImg from '../assets/Аккамуляторный блок.png';
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
    img: barriersImg,
  },
  {
    page: 'power-supplies',
    title: 'Источники питания',
    img: batteryImg,
  },
  {
    page: 'software-products',
    title: 'Программное обеспечение',
  },
];

const cardButtonStyle = {
  textAlign: 'left',
  backgroundColor: colors.white,
  padding: '20px',
  borderRadius: '12px',
  border: `1px solid ${colors.border}`,
  cursor: 'pointer',
  font: 'inherit',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
  boxShadow: '0 2px 8px rgba(74, 67, 56, 0.04)',
};

const imageFrameStyle = {
  aspectRatio: '1 / 1',
  width: '100%',
  backgroundColor: colors.lightBlueBg,
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${colors.borderLight}`,
  overflow: 'hidden',
  boxSizing: 'border-box',
  padding: '16px',
};

const productImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  objectPosition: 'center',
};

export default function ProductsCatalog({ setActivePage }) {
  return (
    <div style={{ backgroundColor: colors.pageBg, fontFamily: fonts.base, padding: '40px 0 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', color: colors.text }}>
        <Breadcrumbs
          setActivePage={setActivePage}
          items={[
            { label: 'ГЛАВНАЯ', page: 'main' },
            { label: 'ПРОДУКЦИЯ' },
          ]}
        />

        <h1 style={{ margin: '0 0 30px 0', fontSize: '28px', color: colors.text }}>
          Продукция
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
        }}>
          {categories.map(({ page, title, img }) => (
            <button
              key={page}
              type="button"
              onClick={() => setActivePage(page)}
              style={cardButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = colors.primary;
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(201, 162, 39, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(74, 67, 56, 0.04)';
              }}
            >
              <div style={imageFrameStyle}>
                {img ? (
                  <img src={img} alt={title} style={productImageStyle} draggable={false} />
                ) : (
                  <span style={{ fontSize: '12px', color: colors.textLight, textAlign: 'center', padding: '10px' }}>
                    Программное обеспечение
                  </span>
                )}
              </div>

              <h3 style={{ margin: 0, fontSize: '18px', color: colors.primary, lineHeight: '1.3' }}>
                {title}
              </h3>

              <span style={{ fontSize: '14px', fontWeight: '600', color: colors.primary }}>
                Перейти →
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
