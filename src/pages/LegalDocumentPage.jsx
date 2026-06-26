import Breadcrumbs from '../components/Breadcrumbs';
import { companyRequisites } from '../data/companyRequisites';
import { getLegalDocument } from '../data/legalDocumentsData';
import { colors, fonts } from '../theme';

export default function LegalDocumentPage({ setActivePage, pageId }) {
  const doc = getLegalDocument(pageId);

  if (!doc) {
    return null;
  }

  return (
    <div style={{ backgroundColor: colors.white, fontFamily: fonts.base, padding: '40px 0 80px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 40px' }}>
        <Breadcrumbs
          setActivePage={setActivePage}
          items={[
            { label: 'ГЛАВНАЯ', page: 'main' },
            { label: doc.title.toUpperCase() },
          ]}
        />

        <h1 style={{ margin: '0 0 16px 0', fontSize: '28px', fontWeight: '800', color: colors.text }}>
          {doc.title}
        </h1>
        {doc.updatedAt && (
          <p style={{ margin: '0 0 8px 0', color: colors.textLight, fontSize: '13px' }}>
            Дата размещения: {doc.updatedAt}
          </p>
        )}
        <p style={{ margin: '0 0 32px 0', color: colors.textMuted, fontSize: '15px', lineHeight: '1.65' }}>
          {doc.intro}
        </p>

        <div style={{
          backgroundColor: colors.white,
          border: `1px solid ${colors.border}`,
          borderRadius: '12px',
          padding: '28px 32px',
        }}>
          {doc.sections.map((section) => (
            <section key={section.title} style={{ marginBottom: '28px' }}>
              <h2 style={{
                margin: '0 0 12px 0',
                fontSize: '18px',
                fontWeight: '700',
                color: colors.darkBlue,
              }}>
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  style={{
                    margin: '0 0 12px 0',
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: colors.textMuted,
                    textAlign: 'justify',
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <p style={{
            margin: 0,
            paddingTop: '8px',
            fontSize: '14px',
            color: colors.textLight,
            borderTop: `1px solid ${colors.border}`,
          }}>
            {companyRequisites.shortName} · на рынке с {companyRequisites.foundedYear} года
          </p>
        </div>
      </div>
    </div>
  );
}
