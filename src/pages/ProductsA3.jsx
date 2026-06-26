import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import DocumentList from '../components/DocumentList';
import ZoomableImage from '../components/ZoomableImage';
import mainImg from '../assets/КУТ300-А42.png';
import passportPdf from '../assets/12_КУТ300-А42 _ ПС.pdf';
import { appendSt1 } from '../data/st1Certificate';

const productDocuments = [
  {
    title: 'Паспорт КУТ300-А42',
    href: passportPdf,
    fileName: '12_КУТ300-А42 _ ПС.pdf',
  },
];

const renderImage = (imgSrc, altText) => {
  if (typeof imgSrc === 'string' && (imgSrc.startsWith('/') || imgSrc.startsWith('data:image') || imgSrc.startsWith('blob:'))) {
    return <ZoomableImage src={imgSrc} alt={altText} />;
  }
  if (typeof imgSrc === 'object' && imgSrc !== null) {
    return <ZoomableImage src={imgSrc} alt={altText} />;
  }
  return <span style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', padding: '10px' }}>Фото будет добавлено</span>;
};

export default function ProductsA3({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('main');

  return (
    <div style={{ padding: '40px 30px 80px 30px', maxWidth: '1200px', margin: '0 auto', color: '#0f172a', fontFamily: 'sans-serif', backgroundColor: '#ffffff' }}>
      <Breadcrumbs
        setActivePage={setActivePage}
        items={[
          { label: 'ГЛАВНАЯ', page: 'main' },
          { label: 'ПРОДУКЦИЯ', page: 'products-catalog' },
          { label: 'ПРОМЫШЛЕННЫЕ КОНТРОЛЛЕРЫ', page: 'industrial-controllers' },
          { label: 'КУТ300-А42' },
        ]}
      />

      <div style={{ marginBottom: '25px' }}>
        <button onClick={() => setActivePage('industrial-controllers')} style={{ padding: '12px 24px', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
          ← К списку контроллеров
        </button>
      </div>

      <div style={{ display: 'flex', gap: '10px', borderBottom: '2px solid #e2e8f0', marginBottom: '30px' }}>
        <button onClick={() => setActiveTab('main')} style={{ padding: '12px 20px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: activeTab === 'main' ? '2px solid #c9a227' : 'none', fontWeight: activeTab === 'main' ? 'bold' : 'normal', marginBottom: '-2px' }}>Главное</button>
        <button onClick={() => setActiveTab('documents')} style={{ padding: '12px 20px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: activeTab === 'documents' ? '2px solid #c9a227' : 'none', fontWeight: activeTab === 'documents' ? 'bold' : 'normal', marginBottom: '-2px' }}>Документация</button>
      </div>

      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        {activeTab === 'main' && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', color: '#c9a227', marginBottom: '15px' }}>КУТ300-А42</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 1fr', gap: '30px' }}>
              <div style={{
                aspectRatio: '1 / 1',
                width: '100%',
                backgroundColor: '#f5f5f5',
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
                <p style={{ color: '#c9a227', fontWeight: '600', margin: '0 0 10px 0' }}>Контроллер дистанционного контроля электрохимической защиты</p>
                <p style={{ lineHeight: '1.6', color: '#475569', margin: 0 }}>
                  Изделие КУТ300-А42 предназначено для обеспечения дистанционного контроля параметров электрохимической защиты (ЭХЗ) подземных стальных сооружений, находящихся под действием катодной защиты.
                  Устройство устанавливается на специально оборудованных контрольно-измерительных пунктах (КИП) с установленным медно-сульфатным электродом сравнения и датчиком электрохимического потенциала (вспомогательным электродом).
                  При необходимости КИП может быть оборудован индикатором коррозионных процессов (ИКП) и устройством согласования индикатора коррозионных процессов с системами телеметрии (УСИКПСТ).
                </p>
                <p style={{ lineHeight: '1.6', color: '#475569', margin: '12px 0 0 0' }}>
                  Изделие обеспечивает периодические измерение и контроль параметров ЭХЗ, архивирование данных, передачу информации и аварийных сообщений на пульт управления, получение данных с ИКП посредством УСИКПСТ, а также контроль состояния источника питания. Передача данных осуществляется по каналам сотовой связи стандарта GSM.
                </p>
              </div>
              <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
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
            <h2 style={{ fontSize: '24px', color: '#c9a227', margin: '0 0 8px 0' }}>Документация</h2>
            <p style={{ color: '#475569', lineHeight: '1.6', margin: '0 0 24px 0' }}>
              Документация для «КУТ300-А42».
            </p>
            <DocumentList items={appendSt1(productDocuments, { productId: 'КУТ300-А42' })} />
          </div>
        )}
      </div>
    </div>
  );
}
