import React from 'react';
import mainImg from '../assets/kut300-pk.png';

const controllers = [
  {
    page: 'products-a1',
    name: 'КУТ300-ПК',
    desc: 'Промышленный телеметрический контроллер.',
    img: mainImg,
  },
  {
    page: 'products-a3',
    name: 'КУТ300-А42',
    desc: 'Контроллер дистанционного контроля электрохимической защиты.',
    img: null,
  },
  {
    page: 'products-a2',
    name: 'КУТ300-АК',
    desc: 'Автономный контроллер телеметрии для объектов без электроснабжения.',
    img: null,
  },
];

export default function IndustrialControllers({ setActivePage }) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      padding: '40px 0 80px 0',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <div style={{
          marginBottom: '30px',
          fontSize: '13px',
          letterSpacing: '0.5px',
          fontWeight: '500',
          color: '#94a3b8',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <button
            onClick={() => setActivePage('main')}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#7baaf7', font: 'inherit' }}
          >
            ГЛАВНАЯ
          </button>
          <span style={{ margin: '0 4px', color: '#cbd5e1' }}>/</span>
          <button
            onClick={() => setActivePage('products-catalog')}
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#7baaf7', font: 'inherit' }}
          >
            ПРОДУКЦИЯ
          </button>
          <span style={{ margin: '0 4px', color: '#cbd5e1' }}>/</span>
          <span style={{ color: '#334155', fontWeight: '600' }}>ПРОМЫШЛЕННЫЕ КОНТРОЛЛЕРЫ</span>
        </div>

        <h1 style={{ margin: '0 0 30px 0', fontSize: '28px', color: '#0f172a' }}>Промышленные контроллеры</h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {controllers.map((controller) => (
            <button
              key={controller.page}
              onClick={() => setActivePage(controller.page)}
              style={{
                textAlign: 'left',
                backgroundColor: '#f8fafc',
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                font: 'inherit',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                aspectRatio: '1 / 1',
                width: '100%',
                backgroundColor: '#e2e8f0',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #cbd5e1',
                overflow: 'hidden'
              }}>
                {controller.img ? (
                  <img
                    src={controller.img}
                    alt={controller.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <span style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', padding: '10px' }}>
                    Фото будет добавлено
                  </span>
                )}
              </div>
              <h3 style={{ margin: 0, fontSize: '20px', color: '#0284c7' }}>{controller.name}</h3>
              <p style={{ margin: 0, color: '#475569', fontSize: '14px' }}>{controller.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
