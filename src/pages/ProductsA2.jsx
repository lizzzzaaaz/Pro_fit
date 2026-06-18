import React, { useState } from 'react';

export default function ProductsA2({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('main');

  return (
    <div style={{ padding: '30px', maxWidth: '1200px', margin: '0 auto', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Хлебные крошки */}
      <div style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px' }}>
        Главная / Продукция / Автономные комплексы телеметрии / <strong style={{ color: '#f8fafc' }}>КУТ300-АК</strong>
      </div>

      {/* Верхняя часть: Заглушка под фото и базовое описание */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '350px 1fr', 
        gap: '40px', 
        backgroundColor: '#1e293b', 
        padding: '30px', 
        borderRadius: '16px',
        border: '1px solid #334155',
        marginBottom: '30px'
      }}>
        <div style={{ 
          height: '260px', 
          backgroundColor: '#334155', 
          borderRadius: '10px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#64748b',
          fontSize: '18px'
        }}>
          [ Фото: КУТ300-АК ]
        </div>
        <div>
          <h1 style={{ margin: '0 0 15px 0', fontSize: '32px', color: '#f8fafc' }}>КУТ300-АК</h1>
          <p style={{ margin: '0 0 10px 0', color: '#38bdf8', fontSize: '18px', fontWeight: 'bold' }}>
            Автономный контроллер телеметрии
          </p>
          <p style={{ margin: 0, color: '#94a3b8', fontSize: '15px', lineHeight: '1.6' }}>
            Предназначен для построения систем дистанционного контроля параметров ГРП, ШРП различных типов, 
            оснащённых приборами учёта газа, в условиях полного отсутствия постоянного энергоснабжения.
          </p>
          
          <button 
            onClick={() => setActivePage('autonomous-telemetry')}
            style={{ 
              marginTop: '25px', 
              padding: '12px 24px', 
              backgroundColor: '#475569', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#64748b'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#475569'}
          >
            Назад к списку
          </button>
        </div>
      </div>

      {/* Переключение вкладок */}
      <div style={{ display: 'flex', gap: '10px', borderBottom: '2px solid #334155', marginBottom: '30px' }}>
        <button 
          onClick={() => setActiveTab('main')}
          style={{ 
            padding: '15px 25px', 
            background: 'none', 
            border: 'none', 
            color: activeTab === 'main' ? '#f8fafc' : '#94a3b8', 
            borderBottom: activeTab === 'main' ? '2px solid #38bdf8' : 'none',
            marginBottom: '-2px',
            fontSize: '16px', 
            cursor: 'pointer',
            fontWeight: activeTab === 'main' ? 'bold' : 'normal'
          }}
        >
          Главное
        </button>
        <button 
          onClick={() => setActiveTab('components')}
          style={{ 
            padding: '15px 25px', 
            background: 'none', 
            border: 'none', 
            color: activeTab === 'components' ? '#f8fafc' : '#94a3b8', 
            borderBottom: activeTab === 'components' ? '2px solid #38bdf8' : 'none',
            marginBottom: '-2px',
            fontSize: '16px', 
            cursor: 'pointer',
            fontWeight: activeTab === 'components' ? 'bold' : 'normal'
          }}
        >
          Составляющие
        </button>
      </div>

      {/* Содержимое вкладок */}
      <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '16px', border: '1px solid #334155', minHeight: '200px' }}>
        
        {activeTab === 'main' && (
          <div>
            <h2 style={{ marginTop: 0, color: '#f8fafc' }}>Назначение и применение</h2>
            <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '15px' }}>
              Контроллеры серии <strong>КУТ300-АК</strong> обеспечивают прием и обработку сигналов от датчиков, 
              архивирование данных и передачу информации на Пульт Управления (ПУ) по каналам связи стандарта 
              <strong> CSD / GPRS / 3G</strong>. <br /><br />
              Интеграция в существующие автоматизированные системы происходит за счет применения ОРС-сервера. 
              Устройство отличается крайне низким саморазрядом элементов питания и надежной взрывозащитой.
            </p>
          </div>
        )}

        {activeTab === 'components' && (
          <div>
            <h2 style={{ marginTop: 0, color: '#f8fafc' }}>Составляющие и узлы</h2>
            <ul style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '15px', paddingLeft: '20px' }}>
              <li><strong>Энергоснабжение:</strong> Автономный батарейный блок (6 литиевых элементов высокой емкости, 78 А·ч).</li>
              <li><strong>Измерительная часть:</strong> Аналоговые и дискретные входы (до 8 каналов типа «сухой контакт») со встроенными барьерами искрозащиты.</li>
              <li><strong>Связь и архивация:</strong> Модуль GSM/3G, интерфейсы RS-232 и RS-485 для подключения сторонних вычислителей расхода газа с регулируемым напряжением питания.</li>
              <li><strong>Исполнение:</strong> Моноблочная печатная плата в защитном кожухе, помещенная во взрывонепроницаемую металлическую оболочку (Exd / взрывозащита <i>[Ex ib Gb] IIB X</i>).</li>
              <li><strong>Диагностика:</strong> Настройка контроллера на объекте осуществляется с помощью переносного универсального устройства конфигурирования <strong>М80</strong>.</li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}