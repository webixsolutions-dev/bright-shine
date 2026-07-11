import type { Metadata } from 'next';
import Container from '@/components/common/Container';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Bright Shine',
  description: 'Bright Shine terms and conditions.',
};

export default function Terms() {
  return (
    <section className="section-dark bg-navy" style={{ paddingTop: 140, paddingBottom: 'clamp(60px, 8vw, 120px)' }}>
      <Container style={{ maxWidth: 800 }}>
        <h1 className="text-[2.4rem] mb-5 font-display">Terms &amp; Conditions</h1>
        <p className="opacity-80 leading-[1.8] normal-case">
          By booking a service with Bright Shine Studio (Islamabad) or Bright Shine Car Care
          (Dubai), you agree to our standard service terms. Full terms will be published here
          once finalized by the client.
        </p>
      </Container>
    </section>
  );
}
