import React, { useState } from 'react';

function Header({ activePage, setActivePage }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const menuItems = [
    { id: 'services', label: 'Услуги' },
    { id: 'products-catalog', label: 'Продукция' },
    { id: 'contacts', label: 'Контакты' },
    { id: 'support', label: 'Тех поддержка' },
    { id: 'about', label: 'О компании' }
  ];

  return (
    <header style={{ 
      padding: '25px 40px', 
      backgroundColor: '#1e293b', 
      color: '#ffffff', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      position: 'relative',
      zIndex: 1000
    }}>
      <div style={{ fontSize: '26px', fontWeight: '800', cursor: 'pointer' }} onClick={() => setActivePage('main')}>
        Pro_fit
      </div>
      
      <nav style={{ display: 'flex', gap: '30px' }}>
        {menuItems.map(item => (
          <div 
            key={item.id} 
            style={{ position: 'relative' }}
            onMouseEnter={() => item.id === 'products-catalog' && setShowDropdown(true)}
            onMouseLeave={() => item.id === 'products-catalog' && setShowDropdown(false)}
          >
            <span 
              onClick={() => setActivePage(item.id)}
              style={{ 
                cursor: 'pointer', 
                fontWeight: activePage === item.id ? '700' : '500', 
                opacity: activePage === item.id ? '1' : '0.8',
                paddingBottom: '4px',
                borderBottom: activePage === item.id ? '2px solid #ffffff' : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              {item.label} {item.id === 'products-catalog' && '▾'}
            </span>

            {/* Выпадающий список категорий продукции с буферной зоной */}
            {item.id === 'products-catalog' && showDropdown && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                paddingTop: '15px',
                zIndex: 1000
              }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  padding: '10px 0',
                  borderRadius: '8px',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                  minWidth: '260px',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid #f1f5f9'
                }}>
                  <div 
                    onClick={() => setActivePage('industrial-controllers')} 
                    style={{ padding: '12px 20px', cursor: 'pointer', fontSize: '14px', transition: 'background 0.2s' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    Промышленные контроллеры
                  </div>
                  <div 
                    onClick={() => setActivePage('autonomous-telemetry')} 
                    style={{ padding: '12px 20px', cursor: 'pointer', fontSize: '14px', transition: 'background 0.2s' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    Автономные комплексы телеметрии
                  </div>
                  <div 
                    onClick={() => setActivePage('power-modules')} 
                    style={{ padding: '12px 20px', cursor: 'pointer', fontSize: '14px', transition: 'background 0.2s' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    Источники и модули
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}

export default Header;