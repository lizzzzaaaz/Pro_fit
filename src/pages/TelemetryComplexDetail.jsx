import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import DocumentList from '../components/DocumentList';
import ZoomableImage from '../components/ZoomableImage';
import { colors, fonts, backButtonStyle } from '../theme';
import { getTelemetryComplex } from './telemetryComplexesData';

const defaultCatalog = {
  getItem: getTelemetryComplex,
  listPage: 'autonomous-telemetry',
  listBreadcrumb: 'КОМПЛЕКСЫ ТЕЛЕМЕТРИИ',
  backLabel: '← К списку комплексов',
};

const imageBoxStyle = {
  aspectRatio: '1 / 1',
  width: '100%',
  backgroundColor: colors.lightBlueBg,
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${colors.border}`,
  boxSizing: 'border-box',
  overflow: 'hidden',
  color: colors.textLight,
  fontSize: '13px',
  textAlign: 'center',
  padding: '16px',
};

function SpecsBlock({ specs, specsNote, fullWidth = false }) {
  return (
    <div style={{
      backgroundColor: colors.lightBlueBg,
      padding: '20px',
      borderRadius: '12px',
      border: `1px solid ${colors.border}`,
      minWidth: 0,
    }}>
      <h4 style={{ margin: '0 0 15px 0', fontWeight: '700', color: colors.text }}>
        Технические характеристики
      </h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
        <tbody>
          {specs.map((row, i) => (
            <tr key={i} style={{ borderBottom: `1px solid ${colors.borderNeutral}` }}>
              <td style={{
                width: fullWidth ? '42%' : '52%',
                padding: '8px 12px 8px 0',
                color: colors.textMuted,
                fontSize: '14px',
                textAlign: 'left',
                verticalAlign: 'top',
                wordBreak: 'break-word',
              }}
              >
                {row.label}
              </td>
              <td style={{
                width: fullWidth ? '58%' : '48%',
                padding: '8px 0',
                fontWeight: '600',
                fontSize: '14px',
                textAlign: fullWidth ? 'left' : 'right',
                verticalAlign: 'top',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
              }}
              >
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {specsNote && (
        <p style={{ margin: '12px 0 0 0', fontSize: '13px', color: colors.textLight }}>
          {specsNote}
        </p>
      )}
    </div>
  );
}

function ContentSection({ section }) {
  return (
    <div style={{ marginTop: '28px' }}>
      <h4 style={{ margin: '0 0 12px 0', fontWeight: '700', color: colors.text }}>{section.title}</h4>
      {section.paragraphs?.map((p, i) => (
        <p key={i} style={{ lineHeight: '1.65', color: colors.textMuted, margin: '0 0 12px 0' }}>{p}</p>
      ))}
      {section.items?.length > 0 && (
        <ul style={{ margin: 0, paddingLeft: '20px', color: colors.textMuted, lineHeight: '1.65' }}>
          {section.items.map((item, i) => (
            <li key={i} style={{ marginBottom: '6px' }}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function TelemetryComplexDetail({
  setActivePage,
  pageId,
  getItem = defaultCatalog.getItem,
  listPage = defaultCatalog.listPage,
  listBreadcrumb = defaultCatalog.listBreadcrumb,
  backLabel = defaultCatalog.backLabel,
}) {
  const item = getItem(pageId);
  const [activeTab, setActiveTab] = useState('main');

  if (!item) {
    return null;
  }

  const hasSpecs = item.specs?.length > 0;
  const specsFullWidth = hasSpecs && item.specs.length >= 10;
  const gridColumns = hasSpecs && !specsFullWidth ? '260px 1fr 1fr' : '260px 1fr';

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
    <div className="page-shell" style={{ backgroundColor: colors.pageBg, padding: '40px 0 80px', fontFamily: fonts.base }}>
      <div className="page-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', color: colors.text }}>
        <Breadcrumbs
          setActivePage={setActivePage}
          items={[
            { label: 'ГЛАВНАЯ', page: 'main' },
            { label: 'ПРОДУКЦИЯ', page: 'products-catalog' },
            { label: listBreadcrumb, page: listPage },
            { label: item.cardTitle.toUpperCase() },
          ]}
        />

        <div style={{ marginBottom: '25px' }}>
          <button
            type="button"
            onClick={() => setActivePage(listPage)}
            style={backButtonStyle}
          >
            {backLabel}
          </button>
        </div>

        <div style={{ display: 'flex', gap: '10px', borderBottom: `2px solid ${colors.borderNeutral}`, marginBottom: '30px' }}>
          <button type="button" onClick={() => setActiveTab('main')} style={tabButtonStyle(activeTab === 'main')}>
            Главная
          </button>
          <button type="button" onClick={() => setActiveTab('documents')} style={tabButtonStyle(activeTab === 'documents')}>
            Документация
          </button>
        </div>

        <div className="content-card" style={{
          backgroundColor: colors.white,
          padding: '30px',
          borderRadius: '16px',
          border: `1px solid ${colors.border}`,
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        }}>
          {activeTab === 'main' && (
            <div>
              <h1 style={{ fontSize: '24px', color: colors.primary, margin: '0 0 20px 0' }}>
                {item.cardTitle}
              </h1>

              <div className="grid-detail" style={{
                display: 'grid',
                gridTemplateColumns: gridColumns,
                gap: '30px',
                alignItems: 'start',
                marginBottom: '10px',
              }}>
                <div style={imageBoxStyle}>
                  {item.img ? (
                    <ZoomableImage src={item.img} alt={item.cardTitle} />
                  ) : (
                    <span>Фото будет добавлено</span>
                  )}
                </div>

                <div style={{ minWidth: 0 }}>
                  <h4 style={{ margin: '0 0 10px 0', fontWeight: '700', color: colors.text }}>Описание</h4>
                  {item.subtitle && (
                    <p style={{ color: colors.primary, fontWeight: '600', margin: '0 0 12px 0', lineHeight: '1.5' }}>
                      {item.subtitle}
                    </p>
                  )}
                  {item.description.map((paragraph, i) => (
                    <p
                      key={i}
                      style={{
                        lineHeight: '1.65',
                        color: colors.textMuted,
                        margin: i === 0 ? '0 0 12px 0' : '0 0 12px 0',
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {hasSpecs && !specsFullWidth && (
                  <SpecsBlock specs={item.specs} specsNote={item.specsNote} />
                )}
              </div>

              {hasSpecs && specsFullWidth && (
                <div style={{ marginTop: '24px' }}>
                  <SpecsBlock specs={item.specs} specsNote={item.specsNote} fullWidth />
                </div>
              )}

              {item.sections?.map((section, i) => (
                <ContentSection key={i} section={section} />
              ))}
            </div>
          )}

          {activeTab === 'documents' && (
            <div>
              <h2 style={{ fontSize: '24px', color: colors.primary, margin: '0 0 8px 0' }}>Документация</h2>
              <p style={{ color: colors.textMuted, lineHeight: '1.6', margin: '0 0 24px 0' }}>
                Документация для «{item.cardTitle}».
              </p>
              {item.documents?.length > 0 ? (
                <DocumentList items={item.documents} />
              ) : (
                <div style={{
                  padding: '16px 20px',
                  backgroundColor: colors.lightBlueBg,
                  borderRadius: '8px',
                  border: `1px dashed ${colors.border}`,
                  color: colors.textMuted,
                  fontSize: '14px',
                  lineHeight: '1.6',
                }}>
                  Файлы будут добавлены позже.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
