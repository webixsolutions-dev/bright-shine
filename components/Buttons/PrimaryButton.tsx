'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode, MouseEventHandler } from 'react';
import type { IconType } from 'react-icons';

const baseClasses =
  'inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display text-[0.85rem] tracking-[0.08em] uppercase font-semibold rounded whitespace-nowrap transition-all duration-200 bg-gradient-to-br from-bright-gold to-gold text-navy';

export interface PrimaryButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: IconType;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const PrimaryButton = ({ children, to, href, onClick, icon: Icon, type = 'button', className = '' }: PrimaryButtonProps) => {
  const content = (
    <>
      {Icon && <Icon size={18} />}
      <span>{children}</span>
    </>
  );

  const classes = `${baseClasses} ${className}`;
  const motionProps = {
    whileHover: { y: -2, boxShadow: '0 10px 24px rgba(212,185,117,0.35)' },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.2 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <Link href={to} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }
  if (href) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-block' }}>
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      </motion.div>
    );
  }
  return (
    <motion.button {...motionProps} type={type} onClick={onClick} className={classes}>
      {content}
    </motion.button>
  );
};

export default PrimaryButton;
