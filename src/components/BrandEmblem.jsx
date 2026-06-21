import { colors } from '../theme';

export function BrandEmblem({ size = 220, hovered = false }) {
  const ringInset = Math.round(size * 0.082);
  const svgSize = Math.round(size * 0.545);
  const goldStrong = hovered ? 0.5 : 0.35;
  const goldMid = hovered ? 0.32 : 0.2;
  const goldSoft = hovered ? 0.1 : 0.06;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        border: `2px solid rgba(201, 162, 39, ${goldStrong})`,
        transition: 'border-color 0.3s',
      }} />
      <div style={{
        position: 'absolute',
        inset: ringInset,
        borderRadius: '50%',
        border: `1px solid rgba(201, 162, 39, ${goldMid})`,
        background: `rgba(201, 162, 39, ${goldSoft})`,
        transition: 'border-color 0.3s, background 0.3s',
      }} />
      <svg width={svgSize} height={svgSize} viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="54" stroke={`rgba(201, 162, 39, ${hovered ? 0.55 : 0.45})`} strokeWidth="2" />
        <circle cx="60" cy="60" r="38" stroke={`rgba(201, 162, 39, ${hovered ? 0.35 : 0.25})`} strokeWidth="1.5" />
        <circle cx="60" cy="60" r="28" fill={`rgba(201, 162, 39, ${hovered ? 0.2 : 0.14})`} />
        <path
          d="M 22 58
             C 28 58, 32 34, 42 34
             C 50 34, 54 66, 60 68
             C 66 70, 72 46, 80 46
             C 88 46, 94 58, 98 58"
          stroke={colors.lightBlue}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default BrandEmblem;
