import type { ReactNode, HTMLAttributes } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = '', ...rest }: ContainerProps) => {
  return (
    <div className={`container-brand ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
