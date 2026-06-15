import React, { useState } from 'react';


function RelatedCard({ service, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(service.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: '#fff',
        borderRadius: '14px',
        border: `1.5px solid ${hovered ? '#0057b8' : '#e8edf4'}`,
        padding: '26px 22px 20px',
        cursor: 'pointer',
        transition: 'all 0.28s ease',
        boxShadow: hovered
          ? '0 10px 32px rgba(0,87,184,0.12)'
          : '0 2px 10px rgba(0,0,0,0.04)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      

      <div style={{
        fontSize: '11px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.6px',
        color: hovered ? '#0057b8' : '#1a3a6b',
        lineHeight: '1.5',
        transition: 'color 0.28s',
        flexGrow: 1,
      }}>
        {service.title}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          backgroundColor: hovered ? '#0057b8' : '#1a3a6b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.28s',
          flexShrink: 0,
        }}>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M8 4l3 3-3 3" stroke="#fff" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span style={{
          fontSize: '13px',
          fontWeight: '600',
          color: hovered ? '#0057b8' : '#1a3a6b',
          textDecoration: 'underline',
          textUnderlineOffset: '3px',
          transition: 'color 0.28s',
        }}>
          Перейти
        </span>
      </div>
    </div>
  );
}

function ServiceDetail({ service, relatedServices, onServiceClick, onBack, setActivePage }) {
  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f5f7fb',
      minHeight: '100vh',
      padding: '60px 0 80px',
    }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 40px' }}>

        {/* Хлебные крошки */}
        <div style={{
          fontSize: '13px',
          marginBottom: '28px',
          display: 'flex',
          gap: '6px',
          alignItems: 'center',
        }}>
          <span
            onClick={() => setActivePage('main')}
            style={{ cursor: 'pointer', color: '#0057b8' }}
          >
            Главная
          </span>
          <span style={{ color: '#94a3b8' }}>/</span>
          <span
            onClick={onBack}
            style={{ cursor: 'pointer', color: '#0057b8' }}
          >
            Услуги
          </span>
          <span style={{ color: '#94a3b8' }}>/</span>
          <span style={{ color: '#64748b' }}>{service.shortTitle}</span>
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
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Все услуги
        </button>

        {/* Основная карточка */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          border: '1.5px solid #e8edf4',
          padding: '52px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
          marginBottom: '56px',
        }}>

          {/* Иконка + заголовок */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '28px',
            marginBottom: '32px',
          }}>
            {/* <div style={{ color: '#1a3a6b', flexShrink: 0 }}>
              {getIcon(service.icon, 60)}
            </div> */}
            <div>
              <div style={{
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#0057b8',
                marginBottom: '10px',
              }}>
                Услуга
              </div>
              <h1 style={{
                fontSize: '30px',
                fontWeight: '800',
                color: '#0b1120',
                margin: 0,
                letterSpacing: '-0.6px',
                lineHeight: '1.25',
              }}>
                {service.title}
              </h1>
            </div>
          </div>

          {/* Разделитель */}
          <div style={{
            height: '1px',
            backgroundColor: '#eef2f8',
            marginBottom: '32px',
          }}/>

          {/* Описание */}
          <p style={{
            fontSize: '16px',
            color: '#475569',
            lineHeight: '1.7',
            margin: '0 0 36px 0',
            maxWidth: '800px',
          }}>
            {service.description}
          </p>

          {/* Заголовок списка */}
          <div style={{
            fontSize: '13px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: '#1a3a6b',
            marginBottom: '18px',
          }}>
            В рамках услуги выполняем:
          </div>

          {/* Список */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px 40px',
          }}>
            {service.details.map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                fontSize: '15px',
                color: '#334155',
                lineHeight: '1.5',
              }}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,87,184,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#0057b8" strokeWidth="1.6"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {item}
              </div>
            ))}
          </div>

        </div>
        {/* конец основной карточки */}

        {/* Другие услуги */}
        <h2 style={{
          fontSize: '22px',
          fontWeight: '700',
          color: '#0b1120',
          margin: '0 0 22px 0',
          letterSpacing: '-0.4px',
        }}>
          Другие услуги
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}>
          {relatedServices.slice(0, 4).map(s => (
            <RelatedCard
              key={s.id}
              service={s}
              onClick={onServiceClick}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default ServiceDetail;