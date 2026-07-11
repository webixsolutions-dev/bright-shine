'use client';

import { motion } from 'framer-motion';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { fadeUp } from '@/hooks/useScrollAnimation';
import type { Location } from '@/data/locations';

export interface LocationCardProps {
  location: Location;
  variant?: 'strip' | 'panel';
}

const LocationCard = ({ location, variant = 'strip' }: LocationCardProps) => {
  if (variant === 'strip') {
    return (
      <motion.div className="text-center" variants={fadeUp}>
        <h3 className="text-[1.4rem] mb-2 font-display">{location.city}</h3>
        <a
          href={`tel:${location.phone.replace(/\s/g, '')}`}
          className="block font-body font-medium text-maroon mb-1.5"
        >
          {location.phone}
        </a>
        <a
          href={location.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[0.8rem] uppercase tracking-[0.05em] opacity-70 hover:opacity-100 hover:text-maroon"
        >
          <FaMapMarkedAlt size={14} /> Get Directions
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div className="relative overflow-hidden rounded min-h-[340px] flex items-end" variants={fadeUp}>
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={location.image} alt={`${location.city} studio`} loading="lazy" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(11,20,36,0.92), rgba(11,20,36,0.25))' }}
        />
      </div>
      <div className="relative z-[1] p-7">
        <h3 className="text-bright-gold text-[1.8rem] mb-2 font-display">{location.city}</h3>
        <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="block text-off-white font-medium mb-2">
          {location.phone}
        </a>
        <p className="text-[0.9rem] opacity-85 normal-case">{location.description}</p>
      </div>
    </motion.div>
  );
};

export default LocationCard;
