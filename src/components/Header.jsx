import React from 'react';

function Header({ activePage, setActivePage }) {
  // Стиль для элементов навигации
  const navItemStyle = (pageName) => ({
    padding: '10px 16px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: activePage === pageName ? '600' : '500',
    color: activePage === pageName ? '#111' : '#64748b',
    borderBottom: activePage === pageName ? '2px solid #0070f3' : '2px solid transparent',
    transition: 'all 0.2s ease',
  });

  return (
    <header style={{ 
      backgroundColor: '#fff', 
      borderBottom: '1px solid #f0f0f0',
      padding: '20px 0'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 40px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>
        
        {/* Логотип */}
        <div 
          style={{ fontSize: '24px', fontWeight: '800', cursor: 'pointer', letterSpacing: '-0.5px' }} 
          onClick={() => setActivePage('main')}
        >
          Pro_fit
        </div>

        {/* Навигация */}
        <nav style={{ display: 'flex', gap: '8px' }}>
          <span style={navItemStyle('services')} onClick={() => setActivePage('services')}>Услуги</span>
          <span style={navItemStyle('production')} onClick={() => setActivePage('production')}>Продукция</span>
          <span style={navItemStyle('contacts')} onClick={() => setActivePage('contacts')}>Контакты</span>
          <span style={navItemStyle('support')} onClick={() => setActivePage('support')}>Тех поддержка</span>
          <span style={navItemStyle('about')} onClick={() => setActivePage('about')}>О компании</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;