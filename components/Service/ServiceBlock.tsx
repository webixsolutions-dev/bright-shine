'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';
import { slideInLeft, slideInRight } from '@/hooks/useScrollAnimation';
import type { Service } from '@/data/services';

export interface ServiceBlockProps {
  service: Service;
  reversed?: boolean;
  light?: boolean;
}

const ServiceBlock = ({ service, reversed, light }: ServiceBlockProps) => {
  return (
    <section
      id={service.id}
      className={`grid grid-cols-1 md:grid-cols-2 min-h-[460px] ${
        light ? 'bg-off-white text-navy' : 'bg-navy text-off-white'
      }`}
    >
      <motion.div
        className={`overflow-hidden ${reversed ? 'md:order-2' : 'md:order-1'}`}
        variants={reversed ? slideInRight : slideInLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover min-h-[260px] md:min-h-[300px]"
        />
      </motion.div>

      <motion.div
        className={`flex flex-col justify-center px-6 py-11 md:px-[clamp(24px,6vw,80px)] ${
          reversed ? 'md:order-1' : 'md:order-2'
        }`}
        variants={reversed ? slideInLeft : slideInRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className={`font-display text-[1.1rem] tracking-[0.1em] ${light ? 'text-maroon' : 'text-bright-gold'}`}>
          {service.number}
        </span>
        <h3 className="text-[clamp(1.8rem,4vw,2.4rem)] mt-1 font-display">{service.name}</h3>
        <span className={`gold-underline ${light ? 'bg-maroon' : ''}`} />
        <p className="text-[1rem] leading-[1.8] opacity-80 my-1.5 mb-6 max-w-[480px] normal-case">
          {service.description}
        </p>
        <Link
          href="/contact"
          className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display text-[0.85rem] tracking-[0.08em] uppercase font-semibold rounded w-fit transition-all duration-200 border-[1.5px] ${
            light ? 'text-maroon border-maroon hover:bg-maroon/10' : 'text-bright-gold border-gold hover:bg-bright-gold/10'
          }`}
        >
          <FaCalendarAlt size={14} /> Book This Service
        </Link>
      </motion.div>
    </section>
  );
};

export default ServiceBlock;
