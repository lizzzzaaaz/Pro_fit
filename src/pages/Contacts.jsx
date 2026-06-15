import React from 'react';

function Contacts({ setActivePage }) {
  const labelStyle = { fontWeight: '700', color: '#0f172a', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '11px' };
  const textStyle = { color: '#475569', margin: '0 0 24px 0', fontSize: '15px', lineHeight: '1.6' };

  return (
    <div style={{ backgroundColor: '#fcfcfc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Крошки - исправлено: добавлен onClick */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 40px', fontSize: '14px', color: '#64748b' }}>
          <span style={{ color: '#0070f3', cursor: 'pointer', fontWeight: '500' }} onClick={() => setActivePage('main')}>Главная</span>
          <span style={{ margin: '0 12px', color: '#cbd5e1' }}>/</span>
          <span style={{ color: '#1e293b', fontWeight: '500' }}>Контакты</span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px' }}>
        <h1 style={{ fontSize: '38px', fontWeight: '800', color: '#111', margin: '0 0 40px 0', letterSpacing: '-1px' }}>Контакты</h1>

        <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '45px', boxShadow: '0 10px 40px rgba(0,0,0,0.01)', border: '1px solid #eef2f6', display: 'flex', gap: '60px' }}>
          
          {/* Инфо */}
          <div style={{ flex: '1' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '35px' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: '#cbd5e1', borderRadius: '50%' }}></div>
              <div>
                <p style={{ margin: '0 0 2px 0', color: '#0070f3', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Генеральный директор</p>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>Алексеев Пётр Валентинович</h3>
                <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '14px' }}>ceo@pro-fit.ru</p>
              </div>
            </div>

            <p style={labelStyle}>Официальное название:</p>
            <p style={textStyle}>ООО "Про_фит Разработки"</p>
            
            <p style={labelStyle}>Адрес головного офиса:</p>
            <p style={textStyle}>350059, г. Краснодар, ул. Стасова, д. 10, офис 402</p>

            <div style={{ display: 'flex', gap: '30px' }}>
              <div style={{ flex: '1' }}>
                <p style={labelStyle}>Телефон приёмной:</p>
                <p style={{ ...textStyle, fontWeight: '700', color: '#1e293b', fontSize: '17px' }}>+7 (861) 999-22-33</p>
              </div>
              <div style={{ flex: '1' }}>
                <p style={labelStyle}>Режим работы:</p>
                <p style={textStyle}>Пн — Пт: с 9:00 до 18:00</p>
              </div>
            </div>

            <p style={labelStyle}>Электронная почта:</p>
            <p style={{ ...textStyle, marginBottom: 0 }}>
              sales@pro-fit.ru — Отдел продаж<br />
              support@pro-fit.ru — Техническая поддержка
            </p>
          </div>

          {/* Карта */}
          <div style={{ flex: '1.1', border: '1px solid #eef2f6', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #eef2f6', padding: '14px 20px', fontWeight: '600', fontSize: '14px', color: '#1e293b' }}>📍 Карта Краснодара</div>
            <div style={{ flex: '1', backgroundColor: '#f1f5f9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#64748b', minHeight: '380px' }}>
              <span style={{ fontWeight: '600', color: '#1e293b' }}>Интерактивная карта</span>
              <span style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>ул. Стасова, 10</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contacts;