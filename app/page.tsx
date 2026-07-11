import type { Metadata } from 'next';
import Hero from '@/components/Hero/Hero';
import TrustStrip from '@/components/Sections/TrustStrip';
import FeaturedServices from '@/components/Sections/FeaturedServices';
import WhyBrightShine from '@/components/Sections/WhyBrightShine';
import LocationsStrip from '@/components/Location/LocationsStrip';
import CTASection from '@/components/CTA/CTASection';

export const metadata: Metadata = {
  title: 'Bright Shine | Premium PPF, Wrapping & Ceramic Coating',
  description:
    "Bright Shine delivers premium paint protection film, vehicle wrapping, and ceramic coating in Islamabad and Dubai. Book your car's transformation today.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedServices />
      <WhyBrightShine />
      <LocationsStrip />
      <CTASection headline="Your Car Deserves the Bright Shine Standard." />
    </>
  );
}
