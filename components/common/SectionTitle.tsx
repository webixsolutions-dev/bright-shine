'use client';

import { motion } from 'framer-motion';

export type SectionTitleSize = 'md' | 'lg' | 'xl';

const SIZES: Record<SectionTitleSize, string> = {
  md: 'text-[clamp(1.8rem,4vw,2.6rem)]',
  lg: 'text-[clamp(2.4rem,6vw,4.2rem)]',
  xl: 'text-[clamp(2.8rem,8vw,5.6rem)]',
};

export interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  size?: SectionTitleSize;
  light?: boolean;
}

const SectionTitle = ({ eyebrow, title, subtitle, align = 'left', size = 'lg', light = false }: SectionTitleProps) => {
  const isCenter = align === 'center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`${isCenter ? 'text-center max-w-[720px] mx-auto' : 'text-left max-w-[620px]'}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`${SIZES[size]} mt-1.5 font-display ${light ? 'text-off-white' : ''}`}>{title}</h2>
      <span className="gold-underline" />
      {subtitle && (
        <p className="text-[1.05rem] leading-[1.7] opacity-85 mt-1 normal-case">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
