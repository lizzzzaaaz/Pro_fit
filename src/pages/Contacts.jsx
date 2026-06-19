import Breadcrumbs from '../components/Breadcrumbs';
import { colors, fonts } from '../theme';

const OFFICE_ADDRESS = '350059, г. Краснодар, ул. Стасова, д. 10, офис 402';
const YANDEX_MAPS_URL = 'https://yandex.ru/maps/?text=350059%2C%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%2C%20%D1%83%D0%BB.%20%D0%A1%D1%82%D0%B0%D1%81%D0%BE%D0%B2%D0%B0%2C%2010&z=17';
const YANDEX_MAP_EMBED = 'https://yandex.ru/map-widget/v1/?text=350059%2C%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80%2C%20%D1%83%D0%BB.%20%D0%A1%D1%82%D0%B0%D1%81%D0%BE%D0%B2%D0%B0%2C%2010&z=17&l=map';

function Contacts({ setActivePage }) {
  const labelStyle = {
    fontWeight: '700',
    color: colors.textFaint,
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    fontSize: '11px',
  };

  const textStyle = {
    color: colors.textMuted,
    margin: 0,
    fontSize: '15px',
    lineHeight: '1.6',
  };

  const cardStyle = {
    backgroundColor: colors.white,
    borderRadius: '12px',
    padding: '24px',
    border: `1px solid ${colors.border}`,
    boxShadow: '0 2px 8px rgba(74, 67, 56, 0.04)',
  };

  return (
    <div style={{ backgroundColor: colors.white, fontFamily: fonts.base, padding: '40px 0 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <Breadcrumbs
          setActivePage={setActivePage}
          items={[
            { label: 'ГЛАВНАЯ', page: 'main' },
            { label: 'КОНТАКТЫ' },
          ]}
        />

        <h1 style={{ margin: '0 0 36px 0', fontSize: '28px', fontWeight: '800', color: colors.text, letterSpacing: '-0.02em' }}>
          Контакты
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ ...cardStyle, display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                flexShrink: 0,
                backgroundColor: colors.lightBlueBg,
                borderRadius: '50%',
                border: `2px solid ${colors.primary}`,
              }} />
              <div>
                <p style={{ margin: '0 0 4px 0', color: colors.primary, fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Генеральный директор
                </p>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: colors.text }}>
                  Стрекалов Сергей Викторович
                </h3>
                <a href="mailto:ceo@pro-fit.ru" style={{ display: 'inline-block', marginTop: '6px', color: colors.primary, fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}>
                  ceo@pro-fit.ru
                </a>
              </div>
            </div>

            <div style={cardStyle}>
              <p style={labelStyle}>Официальное название</p>
              <p style={textStyle}>ООО «Про_фит Разработки»</p>
            </div>

            <div style={cardStyle}>
              <p style={labelStyle}>Адрес головного офиса</p>
              <p style={textStyle}>{OFFICE_ADDRESS}</p>
              <a
                href={YANDEX_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  color: colors.primary,
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none',
                }}
              >
                Открыть в Яндекс Картах →
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div style={cardStyle}>
                <p style={labelStyle}>Телефон приёмной</p>
                <a href="tel:+78619992233" style={{ ...textStyle, fontWeight: '700', color: colors.darkBlue, fontSize: '17px', textDecoration: 'none' }}>
                  +7 (861) 999-22-33
                </a>
              </div>
              <div style={cardStyle}>
                <p style={labelStyle}>Режим работы</p>
                <p style={textStyle}>Пн — Пт: с 9:00 до 18:00</p>
              </div>
            </div>

            <div style={cardStyle}>
              <p style={labelStyle}>Электронная почта</p>
              <p style={{ ...textStyle, marginBottom: '8px' }}>
                <a href="mailto:sales@pro-fit.ru" style={{ color: colors.primary, fontWeight: '600', textDecoration: 'none' }}>sales@pro-fit.ru</a>
                {' '}— Отдел продаж
              </p>
              <p style={textStyle}>
                <a href="mailto:support@pro-fit.ru" style={{ color: colors.primary, fontWeight: '600', textDecoration: 'none' }}>support@pro-fit.ru</a>
                {' '}— Техническая поддержка
              </p>
            </div>
          </div>

          <div style={{
            ...cardStyle,
            padding: 0,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '420px',
          }}>
            <div style={{
              backgroundColor: colors.lightBlueBg,
              borderBottom: `1px solid ${colors.border}`,
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              flexWrap: 'wrap',
            }}>
              <span style={{ fontWeight: '700', fontSize: '14px', color: colors.darkBlue }}>
                Карта офиса
              </span>
              <a
                href={YANDEX_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: colors.primary,
                  textDecoration: 'none',
                }}
              >
                Яндекс Карты →
              </a>
            </div>
            <iframe
              title="Офис на карте — ул. Стасова, 10, Краснодар"
              src={YANDEX_MAP_EMBED}
              style={{
                display: 'block',
                width: '100%',
                minHeight: '420px',
                height: '100%',
                flex: 1,
                border: 'none',
              }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
