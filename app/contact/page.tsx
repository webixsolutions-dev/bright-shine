'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';
import Container from '@/components/common/Container';
import ContactForm from '@/components/Forms/ContactForm';
import ContactLocations from '@/components/Contact/ContactLocations';
import SocialRow from '@/components/Contact/SocialRow';
import { slideInLeft, slideInRight } from '@/hooks/useScrollAnimation';

export default function Contact() {
  return (
    <>
      <section className="relative section-pad overflow-hidden bg-navy section-dark">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-start pt-10">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <span className="eyebrow">Get In Touch</span>
              <h1 className="text-[clamp(2.4rem,6vw,3.6rem)] text-yellow-400 mt-1.5 font-display">Let&rsquo;s Get Your Car In</h1>
              <span className="gold-underline" />
              <p className="text-[1.02rem] leading-[1.7] opacity-85 max-w-[460px] my-3.5 mb-6 normal-case">
                Have a question or ready to book your premium detailing experience? We&rsquo;re here to help.
              </p>
              <div className="flex flex-wrap gap-5 mb-9">
                <span className="flex items-center gap-2 text-[0.82rem] uppercase tracking-[0.04em] text-bright-gold font-display">
                  <FaShieldAlt /> Premium Expert Care
                </span>
                <span className="flex items-center gap-2 text-[0.82rem] uppercase tracking-[0.04em] text-bright-gold font-display">
                  <FaCalendarCheck /> Easy Booking &amp; Fast Response
                </span>
                <span className="flex items-center gap-2 text-[0.82rem] uppercase tracking-[0.04em] text-bright-gold font-display">
                  <FaCheckCircle /> 100% Satisfaction Guaranteed
                </span>
              </div>

              <div>
                <h3 className="text-bright-gold text-[1.3rem] mb-1.5 font-display">Send Us a Message</h3>
                <p className="text-[0.9rem] opacity-75 normal-case mb-5">
                  Fill out the form below and our team will get back to you shortly.
                </p>
                <ContactForm />
              </div>
            </motion.div>

            <motion.div
              className="rounded-md overflow-hidden md:sticky md:top-[110px] order-first md:order-last"
              variants={slideInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/contact-detailer-photo-1600x1100.jpg"
                alt="Bright Shine detailer polishing a car"
                loading="lazy"
                className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <ContactLocations />
      <SocialRow />
    </>
  );
}
