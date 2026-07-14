'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '../common/Container';
import { LOCATIONS } from '@/data/locations';
import { staggerContainer, fadeUp } from '@/hooks/useScrollAnimation';

const ContactLocations = () => {
  // Uses the mapEmbedUrl already defined per-location in @/data/locations.ts
  // (no more hardcoded per-city URLs here — update locations.ts instead)
  const getMapEmbedUrl = (loc: any) => {
    return loc.mapEmbedUrl || loc.mapsLink;
  };

  return (
    <section className="relative section-pad overflow-hidden bg-off-white text-navy section-light">
      <Container>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {LOCATIONS.map((loc) => (
            <motion.div className="flex flex-col" key={loc.id} variants={fadeUp}>
              <h3 className="text-[1rem] sm:text-[1.1rem] md:text-[1.15rem] mb-2.5 flex items-center gap-2 font-display">
                {loc.label}
              </h3>

              <a
                href={loc.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-maroon font-medium mb-4 text-[0.9rem] sm:text-[1rem] hover:opacity-80 transition-opacity w-fit"
              >
                <FaWhatsapp className="flex-shrink-0" />
                <span className="break-words">{loc.phone}</span>
              </a>

              <div className="w-full rounded-lg overflow-hidden shadow-lg bg-gray-100">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={getMapEmbedUrl(loc)}
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    title={`Google Maps - ${loc.city}`}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-3">
                <a
                  href={loc.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.7rem] sm:text-[0.75rem] md:text-[0.8rem] text-maroon hover:underline transition-all font-medium flex items-center gap-1"
                >
                  Open in Google Maps
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <span className="text-[0.6rem] sm:text-[0.65rem] opacity-40">
                  {loc.address || `${loc.city}, ${loc.id === 'islamabad' ? 'Pakistan' : 'UAE'}`}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactLocations;
