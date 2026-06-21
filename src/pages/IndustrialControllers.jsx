import React from 'react';
import mainImg from '../assets/kut300-pk.png';
import a42Img from '../assets/КУТ300-А42.png';
import akImg from '../assets/КУТ300-АК.png';
import Breadcrumbs from '../components/Breadcrumbs';
import { colors, fonts } from '../theme';

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
    img: a42Img,
  },
  {
    page: 'products-a2',
    name: 'КУТ300-АК',
    desc: 'Автономный контроллер телеметрии для объектов без электроснабжения.',
    img: akImg,
  },
];

export default function IndustrialControllers({ setActivePage }) {
  return (
    <div style={{
      backgroundColor: colors.pageBg,
      padding: '40px 0 80px 0',
      fontFamily: fonts.base,
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <Breadcrumbs
          setActivePage={setActivePage}
          items={[
            { label: 'ГЛАВНАЯ', page: 'main' },
            { label: 'ПРОДУКЦИЯ', page: 'products-catalog' },
            { label: 'ПРОМЫШЛЕННЫЕ КОНТРОЛЛЕРЫ' },
          ]}
        />

        <h1 style={{ margin: '0 0 30px 0', fontSize: '28px', color: colors.text }}>Промышленные контроллеры</h1>

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
                backgroundColor: colors.white,
                padding: '20px',
                borderRadius: '12px',
                border: `1px solid ${colors.border}`,
                cursor: 'pointer',
                transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                font: 'inherit',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = colors.primary;
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(2, 132, 199, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                aspectRatio: '1 / 1',
                width: '100%',
                backgroundColor: colors.lightBlueBg,
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${colors.borderLight}`,
                overflow: 'hidden'
              }}>
                {controller.img ? (
                  <img
                    src={controller.img}
                    alt={controller.name}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <span style={{ fontSize: '12px', color: colors.textLight, textAlign: 'center', padding: '10px' }}>
                    Фото будет добавлено
                  </span>
                )}
              </div>
              <h3 style={{ margin: 0, fontSize: '20px', color: colors.primary }}>{controller.name}</h3>
              <p style={{ margin: 0, color: colors.textMuted, fontSize: '14px' }}>{controller.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
