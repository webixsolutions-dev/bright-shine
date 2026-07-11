import Link from 'next/link';
import Container from '@/components/common/Container';

export default function NotFound() {
  return (
    <section className="section-dark bg-navy min-h-screen flex items-center" style={{ paddingTop: 140 }}>
      <Container className="text-center">
        <span className="eyebrow">404</span>
        <h1 className="text-[clamp(2.4rem,6vw,3.6rem)] mt-2 font-display">Page Not Found</h1>
        <span className="gold-underline mx-auto" />
        <p className="opacity-80 leading-[1.8] normal-case mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display text-[0.85rem] tracking-[0.08em] uppercase font-semibold rounded bg-gradient-to-br from-bright-gold to-gold text-navy"
        >
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
