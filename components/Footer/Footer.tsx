import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTiktok, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { NAV_LINKS, CONTACT, SOCIALS, SITE } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-black text-off-white pt-16 relative">
      <div className="container-brand grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr] gap-10 pb-10 border-b border-gold/20">
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/bright-shine-logo-transparent-1000.png"
              alt="Bright Shine"
              className="w-[200px] h-[200px] md:w-[150px] h-[150px] sm:w-[100] h-[100]"
            />
           
          </Link>
          <p className="text-[0.9rem] leading-[1.7] opacity-75 max-w-[320px]">
            Premium PPF, wrapping, and ceramic coating with studio-grade standards in Islamabad and
            Dubai.
          </p>
          <p className="text-bright-gold mt-3.5 font-display uppercase text-[0.8rem] tracking-[0.06em]">
            Reinvent the Look. Armor the Finish.
          </p>
        </div>

        <div>
          <h4 className="text-bright-gold text-[0.85rem] tracking-[0.1em] mb-4 font-display uppercase">
            Quick Links
          </h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.path} className="mb-2.5">
                <Link href={link.path} className="text-[0.9rem] opacity-80 transition-opacity hover:opacity-100 hover:text-bright-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-bright-gold text-[0.85rem] tracking-[0.1em] mb-4 font-display uppercase">
            Follow Us
          </h4>
          <div className="flex gap-3">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-[38px] h-[38px] flex items-center justify-center rounded-full border border-off-white/30 transition-all hover:bg-bright-gold hover:text-navy hover:border-bright-gold hover:-translate-y-1"
            >
              <FaInstagram />
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-[38px] h-[38px] flex items-center justify-center rounded-full border border-off-white/30 transition-all hover:bg-bright-gold hover:text-navy hover:border-bright-gold hover:-translate-y-1"
            >
              <FaFacebookF />
            </a>
            <a
              href={SOCIALS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-[38px] h-[38px] flex items-center justify-center rounded-full border border-off-white/30 transition-all hover:bg-bright-gold hover:text-navy hover:border-bright-gold hover:-translate-y-1"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-bright-gold text-[0.85rem] tracking-[0.1em] mb-4 font-display uppercase">
            {CONTACT.islamabad.label}
          </h4>
          <a
            className="flex items-center gap-2 text-[0.85rem] opacity-80 mb-2.5 transition-opacity hover:opacity-100 hover:text-bright-gold"
            href={`tel:${CONTACT.islamabad.phoneHref}`}
          >
            <FaPhoneAlt /> {CONTACT.islamabad.phone}
          </a>
          <a
            className="flex items-center gap-2 text-[0.85rem] opacity-80 mb-2.5 transition-opacity hover:opacity-100 hover:text-bright-gold"
            href={CONTACT.islamabad.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp: {CONTACT.islamabad.phone}
          </a>
          <span className="flex items-center gap-2 text-[0.85rem] opacity-80 mb-2.5">
            <FaMapMarkerAlt /> {CONTACT.islamabad.address}
          </span>

          <h4 className="text-bright-gold text-[0.85rem] tracking-[0.1em] mb-4 mt-5 font-display uppercase">
            {CONTACT.dubai.label}
          </h4>
          <a
            className="flex items-center gap-2 text-[0.85rem] opacity-80 mb-2.5 transition-opacity hover:opacity-100 hover:text-bright-gold"
            href={`tel:${CONTACT.dubai.phoneHref}`}
          >
            <FaPhoneAlt /> {CONTACT.dubai.phone}
          </a>
          <a
            className="flex items-center gap-2 text-[0.85rem] opacity-80 mb-2.5 transition-opacity hover:opacity-100 hover:text-bright-gold"
            href={CONTACT.dubai.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp: {CONTACT.dubai.phone}
          </a>
          <span className="flex items-center gap-2 text-[0.85rem] opacity-80 mb-2.5">
            <FaMapMarkerAlt /> {CONTACT.dubai.address}
          </span>
        </div>
      </div>

      <div className="container-brand flex items-center justify-between flex-wrap gap-2.5 py-5 text-[0.8rem] opacity-65">
        <p>© {SITE.year} Bright Shine. All rights reserved.</p>
        <div className="flex gap-2.5">
          <Link href="/privacy-policy" className="hover:text-bright-gold">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-bright-gold">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
