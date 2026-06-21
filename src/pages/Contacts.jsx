import Breadcrumbs from '../components/Breadcrumbs';
import RequisitesBlock from '../components/RequisitesBlock';
import { companyRequisites, YANDEX_MAPS_URL, YANDEX_MAP_EMBED } from '../data/companyRequisites';
import { colors, fonts } from '../theme';

function Contacts({ setActivePage }) {
  const labelStyle = {
    fontWeight: '700',
    color: colors.primary,
    marginBottom: '12px',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
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
    padding: '22px 24px',
    border: `1px solid rgba(92, 83, 68, 0.12)`,
    borderLeft: `4px solid ${colors.primary}`,
    boxShadow: '0 4px 16px rgba(74, 67, 56, 0.06)',
    height: '100%',
    boxSizing: 'border-box',
  };

  const phoneLinkStyle = {
    display: 'block',
    fontWeight: '700',
    color: colors.darkBlue,
    fontSize: '15px',
    textDecoration: 'none',
    marginBottom: '6px',
    transition: 'color 0.2s ease',
  };

  return (
    <div style={{ backgroundColor: colors.pageBg, fontFamily: fonts.base, padding: '40px 0 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <Breadcrumbs
          setActivePage={setActivePage}
          items={[
            { label: 'ГЛАВНАЯ', page: 'main' },
            { label: 'КОНТАКТЫ' },
          ]}
        />

        <header style={{
          margin: '8px 0 32px 0',
          paddingBottom: '24px',
          borderBottom: `2px solid ${colors.darkBlue}`,
        }}>
          <h1 style={{
            margin: '0 0 8px 0',
            fontSize: '28px',
            fontWeight: '800',
            color: colors.text,
            letterSpacing: '-0.02em',
          }}>
            Контакты
          </h1>
          <p style={{ margin: 0, fontSize: '15px', color: colors.textMuted }}>
            {companyRequisites.shortName}
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr) minmax(280px, 1.05fr)',
          gap: '20px',
          alignItems: 'stretch',
          marginBottom: '28px',
        }}>
          <div style={{
            ...cardStyle,
            borderLeft: 'none',
            background: `linear-gradient(135deg, ${colors.darkBlue} 0%, ${colors.darkBlueDeep} 100%)`,
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start',
            boxShadow: '0 8px 24px rgba(74, 67, 56, 0.15)',
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              flexShrink: 0,
              borderRadius: '50%',
              border: `2px solid rgba(201, 162, 39, 0.5)`,
              backgroundColor: 'rgba(201, 162, 39, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: '800',
              color: colors.lightBlue,
            }}>
              РЛ
            </div>
            <div>
              <p style={{
                margin: '0 0 6px 0',
                color: colors.lightBlue,
                fontSize: '11px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                {companyRequisites.director.title}
              </p>
              <h3 style={{
                margin: '0 0 6px 0',
                fontSize: '17px',
                fontWeight: '700',
                color: colors.white,
                lineHeight: '1.35',
              }}>
                {companyRequisites.director.name}
              </h3>
              <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.72)', fontSize: '13px', lineHeight: '1.5' }}>
                {companyRequisites.director.basis}
              </p>
            </div>
          </div>

          <div style={cardStyle}>
            <p style={labelStyle}>Организация</p>
            <p style={{ ...textStyle, marginBottom: '8px', fontWeight: '600', color: colors.text }}>
              {companyRequisites.shortName}
            </p>
            <p style={{ ...textStyle, fontSize: '14px' }}>{companyRequisites.fullName}</p>
          </div>

          <div style={{
            ...cardStyle,
            padding: 0,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gridRow: 'span 2',
            borderLeft: 'none',
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${colors.darkBlue} 0%, ${colors.darkBlueDeep} 100%)`,
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              flexWrap: 'wrap',
            }}>
              <span style={{ fontWeight: '700', fontSize: '14px', color: colors.white }}>
                Карта офиса
              </span>
              <a
                href={YANDEX_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '13px', fontWeight: '600', color: colors.lightBlue, textDecoration: 'none' }}
              >
                Яндекс Карты →
              </a>
            </div>
            <iframe
              title="Офис на карте — ул. Стасова, 182б, Краснодар"
              src={YANDEX_MAP_EMBED}
              style={{ display: 'block', width: '100%', flex: 1, minHeight: '320px', border: 'none' }}
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div style={cardStyle}>
            <p style={labelStyle}>Связь</p>
            <p style={{ ...textStyle, marginBottom: '12px', fontSize: '13px', fontWeight: '600', color: colors.text }}>
              Телефоны
            </p>
            {companyRequisites.phones.map((phone, i) => (
              <a
                key={phone}
                href={companyRequisites.phoneLinks[i]}
                style={phoneLinkStyle}
                onMouseEnter={(e) => { e.currentTarget.style.color = colors.primary; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = colors.darkBlue; }}
              >
                {phone}
              </a>
            ))}
            <p style={{ ...textStyle, margin: '14px 0 8px 0', fontSize: '13px', fontWeight: '600', color: colors.text }}>
              E-mail
            </p>
            <a
              href={`mailto:${companyRequisites.email}`}
              style={{ color: colors.primary, fontWeight: '600', textDecoration: 'none', fontSize: '15px' }}
            >
              {companyRequisites.email}
            </a>
            <p style={{ ...textStyle, margin: '16px 0 8px 0', fontSize: '13px', fontWeight: '600', color: colors.text }}>
              Контактное лицо
            </p>
            <p style={{ ...textStyle, marginBottom: '6px', fontSize: '14px' }}>
              {companyRequisites.contactPerson.name}
            </p>
            <a
              href={companyRequisites.contactPerson.phoneLink}
              style={{ ...phoneLinkStyle, marginBottom: 0 }}
              onMouseEnter={(e) => { e.currentTarget.style.color = colors.primary; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.darkBlue; }}
            >
              {companyRequisites.contactPerson.phone}
            </a>
          </div>

          <div style={cardStyle}>
            <p style={labelStyle}>Адреса</p>
            <p style={{ ...textStyle, marginBottom: '14px' }}>
              <span style={{ display: 'block', fontWeight: '600', color: colors.text, marginBottom: '4px', fontSize: '13px' }}>
                Юридический
              </span>
              {companyRequisites.legalAddress}
            </p>
            <p style={{ ...textStyle, marginBottom: '14px' }}>
              <span style={{ display: 'block', fontWeight: '600', color: colors.text, marginBottom: '4px', fontSize: '13px' }}>
                Для корреспонденции
              </span>
              {companyRequisites.mailAddress}
            </p>
            <a
              href={YANDEX_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: colors.primary, fontSize: '14px', fontWeight: '600', textDecoration: 'none' }}
            >
              Открыть в Яндекс Картах →
            </a>
          </div>
        </div>

        <RequisitesBlock />
      </div>
    </div>
  );
}

export default Contacts;
