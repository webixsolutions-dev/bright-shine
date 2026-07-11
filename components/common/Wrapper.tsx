import type { ReactNode, CSSProperties } from 'react';

export interface WrapperProps {
  children: ReactNode;
  dark?: boolean;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

const Wrapper = ({ children, dark = true, className = '', id, style }: WrapperProps) => {
  return (
    <section
      id={id}
      style={style}
      className={`relative section-pad overflow-hidden ${
        dark ? 'bg-navy section-dark' : 'bg-off-white text-navy section-light'
      } ${className}`}
    >
      {children}
    </section>
  );
};

export default Wrapper;
