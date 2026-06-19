import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { colors, fonts } from '../theme';

export default function PowerModules({ setActivePage }) {
  return (
    <div style={{ backgroundColor: colors.pageBg, padding: '40px 0 80px', fontFamily: fonts.base }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', color: colors.text }}>
        <Breadcrumbs
          setActivePage={setActivePage}
          items={[
            { label: 'ГЛАВНАЯ', page: 'main' },
            { label: 'ПРОДУКЦИЯ', page: 'products-catalog' },
            { label: 'ИСТОЧНИКИ И МОДУЛИ' },
          ]}
        />
        <h1 style={{ marginBottom: '30px', fontSize: '28px', color: colors.text }}>Источники и модули</h1>
        <p style={{ color: colors.textMuted, padding: '24px', backgroundColor: colors.white, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
          В данном разделе скоро появятся блоки питания и сопутствующие модули.
        </p>
      </div>
    </div>
  );
}
