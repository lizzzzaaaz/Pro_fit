import React from 'react';
import ServiceCard from '../components/ServiceCard';
import Breadcrumbs from '../components/Breadcrumbs';
import { services } from './servicesData';
import { colors, fonts } from '../theme';

function Services({ onServiceClick, setActivePage }) {
  const topRow = services.slice(0, 3);
  const bottomRow = services.slice(3);

  return (
    <div className="page-shell" style={{ backgroundColor: colors.pageBg, padding: '40px 0 80px 0', fontFamily: fonts.base }}>
      <div className="page-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        <Breadcrumbs
          setActivePage={setActivePage}
          items={[
            { label: 'ГЛАВНАЯ', page: 'main' },
            { label: 'УСЛУГИ' },
          ]}
        />

        <hr style={{ border: 'none', borderTop: `1px solid ${colors.border}`, marginBottom: '40px' }} />

        <h2 style={{
          fontSize: '32px',
          fontWeight: '800',
          color: colors.text,
          marginBottom: '40px',
          letterSpacing: '-0.5px',
        }}
        >
          Наши услуги
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div className="grid-3" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
          }}>
            {topRow.map((service, idx) => (
              <ServiceCard
                key={service.id}
                index={idx}
                service={service}
                onClick={onServiceClick}
              />
            ))}
          </div>

          <div className="grid-services-bottom grid-2" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            width: 'calc(66.666% - 15px)',
            maxWidth: '780px',
            margin: '0 auto',
          }}>
            {bottomRow.map((service, idx) => (
              <ServiceCard
                key={service.id}
                index={idx + 3}
                service={service}
                onClick={onServiceClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
