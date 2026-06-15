import React from 'react';

function Header({ activePage, setActivePage }) {
  const menuItems = [
    { id: 'services', label: 'Услуги' },
    { id: 'products', label: 'Продукция' },
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
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '26px', fontWeight: '800', cursor: 'pointer' }} onClick={() => setActivePage('main')}>
        Pro_fit
      </div>
      
      <nav style={{ display: 'flex', gap: '30px' }}>
        {menuItems.map(item => (
          <span 
            key={item.id} 
            onClick={() => setActivePage(item.id)}
            style={{ 
              cursor: 'pointer', 
              fontWeight: activePage === item.id ? '700' : '500', 
              opacity: activePage === item.id ? '1' : '0.8',
              paddingBottom: '4px',
              borderBottom: activePage === item.id ? '2px solid #ffffff' : 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => {
              if (activePage !== item.id) e.target.style.opacity = '0.8';
            }}
          >
            {item.label}
          </span>
        ))}
      </nav>
    </header>
  );
}

export default Header;