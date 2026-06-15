import React, { useState } from 'react';

// Оригинальный набор путей для иконок из твоего файла Services.jsx
const iconPaths = {
  maintenance: <path d="M12 2v4m0 16v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m16 0h4m-4.93-7.07l-2.83 2.83M7.76 16.24l-2.83 2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>,
  construction: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
  automation: <path d="M10 2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-4zM2 12a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>,
  telemetry: <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.59 16.14a6 6 0 0 1 6.82 0M12 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>,
  crypto: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
};

function RelatedCard({ service, index, onClick }) {
  const [hovered, setHovered] = useState(false);
  const softBlue = '#7baaf7';
  const bgCard = '#f4f7fb'; // Оригинальный bgCard из твоих услуг

  return (
    <div
      onClick={() => onClick(service.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: '40px',
        backgroundColor: hovered ? softBlue : bgCard,
        borderRadius: '16px',
        border: '1px solid #eef2f7',
        transition: 'all 0.4s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '180px',
        boxShadow: hovered ? '0 15px 30px rgba(123, 170, 247, 0.3)' : 'none',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
    >
      {/* Иконка: цвет и прозрачность ВСЕГДА как на главной в обычном состоянии */}
      <div 
        className="icon-wrapper" 
        style={{ 
          position: 'absolute', 
          top: '20px', 
          right: '20px', 
          opacity: 0.15, 
          color: '#0f172a',
          transition: '0.4s'
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {iconPaths[service.id] || iconPaths.automation}
        </svg>
      </div>

      {/* Номер: цвет и прозрачность ВСЕГДА статичны, никакого белого */}
      <div 
        className="num" 
        style={{ 
          fontSize: '32px', 
          fontWeight: 900, 
          opacity: 0.1, 
          marginBottom: '20px', 
          color: '#000000',
          transition: '0.3s'
        }}
      >
        0{index + 1}
      </div>

      {/* Заголовок: ТОЛЬКО он плавно белеет при ховере */}
      <h3 
        style={{ 
          fontSize: '20px', 
          fontWeight: 700, 
          margin: 'auto 0 0 0', 
          color: hovered ? '#ffffff' : '#0f172a', 
          transition: '0.3s',
          lineHeight: '1.4'
        }}
      >
        {service?.title}
      </h3>
    </div>
  );
}

function ServiceDetail({ service, relatedServices = [], onServiceClick, onBack, setActivePage }) {
  if (!service) {
    return (
      <div style={{ padding: '100px', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
        Данные услуги загружаются...
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px' }}>

        {/* Хлебные крошки */}
        <div style={{ marginBottom: '50px', fontSize: '14px', letterSpacing: '0.5px' }}>
          <span
            onClick={() => setActivePage('main')}
            style={{ cursor: 'pointer', color: '#7baaf7' }}
          >
            ГЛАВНАЯ
          </span>
          <span style={{ margin: '0 10px', color: '#cbd5e1' }}>/</span>
          <span
            onClick={onBack}
            style={{ cursor: 'pointer', color: '#7baaf7' }}
          >
            УСЛУГИ
          </span>
          <span style={{ margin: '0 10px', color: '#cbd5e1' }}>/</span>
          <span style={{ color: '#0f172a', fontWeight: 600, textTransform: 'uppercase' }}>
            {service.shortTitle || service.title}
          </span>
        </div>

        {/* Кнопка назад */}
        <button
          onClick={onBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'transparent',
            border: '1.5px solid #1a3a6b',
            borderRadius: '8px',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#1a3a6b',
            cursor: 'pointer',
            marginBottom: '36px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = '#1a3a6b';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#1a3a6b';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Все услуги
        </button>

        {/* Основная информационная карточка */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          border: '1px solid #eef2f7',
          padding: '52px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.03)',
          marginBottom: '60px',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '32px' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#0057b8', marginBottom: '10px' }}>
                Направление
              </div>
              <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#0f172a', margin: 0, letterSpacing: '-0.6px', lineHeight: '1.25' }}>
                {service.title}
              </h1>
            </div>
          </div>

          <div style={{ height: '1px', backgroundColor: '#eef2f8', marginBottom: '32px' }}/>

          <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', margin: '0 0 40px 0', maxWidth: '850px' }}>
            {service.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {service.details && service.details.length > 0 && (
              <div>
                <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#1a3a6b', marginBottom: '20px' }}>
                  В рамках услуги выполняем:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {service.details.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '15px', color: '#334155', lineHeight: '1.5' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(123, 170, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke="#7baaf7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ paddingLeft: '20px', borderLeft: '1px solid #eef2f8' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#1a3a6b', marginBottom: '20px' }}>
                Преимущества решения:
              </div>
              <ul style={{ paddingLeft: '20px', color: '#475569', fontSize: '15px', lineHeight: '1.9', margin: 0 }}>
                <li>Высокая отказоустойчивость систем</li>
                <li>Снижение эксплуатационных расходов</li>
                <li>Полное соответствие тех. регламентам</li>
                <li>Гарантийное обслуживание объекта</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Секция сопутствующих предложений */}
        {relatedServices && relatedServices.length > 0 && (
          <div style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', margin: '0 0 30px 0', letterSpacing: '-0.4px' }}>
              Другие услуги направления
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {relatedServices.slice(0, 3).map((s, idx) => (
                <RelatedCard
                  key={s.id}
                  index={idx}
                  service={s}
                  onClick={onServiceClick}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ServiceDetail;