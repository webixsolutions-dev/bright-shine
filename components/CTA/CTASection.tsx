'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Container from '../common/Container';
import PrimaryButton from '../Buttons/PrimaryButton';
import ShieldMotif from '../common/ShieldMotif';
import { CONTACT } from '@/lib/constants';

export interface CTASectionProps {
  headline: string;
  ctaLabel?: string;
  whatsappNumber?: string;
}

const CTASection = ({ headline, ctaLabel = 'Book Your Slot on WhatsApp', whatsappNumber }: CTASectionProps) => {
  return (
    <section
      className="relative overflow-hidden text-center py-[76px]"
      style={{ background: 'linear-gradient(120deg, #491f26 0%, #0b1424 100%)' }}
    >
      <ShieldMotif position="center" size={700} top="-20%" opacity={0.35} variant="gold" />
      <Container>
        <motion.div
          className="relative z-[1] flex flex-col items-center gap-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <h2 className="text-[clamp(1.8rem,5vw,2.8rem)] text-off-white max-w-[760px] leading-[1.25] font-display">
            {headline}
          </h2>
          <div className="whatsapp-btns flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto">
            <PrimaryButton
              href={whatsappNumber || CONTACT.dubai.whatsapp}
              icon={FaWhatsapp}
              className="w-full sm:w-auto justify-center text-sm sm:text-base px-4 sm:px-5 md:px-6 py-2.5 sm:py-3"
            >
              {ctaLabel} (Dubai)
            </PrimaryButton>
            <PrimaryButton
              href={whatsappNumber || CONTACT.islamabad.whatsapp}
              icon={FaWhatsapp}
              className="w-full sm:w-auto justify-center text-sm sm:text-base px-4 sm:px-5 md:px-6 py-2.5 sm:py-3"
            >
              {ctaLabel} (Islamabad)
            </PrimaryButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
