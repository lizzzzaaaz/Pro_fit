import React, { useState, useRef } from 'react';
import mainImg from '../assets/КУТ300-АК.png';
import processorImg from '../assets/Плата процессора.png';
import expansionImg from '../assets/Плата расширения.png';
import batteryBlockImg from '../assets/Блок батарейного питания.png';
import accumulatorImg from '../assets/Аккамуляторный блок.png';
import m80Img from '../assets/устройство_конфигурирования_m80.png';

export default function ProductsA2({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('main');
  const [selectedComponent, setSelectedComponent] = useState(null);
  const componentsSectionRef = useRef(null);

  const scrollToComponents = () => {
    setActiveTab('components');
    setSelectedComponent(null);
    setTimeout(() => {
      componentsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  const renderImage = (imgSrc, altText) => {
    if (typeof imgSrc === 'string' && (imgSrc.startsWith('/') || imgSrc.startsWith('data:image') || imgSrc.startsWith('blob:'))) {
      return <img src={imgSrc} alt={altText} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />;
    }
    if (typeof imgSrc === 'object' && imgSrc !== null) {
      return <img src={imgSrc} alt={altText} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />;
    }
    return <span style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', padding: '10px' }}>Фото будет добавлено</span>;
  };

  const componentsData = [
    {
      id: 'Плата процессора',
      title: 'Плата процессора',
      desc: 'Основной вычислительный модуль автономного контроллера.',
      fullDesc: 'Плата процессора включает элементы управления работой контроллера, индикаторы работы, разъём подключения блока батарейного питания, разъёмы для SIM-карт, разъём подключения антенны SMA, разъём подключения устройства М100, батарею часов реального времени, элементы искрозащиты, а также цепи подключения датчиков температуры и давления, дискретных датчиков и внешнего интерфейса.',
      img: processorImg,
      chars: [
        { label: 'SIM-карты', value: '2' },
        { label: 'Разъём антенны', value: 'SMA' },
        { label: 'Разъём устройства М100', value: 'Есть' },
        { label: 'Часы реального времени', value: 'Батарея RTC' },
        { label: 'Искрозащита', value: 'Встроенные барьеры' },
        { label: 'Подключение датчиков', value: 'Температура, давление, дискретные' },
        { label: 'Внешний интерфейс', value: 'RS-232/RS-485' },
      ]
    },
    {
      id: 'Плата расширения',
      title: 'Плата расширения',
      desc: 'Дополнительные измерительные каналы и переключатели режимов.',
      fullDesc: 'Плата расширения оснащена переключателями режимов работы универсальных каналов измерения, элементами искрозащиты, а также цепями подключения датчиков температуры и давления и дискретных датчиков.',
      img: expansionImg,
      chars: [
        { label: 'Универсальные каналы', value: 'Переключатели режимов работы' },
        { label: 'Искрозащита', value: 'Встроенные барьеры' },
        { label: 'Датчики температуры и давления', value: 'Подключение предусмотрено' },
        { label: 'Дискретные датчики', value: 'Подключение предусмотрено' },
        { label: 'Дискретные входы (всего)', value: 'до 8 шт.' },
        { label: 'Аналоговые входы (всего)', value: 'до 10 шт.' },
      ]
    },
    {
      id: 'Блок батарейного питания',
      title: 'Блок батарейного питания',
      desc: 'Автономное питание контроллера от 6 элементов.',
      fullDesc: 'Блок батарейного питания обеспечивает автономную работу контроллера. Установка 6 батарей питания с параллельным соединением. Исключительно малый саморазряд при длительном сроке службы (менее 1% от номинальной ёмкости в течение одного года хранения). Высокая нагрузочная способность при импульсной нагрузке вследствие малого внутреннего сопротивления.',
      img: batteryBlockImg,
      chars: [
        { label: 'Количество элементов', value: '6' },
        { label: 'Соединение батарей', value: 'Параллельное' },
        { label: 'Саморазряд', value: 'менее 1% в год' },
        { label: 'Защита', value: 'От перегрузки и короткого замыкания' },
        { label: 'Электролит', value: 'Негорючий' },
        { label: 'Суммарная ёмкость', value: '78 А·ч' },
      ]
    },
    {
      id: 'Аккумуляторный блок',
      title: 'Аккумуляторный блок',
      desc: 'Литий-железо-фосфатный LiFePO4 аккумулятор 3,2 В.',
      fullDesc: 'Аккумуляторный блок на базе литий-железо-фосфатного LiFePO4 аккумулятора 3,2 В. Исключительно малый саморазряд при длительном сроке службы (менее 2 % от номинальной ёмкости в течение одного года хранения). Высокая нагрузочная способность при импульсной нагрузке вследствие малого внутреннего сопротивления. Полностью отсутствует эффект памяти. Стоит на первом месте по безопасности среди всех типов батарей (термическая и химическая стабильность).',
      img: accumulatorImg,
      chars: [
        { label: 'Тип аккумулятора', value: 'LiFePO4, 3,2 В' },
        { label: 'Саморазряд', value: 'менее 2% в год' },
        { label: 'Эффект памяти', value: 'Отсутствует' },
        { label: 'Безопасность', value: 'Термическая и химическая стабильность' },
        { label: 'Электролит', value: 'Негорючий' },
        { label: 'Суммарная ёмкость', value: '80 А·ч' },
      ]
    },
    {
      id: 'М80',
      title: 'Устройство конфигурирования М80',
      desc: 'Настройка и диагностика КУТ300-АК.',
      fullDesc: 'Настройка и диагностика КУТ300-АК осуществляется с помощью устройства конфигурирования М80. М80 является универсальным и подходит ко всем изделиям производства ООО «НТК Профи-Т».',
      img: m80Img,
      chars: [
        { label: 'Напряжение питания', value: 'от 3,0 до 5,5 В' },
        { label: 'Ток потребления (макс.)', value: 'не более 0,1 А' },
        { label: 'Температурный диапазон', value: 'от минус 40 до плюс 50 °С' },
        { label: 'Габаритные размеры', value: 'не более 150 × 90 × 25 мм' },
        { label: 'Масса устройства', value: 'не более 200 г' },
        { label: 'Степень защиты оболочки', value: 'IP40 (по ГОСТ 14254)' },
      ]
    },
  ];

  return (
    <div style={{ padding: '40px 30px 80px 30px', maxWidth: '1200px', margin: '0 auto', color: '#0f172a', fontFamily: 'sans-serif', backgroundColor: '#ffffff' }}>
      <div style={{ marginBottom: '30px', fontSize: '13px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <button onClick={() => setActivePage('main')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#7baaf7', font: 'inherit' }}>ГЛАВНАЯ</button>
        <span>/</span>
        <button onClick={() => setActivePage('products-catalog')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#7baaf7', font: 'inherit' }}>ПРОДУКЦИЯ</button>
        <span>/</span>
        <button onClick={() => setActivePage('industrial-controllers')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#7baaf7', font: 'inherit' }}>ПРОМЫШЛЕННЫЕ КОНТРОЛЛЕРЫ</button>
        <span>/</span>
        <button
          onClick={() => { setActiveTab('main'); setSelectedComponent(null); }}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', font: 'inherit', color: (activeTab === 'main' || activeTab === 'components') && !selectedComponent ? '#334155' : '#7baaf7', fontWeight: '600' }}
        >
          КУТ300-АК
        </button>
      </div>

      <div style={{ marginBottom: '25px' }}>
        <button onClick={() => setActivePage('industrial-controllers')} style={{ padding: '12px 24px', backgroundColor: '#eff6ff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
          ← К списку контроллеров
        </button>
      </div>

      {!selectedComponent && (
        <div style={{ display: 'flex', gap: '10px', borderBottom: '2px solid #e2e8f0', marginBottom: '30px' }}>
          <button onClick={() => setActiveTab('main')} style={{ padding: '12px 20px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: activeTab === 'main' ? '2px solid #0284c7' : 'none', fontWeight: activeTab === 'main' ? 'bold' : 'normal', marginBottom: '-2px' }}>Главное</button>
          <button onClick={() => setActiveTab('documents')} style={{ padding: '12px 20px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: activeTab === 'documents' ? '2px solid #0284c7' : 'none', fontWeight: activeTab === 'documents' ? 'bold' : 'normal', marginBottom: '-2px' }}>Документация</button>
          <button onClick={scrollToComponents} style={{ padding: '12px 20px', background: 'none', border: 'none', cursor: 'pointer', borderBottom: activeTab === 'components' ? '2px solid #0284c7' : 'none', fontWeight: activeTab === 'components' ? 'bold' : 'normal', marginBottom: '-2px' }}>Составляющие</button>
        </div>
      )}

      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', border: '1px solid #bfdbfe', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        {(activeTab === 'main' || activeTab === 'components') && (
          <>
            {!selectedComponent ? (
              <div>
                <div style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '24px', color: '#0284c7', marginBottom: '15px' }}>КУТ300-АК</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                    <div style={{
                      aspectRatio: '1 / 1',
                      width: '100%',
                      backgroundColor: '#eff6ff',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #cbd5e1',
                      boxSizing: 'border-box',
                      overflow: 'hidden'
                    }}>
                      {renderImage(mainImg, 'КУТ300-АК')}
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Описание</h4>
                      <p style={{ color: '#0284c7', fontWeight: '600', margin: '0 0 10px 0' }}>Автономный контроллер телеметрии</p>
                      <p style={{ lineHeight: '1.6', color: '#475569', margin: 0 }}>
                        Автономные контроллеры телеметрии серии КУТ300-АК предназначены для построения автоматизированных систем дистанционного контроля параметров ГРП, ШРП различных типов, в том числе оснащённых приборами учёта газа в условиях отсутствия постоянного энергоснабжения. Контроллеры могут быть внедрены в существующие автоматизированные системы за счёт применения OPC-сервера.
                      </p>
                      <p style={{ lineHeight: '1.6', color: '#475569', margin: '12px 0 0 0' }}>
                        Контроллеры обеспечивают приём и преобразование аналоговых сигналов от датчиков, обработку данных от многофункциональных устройств, накопление и обработку дискретных сигналов, связь с пультом управления по каналам CSD/GPRS/3G, контроль параметров объекта по граничным уставкам, архивирование данных, а также местную и удалённую настройку параметров работы.
                      </p>
                      <p style={{ lineHeight: '1.6', color: '#475569', margin: '12px 0 0 0' }}>
                        Конструктивно контроллеры имеют моноблочное исполнение в виде печатной платы в защитном кожухе. Все измерительные каналы защищены встроенными барьерами искрозащиты. Маркировка взрывозащиты: [Ex ib Gb] IIB X по ГОСТ 31610.0.
                      </p>
                    </div>
                    <div style={{ backgroundColor: '#eff6ff', padding: '20px', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
                      <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Технические характеристики</h4>
                      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                          {[
                            { label: 'SIM-карты', value: '2' },
                            { label: 'Входы дискретные ТС', value: 'до 8' },
                            { label: 'Входы аналоговые ТИТ', value: 'до 10' },
                            { label: 'Внешний интерфейс', value: 'RS-232/RS-485' },
                            { label: 'Технологии GSM', value: 'GPRS/3G' },
                            { label: 'Параметры канала связи', value: '900/1800 МГц' },
                            { label: 'Протокол внешней связи', value: 'СКАТ' },
                            { label: 'Протокол обмена с ПУ', value: 'OPC DA, OPC HDA, OPC UA' },
                            { label: 'Напряжение питания', value: '2,8…3,9 В' },
                            { label: 'Импульсный ток (активный режим)', value: 'не более 300 мА' },
                            { label: 'Ток в режиме «измерение»', value: 'менее 10,15 мА' },
                            { label: 'Ток в режиме «сон»', value: 'менее 1,4 мА' },
                            { label: 'Взрывозащита', value: '[Ex ib Gb] IIB X' },
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

                <div ref={componentsSectionRef} style={{ scrollMarginTop: '20px' }}>
                  <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>Составляющие</h2>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: '20px'
                  }}>
                    {componentsData.map((comp) => (
                      <button
                        key={comp.id}
                        onClick={() => setSelectedComponent(comp)}
                        style={{
                          textAlign: 'left',
                          backgroundColor: '#ffffff',
                          padding: '20px',
                          borderRadius: '12px',
                          border: '1px solid #bfdbfe',
                          cursor: 'pointer',
                          transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          e.currentTarget.style.borderColor = '#0284c7';
                          e.currentTarget.style.boxShadow = '0 8px 24px rgba(2, 132, 199, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.borderColor = '#bfdbfe';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div style={{
                          aspectRatio: '1 / 1',
                          width: '100%',
                          backgroundColor: '#eff6ff',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#64748b',
                          border: '1px solid #dbeafe',
                          boxSizing: 'border-box',
                          overflow: 'hidden'
                        }}>
                          {renderImage(comp.img, comp.title)}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                          <h3 style={{ color: '#0284c7', fontSize: '16px', margin: 0, fontWeight: 'bold' }}>{comp.id}</h3>
                          <p style={{ fontSize: '12px', color: '#475569', margin: 0, lineHeight: '1.4' }}>{comp.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 style={{ fontSize: '24px', color: '#0284c7', marginBottom: '15px' }}>{selectedComponent.title}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                  <div style={{
                    aspectRatio: '1 / 1',
                    width: '100%',
                    backgroundColor: '#eff6ff',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64748b',
                    border: '1px solid #cbd5e1',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                  }}>
                    {renderImage(selectedComponent.img, selectedComponent.title)}
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Описание</h4>
                    <p style={{ lineHeight: '1.6', color: '#475569' }}>{selectedComponent.fullDesc}</p>
                  </div>
                  <div style={{ backgroundColor: '#eff6ff', padding: '20px', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
                    <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Технические характеристики</h4>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <tbody>
                        {selectedComponent.chars.map((char, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
                            <td style={{ padding: '8px 0', color: '#64748b', fontSize: '14px', textAlign: 'left' }}>{char.label}</td>
                            <td style={{ padding: '8px 0', fontWeight: 'bold', fontSize: '14px', textAlign: 'right' }}>{char.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <button onClick={() => setSelectedComponent(null)} style={{ padding: '10px 20px', backgroundColor: '#0284c7', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
                  ← Назад к составляющим
                </button>
              </div>
            )}
          </>
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
