import st1Pdf from '../assets/Сертификат СТ-1.pdf';

export const st1Certificate = {
  title: 'Сертификат о происхождении товара форма СТ-1',
  href: st1Pdf,
  fileName: 'Сертификат СТ-1.pdf',
};

/** Модули КУТ300-ПК, указанные в СТ-1 */
export const st1PkModuleIds = new Set([
  'М80',
  'КУТ300-П11',
  'КУТ300-П12',
  'КУТ300-П33',
  'КУТ300-П34',
  'КУТ300-П51',
  'КУТ300-П52',
  'КУТ300-Б03',
]);

export function appendSt1(documents, { productId, componentId } = {}) {
  if (productId === 'КУТ300-АК' || productId === 'КУТ300-А42' || productId === 'КУТ300-ПК') {
    return [...documents, st1Certificate];
  }
  if (componentId === 'М80' || st1PkModuleIds.has(componentId)) {
    return [...documents, st1Certificate];
  }
  return documents;
}
