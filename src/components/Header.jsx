import { useState } from 'react';
import emblemImg from '../assets/эмблема.png';
import { colors, fonts } from '../theme';
import { telemetryComplexPages } from '../pages/telemetryComplexesData';
import { explosionBarrierPages } from '../pages/explosionBarriersData';
import { softwareProductPages } from '../pages/softwareProductsData';
import { powerSupplyPages } from '../pages/powerSuppliesData';

const productLinks = [
  { page: 'industrial-controllers', label: 'Промышленные контроллеры' },
  { page: 'autonomous-telemetry', label: 'Комплексы телеметрии' },
  { page: 'power-modules', label: 'Барьеры искрозащиты' },
  { page: 'power-supplies', label: 'Источники питания' },
  { page: 'software-products', label: 'Программное обеспечение' },
];

const companyLinks = [
  { page: 'about', label: 'О компании' },
  { page: 'certificates', label: 'Сертификаты и лицензии' },
];

const companyPages = companyLinks.map(({ page }) => page);

const menuItems = [
  { id: 'main', label: 'Главная' },
  {
    id: 'products-catalog',
    label: 'Продукция',
    dropdown: 'products',
    landingPage: 'products-catalog',
    links: productLinks,
  },
  { id: 'services', label: 'Услуги' },
  { id: 'contacts', label: 'Контакты' },
  {
    id: 'company',
    label: 'Компания',
    dropdown: 'company',
    landingPage: 'about',
    links: companyLinks,
  },
];

function Header({ activePage, setActivePage }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const isProductsActive = [
    'products-catalog',
    'industrial-controllers',
    'autonomous-telemetry',
    'power-modules',
    'power-supplies',
    'software-products',
    'products-a1',
    'products-a2',
    'products-a3',
    ...telemetryComplexPages,
    ...explosionBarrierPages,
    ...softwareProductPages,
    ...powerSupplyPages,
  ].includes(activePage);

  const isCompanyActive = companyPages.includes(activePage);

  const navLinkStyle = (isActive) => ({
    cursor: 'pointer',
    fontFamily: fonts.base,
    fontSize: '16px',
    fontWeight: isActive ? '600' : '500',
    letterSpacing: '0.02em',
    color: isActive ? colors.darkBlue : colors.textMuted,
    padding: '12px 4px',
    borderBottom: isActive ? `2px solid ${colors.primary}` : '2px solid transparent',
    transition: 'color 0.2s ease, border-color 0.2s ease',
    whiteSpace: 'nowrap',
  });

  const renderDropdown = (item) => {
    const isOpen = openDropdown === item.dropdown;
    const isActive = item.dropdown === 'products' ? isProductsActive : isCompanyActive;

    return (
      <div
        key={item.id}
        style={{ position: 'relative' }}
        onMouseEnter={() => setOpenDropdown(item.dropdown)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <span
          onClick={() => setActivePage(item.landingPage)}
          style={navLinkStyle(isActive || isOpen)}
          onMouseEnter={(e) => { e.currentTarget.style.color = colors.darkBlue; }}
          onMouseLeave={(e) => {
            if (!isActive && !isOpen) e.currentTarget.style.color = colors.textMuted;
          }}
        >
          {item.label}
          <span style={{
            display: 'inline-block',
            marginLeft: '6px',
            fontSize: '11px',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            opacity: 0.7,
          }}>
            ▾
          </span>
        </span>

        {isOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            paddingTop: '12px',
            minWidth: item.dropdown === 'company' ? '260px' : '320px',
            zIndex: 1001,
          }}>
            <div style={{
              backgroundColor: colors.white,
              border: `1px solid ${colors.border}`,
              borderRadius: '10px',
              boxShadow: '0 10px 32px rgba(74, 67, 56, 0.12)',
              overflow: 'hidden',
            }}>
              {item.links.map(({ page, label }) => {
                const isItemActive = activePage === page;
                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => {
                      setActivePage(page);
                      setOpenDropdown(null);
                    }}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      background: isItemActive ? colors.lightBlueBg : colors.white,
                      border: 'none',
                      borderLeft: isItemActive ? `3px solid ${colors.primary}` : '3px solid transparent',
                      borderBottom: `1px solid ${colors.borderLight}`,
                      padding: '13px 18px 13px 16px',
                      cursor: 'pointer',
                      fontFamily: fonts.base,
                      fontSize: '15px',
                      fontWeight: isItemActive ? '600' : '500',
                      color: isItemActive ? colors.darkBlue : colors.textMuted,
                      transition: 'background 0.15s ease, color 0.15s ease, border-color 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.lightBlueBg;
                      e.currentTarget.style.color = colors.darkBlue;
                      if (!isItemActive) e.currentTarget.style.borderLeftColor = colors.border;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = isItemActive ? colors.lightBlueBg : colors.white;
                      e.currentTarget.style.color = isItemActive ? colors.darkBlue : colors.textMuted;
                      e.currentTarget.style.borderLeftColor = isItemActive ? colors.primary : 'transparent';
                    }}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <header style={{
      fontFamily: fonts.base,
      backgroundColor: colors.white,
      color: colors.text,
      boxShadow: '0 2px 16px rgba(92, 83, 68, 0.08)',
      borderBottom: `3px solid ${colors.primary}`,
      position: 'relative',
      zIndex: 1000,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '18px 40px',
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
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src={emblemImg}
            alt="Профи-Т"
            style={{ height: '68px', width: 'auto', display: 'block' }}
          />
        </button>

        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
        }}>
          {menuItems.map((item) => {
            if (item.dropdown) {
              return renderDropdown(item);
            }

            const isActive = activePage === item.id;

            return (
              <span
                key={item.id}
                onClick={() => setActivePage(item.id)}
                style={navLinkStyle(isActive)}
                onMouseEnter={(e) => { e.currentTarget.style.color = colors.darkBlue; }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = colors.textMuted;
                }}
              >
                {item.label}
              </span>
            );
          })}
        </nav>

        <a
          href="tel:+79619914470"
          style={{
            justifySelf: 'end',
            fontFamily: fonts.base,
            fontSize: '17px',
            fontWeight: '700',
            color: colors.darkBlue,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = colors.primary; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = colors.darkBlue; }}
        >
          +7 (961) 991-44-70
        </a>
      </div>
    </header>
  );
}

export default Header;
