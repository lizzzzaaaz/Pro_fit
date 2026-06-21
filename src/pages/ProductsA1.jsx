import React, { useState, useRef } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { colors, fonts } from '../theme';
import mainImg from '../assets/kut300-pk.png'; 
import p11Img from '../assets/kut300-p11.png';
import p12Img from '../assets/kut300-p12.png';
import p33Img from '../assets/kut300-p33.png';
import p34Img from '../assets/kut300-p34.png';
import p51Img from '../assets/kut300-p51.png';
import p52Img from '../assets/kut300-p52.png';
import b03Img from '../assets/kut300-b03.png';
import m80Img from '../assets/m80.png';
import certSiPdf from '../assets/Сертификат СИ КУТ300-ПК.pdf';
import trTsPdf from '../assets/ТР ТС 004 и 020 на КУТ300-ПК.pdf';
import DocumentList from '../components/DocumentList';
import ZoomableImage from '../components/ZoomableImage';

const productDocuments = [
  {
    title: 'Декларация ТР ТС 004 и 020 на КУТ300-ПК',
    size: '320.3 KB',
    href: trTsPdf,
    fileName: 'ТР ТС 004 и 020 на КУТ300-ПК.pdf',
  },
  {
    title: 'Свидетельство об утверждении типа средств измерений на КУТ300-ПК',
    size: '315.4 KB',
    href: certSiPdf,
    fileName: 'Сертификат СИ КУТ300-ПК.pdf',
  },
];

