import { companyRequisites } from '../data/companyRequisites';
import { colors, fonts } from '../theme';
function Footer({ setActivePage }) {
  const linkStyle = {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    color: colors.lightBlue,
    font: 'inherit',
    fontSize: '14px',
    textAlign: 'left',
  };

  return (
    <footer style={{
      backgroundColor: colors.darkBlue,
      color: '#ffffff',
      fontFamily: fonts.base,
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 40px 32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '40px',
      }}>
        <div>
          <div style={{ fontSize: '22px', fontWeight: '800', marginBottom: '12px', color: colors.lightBlue }}>
            {companyRequisites.brandName}
          </div>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: '1.6' }}>
            {companyRequisites.shortName} — {companyRequisites.tagline}
          </p>
        </div>

        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: colors.lightBlue }}>
            Разделы
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button type="button" onClick={() => setActivePage('services')} style={linkStyle}>Услуги</button>
            <button type="button" onClick={() => setActivePage('products-catalog')} style={linkStyle}>Продукция</button>
            <button type="button" onClick={() => setActivePage('contacts')} style={linkStyle}>Контакты</button>
          </div>
        </div>

        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: colors.lightBlue }}>
            Контакты
          </h4>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)' }}>
            {companyRequisites.legalAddress}
          </p>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>
            {companyRequisites.phones.map((phone, i) => (
              <span key={phone}>
                {i > 0 && '; '}
                <a href={companyRequisites.phoneLinks[i]} style={{ color: '#ffffff', textDecoration: 'none' }}>{phone}</a>
              </span>
            ))}
          </p>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)' }}>
            <a href={`mailto:${companyRequisites.email}`} style={{ color: colors.lightBlue, textDecoration: 'none' }}>
              {companyRequisites.email}
            </a>
          </p>
        </div>
      </div>

      <div style={{        borderTop: '1px solid rgba(255,255,255,0.12)',
        padding: '16px 40px',
        textAlign: 'center',
        fontSize: '13px',
        color: 'rgba(255,255,255,0.55)',
      }}>
        © {new Date().getFullYear()} {companyRequisites.shortName}. Все права защищены.
      </div>
    </footer>
  );
}

export default Footer;
