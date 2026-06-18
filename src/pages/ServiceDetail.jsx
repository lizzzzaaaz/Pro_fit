import React from 'react';
import ServiceCard from '../components/ServiceCard'; 
import { services } from './servicesData'; // Импортируем весь массив для фильтрации

function ServiceDetail({ service, onServiceClick, onBack, setActivePage }) {
  if (!service) return null;

  // Умная фильтрация: убираем текущую услугу, оставляя две другие
  const relatedServices = services.filter(s => s.id !== service.id);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 40px 80px 40px' }}>
        
        {/* Хлебные крошки */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '30px',
          fontSize: '13px',
          letterSpacing: '0.5px',
          fontWeight: '500'
        }}>
          <div style={{ color: '#94a3b8' }}>
            <span onClick={() => setActivePage('main')} style={{ cursor: 'pointer', color: '#7baaf7' }}>ГЛАВНАЯ</span>
            <span style={{ margin: '0 8px', color: '#cbd5e1' }}>/</span>
            <span onClick={onBack} style={{ cursor: 'pointer', color: '#7baaf7' }}>УСЛУГИ</span>
            <span style={{ margin: '0 8px', color: '#cbd5e1' }}>/</span>
            <span style={{ color: '#334155', fontWeight: '600', textTransform: 'uppercase' }}>{service.shortTitle || service.title}</span>
          </div>

          <button 
            onClick={onBack}
            style={{
              backgroundColor: '#f1f5f9',
              color: '#475569',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e2e8f0'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f1f5f9'}
          >
            ← Все услуги
          </button>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #f1f5f9', marginBottom: '40px' }} />

        <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', marginBottom: '25px', letterSpacing: '-0.5px' }}>
          {service.title}
        </h1>

        <div style={{ 
          padding: '35px', 
          backgroundColor: '#f8fafc', 
          borderRadius: '20px', 
          marginBottom: '60px',
          color: '#334155',
          fontSize: '16px',
          lineHeight: '1.7',
          fontWeight: '400',
          border: '1px solid #f1f5f9'
        }}>
          {service.description}
        </div>

        {/* Блок снизу: Другие услуги */}
        <div style={{ marginTop: '60px', borderTop: '1px solid #f1f5f9', paddingTop: '50px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', marginBottom: '25px' }}>
            Другие услуги направления
          </h2>

          {/* Сетка для уменьшенных карточек */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '30px',
            maxWidth: '850px' // Ограничиваем общую ширину ряда, чтобы карточки были меньше основного размера
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
