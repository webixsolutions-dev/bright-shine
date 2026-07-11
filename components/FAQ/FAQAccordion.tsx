'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { FAQS } from '@/data/faq';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <div className="border-t border-gold/30">
      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            className={`border-b border-gold/30 transition-colors duration-200 ${isOpen ? 'bg-bright-gold/[0.04]' : ''}`}
            key={item.q}
          >
            <button
              className="w-full flex items-center gap-5 py-6 px-1.5 text-left text-off-white"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-[1.1rem] text-bright-gold shrink-0 w-[30px]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-1 text-[1.05rem] sm:text-[0.92rem] font-medium normal-case">{item.q}</span>
              <span className="text-bright-gold shrink-0">{isOpen ? <FaMinus /> : <FaPlus />}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p className="px-1.5 sm:pl-10 pl-[52px] pb-6 text-[0.95rem] leading-[1.75] opacity-85 max-w-[780px] normal-case">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
