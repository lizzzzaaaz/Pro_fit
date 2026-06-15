import React from 'react';

function Services({ setActivePage }) {
  console.log("Функция setActivePage:", setActivePage);
  const servicesList = [
    { title: 'Проектирование систем', desc: 'Разработка проектной, конструкторской и сметной документации для автоматизации инженерных систем.' },
    { title: 'Пусконаладочные работы', desc: 'Комплексная настройка оборудования, калибровка датчиков и конфигурирование промышленного софта.' },
    { title: 'Техническая поддержка', desc: 'Удаленный мониторинг, оперативное обслуживание комплексов и регламентное обновление ПО.' },
    { title: 'Метрологическая поверка', desc: 'Организация и проведение поверки средств измерений с внесением данных в государственные реестры.' }
  ];

  return (
    <div style={{ backgroundColor: '#fcfcfc', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Крошки с рабочей ссылкой */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 40px', fontSize: '14px', color: '#64748b' }}>
          <span style={{ color: '#0070f3', cursor: 'pointer', fontWeight: '500' }} onClick={() => setActivePage('main')}>Главная</span>
          <span style={{ margin: '0 12px', color: '#cbd5e1' }}>/</span>
          <span style={{ color: '#1e293b', fontWeight: '500' }}>Услуги</span>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 40px' }}>
        <h1 style={{ fontSize: '38px', fontWeight: '800', color: '#111', margin: '0 0 16px 0', letterSpacing: '-1px' }}>Инженерные услуги</h1>
        <p style={{ color: '#64748b', fontSize: '16px', maxWidth: '600px', margin: '0 0 50px 0', lineHeight: '1.6' }}>
          Реализация комплексных технологических проектов от стадии разработки концепта до долгосрочного сервисного обслуживания.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {servicesList.map((item, index) => (
            <div key={index} style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '12px', border: '1px solid #eef2f6', boxShadow: '0 4px 20px rgba(0,0,0,0.01)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: '0 0 12px 0' }}>{item.title}</h3>
              <p style={{ color: '#64748b', fontSize: '14.5px', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Services;