/** Программное обеспечение — описание будет добавлено позже */

export const softwareProducts = [
  {
    page: 'software-opc-ua',
    cardTitle: 'OPC сервер UA',
    shortDesc: 'OPC UA сервер для интеграции с системами диспетчеризации.',
    description: [
      'Подробное описание продукта будет добавлено позже.',
    ],
  },
  {
    page: 'software-viking-3',
    cardTitle: 'Викинг 3',
    shortDesc: 'Программный комплекс «Викинг 3».',
    description: [
      'Подробное описание продукта будет добавлено позже.',
    ],
  },
];

export function getSoftwareProduct(page) {
  return softwareProducts.find((item) => item.page === page);
}

export const softwareProductPages = softwareProducts.map((item) => item.page);
