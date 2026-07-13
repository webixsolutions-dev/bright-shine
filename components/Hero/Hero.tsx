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
    <section className="relative min-h-screen  sm:min-h-[92vh] flex items-center overflow-hidden">
      <picture className="absolute inset-0 z-0">
        <source srcSet="/images/home-hero-background-1920x1080.webp" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/home-hero-background-1920x1080.jpg"
          alt="Bright Shine detailing studio, car under PPF application"
          className="w-full h-full object-cover"
        />
      </picture>
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(100deg, rgba(11,20,36,0.96) 15%, rgba(11,20,36,0.7) 45%, rgba(11,20,36,0.25) 75%)',
        }}
      />
      <ShieldMotif position="right" size={680} top="-8%" opacity={0.9} />

      <Container className="relative z-[2]  pt-[120px]">
        <motion.div
          className="max-w-[620px] mt-12 "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow  ">Bright Shine · Islamabad &amp; Dubai</span>
          <h1 className="text-[clamp(1.6rem,6vw,4.7rem)] text-yellow-400 mt-2.5 leading-[1.05] font-display">
            Reinvent the Look.
            <br />
            Armor the Finish.
          </h1>
          <p className="text-[1.15rem] leading-[1.6] opacity-90 max-w-[460px] my-6 normal-case">
            Premium PPF, wrapping, and ceramic coating — Islamabad &amp; Dubai
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:flex-wrap">
            <PrimaryButton href={CONTACT.islamabad.whatsapp} icon={FaWhatsapp} className="sm:w-full">
              Book on WhatsApp
            </PrimaryButton>
            <SecondaryButton to="/service" className="sm:w-full">
              View Services
            </SecondaryButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
