import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { services } from './servicesData';
import { colors, fonts, backButtonStyle } from '../theme';

function ServiceDetail({ service, onServiceClick, onBack, setActivePage }) {
  if (!service) return null;

  // Умная фильтрация: убираем текущую услугу, оставляя две другие
  const relatedServices = services.filter(s => s.id !== service.id);

  return (
    <div className="page-shell" style={{ backgroundColor: colors.pageBg, fontFamily: fonts.base }}>
      <div className="page-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 40px 80px 40px' }}>
        
        <div className="breadcrumb-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', gap: '16px', flexWrap: 'wrap' }}>
          <Breadcrumbs
            setActivePage={setActivePage}
            style={{ marginBottom: 0 }}
            items={[
              { label: 'ГЛАВНАЯ', page: 'main' },
              { label: 'УСЛУГИ', onClick: onBack },
              { label: (service.shortTitle || service.title).toUpperCase() },
            ]}
          />
          <button 
            type="button"
            onClick={onBack}
            style={backButtonStyle}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.borderLight; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = colors.lightBlueBg; }}
          >
            ← Все услуги
          </button>
        </div>

        <hr style={{ border: 'none', borderTop: `1px solid ${colors.border}`, marginBottom: '40px' }} />

        <h1 className="responsive-heading-xl" style={{ fontSize: '32px', fontWeight: '800', color: colors.text, marginBottom: '25px', letterSpacing: '-0.5px' }}>
          {service.title}
        </h1>

        <div style={{ 
          padding: '35px', 
          backgroundColor: colors.lightBlueBg, 
          borderRadius: '20px', 
          marginBottom: '60px',
          color: colors.text,
          fontSize: '16px',
          lineHeight: '1.7',
          fontWeight: '400',
          border: `1px solid ${colors.border}`
        }}>
          {service.description}
        </div>

        {/* Блок снизу: Другие услуги */}
        <div style={{ marginTop: '60px', borderTop: `1px solid ${colors.border}`, paddingTop: '50px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: colors.text, marginBottom: '25px' }}>
            Другие услуги направления
          </h2>

          {/* Сетка для уменьшенных карточек */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '30px',
          }}>
            {relatedServices.map((s) => {
              // Ищем оригинальный индекс услуги в общем массиве, чтобы сохранить правильный номер (01, 02, 03) и картинку
              const originalIndex = services.findIndex(item => item.id === s.id);

              return (
                <div key={s.id}>
                  <ServiceCard
                    index={originalIndex}
                    service={s}
                    onClick={onServiceClick}
                    isSmall={true} // Передаем флаг, что карточка должна быть маленькой
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ServiceDetail;
