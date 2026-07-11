import type { Metadata } from 'next';
import PageBanner from '@/components/common/PageBanner';
import Container from '@/components/common/Container';
import FAQAccordion from '@/components/FAQ/FAQAccordion';
import CTASection from '@/components/CTA/CTASection';

export const metadata: Metadata = {
  title: 'FAQ | Bright Shine PPF, Wrapping & Ceramic Coating',
  description:
    'Answers to common questions about PPF, wrapping, and ceramic coating at Bright Shine — Islamabad and Dubai.',
};

export default function FAQ() {
  return (
    <>
      <PageBanner
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our services."
        bgImage="/images/faq-hero-background-1920x1080.jpg"
      />
      <section className="relative section-pad overflow-hidden bg-navy section-dark">
        <Container style={{ maxWidth: 880 }}>
          <FAQAccordion />
        </Container>
      </section>
      <CTASection headline="Still Have Questions?" ctaLabel="Book on WhatsApp" />
    </>
  );
}
