import type { Metadata } from 'next';
import PageBanner from '@/components/common/PageBanner';
import ServiceBlock from '@/components/Service/ServiceBlock';
import CTASection from '@/components/CTA/CTASection';
import { SERVICES } from '@/data/services';

export const metadata: Metadata = {
  title: 'Our Services | PPF, Wrapping, Ceramic Coating & More',
  description:
    "Explore Bright Shine's full service lineup — PPF, vehicle wrapping, ceramic coating, interior deep cleaning, and polishing — available in Islamabad and Dubai.",
};

export default function Services() {
  return (
    <>
      <PageBanner
        eyebrow="What We Do"
        title="Our Services"
        subtitle="Five services. One studio-grade standard, in Islamabad and Dubai alike."
        bgImage="/images/services-hero-background-1920x1080.jpg"
      />
      {SERVICES.map((service, i) => (
        <ServiceBlock key={service.id} service={service} reversed={i % 2 === 1} light={i % 2 === 1} />
      ))}
      <CTASection
        headline="One Standard. Two Cities. Your Car, Elevated."
        ctaLabel="Book Your Slot on WhatsApp"
      />
    </>
  );
}
