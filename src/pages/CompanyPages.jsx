import Breadcrumbs from '../components/Breadcrumbs';
import CertificatesCarousel, { CertificatesGrid } from '../components/CertificatesCarousel';
import { companyAboutContent } from '../data/companyAboutContent';
import { companyCertificates } from '../data/companyCertificatesData';
import { companyRequisites } from '../data/companyRequisites';
import { colors, fonts } from '../theme';

const sectionHeadingStyle = {
  margin: '0 0 16px 0',
  fontSize: '13px',
  fontWeight: '700',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: colors.textFaint,
};

const sectionTitleStyle = {
  margin: '0 0 20px 0',
  fontSize: '22px',
  fontWeight: '700',
  color: colors.text,
};

export function About({ setActivePage }) {
  const { lead, fullText, directions } = companyAboutContent;

  return (
    <div style={{ backgroundColor: colors.white, fontFamily: fonts.base, padding: '40px 0 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <Breadcrumbs
          setActivePage={setActivePage}
          items={[
            { label: 'ГЛАВНАЯ', page: 'main' },
            { label: 'О КОМПАНИИ' },
          ]}
        />

        <header style={{
          margin: '8px 0 36px 0',
          paddingBottom: '28px',
          borderBottom: `2px solid ${colors.darkBlue}`,
        }}>
          <h1 style={{
            margin: '0 0 12px 0',
            fontSize: '28px',
            fontWeight: '800',
            color: colors.text,
            letterSpacing: '-0.02em',
          }}>
            О компании
          </h1>
          <p style={{
            margin: 0,
            fontSize: '15px',
            lineHeight: '1.5',
            color: colors.textMuted,
          }}>
            {companyRequisites.fullName}
          </p>
          <p style={{ margin: '4px 0 0 0', fontSize: '15px', color: colors.textMuted }}>
            {companyRequisites.shortName}
          </p>
        </header>

        <section style={{ marginBottom: '40px' }}>
          <p style={sectionHeadingStyle}>Общие сведения</p>
          <div style={{
            padding: '28px 32px',
            backgroundColor: colors.white,
            border: `1px solid ${colors.border}`,
            borderLeft: `4px solid ${colors.primary}`,
          }}>
            <p style={{
              margin: '0 0 16px 0',
              fontSize: '16px',
              lineHeight: '1.75',
              color: colors.text,
              textAlign: 'justify',
            }}>
              {lead}
            </p>
            <p style={{
              margin: 0,
              fontSize: '16px',
              lineHeight: '1.75',
              color: colors.textMuted,
              textAlign: 'justify',
            }}>
              {fullText}
            </p>
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={sectionTitleStyle}>Направления применения оборудования</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}>
            {directions.map(({ title, text }, index) => (
              <div
                key={title}
                style={{
                  backgroundColor: colors.white,
                  borderRadius: '12px',
                  padding: '24px',
                  border: `1px solid ${colors.border}`,
                  borderLeft: `4px solid ${colors.primary}`,
                  boxShadow: '0 2px 8px rgba(74, 67, 56, 0.04)',
                }}
              >
                <div style={{
                  fontSize: '32px',
                  fontWeight: '800',
                  color: 'rgba(201, 162, 39, 0.35)',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '17px', fontWeight: '700', color: colors.darkBlue }}>
                  {title}
                </h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.65', color: colors.textMuted }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div style={{
          backgroundColor: colors.white,
          borderRadius: '12px',
          padding: '28px 32px',
          border: `1px solid ${colors.border}`,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
        }}>
          <div>
            <p style={{ margin: '0 0 8px 0', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', color: colors.textFaint }}>
              Специализация
            </p>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', color: colors.textMuted }}>
              {companyAboutContent.specialization}
            </p>
          </div>
          <div>
            <p style={{ margin: '0 0 8px 0', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', color: colors.textFaint }}>
              Продукция
            </p>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', color: colors.textMuted }}>
              Контроллеры телемеханики и программно-аппаратные комплексы собственной разработки
            </p>
          </div>
          <div>
            <p style={{ margin: '0 0 8px 0', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', color: colors.textFaint }}>
              Сертификация
            </p>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.6', color: colors.textMuted }}>
              Полный комплект разрешительных документов и сертификатов
            </p>
          </div>
        </div>

        <CertificatesCarousel
          items={companyCertificates}
          onViewAll={() => setActivePage('certificates')}
        />
      </div>
    </div>
  );
}

export function Certificates({ setActivePage }) {
  return (
    <div style={{ backgroundColor: colors.white, fontFamily: fonts.base, padding: '40px 0 80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <Breadcrumbs
          setActivePage={setActivePage}
          items={[
            { label: 'ГЛАВНАЯ', page: 'main' },
            { label: 'КОМПАНИЯ', page: 'about' },
            { label: 'СЕРТИФИКАТЫ И ЛИЦЕНЗИИ' },
          ]}
        />
        <h1 style={{ margin: '0 0 12px 0', fontSize: '28px', fontWeight: '800', color: colors.text }}>
          Сертификаты и лицензии
        </h1>
        <p style={{ margin: '0 0 36px 0', color: colors.textMuted, fontSize: '15px', lineHeight: '1.6' }}>
          Разрешительная документация и сертификаты {companyRequisites.shortName}.
        </p>
        <CertificatesGrid items={companyCertificates} />
      </div>
    </div>
  );
}
