import React from 'react';
import { colors, fonts } from '../theme';

function MainPage({ setActivePage }) {
  const cardStyle = {
    backgroundColor: colors.white,
    padding: '45px',
    borderRadius: '12px',
    border: `1px solid ${colors.border}`,
    boxShadow: '0 4px 20px rgba(2, 132, 199, 0.06)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={{ fontFamily: fonts.base, color: colors.text, backgroundColor: colors.pageBg }}>
      
      <div style={{ 
        textAlign: 'center', 
        padding: '120px 20px', 
        backgroundColor: colors.darkBlueDeep,
        color: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          backgroundColor: 'rgba(123, 170, 247, 0.15)',
          color: colors.lightBlue,
          display: 'inline-block',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          marginBottom: '30px',
          border: `1px solid rgba(123, 170, 247, 0.35)`
        }}>
          Инжиниринг & Автоматизация
        </div>
        
        <h1 style={{ fontSize: '52px', fontWeight: '800', margin: '0 auto 24px auto', letterSpacing: '-1.5px', maxWidth: '850px', lineHeight: '1.15' }}>
          Интеллектуальные системы управления процессами
        </h1>
        
        <p style={{ fontSize: '19px', color: colors.textFaint, maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6', fontWeight: '400' }}>
          Проектирование, разработка и интеграция высоконагруженных программно-аппаратных комплексов для технологических отраслей.
        </p>
        
        <button 
          onClick={() => setActivePage('services')}
          style={{
            backgroundColor: colors.primary,
            color: '#fff',
            border: 'none',
            padding: '16px 36px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '650',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            boxShadow: '0 4px 20px rgba(2, 132, 199, 0.35)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = colors.primaryDark}
          onMouseOut={(e) => e.target.style.backgroundColor = colors.primary}
        >
          Изучить услуги компании
        </button>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          
          <div 
            onClick={() => setActivePage('services')}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(2, 132, 199, 0.12)';
              e.currentTarget.style.borderColor = colors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(2, 132, 199, 0.06)';
              e.currentTarget.style.borderColor = colors.border;
            }}
          >
            <div style={{ color: colors.primary, fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Направление 01</div>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: '700', letterSpacing: '-0.5px' }}>Инженерные услуги</h3>
            <p style={{ color: colors.textLight, margin: '0 0 30px 0', fontSize: '15px', lineHeight: '1.6' }}>
              Полный комплекс работ: от предпроектного аудита и составления ТЗ до шеф-монтажа и пусконаладки систем на объекте заказчика.
            </p>
            <div style={{ fontWeight: '600', fontSize: '14px', color: colors.primary }}>Подробнее →</div>
          </div>

          <div 
            onClick={() => setActivePage('products-catalog')}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(2, 132, 199, 0.12)';
              e.currentTarget.style.borderColor = colors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(2, 132, 199, 0.06)';
              e.currentTarget.style.borderColor = colors.border;
            }}
          >
            <div style={{ color: colors.primary, fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Направление 02</div>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: '700', letterSpacing: '-0.5px' }}>Собственные продукты</h3>
            <p style={{ color: colors.textLight, margin: '0 0 30px 0', fontSize: '15px', lineHeight: '1.6' }}>
              Промышленные контроллеры автоматизации, модули телеметрии и специализированное ПО для создания диспетчерских центров.
            </p>
            <div style={{ fontWeight: '600', fontSize: '14px', color: colors.primary }}>Подробнее →</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default MainPage;
