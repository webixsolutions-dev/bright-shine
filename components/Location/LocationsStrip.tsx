'use client';

import { motion } from 'framer-motion';
import Container from '../common/Container';
import LocationCard from './LocationCard';
import { LOCATIONS } from '@/data/locations';
import { staggerContainer } from '@/hooks/useScrollAnimation';

const LocationsStrip = () => {
  return (
    <section className="relative section-pad overflow-hidden bg-off-white text-navy section-light">
      <Container>
        <motion.div
          className="flex items-center justify-center flex-wrap gap-16"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {LOCATIONS.map((loc, i) => (
            <div key={loc.id} className="flex items-center gap-16 sm:gap-8">
              <LocationCard location={loc} variant="strip" />
              {i === 0 && <span className="w-px h-[60px] bg-gold opacity-40 hidden sm:inline-block" />}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default LocationsStrip;
