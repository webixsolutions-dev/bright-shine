'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { NAV_LINKS, CONTACT } from '@/lib/constants';
import useNavbar from '@/hooks/useNavbar';

const Navbar = () => {
  const { scrolled, mobileOpen, setMobileOpen } = useNavbar();
  const pathname = usePathname();

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

        <a
          href={CONTACT.islamabad.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 border-[1.5px] border-gold text-bright-gold px-[18px] py-[9px] font-display text-[0.78rem] tracking-[0.06em] uppercase rounded transition-all duration-200 hover:bg-bright-gold hover:text-navy shrink-0"
        >
          <FaWhatsapp size={16} />
          WhatsApp
        </a>

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
            <a
              href={CONTACT.islamabad.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-[1.5px] border-gold text-bright-gold px-[18px] py-[9px] font-display text-[0.78rem] tracking-[0.06em] uppercase rounded mt-3"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
