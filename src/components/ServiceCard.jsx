import React, { useState } from 'react';
import { colors } from '../theme';

import imgMaintenance from '../assets/service1.jpg';
import imgConstruction from '../assets/service2.jpg';
import imgAutomation from '../assets/service3.jpg';

const cardBackgrounds = {
  0: imgMaintenance,   
  1: imgConstruction,  
  2: imgAutomation     
};

// Добавили проп isSmall
function ServiceCard({ service, index, onClick, isSmall = false }) {
  const [hovered, setHovered] = useState(false);
  const cardNumber = String(index + 1).padStart(2, '0');

  return (
    <div
      onClick={() => onClick(service.id)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: isSmall ? '300px' : '420px', // Если маленькая — 300px, если обычная — 420px
        borderRadius: '24px', 
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        transform: hovered ? 'translateY(-10px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 40px rgba(0,0,0,0.3)' : '0 10px 20px rgba(0,0,0,0.1)',
        backgroundColor: colors.darkBlue
      }}
    >
      {/* Фоновое изображение */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${cardBackgrounds[index % 3]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'transform 0.6s ease',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
        zIndex: 1
      }} />

      {/* Затемнение верха карточки */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '40%',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 100%)',
        zIndex: 2
      }} />

      {/* Номер карточки */}
      <div style={{
        position: 'absolute',
        top: isSmall ? '15px' : '25px',
        left: isSmall ? '15px' : '25px',
        fontSize: isSmall ? '24px' : '32px',
        fontWeight: '900',
        color: '#ffffff',
        opacity: 0.8,
        zIndex: 3
      }}>
        {cardNumber}
      </div>

      {/* Парящая стеклянная плашка */}
      <div style={{
        position: 'absolute',
        bottom: isSmall ? '15px' : '20px',    
        left: isSmall ? '15px' : '20px',      
        right: isSmall ? '15px' : '20px',     
        padding: isSmall ? '15px' : '20px',
        background: hovered 
          ? 'linear-gradient(135deg, rgba(123, 170, 247, 0.85) 0%, rgba(26, 58, 107, 0.9) 100%)' 
          : 'rgba(30, 41, 59, 0.65)', 
        backdropFilter: 'blur(16px)',   
        WebkitBackdropFilter: 'blur(16px)',
        borderRadius: '18px',           
        border: '1px solid rgba(255, 255, 255, 0.15)',
        transition: 'all 0.4s ease',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: isSmall ? '6px' : '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)' 
      }}>
        <h3 style={{
          fontSize: isSmall ? '14px' : '16px',
          fontWeight: '700',
          color: '#ffffff',
          margin: 0,
          lineHeight: '1.4'
        }}>
          {service?.shortTitle || service?.title}
        </h3>
        
        {/* Описание прячем или сокращаем в маленькой карточке для чистоты */}
        <p style={{
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.85)',
          margin: 0,
          lineHeight: '1.4',
          display: '-webkit-box',
          WebkitLineClamp: isSmall ? '1' : '2',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {service?.description}
        </p>

        {/* Кнопка "Перейти" */}
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
          width: 'fit-content'
        }}>
          Перейти
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;