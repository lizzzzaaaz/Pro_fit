import React from 'react';
import { colors, fonts } from '../theme';

export default function ProductsCatalog({ setActivePage }) {
  const cardBase = {
    padding: '30px',
    borderRadius: '12px',
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.white,
    transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
  };

  return (
    <div style={{ 
      backgroundColor: colors.pageBg, 
      padding: '40px 0 80px 0', 
      fontFamily: fonts.base, 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        
        <div style={{ 
          marginBottom: '30px',
          fontSize: '13px',
          letterSpacing: '0.5px',
          fontWeight: '500',
          color: colors.textFaint,
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <button 
            onClick={() => setActivePage('main')} 
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: colors.lightBlue, font: 'inherit' }}
          >
            ГЛАВНАЯ
          </button>
          <span style={{ margin: '0 4px', color: colors.borderNeutral }}>/</span>
          <span style={{ color: colors.text, fontWeight: '600' }}>ПРОДУКЦИЯ</span>
        </div>

        <h1 style={{ margin: '0 0 30px 0', fontSize: '28px', color: colors.text }}>Продукция</h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          
          <button 
            onClick={() => setActivePage('industrial-controllers')}
            style={{ 
              textAlign: 'left',
              ...cardBase,
              cursor: 'pointer', 
              font: 'inherit',
              width: '100%',
              outline: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.borderColor = colors.primary;
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(2, 132, 199, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = colors.border;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: colors.primary }}>Промышленные контроллеры</h3>
            <p style={{ margin: 0, color: colors.textMuted, fontSize: '14px' }}>Оборудование для систем автоматизации и телеметрии.</p>
          </button>

          <div style={cardBase}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: colors.textLight }}>Автономные комплексы</h3>
            <p style={{ margin: 0, color: colors.textFaint, fontSize: '14px' }}>Раздел находится в разработке.</p>
          </div>

          <div style={cardBase}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: colors.textLight }}>Источники и модули</h3>
            <p style={{ margin: 0, color: colors.textFaint, fontSize: '14px' }}>Раздел находится в разработке.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
