import React, { useState } from 'react';
import BrandEmblem from './BrandEmblem';
import { colors, fonts } from '../theme';

function ServiceCard({ service, index, onClick, isSmall = false }) {
  const [hovered, setHovered] = useState(false);
  const cardNumber = String(index + 1).padStart(2, '0');
  const emblemSize = isSmall ? 96 : 132;

  return (
    <div
      onClick={() => onClick(service.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: isSmall ? '300px' : '420px',
        borderRadius: '24px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 40px rgba(74, 67, 56, 0.22)' : '0 10px 20px rgba(74, 67, 56, 0.1)',
        background: hovered
          ? `linear-gradient(145deg, ${colors.darkBlueDeep} 0%, ${colors.darkBlue} 55%, #6b5f4a 100%)`
          : `linear-gradient(145deg, ${colors.darkBlue} 0%, ${colors.darkBlueDeep} 100%)`,
        fontFamily: fonts.base,
      }}
    >
      <div style={{
        position: 'absolute',
        top: '-40px',
        right: '-40px',
        width: '140px',
        height: '140px',
        borderRadius: '50%',
        border: `1px solid rgba(201, 162, 39, ${hovered ? 0.35 : 0.18})`,
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: isSmall ? 'translate(-50%, calc(-50% - 22px))' : 'translate(-50%, calc(-50% - 32px))',
        pointerEvents: 'none',
        zIndex: 1,
      }}>
        <BrandEmblem size={emblemSize} hovered={hovered} />
      </div>

      <div style={{
        position: 'absolute',
        top: isSmall ? '15px' : '25px',
        left: isSmall ? '15px' : '25px',
        fontSize: isSmall ? '24px' : '32px',
        fontWeight: '900',
        color: '#ffffff',
        opacity: 0.8,
        zIndex: 2,
      }}>
        {cardNumber}
      </div>

      <div style={{
        position: 'absolute',
        bottom: isSmall ? '15px' : '20px',
        left: isSmall ? '15px' : '20px',
        right: isSmall ? '15px' : '20px',
        padding: isSmall ? '15px' : '20px',
        background: hovered
          ? 'linear-gradient(135deg, rgba(201, 162, 39, 0.85) 0%, rgba(92, 83, 68, 0.9) 100%)'
          : 'rgba(92, 83, 68, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '18px',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        transition: 'all 0.4s ease',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: isSmall ? '6px' : '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      }}>
        <h3 style={{
          fontSize: isSmall ? '14px' : '16px',
          fontWeight: '700',
          color: '#ffffff',
          margin: 0,
          lineHeight: '1.4',
        }}>
          {service?.shortTitle || service?.title}
        </h3>

        <p style={{
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.85)',
          margin: 0,
          lineHeight: '1.4',
          display: '-webkit-box',
          WebkitLineClamp: isSmall ? 1 : 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {service?.description}
        </p>

        <div style={{
          marginTop: '4px',
          backgroundColor: hovered ? colors.white : colors.lightBlue,
          color: hovered ? colors.darkBlue : colors.white,
          padding: isSmall ? '6px 14px' : '8px 20px',
          borderRadius: '10px',
          fontSize: isSmall ? '11px' : '13px',
          fontWeight: '700',
          textAlign: 'center',
          transition: 'all 0.3s ease',
          width: 'fit-content',
        }}>
          Перейти
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
