'use client';

import { motion } from 'framer-motion';
import Container from '../common/Container';
import { staggerContainer, fadeUp } from '@/hooks/useScrollAnimation';

const CLAIMS: string[] = [
  'Studio-Grade Standards',
  'Trusted Across Islamabad & Dubai',
  'Precision, Certified Installation',
];

const TrustStrip = () => {
  return (
    <div className="bg-near-white text-navy py-[22px]">
      <Container>
        <motion.div
          className="flex items-center justify-center flex-wrap gap-3.5 text-center"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {CLAIMS.map((claim, i) => (
            <motion.span
              key={claim}
              variants={fadeUp}
              className="flex items-center gap-6 font-display text-[0.85rem] tracking-[0.04em] uppercase"
            >
              {claim}
              {i < CLAIMS.length - 1 && (
                <span className="w-px h-[18px] bg-gold opacity-50 hidden sm:inline-block" />
              )}
            </motion.span>
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default TrustStrip;
