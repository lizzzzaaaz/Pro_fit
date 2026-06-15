import React from 'react';
import { services } from './servicesData';   // Берем только данные
//import * as IconUtils from './ServiceIcons'; 


function Services({ setActivePage, onServiceClick }) {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '80px auto', 
      padding: '0 40px',
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      <h1 style={{ fontSize: '42px', color: '#fff', marginBottom: '40px' }}>Наши услуги</h1>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '24px' 
      }}>
        {services.map(s => (
          <div 
            key={s.id} 
            onClick={() => {
              onServiceClick(s.id); // Устанавливаем ID услуги
              setActivePage('detail'); // Переключаем страницу на детальную
            }}
            style={{ 
              padding: '30px', 
              border: '1px solid #1e293b', 
              borderRadius: '16px', 
              backgroundColor: '#0f172a',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0057b8';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#1e293b';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* <div style={{ color: '#0057b8', marginBottom: '20px' }}>
              {getIcon(s.icon, 40)}
            </div> */}
            <h3 style={{ color: '#fff', fontSize: '18px', marginBottom: '12px' }}>{s.title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;