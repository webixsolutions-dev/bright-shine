'use client';

import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { fadeUp } from '@/hooks/useScrollAnimation';

export interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      className="border border-gold/35 p-7 rounded transition-all duration-200 hover:border-bright-gold hover:bg-bright-gold/5"
      variants={fadeUp}
    >
      <div className="text-bright-gold mb-4">
        <Icon size={26} />
      </div>
      <h4 className="text-[1.05rem] mb-2.5 text-off-white font-display">{title}</h4>
      <p className="text-[0.9rem] leading-[1.6] opacity-75 normal-case">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
