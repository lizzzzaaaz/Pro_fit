import React from 'react';
import { colors, fonts } from '../theme';

export default function PowerModules({ setActivePage }) {
  return (
    <div style={{ backgroundColor: colors.pageBg, padding: '40px 0 80px', fontFamily: fonts.base }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', color: colors.text }}>
        <div style={{ fontSize: '13px', color: colors.textFaint, marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button onClick={() => setActivePage('main')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: colors.lightBlue, font: 'inherit' }}>ГЛАВНАЯ</button>
          <span>/</span>
          <button onClick={() => setActivePage('products-catalog')} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: colors.lightBlue, font: 'inherit' }}>ПРОДУКЦИЯ</button>
          <span>/</span>
          <span style={{ color: colors.text, fontWeight: '600' }}>ИСТОЧНИКИ И МОДУЛИ</span>
        </div>
        <h1 style={{ marginBottom: '30px', fontSize: '28px', color: colors.text }}>Источники и модули</h1>
        <p style={{ color: colors.textMuted, padding: '24px', backgroundColor: colors.white, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
          В данном разделе скоро появятся блоки питания и сопутствующие модули.
        </p>
      </div>
    </div>
  );
}
