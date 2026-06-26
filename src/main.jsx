import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './responsive.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import { About, Certificates } from './pages/CompanyPages';
import ServiceDetail from './pages/ServiceDetail';

// Импортируем страницы каталога продукции
import ProductsCatalog from './pages/ProductsCatalog';
import IndustrialControllers from './pages/IndustrialControllers';
import AutonomousTelemetry from './pages/AutonomousTelemetry';
import TelemetryComplexDetail from './pages/TelemetryComplexDetail';
import { telemetryComplexPages } from './pages/telemetryComplexesData';
import { explosionBarrierPages, getExplosionBarrier } from './pages/explosionBarriersData';
import { softwareProductPages, getSoftwareProduct } from './pages/softwareProductsData';
import { powerSupplyPages, getPowerSupply } from './pages/powerSuppliesData';
import PowerAndModules from './pages/PowerAndModules';
import PowerSupplies from './pages/PowerSupplies';
import SoftwareProducts from './pages/SoftwareProducts';

// Детальные страницы товаров
import ProductsA1 from './pages/ProductsA1'; 
import ProductsA2 from './pages/ProductsA2'; 
import ProductsA3 from './pages/ProductsA3';
import LegalDocumentPage from './pages/LegalDocumentPage';
import { legalDocumentPages } from './data/legalDocumentsData';

import { services } from './pages/servicesData'; 

function MainApp() {
  const [currentPage, setCurrentPage] = useState('main');
  const [activeServiceId, setActiveServiceId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, activeServiceId]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column' }}>
      <Header activePage={currentPage} setActivePage={setCurrentPage} />
      <main style={{ flex: 1 }}>
        
        {/* СТРАНИЦЫ КАТАЛОГА ПРОДУКЦИИ */}
        
        {/* Главная страница Продукции (плитка категорий) */}
        {currentPage === 'products-catalog' && (
          <ProductsCatalog setActivePage={setCurrentPage} />
        )}
        
        {/* 1. Категория: Промышленные контроллеры */}
        {currentPage === 'industrial-controllers' && (
          <IndustrialControllers setActivePage={setCurrentPage} />
        )}

        {/* 2. Категория: Комплексы телеметрии */}
        {currentPage === 'autonomous-telemetry' && (
          <AutonomousTelemetry setActivePage={setCurrentPage} />
        )}

        {telemetryComplexPages.map((pageId) => (
          currentPage === pageId && (
            <TelemetryComplexDetail
              key={pageId}
              setActivePage={setCurrentPage}
              pageId={pageId}
            />
          )
        ))}

        {explosionBarrierPages.map((pageId) => (
          currentPage === pageId && (
            <TelemetryComplexDetail
              key={pageId}
              setActivePage={setCurrentPage}
              pageId={pageId}
              getItem={getExplosionBarrier}
              listPage="power-modules"
              listBreadcrumb="БАРЬЕРЫ ИСКРОЗАЩИТЫ"
              backLabel="← К списку барьеров"
            />
          )
        ))}

        {/* 3. Категория: Барьеры искрозащиты */}
        {currentPage === 'power-modules' && (
          <PowerAndModules setActivePage={setCurrentPage} />
        )}

        {/* 4. Категория: Программное обеспечение */}
        {currentPage === 'software-products' && (
          <SoftwareProducts setActivePage={setCurrentPage} />
        )}

        {softwareProductPages.map((pageId) => (
          currentPage === pageId && (
            <TelemetryComplexDetail
              key={pageId}
              setActivePage={setCurrentPage}
              pageId={pageId}
              getItem={getSoftwareProduct}
              listPage="software-products"
              listBreadcrumb="ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ"
              backLabel="← К списку ПО"
            />
          )
        ))}

        {/* 5. Категория: Источники питания */}
        {currentPage === 'power-supplies' && (
          <PowerSupplies setActivePage={setCurrentPage} />
        )}

        {powerSupplyPages.map((pageId) => (
          currentPage === pageId && (
            <TelemetryComplexDetail
              key={pageId}
              setActivePage={setCurrentPage}
              pageId={pageId}
              getItem={getPowerSupply}
              listPage="power-supplies"
              listBreadcrumb="ИСТОЧНИКИ ПИТАНИЯ"
              backLabel="← К списку источников питания"
            />
          )
        ))}

        {/* Детальная страница 1: КУТ300-ПК */}
        {currentPage === 'products-a1' && (
          <ProductsA1 setActivePage={setCurrentPage} />
        )}

        {/* Детальная страница 2: КУТ300-АК */}
        {currentPage === 'products-a2' && (
          <ProductsA2 setActivePage={setCurrentPage} />
        )}

        {/* Детальная страница 3: КУТ300-А42 */}
        {currentPage === 'products-a3' && (
          <ProductsA3 setActivePage={setCurrentPage} />
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

        {currentPage === 'about' && <About setActivePage={setCurrentPage} />}
        {currentPage === 'certificates' && <Certificates setActivePage={setCurrentPage} />}

        {legalDocumentPages.map((pageId) => (
          currentPage === pageId && (
            <LegalDocumentPage
              key={pageId}
              setActivePage={setCurrentPage}
              pageId={pageId}
            />
          )
        ))}

        {currentPage === 'support' && (
          <div style={{ padding: '80px 40px', color: '#0f172a', fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff' }}>
            <h1>Страница «Поддержка» в разработке</h1>
          </div>
        )}

      </main>
      <Footer setActivePage={setCurrentPage} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);