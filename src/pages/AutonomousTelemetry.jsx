import React from 'react';

export default function AutonomousTelemetry({ setActivePage }) {
  return (
    <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto', color: '#0f172a', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Хлебные крошки */}
      <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '15px' }}>
        Главная / Продукция / <strong style={{ color: '#0f172a' }}>Автономные комплексы телеметрии</strong>
      </div>

      <h1 style={{ marginBottom: '30px', fontSize: '28px', color: '#0f172a' }}>Автономные комплексы телеметрии</h1>

      {/* Карточки продукции */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '30px' 
      }}>
        
        {/* КАРТОЧКА: КУТ300-АК */}
        <div 
          onClick={() => setActivePage('products-a2')}
          style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '12px', 
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            transition: 'transform 0.2s, box-shadow 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
          }}
        >
          <div style={{ 
            height: '180px', 
            backgroundColor: '#f1f5f9', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#94a3b8',
            fontSize: '15px',
            borderBottom: '1px solid #e2e8f0'
          }}>
            [ Фото: КУТ300-АК ]
          </div>
          <div style={{ padding: '24px' }}>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#0f172a' }}>
              КУТ300-АК
            </h3>
            <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: '1.5' }}>
              Автономный контроллер для объектов без электроснабжения. 
              Работа от батарей, поддержка GPRS/3G, взрывозащита.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}