'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT } from '@/lib/constants';

const WhatsAppFloat = () => {
  return (
    <motion.a
      href={CONTACT.islamabad.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-4 md:right-4 w-[58px] h-[58px] md:w-[50px] md:h-[50px] bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.4)] z-[900]"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={26} />
    </motion.a>
  );
};

export default WhatsAppFloat;
