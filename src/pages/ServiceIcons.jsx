import React from 'react';

export function CertificationIcon({ size = 56, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <rect x="10" y="8" width="26" height="32" rx="3"
        stroke={color} strokeWidth="2"/>
      <path d="M16 18h14M16 24h14M16 30h8"
        stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="38" cy="40" r="7"
        stroke={color} strokeWidth="2"/>
      <path d="M35 40l2 2 4-4"
        stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M33 47l-2 4 7-2 7 2-2-4"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function MaintenanceIcon({ size = 56, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <rect x="8" y="8" width="18" height="14" rx="2"
        stroke={color} strokeWidth="2"/>
      <circle cx="17" cy="15" r="2.5"
        stroke={color} strokeWidth="1.5"/>
      <path d="M8 26 Q17 20 26 26"
        stroke={color} strokeWidth="2" fill="none"/>
      <circle cx="38" cy="34" r="10"
        stroke={color} strokeWidth="2"/>
      <path d="M38 29v5l3 3"
        stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M44 22l3-5m-5 4l4-4"
        stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function ConstructionIcon({ size = 56, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <circle cx="36" cy="22" r="11"
        stroke={color} strokeWidth="2"/>
      <path d="M29 16l-4-4-3 3 4 4"
        stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 36l-8 8"
        stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M20 36l7-7"
        stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <rect x="9" y="40" width="8" height="4" rx="1"
        transform="rotate(-45 9 40)" stroke={color} strokeWidth="1.5" fill="none"/>
      <path d="M32 18h8M36 14v8"
        stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

export function AutomationIcon({ size = 56, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <rect x="6" y="10" width="32" height="26" rx="2"
        stroke={color} strokeWidth="2"/>
      <path d="M10 30V20l6 6 6-8 6 6 4-4"
        stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M38 18l7-4v20l-7-4"
        stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 40h16"
        stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <path d="M22 36v4"
        stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function TelemetryIcon({ size = 56, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <path d="M28 16 Q18 16 16 24 Q10 24 10 31 Q10 38 17 38h24 Q48 38 48 31 Q48 24 42 24 Q40 16 28 16Z"
        stroke={color} strokeWidth="2" fill="none"/>
      <rect x="20" y="42" width="5" height="5" rx="1"
        stroke={color} strokeWidth="1.5"/>
      <rect x="31" y="42" width="5" height="5" rx="1"
        stroke={color} strokeWidth="1.5"/>
      <path d="M25 44h6"
        stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M22 30h3l2-5 3 9 2-6 2 4h3"
        stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function CryptoIcon({ size = 56, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none">
      <rect x="8" y="8" width="12" height="12" rx="2"
        stroke={color} strokeWidth="2"/>
      <rect x="36" y="8" width="12" height="12" rx="2"
        stroke={color} strokeWidth="2"/>
      <rect x="8" y="36" width="12" height="12" rx="2"
        stroke={color} strokeWidth="2"/>
      <rect x="36" y="36" width="12" height="12" rx="2"
        stroke={color} strokeWidth="2"/>
      <path d="M20 14h16M14 20v16M42 20v16M20 42h16"
        stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="28" cy="28" r="5"
        stroke={color} strokeWidth="1.8"/>
    </svg>
  );
}

// export function getIcon(iconKey, size = 56, color = 'currentColor') {
//   const map = {
//     certification: <CertificationIcon size={size} color={color} />,
//     maintenance:   <MaintenanceIcon   size={size} color={color} />,
//     construction:  <ConstructionIcon  size={size} color={color} />,
//     automation:    <AutomationIcon    size={size} color={color} />,
//     telemetry:     <TelemetryIcon     size={size} color={color} />,
//     crypto:        <CryptoIcon        size={size} color={color} />,
//   };
//   return map[iconKey] ?? null;
// }