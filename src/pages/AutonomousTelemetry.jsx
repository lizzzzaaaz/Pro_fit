import React from 'react';
import akImg from '../assets/КУТ300-АК.png';
import Breadcrumbs from '../components/Breadcrumbs';
import { colors, fonts } from '../theme';

export default function AutonomousTelemetry({ setActivePage }) {
  return (
    <div style={{ backgroundColor: colors.pageBg, padding: '40px 0 80px', fontFamily: fonts.base }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', color: colors.text }}>
        
        <Breadcrumbs
          setActivePage={setActivePage}
          items={[
            { label: 'ГЛАВНАЯ', page: 'main' },
            { label: 'ПРОДУКЦИЯ', page: 'products-catalog' },
            { label: 'АВТОНОМНЫЕ КОМПЛЕКСЫ ТЕЛЕМЕТРИИ' },
          ]}
        />

        <h1 style={{ marginBottom: '30px', fontSize: '28px', color: colors.text }}>Автономные комплексы телеметрии</h1>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '30px' 
        }}>
          
          <button
            type="button"
            onClick={() => setActivePage('products-a2')}
            style={{ 
              backgroundColor: colors.white, 
              borderRadius: '12px', 
              overflow: 'hidden',
              border: `1px solid ${colors.border}`,
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.06)',
              transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s',
              textAlign: 'left',
              font: 'inherit',
              padding: 0,
              width: '100%',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(2, 132, 199, 0.12)';
              e.currentTarget.style.borderColor = colors.primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(2, 132, 199, 0.06)';
              e.currentTarget.style.borderColor = colors.border;
            }}
          >
            <div style={{ 
              aspectRatio: '1 / 1',
              backgroundColor: colors.lightBlueBg, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              borderBottom: `1px solid ${colors.border}`,
              overflow: 'hidden',
            }}>
              <img src={akImg} alt="КУТ300-АК" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ padding: '24px' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: colors.primary }}>
                КУТ300-АК
              </h3>
              <p style={{ margin: 0, color: colors.textMuted, fontSize: '14px', lineHeight: '1.5' }}>
                Автономный контроллер для объектов без электроснабжения. 
                Работа от батарей, поддержка GPRS/3G, взрывозащита.
              </p>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}
