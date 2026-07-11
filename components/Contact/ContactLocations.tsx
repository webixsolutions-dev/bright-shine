'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '../common/Container';
import { LOCATIONS } from '@/data/locations';
import { staggerContainer, fadeUp } from '@/hooks/useScrollAnimation';

const ContactLocations = () => {
  return (
    <section className="relative section-pad overflow-hidden bg-off-white text-navy section-light">
      <Container>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-10"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {LOCATIONS.map((loc) => (
            <motion.div className="" key={loc.id} variants={fadeUp}>
              <h3 className="text-[1.15rem] mb-2.5 flex items-center gap-2 font-display">{loc.label}</h3>
              <a
                href={loc.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-maroon font-medium mb-4"
              >
                <FaWhatsapp /> {loc.phone}
              </a>
              <a href={loc.mapsLink} target="_blank" rel="noopener noreferrer" className="block rounded-md overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={loc.map} alt={`Map placeholder for ${loc.city}`} loading="lazy" className="w-full h-auto" />
              </a>
              <span className="block text-center text-[0.8rem] opacity-60 mt-2.5">Exact address / map embed</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactLocations;
