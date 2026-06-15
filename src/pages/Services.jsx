import React from 'react';
import { services } from './servicesData';

const icons = {
  maintenance: <path d="M12 2v4m0 16v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m16 0h4m-4.93-7.07l-2.83 2.83M7.76 16.24l-2.83 2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>,
  construction: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>,
  automation: <path d="M10 2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-4zM2 12a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>,
  telemetry: <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.59 16.14a6 6 0 0 1 6.82 0M12 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>,
  // 5: Щит (Криптозащита)
  crypto: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
};

function Services({ setActivePage, onServiceClick }) {
  const softBlue = '#7baaf7';
  const bgCard = '#f4f7fb';

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px' }}>
        
        <div style={{ marginBottom: '50px', fontSize: '14px', letterSpacing: '0.5px' }}>
          <span onClick={() => setActivePage('main')} style={{ cursor: 'pointer', color: '#7baaf7' }}>ГЛАВНАЯ</span>
          <span style={{ margin: '0 10px', color: '#cbd5e1' }}>/</span>
          <span style={{ color: '#0f172a', fontWeight: 600 }}>УСЛУГИ</span>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '24px'
        }}>
          {services.map((s, index) => (
            <div 
              key={s.id} 
              onClick={() => { onServiceClick(s.id); setActivePage('detail'); }}
              style={{ 
                padding: '40px',
                backgroundColor: bgCard,
                borderRadius: '16px',
                border: '1px solid #eef2f7',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = softBlue;
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(123, 170, 247, 0.3)';
                e.currentTarget.querySelectorAll('h3, p, .num, .icon-wrapper').forEach(el => el.style.color = '#fff');
                e.currentTarget.querySelector('.icon-wrapper').style.opacity = '0.4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = bgCard;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.querySelector('h3').style.color = '#0f172a';
                e.currentTarget.querySelector('p').style.color = '#64748b';
                e.currentTarget.querySelector('.num').style.color = '#000';
                e.currentTarget.querySelector('.icon-wrapper').style.color = '#0f172a';
                e.currentTarget.querySelector('.icon-wrapper').style.opacity = '0.15';
              }}
            >
              <div className="icon-wrapper" style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.15, transition: '0.4s', color: '#0f172a' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icons[s.id]}</svg>
              </div>
              
              <div className="num" style={{ fontSize: '32px', fontWeight: 900, opacity: 0.1, marginBottom: '20px', transition: '0.3s' }}>
                0{index + 1}
              </div>
              
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '15px', color: '#0f172a', transition: '0.3s' }}>{s.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#64748b', transition: '0.3s', flexGrow: 1 }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ 
        marginTop: '100px', 
        padding: '60px 40px', 
        backgroundColor: '#1e293b', 
        color: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>Pro_fit</h4>
          <p style={{ margin: 0, opacity: 0.8, fontSize: '14px' }}>Автоматизация и технологические решения</p>
        </div>
        <div style={{ fontSize: '14px', opacity: 0.9 }}>© 2026 Pro_fit. Все права защищены.</div>
      </footer>
    </div>
  );
}

export default Services;