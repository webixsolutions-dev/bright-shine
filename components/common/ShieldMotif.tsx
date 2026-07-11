import type { CSSProperties } from 'react';

export interface ShieldMotifProps {
  variant?: 'gold' | 'navy';
  position?: 'right' | 'left' | 'center';
  size?: number;
  top?: string;
  opacity?: number;
  flip?: boolean;
}

const ShieldMotif = ({
  variant = 'gold',
  position = 'right',
  size = 620,
  top = '-10%',
  opacity = 1,
  flip = false,
}: ShieldMotifProps) => {
  const src = variant === 'gold' ? '/motifs/shield-motif-gold.svg' : '/motifs/shield-motif-navy.svg';
  const sideStyle: CSSProperties =
    position === 'right'
      ? { right: '-8%' }
      : position === 'left'
        ? { left: '-8%' }
        : { left: '50%', transform: 'translateX(-50%)' };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      style={{
        position: 'absolute',
        top,
        width: size,
        maxWidth: '80vw',
        opacity,
        pointerEvents: 'none',
        transform: flip ? 'scaleX(-1)' : undefined,
        zIndex: 0,
        ...sideStyle,
      }}
    />
  );
};

export default ShieldMotif;
