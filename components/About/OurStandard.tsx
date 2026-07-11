'use client';

import { motion } from 'framer-motion';
import { FaClipboardList, FaAward, FaWarehouse } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import Container from '../common/Container';
import { staggerContainer, fadeUp } from '@/hooks/useScrollAnimation';

interface StandardItem {
  icon: IconType;
  text: string;
}

const STANDARDS: StandardItem[] = [
  {
    icon: FaClipboardList,
    text: "Every install follows the same multi-step process, whether it's booked in Islamabad or Dubai.",
  },
  {
    icon: FaAward,
    text: 'Certified installation technique on every job — PPF, wrapping, and ceramic coating alike.',
  },
  {
    icon: FaWarehouse,
    text: 'A studio environment built for precision work, not a quick drive-through bay.',
  },
];

const OurStandard = () => {
  return (
    <section className="relative section-pad overflow-hidden bg-navy section-dark">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-[clamp(2rem,5vw,3rem)] text-off-white font-display">Our Standard</h2>
          <span className="gold-underline mx-auto" />
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-8"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {STANDARDS.map((item) => (
            <motion.div className="text-center px-5" key={item.text} variants={fadeUp}>
              <div className="text-bright-gold mb-4 flex justify-center">
                <item.icon size={30} />
              </div>
              <p className="text-[0.95rem] leading-[1.7] opacity-80 normal-case">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default OurStandard;
