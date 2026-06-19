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
          <div style={{ fontSize: '22px', fontWeight: '800', marginBottom: '12px', color: colors.lightBlue }}>Профи-Т</div>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: '1.6' }}>
            ООО «Про_фит Разработки» — проектирование, разработка и интеграция программно-аппаратных комплексов для автоматизации и телеметрии.
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
            <button type="button" onClick={() => setActivePage('support')} style={linkStyle}>Тех поддержка</button>
          </div>
        </div>

        <div>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: colors.lightBlue }}>
            Контакты
          </h4>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)' }}>
            350059, г. Краснодар,<br />ул. Стасова, д. 10, офис 402
          </p>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>
            <a href="tel:+78619992233" style={{ color: '#ffffff', textDecoration: 'none' }}>+7 (861) 999-22-33</a>
          </p>
          <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)' }}>
            <a href="mailto:sales@pro-fit.ru" style={{ color: colors.lightBlue, textDecoration: 'none' }}>sales@pro-fit.ru</a><br />
            <a href="mailto:support@pro-fit.ru" style={{ color: colors.lightBlue, textDecoration: 'none' }}>support@pro-fit.ru</a>
          </p>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.12)',
        padding: '16px 40px',
        textAlign: 'center',
        fontSize: '13px',
        color: 'rgba(255,255,255,0.55)',
      }}>
        © {new Date().getFullYear()} ООО «Про_фит Разработки». Все права защищены.
      </div>
    </footer>
  );
}

export default Footer;
