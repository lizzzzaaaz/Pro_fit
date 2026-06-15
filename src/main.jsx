import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import ServiceDetail from './pages/ServiceDetail';
// Импортируем данные (убедись, что файл называется именно servicesData.js)
import { services } from './pages/servicesData'; 

function MainApp() {
  const [currentPage, setCurrentPage] = useState('main');
  const [activeServiceId, setActiveServiceId] = useState(null);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#06080f' }}>
      <Header activePage={currentPage} setActivePage={setCurrentPage} />
      <main>
        {currentPage === 'detail' && (
          <ServiceDetail 
            service={services.find(s => s.id === activeServiceId)} 
            relatedServices={services.filter(s => s.id !== activeServiceId)}
            onServiceClick={(id) => { 
              setActiveServiceId(id); 
            }}
            onBack={() => setCurrentPage('services')}
            setActivePage={setCurrentPage}
          />
        )}
        
        {currentPage === 'main' && <MainPage setActivePage={setCurrentPage} />}
        
        {currentPage === 'services' && (
          <Services 
            setActivePage={setCurrentPage} 
            onServiceClick={(id) => {
              setActiveServiceId(id);
              setCurrentPage('detail');
            }}
          />
        )}
        
        {currentPage === 'contacts' && <Contacts setActivePage={setCurrentPage} />}

        {/* Заглушки для остальных страниц */}
        {['production', 'support', 'about'].includes(currentPage) && (
          <div style={{ padding: '80px 40px', color: '#fff' }}>
            <h1>Страница "{currentPage}" в разработке</h1>
          </div>
        )}
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);