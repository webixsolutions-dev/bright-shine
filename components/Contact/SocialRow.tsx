import { FaInstagram, FaFacebookF, FaTiktok, FaUsers } from 'react-icons/fa';
import Container from '../common/Container';
import { SOCIALS } from '@/lib/constants';

const SocialRow = () => {
  return (
    <section className="py-9" style={{ background: 'linear-gradient(120deg, #491f26, #0b1424)' }}>
      <Container>
        <div className="flex items-center justify-between gap-5 flex-wrap text-bright-gold">
          <div className="flex items-center gap-4">
            <FaUsers size={26} />
            <div>
              <h4 className="text-[1.1rem] text-off-white mb-1 font-display">Follow the Studio</h4>
              <p className="text-[0.88rem] opacity-85 normal-case max-w-[340px]">
                Stay connected for the latest transformations, offers &amp; behind-the-scenes.
              </p>
            </div>
          </div>
          <div className="flex gap-3.5">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-[42px] h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-transform hover:-translate-y-1 hover:bg-bright-gold"
            >
              <FaInstagram />
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-[42px] h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-transform hover:-translate-y-1 hover:bg-bright-gold"
            >
              <FaFacebookF />
            </a>
            <a
              href={SOCIALS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-[42px] h-[42px] rounded-full bg-off-white text-navy flex items-center justify-center transition-transform hover:-translate-y-1 hover:bg-bright-gold"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialRow;
