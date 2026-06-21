import iso9001Pdf from '../assets/ИСО 9001 (1).pdf';
import gassertPdf from '../assets/СЕРТИФИКАТ ГАЗСЕРТ  (1).pdf';
import certSiAkPdf from '../assets/Сертификат СИ КУТ300-АК.pdf';
import certSiPkPdf from '../assets/Сертификат СИ КУТ300-ПК.pdf';
import certExplosionAkPdf from '../assets/Сертификат взрывозащита КУТ300-АК.pdf';
import trTsPkPdf from '../assets/ТР ТС 004 и 020 на КУТ300-ПК.pdf';
import trTsAkPdf from '../assets/ТР ТС 020 на КУТ300-АК.pdf';
import trTsBatteryPdf from '../assets/ТР ТС на аккумуляторный блок.pdf';

export const companyCertificates = [
  {
    id: 'iso-9001',
    title: 'ИСО 9001',
    href: iso9001Pdf,
    fileName: 'ИСО 9001 (1).pdf',
  },
  {
    id: 'gassert',
    title: 'Сертификат Газсерт',
    href: gassertPdf,
    fileName: 'СЕРТИФИКАТ ГАЗСЕРТ  (1).pdf',
  },
  {
    id: 'si-ak',
    title: 'Сертификат СИ КУТ300-АК',
    href: certSiAkPdf,
    fileName: 'Сертификат СИ КУТ300-АК.pdf',
  },
  {
    id: 'si-pk',
    title: 'Сертификат СИ КУТ300-ПК',
    href: certSiPkPdf,
    fileName: 'Сертификат СИ КУТ300-ПК.pdf',
  },
  {
    id: 'explosion-ak',
    title: 'Сертификат взрывозащита КУТ300-АК',
    href: certExplosionAkPdf,
    fileName: 'Сертификат взрывозащита КУТ300-АК.pdf',
  },
  {
    id: 'tr-ts-pk',
    title: 'ТР ТС 004 и 020 на КУТ300-ПК',
    href: trTsPkPdf,
    fileName: 'ТР ТС 004 и 020 на КУТ300-ПК.pdf',
  },
  {
    id: 'tr-ts-ak',
    title: 'ТР ТС 020 на КУТ300-АК',
    href: trTsAkPdf,
    fileName: 'ТР ТС 020 на КУТ300-АК.pdf',
  },
  {
    id: 'tr-ts-battery',
    title: 'ТР ТС на аккумуляторный блок',
    href: trTsBatteryPdf,
    fileName: 'ТР ТС на аккумуляторный блок.pdf',
  },
];
