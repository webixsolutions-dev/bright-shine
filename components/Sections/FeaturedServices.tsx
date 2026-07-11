'use client';

import { motion } from 'framer-motion';
import Container from '../common/Container';
import ServiceCard from '../Cards/ServiceCard';
import { SERVICES, FEATURED_SERVICE_IDS } from '@/data/services';
import { staggerContainer } from '@/hooks/useScrollAnimation';

const FeaturedServices = () => {
  const featured = SERVICES.filter((s) => FEATURED_SERVICE_IDS.includes(s.id));

  return (
    <section className="relative section-pad overflow-hidden bg-off-white text-navy section-light">
      <Container>
        <div className="mb-11">
          <span className="eyebrow">Featured</span>
          <h2 className="text-[clamp(2rem,5vw,3.2rem)] mt-1 font-display">Services</h2>
          <span className="gold-underline" />
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {featured.map((service, i) => (
            <div key={service.id} className={i === 1 ? 'lg:mt-8' : i === 2 ? 'lg:-mt-5' : ''}>
              <ServiceCard service={service} />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedServices;
