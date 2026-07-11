'use client';

import { motion, type Variants } from 'framer-motion';
import { LOCATIONS } from '@/data/locations';
import { slideInLeft, slideInRight } from '@/hooks/useScrollAnimation';

const variants: Variants[] = [slideInLeft, slideInRight];

const TwoCitiesPanel = () => {
  return (
    <section className="relative bg-navy pt-[clamp(60px,8vw,120px)]">
      <div className="text-center mb-10 px-5">
        <h2 className="text-[clamp(2rem,5vw,3rem)] text-bright-gold font-display">Two Cities, One Team</h2>
        <span className="gold-underline mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[420px]">
        {LOCATIONS.map((loc, i) => (
          <motion.div
            key={loc.id}
            className="relative bg-cover bg-center flex items-end p-10 min-h-[320px] sm:min-h-0"
            style={{
              backgroundImage: `linear-gradient(rgba(11,20,36,0.55), rgba(11,20,36,0.85)), url(${loc.image})`,
            }}
            variants={variants[i]}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h3 className="text-bright-gold text-[2rem] mb-2.5 font-display">{loc.city}</h3>
              <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="block text-off-white font-medium mb-2.5">
                {loc.phone}
              </a>
              <p className="text-[0.9rem] opacity-85 normal-case max-w-[280px]">{loc.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TwoCitiesPanel;
