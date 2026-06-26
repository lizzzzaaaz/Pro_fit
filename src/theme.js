export const colors = {
  darkBlue: '#5c5344',
  darkBlueDeep: '#4a4338',
  primary: '#c9a227',
  primaryDark: '#9a7516',
  lightBlue: '#dbb840',
  primaryLight: '#e8d492',
  lightBlueBg: '#f5f5f5',
  white: '#ffffff',
  pageBg: '#ffffff',
  border: '#e5e7eb',
  borderLight: '#f3f4f6',
  borderNeutral: '#e5e7eb',
  text: '#3d3830',
  textMuted: '#6b6358',
  textLight: '#8a8275',
  textFaint: '#a89f92',
};

export const fonts = {
  base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

/** Кнопка «назад» / «к списку» — явный цвет текста, без синего браузера по умолчанию */
export const backButtonStyle = {
  padding: '12px 24px',
  backgroundColor: colors.lightBlueBg,
  border: `1px solid ${colors.border}`,
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: '600',
  fontFamily: fonts.base,
  fontSize: '14px',
  color: colors.text,
  transition: 'background-color 0.2s, border-color 0.2s',
};
