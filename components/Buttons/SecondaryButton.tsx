'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { ReactNode, MouseEventHandler } from 'react';
import type { IconType } from 'react-icons';

const baseClasses =
  'inline-flex items-center justify-center gap-2 px-4 py-2.5 font-display text-[0.75rem] tracking-[0.08em] uppercase font-semibold rounded whitespace-nowrap transition-all duration-200 bg-transparent text-bright-gold border-[1.5px] border-gold section-light:text-maroon';

export interface SecondaryButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: IconType;
  className?: string;
}

const SecondaryButton = ({ children, to, href, onClick, icon: Icon, className = '' }: SecondaryButtonProps) => {
  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon size={14} />}
    </>
  );
  const classes = `${baseClasses} ${className}`;
  const motionProps = {
    whileHover: { y: -2, backgroundColor: 'rgba(212,185,117,0.1)' },
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
    <motion.button {...motionProps} onClick={onClick} className={classes}>
      {content}
    </motion.button>
  );
};

export default SecondaryButton;