import React from 'react';
import { colors, fonts } from '../theme';

function Contacts({ setActivePage }) {
  const labelStyle = { fontWeight: '700', color: colors.text, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '11px' };
  const textStyle = { color: colors.textMuted, margin: '0 0 24px 0', fontSize: '15px', lineHeight: '1.6' };

  return (
    <div style={{ backgroundColor: colors.pageBg, fontFamily: fonts.base }}>
      
      <div style={{ backgroundColor: colors.white, borderBottom: `1px solid ${colors.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 40px', fontSize: '14px', color: colors.textLight }}>
          <span style={{ color: colors.lightBlue, cursor: 'pointer', fontWeight: '500' }} onClick={() => setActivePage('main')}>Главная</span>
          <span style={{ margin: '0 12px', color: colors.borderNeutral }}>/</span>
          <span style={{ color: colors.darkBlue, fontWeight: '500' }}>Контакты</span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px 80px' }}>
        <h1 style={{ fontSize: '38px', fontWeight: '800', color: colors.text, margin: '0 0 40px 0', letterSpacing: '-1px' }}>Контакты</h1>

        <div style={{ backgroundColor: colors.white, borderRadius: '16px', padding: '45px', boxShadow: '0 4px 20px rgba(2, 132, 199, 0.06)', border: `1px solid ${colors.border}`, display: 'flex', gap: '60px' }}>
          
          <div style={{ flex: '1' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', backgroundColor: colors.lightBlueBg, padding: '20px', borderRadius: '12px', border: `1px solid ${colors.border}`, marginBottom: '35px' }}>
              <div style={{ width: '60px', height: '60px', backgroundColor: colors.borderNeutral, borderRadius: '50%' }}></div>
              <div>
                <p style={{ margin: '0 0 2px 0', color: colors.primary, fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Генеральный директор</p>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>Алексеев Пётр Валентинович</h3>
                <p style={{ margin: '4px 0 0 0', color: colors.textLight, fontSize: '14px' }}>ceo@pro-fit.ru</p>
              </div>
            </div>

            <p style={labelStyle}>Официальное название:</p>
            <p style={textStyle}>ООО "Про_фит Разработки"</p>
            
            <p style={labelStyle}>Адрес головного офиса:</p>
            <p style={textStyle}>350059, г. Краснодар, ул. Стасова, д. 10, офис 402</p>

            <div style={{ display: 'flex', gap: '30px' }}>
              <div style={{ flex: '1' }}>
                <p style={labelStyle}>Телефон приёмной:</p>
                <p style={{ ...textStyle, fontWeight: '700', color: colors.darkBlue, fontSize: '17px' }}>+7 (861) 999-22-33</p>
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

          <div style={{ flex: '1.1', border: `1px solid ${colors.border}`, borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ backgroundColor: colors.lightBlueBg, borderBottom: `1px solid ${colors.border}`, padding: '14px 20px', fontWeight: '600', fontSize: '14px', color: colors.darkBlue }}>📍 Карта Краснодара</div>
            <div style={{ flex: '1', backgroundColor: colors.lightBlueBg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: colors.textLight, minHeight: '380px' }}>
              <span style={{ fontWeight: '600', color: colors.darkBlue }}>Интерактивная карта</span>
              <span style={{ fontSize: '13px', color: colors.textFaint, marginTop: '4px' }}>ул. Стасова, 10</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contacts;
