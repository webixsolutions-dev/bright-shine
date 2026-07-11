'use client';

import { motion } from 'framer-motion';
import ShieldMotif from './ShieldMotif';
import Container from './Container';

export interface PageBannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bgImage: string;
  align?: 'left' | 'center';
}

const PageBanner = ({ eyebrow, title, subtitle, bgImage, align = 'left' }: PageBannerProps) => {
  return (
    <section
      className="relative min-h-[460px] md:min-h-[360px] flex items-center pt-[120px] md:pt-[100px] pb-[60px] bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(100deg, rgba(11,20,36,0.94) 25%, rgba(11,20,36,0.55) 65%, rgba(11,20,36,0.3) 100%), url(${bgImage})`,
      }}
    >
      <ShieldMotif position="right" size={520} top="10%" opacity={0.7} />
      <Container>
        <motion.div
          className={`relative z-[1] max-w-[640px] ${align === 'center' ? 'max-w-[760px] mx-auto text-center' : ''}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="text-[clamp(2.6rem,7vw,4.5rem)] text-yellow-400 mt-2 font-display">{title}</h1>
          <span className="gold-underline" />
          {subtitle && (
            <p className="text-[1.05rem] leading-[1.7] opacity-85 max-w-[480px] mt-1.5 normal-case">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default PageBanner;
