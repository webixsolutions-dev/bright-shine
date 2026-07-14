import { FaInstagram, FaFacebookF, FaTiktok, FaUsers } from 'react-icons/fa';
import Container from '../common/Container';
import { SOCIALS } from '@/lib/constants';

const SocialRow = () => {
  return (
    <section className="py-9" style={{ background: 'linear-gradient(120deg, #491f26, #0b1424)' }}>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-5 flex-wrap text-bright-gold">
          {/* Left Side - Text */}
          <div className="flex items-center gap-4">
            <FaUsers size={26} />
            <div>
              <h4 className="text-[1.1rem] text-off-white mb-1 font-display">Follow the Studio</h4>
              <p className="text-[0.88rem] opacity-85 normal-case max-w-[340px]">
                Stay connected for the latest transformations, offers &amp; behind-the-scenes.
              </p>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full md:w-auto">
            {/* Islamabad Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-[0.65rem] uppercase tracking-wider opacity-60 font-display whitespace-nowrap">
                Islamabad
              </span>
              <a
                href={SOCIALS.islamabad.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Islamabad"
                className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-bright-gold hover:text-navy"
              >
                <FaInstagram />
              </a>
              <a
                href={SOCIALS.islamabad.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Islamabad"
                className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-bright-gold hover:text-navy"
              >
                <FaFacebookF />
              </a>
              <a
                href={SOCIALS.islamabad.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Islamabad"
                className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-bright-gold hover:text-navy"
              >
                <FaTiktok />
              </a>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-bright-gold/30"></div>
            <div className="block sm:hidden w-full h-px bg-bright-gold/30"></div>

            {/* Dubai Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-[0.65rem] uppercase tracking-wider opacity-60 font-display whitespace-nowrap">
                Dubai
              </span>
              <a
                href={SOCIALS.dubai.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Dubai"
                className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-bright-gold hover:text-navy"
              >
                <FaInstagram />
              </a>
              <a
                href={SOCIALS.dubai.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Dubai"
                className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-bright-gold hover:text-navy"
              >
                <FaFacebookF />
              </a>
              <a
                href={SOCIALS.dubai.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Dubai"
                className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-bright-gold hover:text-navy"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialRow;