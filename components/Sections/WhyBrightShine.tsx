'use client';

import { motion } from 'framer-motion';
import { FaGlobe, FaClipboardCheck, FaCameraRetro, FaWhatsapp } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import Link from 'next/link';
import Container from '../common/Container';
import FeatureCard from '../Cards/FeatureCard';
import ShieldMotif from '../common/ShieldMotif';
import { staggerContainer } from '@/hooks/useScrollAnimation';

interface WhyItem {
  icon: IconType;
  title: string;
  description: string;
  link: string; // ✅ Added link property
}

const ITEMS: WhyItem[] = [
  {
    icon: FaGlobe,
    title: 'One Standard, Two Cities',
    description: 'Same premium quality, process, and materials in Islamabad and Dubai.',
    link: '/contact', 
  },
  {
    icon: FaClipboardCheck,
    title: 'A Meticulous Multi-Step Process',
    description: 'Every detail perfected through proven steps and expert hands.',
    link: '/service', 
  },
  {
    icon: FaCameraRetro,
    title: 'Real Transformations, Not Stock Photography',
    description: 'Authentic work, real cars, real results.',
    link: '/service', 
  },
  {
    icon: FaWhatsapp,
    title: 'Direct WhatsApp Access to the Studio',
    description: 'Talk to the team instantly and get things moving.',
    link: '/contact', 
  },
];

const WhyBrightShine = () => {
  return (
    <section className="relative section-pad overflow-hidden bg-navy section-dark">
      <ShieldMotif position="left" size={560} top="20%" opacity={0.5} />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_2fr] gap-12 items-start relative z-[1]">
          <div>
            <h2 className="text-[clamp(2.2rem,6vw,3.4rem)] text-off-white font-display">
              Why
              <br />
              Bright
              <br />
              Shine
            </h2>
            <span className="gold-underline" />
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {ITEMS.map((item) => (
              <Link key={item.title} href={item.link} className="block cursor-pointer">
                <FeatureCard {...item} />
              </Link>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhyBrightShine;