import React from 'react';
import ServiceCard from '../components/ServiceCard'; 
import { services } from './servicesData';
import { colors, fonts } from '../theme';

function Services({ onServiceClick, setActivePage }) {
  return (
    <div style={{ backgroundColor: colors.pageBg, padding: '40px 0 80px 0', fontFamily: fonts.base }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        
        <div style={{ 
          marginBottom: '30px',
          fontSize: '13px',
          letterSpacing: '0.5px',
          fontWeight: '500',
          color: colors.textFaint
        }}>
          <span onClick={() => setActivePage('main')} style={{ cursor: 'pointer', color: colors.lightBlue }}>ГЛАВНАЯ</span>
          <span style={{ margin: '0 8px', color: colors.borderNeutral }}>/</span>
          <span style={{ color: colors.text, fontWeight: '600' }}>УСЛУГИ</span>
        </div>

        <hr style={{ border: 'none', borderTop: `1px solid ${colors.border}`, marginBottom: '40px' }} />

        <h2 style={{ 
          fontSize: '32px', 
          fontWeight: '800', 
          color: colors.text, 
          marginBottom: '40px',
          letterSpacing: '-0.5px'
        }}>
          Наши услуги
        </h2>

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
