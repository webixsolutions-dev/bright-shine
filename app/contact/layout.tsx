import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Contact Bright Shine | Islamabad & Dubai',
  description:
    'Get in touch with Bright Shine in Islamabad or Dubai — book on WhatsApp, call directly, or send a message through the form.',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
