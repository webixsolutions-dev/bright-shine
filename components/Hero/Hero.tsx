'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import PrimaryButton from '../Buttons/PrimaryButton';
import SecondaryButton from '../Buttons/SecondaryButton';
import ShieldMotif from '../common/ShieldMotif';
import Container from '../common/Container';
import { CONTACT } from '@/lib/constants';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] sm:min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image - Mobile Responsive */}
      <picture className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <source
          media="(max-width: 640px)"
          srcSet="/images/home-hero-background-1920x1080.webp"
          type="image/webp"
        />
        <source
          media="(max-width: 640px)"
          srcSet="/images/home-hero-background-mobile.jpg"
        />
        {/* Tablet Image */}
        <source
          media="(max-width: 1024px)"
          srcSet="/images/home-hero-background-tablet.webp"
          type="image/webp"
        />
        <source
          media="(max-width: 1024px)"
          srcSet="/images/home-hero-background-tablet.jpg"
        />
        {/* Desktop Image */}
        <source srcSet="/images/home-hero-background-1920x1080.webp" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home-hero-background-1920x1080.jpg"
          alt="Bright Shine detailing studio, car under PPF application"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </picture>

      {/* Gradient Overlay - Desktop */}
      <div
        className="absolute inset-0 z-[1] hidden sm:block"
        style={{
          background:
            'linear-gradient(100deg, rgba(11,20,36,0.96) 15%, rgba(11,20,36,0.7) 45%, rgba(11,20,36,0.25) 75%)',
        }}
      />

      {/* Gradient Overlay - Mobile (Better for mobile) */}
      <div
        className="absolute inset-0 z-[1] sm:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,20,36,0.25) 0%, rgba(11,20,36,0.75) 55%, rgba(11,20,36,0.97) 100%)',
        }}
      />

      <ShieldMotif
        position="right"
        size={680}
        top="-8%"
        opacity={0.9}
        
      />

      <Container className="relative z-[2] pt-[88px] sm:pt-[120px] md:pt-[140px] lg:pt-[160px] pb-10 sm:pb-16 md:pb-20">
        <motion.div
          className="max-w-full sm:max-w-[560px] lg:max-w-[620px] w-full px-4 sm:px-0 mt-6 sm:mt-10 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow inline-block text-[0.6rem] sm:text-[0.7rem] md:text-[0.8rem] tracking-[0.15em] uppercase text-bright-gold/80 font-display mb-2 sm:mb-3">
            Bright Shine · Islamabad &amp; Dubai
          </span>

          <h1 className="text-[clamp(1.75rem,8vw,4.7rem)] text-yellow-400 mt-2 sm:mt-2.5 leading-[1.1] sm:leading-[1.05] font-display break-words">
            Reinvent the Look.
            <br />
            Armor the Finish.
          </h1>

          <p className="text-[0.9rem] sm:text-[1.05rem] md:text-[1.15rem] leading-[1.6] opacity-90 max-w-[92%] sm:max-w-[460px] my-4 sm:my-6 normal-case text-off-white/90">
            Premium PPF, wrapping, and ceramic coating — Islamabad &amp; Dubai
          </p>

          {/* Buttons: mobile = column (stacked full-width), sm+ = row */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 w-full">
            <PrimaryButton
              href={CONTACT.dubai.whatsapp}
              icon={FaWhatsapp}
              className="w-full sm:w-auto justify-center px-4 py-2.5 text-sm whitespace-nowrap"
            >
              WhatsApp (Dubai)
            </PrimaryButton>
            <PrimaryButton
              href={CONTACT.islamabad.whatsapp}
              icon={FaWhatsapp}
              className="w-full sm:w-auto justify-center px-4 py-2.5 text-sm whitespace-nowrap"
            >
              WhatsApp (Islamabad)
            </PrimaryButton>
            <SecondaryButton
              to="/service"
              className="w-full sm:w-auto justify-center px-4 py-2.5 text-sm whitespace-nowrap"
            >
              View Services
            </SecondaryButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;