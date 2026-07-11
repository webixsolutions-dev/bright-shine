'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import type { ChangeEvent, FormEvent } from 'react';

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  city: 'Islamabad' | 'Dubai';
  message: string;
  company: string;
}

type FormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialState: ContactFormState = { name: '', email: '', phone: '', city: 'Islamabad', message: '', company: '' };

const inputClasses =
  'bg-off-white/[0.06] border border-gold/40 text-off-white px-3.5 py-3 rounded text-[0.95rem] normal-case tracking-normal transition-colors duration-200 focus:outline-none focus:border-bright-gold placeholder:text-off-white/40';

const ContactForm = () => {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Please enter your name.';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Please enter a valid email.';
    if (!form.phone.trim()) errs.phone = 'Please enter your phone number.';
    if (!form.message.trim()) errs.message = 'Please tell us how we can help.';
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.company) return; // honeypot triggered — silently drop

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    // NOTE: wire this up to a serverless function (e.g. a Next.js API route or
    // Resend) that emails the payload to Brightshine51214@gmail.com.
    await new Promise((res) => setTimeout(res, 900));
    setSubmitting(false);
    setSubmitted(true);
    setForm(initialState);
  };

  if (submitted) {
    return (
      <motion.div
        className="bg-navy/60 border border-gold/35 rounded-md py-[60px] px-[34px] flex flex-col items-center text-center gap-3.5 text-bright-gold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <FaCheckCircle size={44} />
        <h3 className="text-off-white text-[1.4rem] font-display">Message Sent</h3>
        <p className="text-off-white opacity-80 normal-case text-[0.95rem] max-w-[320px]">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
        <button
          className="mt-2.5 inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display text-[0.85rem] tracking-[0.08em] uppercase font-semibold rounded bg-transparent text-bright-gold border-[1.5px] border-gold"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      className="bg-navy/60 border border-gold/35 rounded-md p-[34px] flex flex-col gap-4.5"
      onSubmit={handleSubmit}
      noValidate
    >
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] opacity-0 h-0 w-0"
        aria-hidden="true"
      />

      <label className="flex flex-col gap-2 text-[0.85rem] tracking-[0.04em] uppercase text-bright-gold font-display">
        Name
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange}
          className={inputClasses}
        />
        <AnimatePresence>
          {errors.name && <ErrorMsg text={errors.name} />}
        </AnimatePresence>
      </label>

      <label className="flex flex-col gap-2 text-[0.85rem] tracking-[0.04em] uppercase text-bright-gold font-display">
        Email
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          className={inputClasses}
        />
        <AnimatePresence>{errors.email && <ErrorMsg text={errors.email} />}</AnimatePresence>
      </label>

      <label className="flex flex-col gap-2 text-[0.85rem] tracking-[0.04em] uppercase text-bright-gold font-display">
        Phone
        <input
          type="tel"
          name="phone"
          placeholder="+92 300 1234567"
          value={form.phone}
          onChange={handleChange}
          className={inputClasses}
        />
        <AnimatePresence>{errors.phone && <ErrorMsg text={errors.phone} />}</AnimatePresence>
      </label>

      <label className="flex flex-col gap-2 text-[0.85rem] tracking-[0.04em] uppercase text-bright-gold font-display">
        City
        <select name="city" value={form.city} onChange={handleChange} className={inputClasses}>
          <option value="Islamabad">Islamabad</option>
          <option value="Dubai">Dubai</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-[0.85rem] tracking-[0.04em] uppercase text-bright-gold font-display">
        Message
        <textarea
          name="message"
          placeholder="How can we help?"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClasses}
        />
        <AnimatePresence>{errors.message && <ErrorMsg text={errors.message} />}</AnimatePresence>
      </label>

      <motion.button
        type="submit"
        disabled={submitting}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="w-full mt-1.5 inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display text-[0.85rem] tracking-[0.08em] uppercase font-semibold rounded bg-gradient-to-br from-bright-gold to-gold text-navy disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <FaPaperPlane size={14} />
        {submitting ? 'Sending…' : 'Send Message'}
      </motion.button>

      <p className="text-[0.78rem] opacity-60 text-center normal-case">
        🔒 Your information is safe with us. We never share your data.
      </p>
    </form>
  );
};

const ErrorMsg = ({ text }: { text: string }) => (
  <motion.span
    className="block text-[#e08a8a] text-[0.78rem] normal-case font-body tracking-normal overflow-hidden"
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
  >
    {text}
  </motion.span>
);

export default ContactForm;
