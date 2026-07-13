'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '../common/Container';
import { LOCATIONS } from '@/data/locations';
import { staggerContainer, fadeUp } from '@/hooks/useScrollAnimation';

const ContactLocations = () => {
  // Get embed URLs from environment variables or use default Google Maps embed
  const getMapEmbedUrl = (city: string) => {
    // You can store these in your .env file or directly here
    const mapUrls = {
      islamabad: process.env.NEXT_PUBLIC_ISLAMABAD_MAP_EMBED || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.8842664486344!2d73.0474503!3d33.6844225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd6c8e3a5e1%3A0x8b7e5b2c8e5a5b2!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
      dubai: process.env.NEXT_PUBLIC_DUBAI_MAP_EMBED || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.0398436979!2d54.9470006!3d25.0752425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s'
    };
    return mapUrls[city as keyof typeof mapUrls] || loc.mapsLink;
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
                <span className="text-2xl">{loc.id === 'islamabad' ? '🇵🇰' : '🇦🇪'}</span>
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
              
              {/* Map Iframe */}
              <div className="w-full rounded-lg overflow-hidden shadow-lg bg-gray-100">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src={loc.mapEmbedUrl || getMapEmbedUrl(loc.id)}
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