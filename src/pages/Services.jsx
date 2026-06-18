import React from 'react';
import ServiceCard from '../components/ServiceCard'; 
import { services } from './servicesData'; 

function Services({ onServiceClick, setActivePage }) {
  return (
    // Применили тот же крутой системный шрифт
    <div style={{ backgroundColor: '#ffffff', padding: '40px 0 80px 0', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        
        {/* Хлебные крошки сверху слева */}
        <div style={{ 
          marginBottom: '30px',
          fontSize: '13px',
          letterSpacing: '0.5px',
          fontWeight: '500',
          color: '#94a3b8'
        }}>
          <span onClick={() => setActivePage('main')} style={{ cursor: 'pointer', color: '#7baaf7' }}>ГЛАВНАЯ</span>
          <span style={{ margin: '0 8px', color: '#cbd5e1' }}>/</span>
          <span style={{ color: '#334155', fontWeight: '600' }}>УСЛУГИ</span>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', marginBottom: '40px' }} />

        <h2 style={{ 
          fontSize: '32px', 
          fontWeight: '800', 
          color: '#0f172a', 
          marginBottom: '40px',
          letterSpacing: '-0.5px'
        }}>
          Наши услуги
        </h2>

        {/* Сетка карточек */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '30px' 
        }}>
          {services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              index={idx}
              service={service}
              onClick={onServiceClick}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Services;