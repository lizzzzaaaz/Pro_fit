import React, { useState } from 'react';
import { colors, fonts } from '../theme';

const productLinks = [
  { page: 'industrial-controllers', label: 'Промышленные контроллеры' },
  { page: 'autonomous-telemetry', label: 'Автономные комплексы телеметрии' },
  { page: 'power-modules', label: 'Источники и модули' },
];

function Header({ activePage, setActivePage }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const menuItems = [
    { id: 'services', label: 'Услуги' },
    { id: 'products-catalog', label: 'Продукция', hasDropdown: true },
    { id: 'contacts', label: 'Контакты' },
    { id: 'support', label: 'Тех поддержка' },
    { id: 'about', label: 'О компании' },
  ];

  const isProductsActive = [
    'products-catalog',
    'industrial-controllers',
    'autonomous-telemetry',
    'power-modules',
    'products-a1',
    'products-a2',
    'products-a3',
  ].includes(activePage);

  const navLinkStyle = (isActive) => ({
    cursor: 'pointer',
    fontFamily: fonts.base,
    fontSize: '14px',
    fontWeight: isActive ? '600' : '500',
    letterSpacing: '0.02em',
    color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.82)',
    padding: '10px 4px',
    borderBottom: isActive ? `2px solid ${colors.lightBlue}` : '2px solid transparent',
    transition: 'color 0.2s ease, border-color 0.2s ease',
    whiteSpace: 'nowrap',
  });

  return (
    <header style={{
      fontFamily: fonts.base,
      backgroundColor: colors.darkBlue,
      color: '#ffffff',
      boxShadow: '0 4px 20px rgba(15, 39, 68, 0.2)',
      borderBottom: `3px solid ${colors.primary}`,
      position: 'relative',
      zIndex: 1000,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '16px 40px',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: '24px',
      }}>
        <button
          type="button"
          onClick={() => setActivePage('main')}
          style={{
            justifySelf: 'start',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            fontFamily: fonts.base,
            fontSize: '24px',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            color: '#ffffff',
          }}
        >
          Pro<span style={{ color: colors.lightBlue }}>_fit</span>
        </button>

        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '28px',
        }}>
          {menuItems.map((item) => {
            const isActive = item.id === 'products-catalog' ? isProductsActive : activePage === item.id;

            if (item.hasDropdown) {
              return (
                <div
                  key={item.id}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <span
                    onClick={() => setActivePage(item.id)}
                    style={navLinkStyle(isActive || showDropdown)}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; }}
                    onMouseLeave={(e) => {
                      if (!isActive && !showDropdown) e.currentTarget.style.color = 'rgba(255, 255, 255, 0.82)';
                    }}
                  >
                    {item.label}
                    <span style={{
                      display: 'inline-block',
                      marginLeft: '6px',
                      fontSize: '10px',
                      transform: showDropdown ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      opacity: 0.85,
                    }}>
                      ▾
                    </span>
                  </span>

                  {showDropdown && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      paddingTop: '10px',
                      minWidth: '300px',
                      zIndex: 1001,
                    }}>
                      <div style={{
                        backgroundColor: colors.darkBlue,
                        border: `1px solid rgba(123, 170, 247, 0.35)`,
                        borderTop: `3px solid ${colors.primary}`,
                        borderRadius: '0 0 12px 12px',
                        boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)',
                        overflow: 'hidden',
                      }}>
                        {productLinks.map(({ page, label }, index) => (
                          <button
                            key={page}
                            type="button"
                            onClick={() => setActivePage(page)}
                            style={{
                              display: 'block',
                              width: '100%',
                              textAlign: 'left',
                              background: activePage === page ? 'rgba(2, 132, 199, 0.22)' : 'transparent',
                              border: 'none',
                              borderBottom: index < productLinks.length - 1 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                              padding: '14px 20px',
                              cursor: 'pointer',
                              fontFamily: fonts.base,
                              fontSize: '14px',
                              fontWeight: activePage === page ? '600' : '500',
                              color: activePage === page ? colors.lightBlue : 'rgba(255, 255, 255, 0.9)',
                              transition: 'background 0.2s ease, color 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(123, 170, 247, 0.18)';
                              e.currentTarget.style.color = '#ffffff';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = activePage === page ? 'rgba(2, 132, 199, 0.22)' : 'transparent';
                              e.currentTarget.style.color = activePage === page ? colors.lightBlue : 'rgba(255, 255, 255, 0.9)';
                            }}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <span
                key={item.id}
                onClick={() => setActivePage(item.id)}
                style={navLinkStyle(isActive)}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'rgba(255, 255, 255, 0.82)';
                }}
              >
                {item.label}
              </span>
            );
          })}
        </nav>

        <div aria-hidden="true" />
      </div>
    </header>
  );
}

export default Header;
