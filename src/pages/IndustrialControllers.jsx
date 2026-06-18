import React from 'react';

export default function IndustrialControllers({ setActivePage }) {
  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      padding: '40px 0 80px 0', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', 
      minHeight: '100vh' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        
        {/* Хлебные крошки (интерактивы обернуты в button) */}
        <div style={{ 
          marginBottom: '30px',
          fontSize: '13px',
          letterSpacing: '0.5px',
          fontWeight: '500',
          color: '#94a3b8',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <button 
            onClick={() => setActivePage('main')} 
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#7baaf7', font: 'inherit' }}
          >
            ГЛАВНАЯ
          </button>
          <span style={{ margin: '0 4px', color: '#cbd5e1' }}>/</span>
          <button 
            onClick={() => setActivePage('products-catalog')} 
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#7baaf7', font: 'inherit' }}
          >
            ПРОДУКЦИЯ
          </button>
          <span style={{ margin: '0 4px', color: '#cbd5e1' }}>/</span>
          <span style={{ color: '#334155', fontWeight: '600' }}>ПРОМЫШЛЕННЫЕ КОНТРОЛЛЕРЫ</span>
        </div>

        <h1 style={{ margin: '0 0 30px 0', fontSize: '28px', color: '#0f172a' }}>Промышленные контроллеры</h1>

        {/* 2 карточки раздела (одна пустая, другая с КУТ300-ПК) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          
          {/* Карточка с нашим прибором: тег button вместо div + исправлен путь на products-a1 */}
          <button 
            onClick={() => setActivePage('products-a1')} 
            style={{ 
              textAlign: 'left',
              backgroundColor: '#f8fafc', 
              padding: '30px', 
              borderRadius: '12px', 
              border: '1px solid #e2e8f0', 
              cursor: 'pointer', 
              transition: 'transform 0.2s',
              font: 'inherit',
              width: '100%'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#0284c7' }}>КУТ300-ПК</h3>
            <p style={{ margin: 0, color: '#475569', fontSize: '14px' }}>Промышленный телеметрический контроллер.</p>
          </button>

          {/* Вторая карточка (пустая) */}
          <div style={{ 
            backgroundColor: '#f8fafc', 
            padding: '30px', 
            borderRadius: '12px', 
            border: '1px solid #e2e8f0' 
          }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#64748b' }}>Модель не выбрана</h3>
            <p style={{ margin: 0, color: '#94a3b8', fontSize: '14px' }}>Данная карточка пуста.</p>
          </div>

        </div>
      </div>
    </div>
  );
}