export default function ProductsA1({ setActivePage }) {
  const [activeTab, setActiveTab] = useState('main');
  const [moduleTab, setModuleTab] = useState('main');
  const [selectedComponent, setSelectedComponent] = useState(null);
  const modulesSectionRef = useRef(null);

  const scrollToModules = () => {
    setActiveTab('modules');
    setSelectedComponent(null);
    setTimeout(() => {
      modulesSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  const renderImage = (imgSrc, altText, zoomable = true) => {
    const imgStyle = { width: '100%', height: '100%', objectFit: 'contain' };
    const isValidString = typeof imgSrc === 'string'
      && (imgSrc.startsWith('/') || imgSrc.startsWith('data:image') || imgSrc.startsWith('blob:'));
    const isValidImport = typeof imgSrc === 'object' && imgSrc !== null;

    if (isValidString || isValidImport) {
      if (zoomable) {
        return <ZoomableImage src={imgSrc} alt={altText} />;
      }
      return <img src={imgSrc} alt={altText} style={imgStyle} draggable={false} />;
    }
    return <span style={{ fontSize: '10px', color: '#64748b', textAlign: 'center' }}>{imgSrc}</span>;
  };

  // Полные данные составляющих модулей со всеми характеристиками из презентации
  const componentsData = [
    {
      id: 'М80',
      title: 'Устройство конфигурирования М80',
      desc: 'Настройка, диагностика и тестирование контроллеров телемеханики.',
      fullDesc: 'М80 имеет настраиваемые параметры контрастности дисплея, перехода в спящий низкопотребляющий режим и повтора срабатывания кнопки при удержании. Устройство конфигурирования М80 предназначено для настройки, диагностики и тестирования контроллеров телемеханики производства ООО «НТК Профи-Т». М80 универсально и может использоваться со всем спектром выпускаемого оборудования. М80 обеспечивает отображение текущих данных, полученных контроллером, осуществление настройки параметров контроллера, выполнение диагностики работы программы и аппаратных узлов контроллера. Питание М80 осуществляется от контроллера, к которому оно подключено. М80 имеет 8 кнопок: 4-позиционный джойстик, кнопки подтверждения, отмены и 2 функциональных клавиши. М80 оснащён низкопотребляющим OLED-дисплеем. Подключение к контроллеру осуществляется кабелем с шестиконтактным разъёмом.',
      img: m80Img,
      chars: [
        { label: 'Напряжение питания', value: 'от 3,0 до 5,5 В' },
        { label: 'Ток потребления (макс.)', value: 'не более 0,1 А' },
        { label: 'Габаритные размеры', value: 'не более 150 × 90 × 25 мм' },
        { label: 'Масса устройства', value: 'не более 200 г' },
        { label: 'Степень защиты оболочки', value: 'IP40 (по ГОСТ 14254)' },
        { label: 'Температурный диапазон', value: 'от минус 40 до плюс 50 °С' }
      ]
    },
    {
      id: 'КУТ300-П11',
      title: 'Модуль КУТ300-П11 (Ведомый)',
      desc: 'Контроль состояний дискретных датчиков и подсчёт импульсов.',
      fullDesc: 'Предназначен для контроля состояний дискретных датчиков и/или подсчёта импульсов. Входы модуля могут настраиваться на работу в режиме «сухой контакт» или «потенциальный вход». Оснащён энергонезависимой памятью для сохранения накопленных значений при отключении питания.',
      img: p11Img,
      chars: [
        { label: 'Напряжение питания', value: 'от 9 до 18 В' },
        { label: 'Межмодульные соединение', value: 'шина RS-485 (RJ-45 + клеммы)' },
        { label: 'Количество каналов ТС/ТИИ', value: '8 «Сухой контакт»/«Потенциальный вход»' },
        { label: 'Напряжение срабатывания', value: 'от 9 до 27 В' },
        { label: 'Абсолютная погрешность', value: '1 импульс' },
        { label: 'Температурный диапазон', value: 'от минус 40 до плюс 55 °С' }
      ]
    },
    {
      id: 'КУТ300-П12',
      title: 'Модуль КУТ300-П12 (Ведомый)',
      desc: 'Измерение физических величин (напряжения и тока) по 8 независимым каналам.',
      fullDesc: 'Предназначен для независимого измерения физических величин напряжения и тока по 8 доступным каналам ТИТ. Настройка каждого канала производится индивидуально под конкретные технологические задачи.',
      img: p12Img,
      chars: [
        { label: 'Напряжение питания', value: '12 ± 1,2 В' },
        { label: 'Межмодульные соединение', value: 'шина RS-485 (разъем RJ-45)' },
        { label: 'Количество каналов ТИТ', value: '4 / 8' },
        { label: 'Диапазон измерения напряжения', value: 'от 0 до 10 В' },
        { label: 'Диапазон измерения тока', value: '0-5 мА, 0-20 мА' },
        { label: 'Приведенная погрешность', value: '0,5 %' },
        { label: 'Температурный диапазон', value: 'от минус 40 до плюс 55 °С' }
      ]
    },
    {
      id: 'КУТ300-П33',
      title: 'Модуль КУТ300-П33 (Ведомый)',
      desc: 'Подача управляющих сигналов на исполнительные устройства через реле.',
      fullDesc: 'Модуль предназначен для подачи управляющего сигнала подключенным исполнительным устройствам путём замыкания/размыкания контактов реле. Нормальное состояние контактов реле – разомкнуто. Предназначен для выдачи команд и управляющих сигналов на подключенные внешние исполнительные устройства путем замыкания или размыкания встроенных контактов реле. Нормальное состояние контактов исполнительного реле — разомкнутое.',
      img: p33Img,
      chars: [
        { label: 'Напряжение питания', value: '12 ± 1,2 В' },
        { label: 'Межмодульные соединение', value: 'шина RS-485 (разъем RJ-45)' },
        { label: 'Количество каналов ТУ', value: '4' },
        { label: 'Коммутируемое AC напряжение', value: 'до 280 В' },
        { label: 'Коммутируемое DC напряжение', value: 'до 400 В' },
        { label: 'Максимальный коммутируемый ток', value: 'до 0,7 А' },
        { label: 'Температурный диапазон', value: 'от минус 40 до плюс 55 °С' }
      ]
    },
    {
      id: 'КУТ300-П34',
      title: 'Модуль КУТ300-П34 (Ведомый)',
      desc: 'Управление крановыми узлами с электроприводом и пневмогидравликой.',
      fullDesc: 'Модуль телеуправления КУТ300-П34 предназначен для реализации возможности управления крановыми узлами с электрическим приводом, со встроенной электроавтоматикой, а также пневмогидравлическим, при наличии клапанов активации баллонов, так и при их отсутствии.',
      img: p34Img,
      chars: [
        { label: 'Напряжение питания', value: 'от 24 до 30 В' },
        { label: 'Ток потребления', value: 'от 0,02 до 3 А' },
        { label: 'Протокол/Интерфейс', value: 'Modbus RTU (по шине RS-485)' },
        { label: 'Скорость обмена данными', value: 'от 1200 до 115200 бит/с' }
      ]
    },
    {
      id: 'КУТ300-П51',
      title: 'Модуль КУТ300-П51 (Модуль связи)',
      desc: 'Связь по физической проводной линии (V.23) или радиоканалу.',
      fullDesc: 'Разработан для организации выделенного надежного канала передачи данных с диспетчерским пунктом по физической 2-х или 4-х проводной линии в промышленном стандарте V.23, либо с помощью подключения внешней радиостанции.',
      img: p51Img,
      chars: [
        { label: 'Напряжение питания', value: '12 ± 1,2 В' },
        { label: 'Межмодульные соединение', value: 'шина RS-485' },
        { label: 'Стандарт обмена данными', value: 'V.23' },
        { label: 'Физическая скорость обмена', value: '1200 бит/с' },
        { label: 'Температурный диапазон', value: 'от минус 40 до плюс 55 °С' }
      ]
    },
    {
      id: 'КУТ300-П52',
      title: 'Модуль КУТ300-П52 (Модуль связи)',
      desc: 'Сопряжение устройств телеметрии с сетями Ethernet.',
      fullDesc: 'Модуль связи КУТ300-П52 предназначен для сопряжения устройств телеметрии КУТ300 с каналами связи Ethernet, работающими по технологиям 10BASE-T и 100BASE-TX.',
      img: p52Img,
      chars: [
        { label: 'Напряжение питания', value: 'от 9 до 18 В' },
        { label: 'Ток потребления', value: 'меньше 0,1 А' },
        { label: 'Протокол / Интерфейс', value: 'Modbus RTU (по шине RS-485)' },
        { label: 'Поддерживаемые технологии', value: '10BASE-T, 100BASE-TX' },
        { label: 'Скорость обмена данными', value: 'от 1200 до 115200 бит/с' }
      ]
    },
    {
      id: 'КУТ300-Б03',
      title: 'Блок питания КУТ300-Б03',
      desc: 'Питание системы, заряд/мониторинг АКБ и телеметрия состояния.',
      fullDesc: 'Обеспечивает электропитание всей системы телеметрии. Обладает встроенным контроллером заряда-разряда внешней аккумуляторной батареи (12В, 2.3 А*ч) и цепями ТС для мгновенной фиксации аварийных сигналов об отсутствии сети питания или критическом разряде АКБ. Транслирует параметры тока, напряжения и сигналы ТС по RS-485.',
      img: b03Img,
      chars: [
        { label: 'Входное переменное напряжение', value: 'от 100 до 250 В (50 Гц)' },
        { label: 'Выходное постоянное напряжение', value: 'от 11 до 14 В' },
        { label: 'Максимальный ток нагрузки', value: '1 А' },
        { label: 'Интерфейс для мониторинга', value: 'шина RS-485' },
        { label: 'Поддержка резервного АКБ', value: 'Есть (автоматический заряд/разряд)' }
      ]
    }
  ];

  const openModule = (comp) => {
    setSelectedComponent(comp);
    setModuleTab('main');
  };

  const tabButtonStyle = (isActive) => ({
    padding: '12px 20px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    borderBottom: isActive ? `2px solid ${colors.primary}` : 'none',
    fontWeight: isActive ? 'bold' : 'normal',
    marginBottom: '-2px',
    color: isActive ? colors.darkBlue : colors.textMuted,
    fontFamily: fonts.base,
  });

  return (
    <div style={{ padding: '40px 30px 80px 30px', maxWidth: '1200px', margin: '0 auto', color: colors.text, fontFamily: fonts.base, backgroundColor: colors.pageBg }}>
      
      <Breadcrumbs
        setActivePage={setActivePage}
        items={[
          { label: 'ГЛАВНАЯ', page: 'main' },
          { label: 'ПРОДУКЦИЯ', page: 'products-catalog' },
          { label: 'ПРОМЫШЛЕННЫЕ КОНТРОЛЛЕРЫ', page: 'industrial-controllers' },
          { label: 'КУТ300-ПК' },
        ]}
      />

      {/* Кнопка назад */}
      <div style={{ marginBottom: '25px' }}>
        <button onClick={() => setActivePage('industrial-controllers')} style={{ padding: '12px 24px', backgroundColor: '#f5f5f5', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
          ← К списку контроллеров
        </button>
      </div>

      {/* Вкладки */}
      {!selectedComponent ? (
        <div style={{ display: 'flex', gap: '10px', borderBottom: `2px solid ${colors.borderNeutral}`, marginBottom: '30px' }}>
          <button onClick={() => setActiveTab('main')} style={tabButtonStyle(activeTab === 'main')}>Главное</button>
          <button onClick={() => setActiveTab('documents')} style={tabButtonStyle(activeTab === 'documents')}>Документация</button>
          <button onClick={scrollToModules} style={tabButtonStyle(activeTab === 'modules')}>Модули расширения</button>
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '10px', borderBottom: `2px solid ${colors.borderNeutral}`, marginBottom: '30px' }}>
          <button onClick={() => setModuleTab('main')} style={tabButtonStyle(moduleTab === 'main')}>Главная</button>
          <button onClick={() => setModuleTab('documents')} style={tabButtonStyle(moduleTab === 'documents')}>Документация</button>
        </div>
      )}

      {/* Контент */}
      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        
        {(activeTab === 'main' || activeTab === 'modules') && (
          <>
            {!selectedComponent ? (
              <div>
                {/* Карточка прибора КУТ300-ПК */}
                <div style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '24px', color: '#c9a227', marginBottom: '15px' }}>КУТ300-ПК</h2>
                  <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                    <div style={{
                      aspectRatio: '1 / 1',
                      width: '100%',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#64748b',
                      border: '1px solid #cbd5e1',
                      boxSizing: 'border-box',
                      overflow: 'hidden'
                    }}>
                      {renderImage(mainImg, 'КУТ300-ПК')}
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Описание</h4>
                      <p style={{ color: '#c9a227', fontWeight: '600', margin: '0 0 10px 0' }}>Контроллер телеметрический универсальный</p>
                      <p style={{ lineHeight: '1.6', color: '#475569', margin: 0 }}>
                        Модуль применяется для сбора, контроля, управления, хранения и передачи данных на диспетчерский пункт по каналам связи GSM.
                        Модуль используется в системах телемеханизации узлов учёта газа с подключением многофункциональных устройств (корректоров газа, вычислителей, газоанализаторов и т.д.).
                        Основными каналам обмена данными с диспетчерским пунктом являются GSM/CSD и GSM/GPRS.
                        Модуль имеет возможность резервирования оператора сотовой связи.
                      </p>
                    </div>
                    <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
                      <h4 style={{ marginBottom: '15px', fontWeight: 'bold' }}>Технические характеристики</h4>
                      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                          {[
                            { label: 'Напряжение питания', value: 'от 9 до 18 В' },
                            { label: 'Межмодульное соединение', value: 'RS-485 (RJ-45 + клеммы)' },
                            { label: 'Внешнее соединение', value: 'RS-232, RS-422 и RS-485' },
                            { label: 'Встроенные каналы ТС/ТИИ', value: '2 (сухой контакт)' },
                            { label: 'Температурный диапазон', value: 'от минус 40 до плюс 55 °С' },
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

                {/* СОСТАВЛЯЮЩИЕ (Сетка карточек модулей) */}
                <div ref={modulesSectionRef} style={{ scrollMarginTop: '20px' }}>
                  <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>Модули расширения</h2>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
                    gap: '20px' 
                  }}>
                    {componentsData.map((comp) => (
                      <button
                        key={comp.id}
                        type="button"
                        onClick={() => openModule(comp)}
                        style={{
                          textAlign: 'left',
                          backgroundColor: '#ffffff',
                          padding: '20px',
                          borderRadius: '12px',
                          border: '1px solid #e5e7eb',
                          cursor: 'pointer',
                          transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px',
                          font: 'inherit',
                          width: '100%',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          e.currentTarget.style.borderColor = '#c9a227';
                          e.currentTarget.style.boxShadow = '0 8px 24px rgba(201, 162, 39, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.borderColor = '#e5e7eb';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div style={{
                          aspectRatio: '1 / 1',
                          width: '100%',
                          backgroundColor: '#f5f5f5',
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#64748b',
                          border: '1px solid #f3f4f6',
                          boxSizing: 'border-box',
                          overflow: 'hidden',
                        }}>
                          {renderImage(comp.img, comp.title, false)}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                          <h3 style={{ color: '#c9a227', fontSize: '16px', margin: 0, fontWeight: 'bold' }}>{comp.id}</h3>
                          <p style={{ fontSize: '12px', color: '#475569', margin: 0, lineHeight: '1.4' }}>{comp.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : moduleTab === 'main' ? (
              /* ДЕТАЛЬНАЯ КАРТОЧКА ВЫБРАННОГО МОДУЛЯ */
              <div>
                <h2 style={{ fontSize: '24px', color: colors.primary, marginBottom: '15px' }}>{selectedComponent.title}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                  <div style={{ 
                    aspectRatio: '1 / 1',
                    width: '100%',
                    backgroundColor: '#f5f5f5', 
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
                    <h4 style={{ marginBottom: '10px', fontWeight: 'bold' }}>Описание модуля</h4>
                    <p style={{ lineHeight: '1.6', color: '#475569' }}>{selectedComponent.fullDesc}</p>
                  </div>
                  <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
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
                <button onClick={() => { setSelectedComponent(null); setModuleTab('main'); }} style={{ padding: '10px 20px', backgroundColor: colors.primary, color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
                  ← Назад к модулям
                </button>
              </div>
            ) : (
              <div>
                <h2 style={{ fontSize: '24px', color: colors.primary, margin: '0 0 8px 0' }}>
                  Документация — {selectedComponent.id}
                </h2>
                <p style={{ color: colors.textMuted, lineHeight: '1.6', margin: '0 0 24px 0' }}>
                  Сертификаты и декларации соответствия для КУТ300-ПК.
                </p>
                <DocumentList items={productDocuments} />
                <button onClick={() => { setSelectedComponent(null); setModuleTab('main'); }} style={{ marginTop: '24px', padding: '10px 20px', backgroundColor: colors.primary, color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>
                  ← Назад к модулям
                </button>
              </div>
            )}
          </>
        )}

        {activeTab === 'documents' && (
          <div>
            <h2 style={{ fontSize: '24px', color: colors.primary, margin: '0 0 8px 0' }}>Документация</h2>
            <p style={{ color: colors.textMuted, lineHeight: '1.6', margin: '0 0 24px 0' }}>
              Сертификаты и декларации соответствия для КУТ300-ПК.
            </p>
            <DocumentList items={productDocuments} />
          </div>
        )}
      </div>
    </div>
  );
}