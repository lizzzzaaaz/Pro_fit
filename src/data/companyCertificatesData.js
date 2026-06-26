import iso9001Pdf from '../assets/ИСО 9001 (1).pdf';
import isoControllersPdf from '../assets/Сертификат ИСО на производство контроллеров.pdf';
import qualityPolicyPdf from '../assets/Политика в области качества ООО НТК Профи-Т.pdf';
import gassertPdf from '../assets/СЕРТИФИКАТ ГАЗСЕРТ  (1).pdf';
import certSiAkPdf from '../assets/Сертификат СИ КУТ300-АК.pdf';
import certSiPkPdf from '../assets/Сертификат СИ КУТ300-ПК.pdf';
import certExplosionAkPdf from '../assets/Сертификат взрывозащита КУТ300-АК.pdf';
import st1Pdf from '../assets/Сертификат СТ-1.pdf';
import trTsPkPdf from '../assets/ТР ТС 004 и 020 на КУТ300-ПК.pdf';
import trTsAkPdf from '../assets/ТР ТС 020 на КУТ300-АК.pdf';
import trTsBatteryPdf from '../assets/ТР ТС на аккумуляторный блок.pdf';
import trTsBatteryAltPdf from '../assets/ТР ТС на аккумуляторный блок (1).pdf';
import dsExtractPdf from '../assets/Выписка по ДС № ЕАЭС N RU Д-RU.РА07.В.71440_25 от 2025-09-08.pdf';
import eaesCertPdf from '../assets/ЕАЭС KG 417_043.RU.02.14428.pdf';
import bizIp9CertPdf from '../assets/Сертификат соответствия на БИЗ-ИП9 (1).pdf';

export const companyCertificates = [
  {
    id: 'iso-9001',
    title: 'ИСО 9001',
    href: iso9001Pdf,
    fileName: 'ИСО 9001 (1).pdf',
  },
  {
    id: 'iso-controllers',
    title: 'Сертификат ИСО на производство контроллеров',
    href: isoControllersPdf,
    fileName: 'Сертификат ИСО на производство контроллеров.pdf',
  },
  {
    id: 'quality-policy',
    title: 'Политика в области качества ООО «НТК Профи-Т»',
    href: qualityPolicyPdf,
    fileName: 'Политика в области качества ООО НТК Профи-Т.pdf',
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
    id: 'st-1',
    title: 'Сертификат о происхождении товара форма СТ-1',
    href: st1Pdf,
    fileName: 'Сертификат СТ-1.pdf',
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
  {
    id: 'tr-ts-battery-alt',
    title: 'Декларация ТР ТС на аккумуляторный блок',
    href: trTsBatteryAltPdf,
    fileName: 'ТР ТС на аккумуляторный блок (1).pdf',
  },
  {
    id: 'eaes-kg-417',
    title: 'Сертификат соответствия ЕАЭС KG 417/043.RU.02.14428',
    href: eaesCertPdf,
    fileName: 'ЕАЭС KG 417_043.RU.02.14428.pdf',
  },
  {
    id: 'ds-extract-71440',
    title: 'Выписка по ДС № ЕАЭС N RU Д-RU.РА07.В.71440/25 от 08.09.2025',
    href: dsExtractPdf,
    fileName: 'Выписка по ДС № ЕАЭС N RU Д-RU.РА07.В.71440_25 от 2025-09-08.pdf',
  },
  {
    id: 'biz-ip9-cert',
    title: 'Сертификат соответствия на БИЗ-ИП9',
    href: bizIp9CertPdf,
    fileName: 'Сертификат соответствия на БИЗ-ИП9 (1).pdf',
  },
];
