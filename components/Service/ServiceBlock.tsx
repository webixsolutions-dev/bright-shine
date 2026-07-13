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
      className={`grid grid-cols-1 lg:grid-cols-2 min-h-[460px] overflow-hidden ${
        light ? 'bg-off-white text-navy' : 'bg-navy text-off-white'
      }`}
    >
      <motion.div
        className={`overflow-hidden ${
          reversed ? 'lg:order-2' : 'lg:order-1'
        }`}
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
          className="w-full h-full object-cover min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[300px]"
        />
      </motion.div>

      <motion.div
        className={`flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-11 md:py-14 ${
          reversed ? 'lg:order-1' : 'lg:order-2'
        }`}
        variants={reversed ? slideInLeft : slideInRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className={`font-display text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] tracking-[0.1em] ${
          light ? 'text-maroon' : 'text-bright-gold'
        }`}>
          {service.number}
        </span>
        <h3 className="text-[clamp(1.5rem,4.5vw,2.4rem)] mt-1 font-display leading-tight break-words">
          {service.name}
        </h3>
        <span className={`gold-underline ${light ? 'bg-maroon' : ''}`} />
        <p className="text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] leading-[1.6] sm:leading-[1.7] md:leading-[1.8] opacity-80 my-1.5 mb-4 sm:mb-5 md:mb-6 max-w-[480px] normal-case break-words">
          {service.description}
        </p>
        <Link
          href="/contact"
          className={`inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 font-display text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] tracking-[0.08em] uppercase font-semibold rounded w-fit transition-all duration-200 border-[1.5px] whitespace-nowrap ${
            light ? 'text-maroon border-maroon hover:bg-maroon/10' : 'text-bright-gold border-gold hover:bg-bright-gold/10'
          }`}
        >
          <FaCalendarAlt size={12} className="sm:w-[14px] sm:h-[14px] flex-shrink-0" /> 
          <span className="hidden xs:inline">Book This Service</span>
          <span className="xs:hidden">Book</span>
        </Link>
      </motion.div>
    </section>
  );
};

export default ServiceBlock;