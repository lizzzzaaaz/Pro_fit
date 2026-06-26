/** Источники питания */

import lifepo4Img from '../assets/Аккамуляторный блок.png';
import ltoImg from '../assets/Блок батарейного питания.png';
import trTsPdf from '../assets/ТР ТС на аккумуляторный блок (1).pdf';

const trTsDocument = {
  title: 'Декларация ТР ТС на аккумуляторный блок',
  href: trTsPdf,
  fileName: 'ТР ТС на аккумуляторный блок (1).pdf',
};

export const powerSupplies = [
  {
    page: 'power-supply-lifepo4-80',
    cardTitle: 'АККУМУЛЯТОРНЫЙ БЛОК LiFePo4 80 А·ч',
    shortDesc: 'Аккумуляторный блок для питания автономных контроллеров серии КУТ300-АК.',
    subtitle: 'Назначение и область применения',
    img: lifepo4Img,
    description: [
      'Изделие предназначено для питания автономных контроллеров серии КУТ300-АК, изготавливаемых по ТУ 26.51.44-001-20705122-2019.',
      'Выпускается по рабочей документации ПМФР.426479.010.',
    ],
    sections: [
      {
        title: 'Устройство и работа',
        paragraphs: [
          'На лицевой поверхности имеется один разъём для подключения автономных контроллеров серии КУТ300-АК. Данный же разъём служит для подключения зарядного устройства с целью разряда и заряда.',
        ],
      },
    ],
    specs: [
      { label: 'Номинальное напряжение, В', value: '3,3' },
      { label: 'Максимальное напряжение, В', value: '3,65' },
      { label: 'Номинальная ёмкость, А·ч', value: '80' },
      { label: 'Максимальный ток заряда, А', value: '30' },
      { label: 'Максимальный ток разряда, А', value: '30' },
      { label: 'Диапазон рабочих температур, °C', value: '−40 … +65' },
      { label: 'Габариты, мм, не более', value: '181 × 132 × 37' },
      { label: 'Масса, кг, не более', value: '2' },
      { label: 'Срок эксплуатации', value: '10 лет' },
    ],
    documents: [trTsDocument],
  },
  {
    page: 'power-supply-lto-22',
    cardTitle: 'АККУМУЛЯТОРНЫЙ БЛОК LTO 22 А·ч',
    shortDesc: 'Аккумуляторный блок LTO для автономного питания контроллеров телеметрии.',
    subtitle: 'Назначение и область применения',
    img: ltoImg,
    description: [
      'Аккумуляторный блок на основе литий-титанатной (LTO) технологии предназначен для автономного питания контроллеров серии КУТ300-АК на объектах без постоянного электроснабжения.',
    ],
    specs: [
      { label: 'Номинальная ёмкость, А·ч', value: '22' },
      { label: 'Тип аккумулятора', value: 'LTO (Li4Ti5O12)' },
    ],
    documents: [trTsDocument],
  },
];

export function getPowerSupply(page) {
  return powerSupplies.find((item) => item.page === page);
}

export const powerSupplyPages = powerSupplies.map((item) => item.page);
