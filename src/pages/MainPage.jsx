import { colors, fonts } from '../theme';
import { companyAboutContent } from '../data/companyAboutContent';
import { companyRequisites } from '../data/companyRequisites';
import BrandEmblem from '../components/BrandEmblem';

const cardIndexStyle = {
  margin: '0 0 12px 0',
  fontSize: '44px',
  fontWeight: '800',
  lineHeight: 1,
  color: 'rgba(154, 117, 22, 0.35)',
  letterSpacing: '-0.04em',
};

function HeroBrandMark() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{ marginBottom: '28px' }}>
        <BrandEmblem size={220} />
      </div>

      <div style={{
        fontSize: 'clamp(28px, 3vw, 36px)',
        fontWeight: '800',
        letterSpacing: '-0.03em',
        color: '#ffffff',
        marginBottom: '10px',
      }}>
        Профи-<span style={{ color: colors.lightBlue }}>Т</span>
      </div>
      <p style={{
        margin: 0,
        maxWidth: '280px',
        textAlign: 'center',
        fontSize: '14px',
        lineHeight: '1.55',
        color: 'rgba(255, 255, 255, 0.62)',
      }}>
        {companyAboutContent.hero.brandCaption}
      </p>
    </div>
  );
}

function MainPage({ setActivePage }) {
  const cardStyle = {
    backgroundColor: colors.white,
    padding: '36px 32px',
    borderRadius: '16px',
    border: `1px solid ${colors.border}`,
    boxShadow: '0 4px 24px rgba(74, 67, 56, 0.06)',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    height: '100%',
    boxSizing: 'border-box',
  };


  const { hero } = companyAboutContent;

  return (
    <div style={{ fontFamily: fonts.base, color: colors.text }}>
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${colors.darkBlueDeep} 0%, #3d3629 50%, ${colors.darkBlue} 100%)`,
        color: '#ffffff',
      }}>
        <div style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '360px',
          height: '360px',
          borderRadius: '50%',
          border: `2px solid rgba(201, 162, 39, 0.25)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-120px',
          left: '-60px',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'rgba(201, 162, 39, 0.08)',
          pointerEvents: 'none',
        }} />

        <div className="hero-grid" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '72px 40px 80px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <div>
            <p style={{
              margin: '0 0 24px 0',
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
            }}>
              {companyRequisites.shortName}
            </p>

            <h1 style={{
              margin: '0 0 20px 0',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: '800',
              lineHeight: '1.12',
              letterSpacing: '-0.03em',
            }}>
              {hero.title}{' '}
              <span style={{ color: colors.lightBlue }}>{hero.titleAccent}</span>
            </h1>

            <p style={{
              margin: '0 0 32px 0',
              fontSize: '17px',
              lineHeight: '1.65',
              color: 'rgba(255, 255, 255, 0.78)',
              maxWidth: '520px',
            }}>
              {hero.subtitle}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setActivePage('services')}
                style={{
                  backgroundColor: colors.primary,
                  color: '#fff',
                  border: 'none',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseOver={(e) => { e.currentTarget.style.backgroundColor = colors.primaryDark; }}
                onMouseOut={(e) => { e.currentTarget.style.backgroundColor = colors.primary; }}
              >
                Наши услуги
              </button>
              <button
                type="button"
                onClick={() => setActivePage('products-catalog')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  padding: '14px 28px',
                  borderRadius: '10px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = colors.lightBlue;
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Каталог продукции
              </button>
            </div>
          </div>

          <HeroBrandMark />
        </div>
      </section>

      <section className="section-pad" style={{ backgroundColor: colors.white, padding: '72px 40px 88px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 className="responsive-heading-lg" style={{ margin: '0 0 12px 0', fontSize: '28px', fontWeight: '800', color: colors.darkBlue }}>
              Направления деятельности
            </h2>
            <p style={{ margin: 0, color: colors.textMuted, fontSize: '16px' }}>
              Комплексные решения для промышленной автоматизации и телеметрии
            </p>
          </div>

          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setActivePage('services')}
              onKeyDown={(e) => e.key === 'Enter' && setActivePage('services')}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(201, 162, 39, 0.12)';
                e.currentTarget.style.borderColor = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(74, 67, 56, 0.06)';
                e.currentTarget.style.borderColor = colors.border;
              }}
            >
              <div style={cardIndexStyle}>01</div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '22px', fontWeight: '700', color: colors.darkBlue }}>
                Инженерные услуги
              </h3>
              <p style={{ color: colors.textMuted, margin: '0 0 24px 0', fontSize: '15px', lineHeight: '1.65' }}>
                От предпроектного аудита и составления ТЗ до шеф-монтажа и пусконаладки систем на объекте заказчика.
              </p>
              <span style={{ fontWeight: '600', fontSize: '14px', color: colors.primary }}>Подробнее →</span>
            </div>

            <div
              role="button"
              tabIndex={0}
              onClick={() => setActivePage('products-catalog')}
              onKeyDown={(e) => e.key === 'Enter' && setActivePage('products-catalog')}
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(201, 162, 39, 0.12)';
                e.currentTarget.style.borderColor = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(74, 67, 56, 0.06)';
                e.currentTarget.style.borderColor = colors.border;
              }}
            >
              <div style={cardIndexStyle}>02</div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '22px', fontWeight: '700', color: colors.darkBlue }}>
                Собственные продукты
              </h3>
              <p style={{ color: colors.textMuted, margin: '0 0 24px 0', fontSize: '15px', lineHeight: '1.65' }}>
                Промышленные контроллеры, модули телеметрии и специализированное ПО для диспетчерских центров.
              </p>
              <span style={{ fontWeight: '600', fontSize: '14px', color: colors.primary }}>Подробнее →</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
