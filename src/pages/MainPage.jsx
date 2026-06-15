import React from 'react';

function MainPage({ setActivePage }) {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', color: '#111', backgroundColor: '#fcfcfc', minHeight: '100vh' }}>
      
      {/* Премиальный темный главный блок */}
      <div style={{ 
        textAlign: 'center', 
        padding: '120px 20px', 
        backgroundColor: '#0b0f19', // Глубокий графитовый/темно-синий
        color: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          backgroundColor: 'rgba(0, 112, 243, 0.15)',
          color: '#0070f3',
          display: 'inline-block',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          marginBottom: '30px',
          border: '1px solid rgba(0, 112, 243, 0.3)'
        }}>
          Инжиниринг & Автоматизация
        </div>
        
        <h1 style={{ fontSize: '52px', fontWeight: '800', margin: '0 auto 24px auto', letterSpacing: '-1.5px', maxWidth: '850px', lineHeight: '1.15' }}>
          Интеллектуальные системы управления процессами
        </h1>
        
        <p style={{ fontSize: '19px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6', fontWeight: '400' }}>
          Проектирование, разработка и интеграция высоконагруженных программно-аппаратных комплексов для технологических отраслей.
        </p>
        
        <button 
          onClick={() => setActivePage('services')}
          style={{
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            padding: '16px 36px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '650',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            boxShadow: '0 4px 20px rgba(0, 112, 243, 0.3)'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#005ecb'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#0070f3'}
        >
          Изучить услуги компании
        </button>
      </div>

      {/* Блок разделов */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          
          {/* Услуги */}
          <div 
            onClick={() => setActivePage('services')}
            style={{
              backgroundColor: '#fff',
              padding: '45px',
              borderRadius: '12px',
              border: '1px solid #eef2f6',
              boxShadow: '0 10px 30px rgba(0,0,0,0.01)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.04)';
              e.currentTarget.style.borderColor = '#0070f3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.01)';
              e.currentTarget.style.borderColor = '#eef2f6';
            }}
          >
            <div style={{ color: '#0070f3', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Направление 01</div>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: '700', letterSpacing: '-0.5px' }}>Инженерные услуги</h3>
            <p style={{ color: '#64748b', margin: '0 0 30px 0', fontSize: '15px', lineHeight: '1.6' }}>
              Полный комплекс работ: от предпроектного аудита и составления ТЗ до шеф-монтажа и пусконаладки систем на объекте заказчика.
            </p>
            <div style={{ fontWeight: '600', fontSize: '14px', color: '#0070f3' }}>Подробнее →</div>
          </div>

          {/* Продукция */}
          <div 
            onClick={() => setActivePage('production')}
            style={{
              backgroundColor: '#fff',
              padding: '45px',
              borderRadius: '12px',
              border: '1px solid #eef2f6',
              boxShadow: '0 10px 30px rgba(0,0,0,0.01)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.04)';
              e.currentTarget.style.borderColor = '#0070f3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.01)';
              e.currentTarget.style.borderColor = '#eef2f6';
            }}
          >
            <div style={{ color: '#0070f3', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Направление 02</div>
            <h3 style={{ margin: '0 0 16px 0', fontSize: '24px', fontWeight: '700', letterSpacing: '-0.5px' }}>Собственные продукты</h3>
            <p style={{ color: '#64748b', margin: '0 0 30px 0', fontSize: '15px', lineHeight: '1.6' }}>
              Промышленные контроллеры автоматизации, модули телеметрии и специализированное ПО для создания диспетчерских центров.
            </p>
            <div style={{ fontWeight: '600', fontSize: '14px', color: '#0070f3' }}>Подробнее →</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default MainPage;