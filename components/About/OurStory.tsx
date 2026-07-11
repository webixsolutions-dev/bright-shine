'use client';

import { motion } from 'framer-motion';
import Container from '../common/Container';
import { slideInLeft, slideInRight } from '@/hooks/useScrollAnimation';

const OurStory = () => {
  return (
    <section className="relative section-pad overflow-hidden bg-navy section-dark">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="eyebrow">Our Story</span>
            <p className="text-[0.98rem] leading-[1.8] opacity-85 mt-4 max-w-[480px] normal-case">
              Bright Shine started with a simple belief: a car&rsquo;s finish deserves the same
              craftsmanship as the car itself.
            </p>
            <p className="text-[0.98rem] leading-[1.8] opacity-85 mt-4 max-w-[480px] normal-case">
              What began as a single detailing studio has grown into a two-city operation spanning
              Islamabad and Dubai, built on the same paint protection film, wrapping, and ceramic
              coating standards in both locations — so the experience never changes, no matter which
              studio you walk into.
            </p>
            <p className="text-[0.85rem] italic opacity-50 mt-4">
              More of the founding story can live here as the brand evolves.
            </p>
          </motion.div>

          <motion.div
            className="order-1 md:order-2 rounded overflow-hidden"
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/about-workshop-interior-1400x900.jpg"
              alt="Bright Shine workshop interior with a vehicle in bay"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default OurStory;
