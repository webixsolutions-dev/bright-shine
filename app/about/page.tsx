import type { Metadata } from 'next';
import PageBanner from '@/components/common/PageBanner';
import OurStory from '@/components/About/OurStory';
import OurStandard from '@/components/About/OurStandard';
import TwoCitiesPanel from '@/components/About/TwoCitiesPanel';
import CTASection from '@/components/CTA/CTASection';

export const metadata: Metadata = {
  title: 'About Bright Shine | Premium Car Care in Islamabad & Dubai',
  description:
    'Bright Shine brings studio-grade PPF, wrapping, and ceramic coating to Islamabad and Dubai — one standard, two cities, and a process built around precision.',
};

export default function About() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="About Bright Shine"
        subtitle="Two studios. One standard. Built for people who don't compromise on their car."
        bgImage="/images/about-hero-background-1920x1080.jpg"
      />
      <OurStory />
      <OurStandard />
      <TwoCitiesPanel />
      <CTASection headline="See the Difference for Yourself" ctaLabel="Book on WhatsApp" />
    </>
  );
}
