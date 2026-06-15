import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import Services from './pages/Services'
import Contacts from './pages/Contacts'

function MainApp() {
  // На всякий случай стартуем строго с главной
  const [currentPage, setCurrentPage] = useState('main');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#06080f' }}>
      {/* Проверяем, что передали ТОЧНО те же имена пропсов, что принимает Header */}
      <Header activePage={currentPage} setActivePage={setCurrentPage} /> 
      
      <main>
        {currentPage === 'main' && <MainPage setActivePage={setCurrentPage} />}
        {currentPage === 'services' && <Services setActivePage={setCurrentPage} />}
        {currentPage === 'contacts' && <Contacts setActivePage={setCurrentPage} />}
        
        {/* Временные заглушки для остальных страниц, чтобы сайт не падал при клике на них */}
        {currentPage === 'production' && (
          <div className="page-container"><h1 className="page-title">Страница "Продукция" в разработке</h1></div>
        )}
        {currentPage === 'support' && (
          <div className="page-container"><h1 className="page-title">Страница "Тех поддержка" в разработке</h1></div>
        )}
        {currentPage === 'about' && (
          <div className="page-container"><h1 className="page-title">Страница "О компании" в разработке</h1></div>
        )}
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
)