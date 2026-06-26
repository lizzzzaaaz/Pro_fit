import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { colors, fonts } from '../theme';
import { powerSupplies } from './powerSuppliesData';

export default function PowerSupplies({ setActivePage }) {
  return (
    <div className="page-shell" style={{ backgroundColor: colors.pageBg, padding: '40px 0 80px', fontFamily: fonts.base }}>
      <div className="page-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', color: colors.text }}>
        <Breadcrumbs
          setActivePage={setActivePage}
          items={[
            { label: 'ГЛАВНАЯ', page: 'main' },
            { label: 'ПРОДУКЦИЯ', page: 'products-catalog' },
            { label: 'ИСТОЧНИКИ ПИТАНИЯ' },
          ]}
        />

        <h1 style={{ margin: '0 0 30px 0', fontSize: '28px', color: colors.text }}>
          Источники питания
        </h1>

        <div className="grid-auto-cards" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px',
        }}>
          {powerSupplies.map((item) => (
            <button
              key={item.page}
              type="button"
              onClick={() => setActivePage(item.page)}
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
                gap: '12px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.borderColor = colors.primary;
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(201, 162, 39, 0.1)';
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
                overflow: 'hidden',
              }}>
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.cardTitle}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                ) : (
                  <span style={{ fontSize: '12px', color: colors.textLight, textAlign: 'center', padding: '10px' }}>
                    Фото будет добавлено
                  </span>
                )}
              </div>
              <h3 style={{ margin: 0, fontSize: '18px', color: colors.primary, lineHeight: '1.3' }}>
                {item.cardTitle}
              </h3>
              <p style={{ margin: 0, color: colors.textMuted, fontSize: '14px', lineHeight: '1.5' }}>
                {item.shortDesc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
