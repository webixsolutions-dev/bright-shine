'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { fadeUp } from '@/hooks/useScrollAnimation';
import type { Service } from '@/data/services';

export interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-near-white text-navy overflow-hidden rounded transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)] group"
      variants={fadeUp}
    >
      <div className="h-[220px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </div>
      <div className="p-6">
        <h3 className="text-[1.3rem] mb-2.5 font-display">{service.shortName}</h3>
        <p className="text-[0.92rem] leading-[1.6] opacity-75 mb-4 normal-case">{service.cardCopy}</p>
        <Link
          href={`/service#${service.id}`}
          className="inline-flex items-center gap-1.5 font-display text-[0.8rem] tracking-[0.08em] uppercase text-maroon font-semibold"
        >
          Learn More <FaChevronRight size={12} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
