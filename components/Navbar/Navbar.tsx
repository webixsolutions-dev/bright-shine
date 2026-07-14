'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { NAV_LINKS, CONTACT } from '@/lib/constants';
import useNavbar from '@/hooks/useNavbar';
import { useState } from 'react';

const Navbar = () => {
  const { scrolled, mobileOpen, setMobileOpen } = useNavbar();
  const pathname = usePathname();
  const [showWhatsappOptions, setShowWhatsappOptions] = useState(false);

  const linkClasses = (active: boolean) =>
    `relative font-display text-[0.85rem] tracking-[0.08em] uppercase transition-all duration-200 pb-1 ${
      active ? 'opacity-100 text-bright-gold' : 'opacity-85 text-off-white hover:opacity-100 hover:text-bright-gold'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm'
          : 'bg-gradient-to-b from-navy/85 to-transparent'
      }`}
    >
      <div className="container-brand flex items-center justify-between gap-5 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setMobileOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/bright-shine-logo-transparent-1000.png"
            alt="Bright Shine"
            className="w-[100px] h-[100px] object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 ml-auto mr-6">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.path;
            return (
              <Link key={link.path} href={link.path} className={linkClasses(active)}>
                {link.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-0.5 bg-bright-gold transition-all duration-200 ${
                    active ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* WhatsApp Dropdown */}
        <div className="hidden md:relative md:inline-block">
          <button
            onClick={() => setShowWhatsappOptions(!showWhatsappOptions)}
            className="inline-flex items-center gap-2 border-[1.5px] border-gold text-bright-gold px-[18px] py-[9px] font-display text-[0.78rem] tracking-[0.06em] uppercase rounded transition-all duration-200 hover:bg-bright-gold hover:text-navy shrink-0"
          >
            <FaWhatsapp size={16} />
            WhatsApp
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${showWhatsappOptions ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {showWhatsappOptions && (
              <motion.div
                className="absolute right-0 mt-2 w-56 bg-navy border border-gold/30 rounded-lg shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <a
                  href={CONTACT.dubai.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-off-white hover:bg-bright-gold/10 hover:text-bright-gold transition-colors border-b border-gold/10"
                  onClick={() => setShowWhatsappOptions(false)}
                >
                  <FaWhatsapp size={16} className="text-green-500" />
                  <div>
                    <div className="text-sm font-medium">Dubai</div>
                    <div className="text-xs opacity-60">{CONTACT.dubai.phone}</div>
                  </div>
                </a>
                <a
                  href={CONTACT.islamabad.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-off-white hover:bg-bright-gold/10 hover:text-bright-gold transition-colors"
                  onClick={() => setShowWhatsappOptions(false)}
                >
                  <FaWhatsapp size={16} className="text-green-500" />
                  <div>
                    <div className="text-sm font-medium">Islamabad</div>
                    <div className="text-xs opacity-60">{CONTACT.islamabad.phone}</div>
                  </div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          className="md:hidden flex text-off-white ml-auto"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden flex flex-col items-start gap-1 bg-navy/98 px-5 pb-5 pt-2 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`${linkClasses(active)} w-full py-2.5 border-b border-gold/15`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* Mobile WhatsApp Options */}
            <div className="w-full mt-3 space-y-2">
              <a
                href={CONTACT.dubai.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-[1.5px] border-gold text-bright-gold px-[18px] py-[9px] font-display text-[0.78rem] tracking-[0.06em] uppercase rounded w-full hover:bg-bright-gold hover:text-navy transition-colors"
              >
                <FaWhatsapp size={16} />
                WhatsApp (Dubai)
              </a>
              <a
                href={CONTACT.islamabad.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-[1.5px] border-gold text-bright-gold px-[18px] py-[9px] font-display text-[0.78rem] tracking-[0.06em] uppercase rounded w-full hover:bg-bright-gold hover:text-navy transition-colors"
              >
                <FaWhatsapp size={16} />
                WhatsApp (Islamabad)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;