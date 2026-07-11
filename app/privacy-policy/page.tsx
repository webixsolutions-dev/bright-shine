import type { Metadata } from 'next';
import Container from '@/components/common/Container';

export const metadata: Metadata = {
  title: 'Privacy Policy | Bright Shine',
  description: 'Bright Shine privacy policy.',
};

export default function Privacy() {
  return (
    <section className="section-dark bg-navy" style={{ paddingTop: 140, paddingBottom: 'clamp(60px, 8vw, 120px)' }}>
      <Container style={{ maxWidth: 800 }}>
        <h1 className="text-[2.4rem] mb-5 font-display">Privacy Policy</h1>
        <p className="opacity-80 leading-[1.8] normal-case">
          Bright Shine respects your privacy. Information submitted through our contact form is
          used only to respond to your enquiry and is never sold or shared with third parties.
          Full policy details will be added here as the brand finalizes its legal documentation.
        </p>
      </Container>
    </section>
  );
}
