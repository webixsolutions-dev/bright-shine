import { FaInstagram, FaFacebookF, FaTiktok, FaUsers } from 'react-icons/fa';
import Container from '../common/Container';
import { SOCIALS } from '@/lib/constants';

const SocialRow = () => {
  return (
    <section className="py-10 sm:py-9" style={{ background: 'linear-gradient(120deg, #491f26, #0b1424)' }}>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-5 text-bright-gold text-center md:text-left">
          {/* Left Side - Text */}
          <div className="flex flex-col items-center md:flex-row gap-3 md:gap-4">
            <FaUsers size={26} className="shrink-0" />
            <div>
              <h4 className="text-[1.05rem] sm:text-[1.1rem] text-off-white mb-1.5 font-display">
                Follow the Studio
              </h4>
              <p className="text-[0.85rem] sm:text-[0.88rem] leading-relaxed opacity-85 normal-case max-w-[300px] sm:max-w-[340px] mx-auto md:mx-0">
                Stay connected for the latest transformations, offers &amp; behind-the-scenes.
              </p>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-6 w-full md:w-auto">
            {/* Islamabad Social Links */}
            <div className="flex flex-col items-center gap-2.5">
              <span className="text-[0.65rem] uppercase tracking-wider opacity-60 font-display whitespace-nowrap">
                Islamabad
              </span>
              <div className="flex items-center gap-3">
                
                <a  href={SOCIALS.islamabad.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Islamabad"
                  className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-bright-gold hover:text-navy shrink-0"
                >
                  <FaFacebookF />
                </a>
                
                <a  href={SOCIALS.islamabad.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Islamabad"
                  className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-bright-gold hover:text-navy shrink-0"
                >
                  <FaInstagram />
                </a>
                
                <a  href={SOCIALS.islamabad.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Islamabad"
                  className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-bright-gold hover:text-navy shrink-0"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-10 bg-bright-gold/30"></div>
            <div className="block sm:hidden w-16 h-px bg-bright-gold/30"></div>

            {/* Dubai Social Links */}
            <div className="flex flex-col items-center gap-2.5">
              <span className="text-[0.65rem] uppercase tracking-wider opacity-60 font-display whitespace-nowrap">
                Dubai
              </span>
              <div className="flex items-center gap-3">
                
               <a   href={SOCIALS.dubai.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Dubai"
                  className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-bright-gold hover:text-navy shrink-0"
                >
                  <FaFacebookF />
                </a>
                
                <a  href={SOCIALS.dubai.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Dubai"
                  className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-bright-gold hover:text-navy shrink-0"
                >
                  <FaInstagram />
                </a>
                
                 <a href={SOCIALS.dubai.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Dubai"
                  className="w-[40px] h-[40px] sm:w-[42px] sm:h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-all hover:-translate-y-1 hover:bg-bright-gold hover:text-navy shrink-0"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialRow;