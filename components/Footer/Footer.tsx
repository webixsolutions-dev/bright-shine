import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTiktok, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { NAV_LINKS, CONTACT, SOCIALS, SITE } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-black text-off-white pt-16 relative overflow-hidden">
      <div className="container-brand grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr] gap-8 sm:gap-10 pb-10 border-b border-gold/20">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/bright-shine-logo-transparent-1000.png"
              alt="Bright Shine"
              className="w-[100px] h-[100px] xs:w-[120px] xs:h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] object-contain"
            />
          </Link>
          <p className="text-[0.85rem] sm:text-[0.9rem] leading-[1.7] opacity-75 max-w-[320px]">
            Premium PPF, wrapping, and ceramic coating with studio-grade standards in Islamabad and
            Dubai.
          </p>
          <p className="text-bright-gold mt-3.5 font-display uppercase text-[0.75rem] sm:text-[0.8rem] tracking-[0.06em]">
            Reinvent the Look. Armor the Finish.
          </p>
        </div>

        <div>
          <h4 className="text-bright-gold text-[0.8rem] sm:text-[0.85rem] tracking-[0.1em] mb-4 font-display uppercase">
            Quick Links
          </h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.path} className="mb-2.5">
                <Link href={link.path} className="text-[0.85rem] sm:text-[0.9rem] opacity-80 transition-opacity hover:opacity-100 hover:text-bright-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us - Islamabad */}
        <div>
          <h4 className="text-bright-gold text-[0.8rem] sm:text-[0.85rem] tracking-[0.1em] mb-4 font-display uppercase">
            Follow Us - Islamabad
          </h4>
          <div className="flex gap-3 mb-4">
            <a
              href={SOCIALS.islamabad.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Islamabad"
              className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] flex items-center justify-center rounded-full border border-off-white/30 transition-all hover:bg-bright-gold hover:text-navy hover:border-bright-gold hover:-translate-y-1 text-sm sm:text-base"
            >
              
                <FaFacebookF />
            </a>
            <a
              href={SOCIALS.islamabad.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Islamabad"
              className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] flex items-center justify-center rounded-full border border-off-white/30 transition-all hover:bg-bright-gold hover:text-navy hover:border-bright-gold hover:-translate-y-1 text-sm sm:text-base"
            >
            <FaInstagram />
            </a>
            <a
              href={SOCIALS.islamabad.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Islamabad"
              className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] flex items-center justify-center rounded-full border border-off-white/30 transition-all hover:bg-bright-gold hover:text-navy hover:border-bright-gold hover:-translate-y-1 text-sm sm:text-base"
            >
              <FaTiktok />
            </a>
          </div>

          {/* Follow Us - Dubai */}
          <h4 className="text-bright-gold text-[0.8rem] sm:text-[0.85rem] tracking-[0.1em] mb-4 font-display uppercase">
            Follow Us - Dubai
          </h4>
          <div className="flex gap-3">
            <a
              href={SOCIALS.dubai.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Dubai"
              className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] flex items-center justify-center rounded-full border border-off-white/30 transition-all hover:bg-bright-gold hover:text-navy hover:border-bright-gold hover:-translate-y-1 text-sm sm:text-base"
            >
         
                <FaFacebookF />
            </a>
            <a
              href={SOCIALS.dubai.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Dubai"
              className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] flex items-center justify-center rounded-full border border-off-white/30 transition-all hover:bg-bright-gold hover:text-navy hover:border-bright-gold hover:-translate-y-1 text-sm sm:text-base"
            >
                 <FaInstagram />
            </a>
            <a
              href={SOCIALS.dubai.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Dubai"
              className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] flex items-center justify-center rounded-full border border-off-white/30 transition-all hover:bg-bright-gold hover:text-navy hover:border-bright-gold hover:-translate-y-1 text-sm sm:text-base"
            >
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-bright-gold text-[0.8rem] sm:text-[0.85rem] tracking-[0.1em] mb-4 font-display uppercase">
            {CONTACT.islamabad.label}
          </h4>
          <a
            className="flex items-center gap-2 text-[0.8rem] sm:text-[0.85rem] opacity-80 mb-2.5 transition-opacity hover:opacity-100 hover:text-bright-gold"
            href={`tel:${CONTACT.islamabad.phoneHref}`}
          >
            <FaPhoneAlt className="flex-shrink-0" /> <span className="break-words">{CONTACT.islamabad.phone}</span>
          </a>
          <a
            className="flex items-center gap-2 text-[0.8rem] sm:text-[0.85rem] opacity-80 mb-2.5 transition-opacity hover:opacity-100 hover:text-bright-gold"
            href={CONTACT.islamabad.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="flex-shrink-0" /> <span className="break-words">WhatsApp: {CONTACT.islamabad.phone}</span>
          </a>
          <span className="flex items-start gap-2 text-[0.8rem] sm:text-[0.85rem] opacity-80 mb-2.5">
            <FaMapMarkerAlt className="flex-shrink-0 mt-1" /> <span className="break-words">{CONTACT.islamabad.address}</span>
          </span>

          <h4 className="text-bright-gold text-[0.8rem] sm:text-[0.85rem] tracking-[0.1em] mb-4 mt-5 font-display uppercase">
            {CONTACT.dubai.label}
          </h4>
          <a
            className="flex items-center gap-2 text-[0.8rem] sm:text-[0.85rem] opacity-80 mb-2.5 transition-opacity hover:opacity-100 hover:text-bright-gold"
            href={`tel:${CONTACT.dubai.phoneHref}`}
          >
            <FaPhoneAlt className="flex-shrink-0" /> <span className="break-words">{CONTACT.dubai.phone}</span>
          </a>
          <a
            className="flex items-center gap-2 text-[0.8rem] sm:text-[0.85rem] opacity-80 mb-2.5 transition-opacity hover:opacity-100 hover:text-bright-gold"
            href={CONTACT.dubai.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="flex-shrink-0" /> <span className="break-words">WhatsApp: {CONTACT.dubai.phone}</span>
          </a>
          <span className="flex items-start gap-2 text-[0.8rem] sm:text-[0.85rem] opacity-80 mb-2.5">
            <FaMapMarkerAlt className="flex-shrink-0 mt-1" /> <span className="break-words">{CONTACT.dubai.address}</span>
          </span>
        </div>
      </div>

      <div className="container-brand flex flex-col sm:flex-row items-center justify-between gap-2.5 py-5 text-[0.7rem] sm:text-[0.8rem] opacity-65">
        <p>© {SITE.year} Bright Shine. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-2.5 py-3">
          <Link href="/privacy-policy" className="hover:text-bright-gold">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-bright-gold">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;