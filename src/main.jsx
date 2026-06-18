import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import ServiceDetail from './pages/ServiceDetail';

// Импортируем страницы каталога продукции
import ProductsCatalog from './pages/ProductsCatalog';
import IndustrialControllers from './pages/IndustrialControllers';
import AutonomousTelemetry from './pages/AutonomousTelemetry';
import PowerAndModules from './pages/PowerAndModules';

// Детальные страницы товаров
import ProductsA1 from './pages/ProductsA1'; 
import ProductsA2 from './pages/ProductsA2'; 

import { services } from './pages/servicesData'; 

function MainApp() {
  const [currentPage, setCurrentPage] = useState('main');
  const [activeServiceId, setActiveServiceId] = useState(null);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#06080f' }}>
      <Header activePage={currentPage} setActivePage={setCurrentPage} />
      <main>
        
        {/* СТРАНИЦЫ КАТАЛОГА ПРОДУКЦИИ */}
        
        {/* Главная страница Продукции (плитка из 3 категорий) */}
        {currentPage === 'products-catalog' && (
          <ProductsCatalog setActivePage={setCurrentPage} />
        )}
        
        {/* 1. Категория: Промышленные контроллеры */}
        {currentPage === 'industrial-controllers' && (
          <IndustrialControllers setActivePage={setCurrentPage} />
        )}

        {/* 2. Категория: Автономные комплексы телеметрии */}
        {currentPage === 'autonomous-telemetry' && (
          <AutonomousTelemetry setActivePage={setCurrentPage} />
        )}

        {/* 3. Категория: Источники и модули */}
        {currentPage === 'power-modules' && (
          <PowerAndModules setActivePage={setCurrentPage} />
        )}

        {/* Детальная страница 1: КУТ300-ПК */}
        {currentPage === 'products-a1' && (
          <ProductsA1 setActivePage={setCurrentPage} />
        )}

        {/* Детальная страница 2: КУТ300-АК */}
        {currentPage === 'products-a2' && (
          <ProductsA2 setActivePage={setCurrentPage} />
        )}

        {/* СТРАНИЦЫ УСЛУГ И ОСНОВНЫЕ РАЗДЕЛЫ */}

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

        {/* Заглушки для страниц в разработке */}
        {['support', 'about'].includes(currentPage) && (
          <div style={{ padding: '80px 40px', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
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