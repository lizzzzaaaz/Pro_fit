import React, { useState } from 'react';

// import mainImg from '../assets/kut300-a42.png';

const renderImage = (imgSrc, altText) => {
  if (typeof imgSrc === 'string' && (imgSrc.startsWith('/') || imgSrc.startsWith('data:image') || imgSrc.startsWith('blob:'))) {
    return <img src={imgSrc} alt={altText} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />;
  }
  if (typeof imgSrc === 'object' && imgSrc !== null) {
    return <img src={imgSrc} alt={altText} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />;
  }
  return <span style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', padding: '10px' }}>Фото будет добавлено</span>;
};

export default function ProductsA3({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('main');
  const mainImg = null;

  return (
    <div style={{ padding: '40px 30px 80px 30px', maxWidth: '1200px', margin: '0 auto', color: '#0f172a', fontFamily: 'sans-serif', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div style={{ marginBottom: '30px', fontSize: '13px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <button onClick={() => setActivePage('main')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#7baaf7', font: 'inherit' }}>ГЛАВНАЯ</button>
        <span>/</span>
        <button onClick={() => setActivePage('products-catalog')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#7baaf7', font: 'inherit' }}>ПРОДУКЦИЯ</button>
        <span>/</span>
        <button onClick={() => setActivePage('industrial-controllers')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#7baaf7', font: 'inherit' }}>ПРОМЫШЛЕННЫЕ КОНТРОЛЛЕРЫ</button>
        <span>/</span>
        <span style={{ color: '#334155', fontWeight: '600' }}>КУТ300-А42</span>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <button onClick={() => setActivePage('industrial-controllers')} style={{ padding: '12px 24px', backgroundColor: '#e2e8f0', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
          ← К списку контроллеров
        </button>
      </div>

      <div style={{ display: 'flex', gap: '10px', borderBottom: '2px solid #e2e8f0', marginBottom: '30px' }}>
        <button onClick={() => setActiveTab('main')} style={{ padding: '12px 20px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: activeTab === 'main' ? '2px solid #0284c7' : 'none', fontWeight: activeTab === 'main' ? 'bold' : 'normal', marginBottom: '-2px' }}>Главное</button>
        <button onClick={() => setActiveTab('documents')} style={{ padding: '12px 20px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: activeTab === 'documents' ? '2px solid #0284c7' : 'none', fontWeight: activeTab === 'documents' ? 'bold' : 'normal', marginBottom: '-2px' }}>Документация</button>
      </div>

      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        {activeTab === 'main' && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', color: '#0284c7', marginBottom: '15px' }}>КУТ300-А42</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 1fr', gap: '30px' }}>
              <div style={{
                aspectRatio: '1 / 1',
                width: '100%',
                backgroundColor: '#e2e8f0',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #cbd5e1',
                boxSizing: 'border-box',
                overflow: 'hidden'
              }}>
                {renderImage(mainImg, 'КУТ300-А42')}
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Описание</h4>
                <p style={{ color: '#0284c7', fontWeight: '600', margin: '0 0 10px 0' }}>Контроллер дистанционного контроля электрохимической защиты</p>
                <p style={{ lineHeight: '1.6', color: '#475569', margin: 0 }}>
                  Изделие КУТ300-А42 предназначено для обеспечения дистанционного контроля параметров электрохимической защиты (ЭХЗ) подземных стальных сооружений, находящихся под действием катодной защиты.
                  Устройство устанавливается на специально оборудованных контрольно-измерительных пунктах (КИП) с установленным медно-сульфатным электродом сравнения и датчиком электрохимического потенциала (вспомогательным электродом).
                  При необходимости КИП может быть оборудован индикатором коррозионных процессов (ИКП) и устройством согласования индикатора коррозионных процессов с системами телеметрии (УСИКПСТ).
                </p>
                <p style={{ lineHeight: '1.6', color: '#475569', margin: '12px 0 0 0' }}>
                  Изделие обеспечивает периодические измерение и контроль параметров ЭХЗ, архивирование данных, передачу информации и аварийных сообщений на пульт управления, получение данных с ИКП посредством УСИКПСТ, а также контроль состояния источника питания. Передача данных осуществляется по каналам сотовой связи стандарта GSM.
                </p>
              </div>
              <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Технические характеристики</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {[
                      { label: 'SIM-карты', value: '1' },
                      { label: 'Входы дискретные ТС', value: '1' },
                      { label: 'Входы аналоговые ТИТ', value: '3' },
                      { label: 'Внешний интерфейс', value: 'RS-485' },
                      { label: 'Технологии GSM', value: 'GPRS/3G' },
                      { label: 'Параметры канала связи', value: '900/1800 МГц' },
                      { label: 'Протокол внешней связи', value: 'СКАТ' },
                      { label: 'Протокол обмена с ПУ', value: 'OPC DA, OPC HDA, OPC UA' },
                      { label: 'Напряжение питания', value: '2,8…3,9 В' },
                      { label: 'Импульсный ток (активный режим)', value: 'не более 300 мА' },
                      { label: 'Ток в режиме «измерение»', value: 'менее 0,1 мА' },
                      { label: 'Ток в режиме «сон»', value: 'менее 1 мА' },
                    ].map((char, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <td style={{ padding: '8px 0', color: '#64748b', fontSize: '14px', textAlign: 'left' }}>{char.label}</td>
                        <td style={{ padding: '8px 0', fontWeight: 'bold', fontSize: '14px', textAlign: 'right' }}>{char.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div>
            <h2>Документация</h2>
            <p>Технические паспорта и сертификаты в формате PDF появятся здесь.</p>
          </div>
        )}
      </div>
    </div>
  );
}
