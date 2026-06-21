import { companyRequisites } from '../data/companyRequisites';
import { colors, fonts } from '../theme';

const rowStyle = {
  margin: '0 0 8px 0',
  fontSize: '14px',
  lineHeight: '1.65',
};

function RequisiteRow({ label, value, last = false, light = false }) {
  if (!value) return null;
  return (
    <p style={{ ...rowStyle, marginBottom: last ? 0 : rowStyle.marginBottom }}>
      {label ? (
        <span style={{ color: light ? colors.lightBlue : colors.text, fontWeight: '600' }}>{label}: </span>
      ) : null}
      {value}
    </p>
  );
}

export function RequisitesBlock({ variant = 'page' }) {
  const { bank, director } = companyRequisites;
  const isFooter = variant === 'footer';

  const labelStyle = {
    fontWeight: '700',
    color: isFooter ? colors.lightBlue : colors.primary,
    marginBottom: isFooter ? '12px' : '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: '11px',
  };

  const textStyle = {
    color: isFooter ? 'rgba(255,255,255,0.85)' : colors.textMuted,
    margin: 0,
    fontSize: '14px',
    lineHeight: '1.65',
  };

  const Section = ({ title, children }) => (
    <div style={{
      backgroundColor: isFooter ? 'transparent' : colors.lightBlueBg,
      borderRadius: isFooter ? 0 : '10px',
      padding: isFooter ? 0 : '18px 20px',
      border: isFooter ? 'none' : `1px solid ${colors.border}`,
      minWidth: 0,
    }}>
      {title && <p style={{ ...labelStyle, marginBottom: '10px' }}>{title}</p>}
      <div style={textStyle}>{children}</div>
    </div>
  );

  if (isFooter) {
    return (
      <div style={{ fontFamily: fonts.base }}>
        <p style={labelStyle}>Реквизиты</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px 32px',
          color: 'rgba(255,255,255,0.85)',
          fontSize: '14px',
          lineHeight: '1.65',
        }}>
          <div>
            <p style={{ ...rowStyle, marginBottom: '8px' }}>{companyRequisites.shortName}</p>
            <p style={{ ...rowStyle, marginBottom: 0 }}>
              ИНН {companyRequisites.inn} · КПП {companyRequisites.kpp} · ОГРН {companyRequisites.ogrn}
            </p>
          </div>
          <div>
            <RequisiteRow label="Получатель" value={bank.recipient} light />
            <RequisiteRow label="Банк" value={bank.name} light />
            <RequisiteRow label="р/с" value={bank.account} light />
            <RequisiteRow label="к/с" value={bank.corrAccount} light />
            <RequisiteRow label="БИК" value={bank.bik} light last />
          </div>
          <div>
            <RequisiteRow label="ОКПО" value={companyRequisites.okpo} light />
            <RequisiteRow label="ОКВЭД" value={companyRequisites.okvedMain} light />
            <RequisiteRow
              label="Доп. ОКВЭД"
              value={companyRequisites.okvedAdditional}
              light
              last
            />
          </div>
          <div>
            <RequisiteRow
              label={director.title}
              value={`${director.name}, ${director.basis}`}
              light
              last
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: colors.white,
      borderRadius: '12px',
      padding: '24px',
      border: `1px solid ${colors.border}`,
      boxShadow: '0 2px 8px rgba(74, 67, 56, 0.04)',
    }}>
      <h2 style={{ margin: '0 0 20px 0', fontSize: '20px', fontWeight: '700', color: colors.text }}>
        Реквизиты
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '16px',
      }}>
        <Section title="Организация">
          <RequisiteRow value={companyRequisites.fullName} />
          <RequisiteRow value={companyRequisites.shortName} />
          <RequisiteRow label="ИНН" value={companyRequisites.inn} />
          <RequisiteRow label="КПП" value={companyRequisites.kpp} />
          <RequisiteRow label="ОГРН" value={companyRequisites.ogrn} />
          <RequisiteRow label="ОКПО" value={companyRequisites.okpo} last />
        </Section>

        <Section title="Банковские реквизиты">
          <RequisiteRow label="Получатель" value={bank.recipient} />
          <RequisiteRow label="Банк" value={bank.name} />
          <RequisiteRow label="р/с" value={bank.account} />
          <RequisiteRow label="к/с" value={bank.corrAccount} />
          <RequisiteRow label="БИК" value={bank.bik} last />
        </Section>

        <Section title="ОКВЭД">
          <RequisiteRow label="Основной" value={companyRequisites.okvedMain} />
          <RequisiteRow label="Дополнительный" value={companyRequisites.okvedAdditional} last />
        </Section>

        <Section title="Руководство">
          <RequisiteRow value={`${director.title}: ${director.name}`} />
          <RequisiteRow value={director.basis} last />
        </Section>
      </div>
    </div>
  );
}

export default RequisitesBlock;
