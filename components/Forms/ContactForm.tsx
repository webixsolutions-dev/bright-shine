'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import type { ChangeEvent, FormEvent } from 'react';
import { submitContactForm } from '@/lib/firebase/contactService';

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  city: 'Islamabad' | 'Dubai';
  message: string;
  honeypot: string;
}

type FormErrors = Partial<Record<keyof ContactFormState, string>>;

const initialState: ContactFormState = { 
  name: '', 
  email: '', 
  phone: '', 
  city: 'Islamabad', 
  message: '', 
  honeypot: '' 
};

const inputClasses =
  'bg-off-white/[0.06] border border-gold/40 text-off-white px-3.5 py-3 rounded text-[0.95rem] normal-case tracking-normal transition-colors duration-200 focus:outline-none focus:border-bright-gold placeholder:text-off-white/40';

const ContactForm = () => {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
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
    
    // Honeypot check
    if (form.honeypot && form.honeypot.trim() !== '') {
      console.log('Honeypot triggered - bot detected');
      return;
    }

    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      const firstError = document.querySelector('[data-error="true"]');
      if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setSubmitting(true);
    setErrorMessage('');

    try {
      const formData = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        city: form.city,
        message: form.message,
        company: '',
        submittedAt: new Date().toISOString(),
      };

      const result = await submitContactForm(formData);
      
      if (!result.success) {
        throw new Error('Failed to save to database');
      }

      setSubmitted(true);
      setForm(initialState);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
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
          className="mt-2.5 inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display text-[0.85rem] tracking-[0.08em] uppercase font-semibold rounded bg-transparent text-bright-gold border-[1.5px] border-gold hover:bg-bright-gold/10 transition-colors"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      className="bg-navy/60 border border-gold/35 rounded-md p-[34px] flex flex-col gap-4.5 relative"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Honeypot field */}
      <div className="absolute -left-[9999px] opacity-0 h-0 w-0 pointer-events-none">
        <label htmlFor="honeypot">Leave this field empty</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={form.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="w-full h-0"
          aria-hidden="true"
        />
      </div>

      {errorMessage && (
        <motion.div
          className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-md text-sm"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {errorMessage}
        </motion.div>
      )}

      <label className="flex flex-col gap-2 text-[0.85rem] tracking-[0.04em] uppercase text-bright-gold font-display">
        Name <span className="text-red-400 text-xs">*</span>
        <input
          type="text"
          name="name"
          placeholder="Your full name"
          value={form.name}
          onChange={handleChange}
          className={inputClasses}
          data-error={!!errors.name}
        />
        <AnimatePresence>
          {errors.name && <ErrorMsg text={errors.name} />}
        </AnimatePresence>
      </label>

      <label className="flex flex-col gap-2 text-[0.85rem] tracking-[0.04em] uppercase text-bright-gold font-display">
        Email <span className="text-red-400 text-xs">*</span>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          className={inputClasses}
          data-error={!!errors.email}
        />
        <AnimatePresence>
          {errors.email && <ErrorMsg text={errors.email} />}
        </AnimatePresence>
      </label>

      <label className="flex flex-col gap-2 text-[0.85rem] tracking-[0.04em] uppercase text-bright-gold font-display">
        Phone <span className="text-red-400 text-xs">*</span>
        <input
          type="tel"
          name="phone"
          placeholder="+92 300 1234567"
          value={form.phone}
          onChange={handleChange}
          className={inputClasses}
          data-error={!!errors.phone}
        />
        <AnimatePresence>
          {errors.phone && <ErrorMsg text={errors.phone} />}
        </AnimatePresence>
      </label>

      <label className="flex flex-col gap-2 text-[0.85rem] tracking-[0.04em] uppercase text-bright-gold font-display">
        City
        <select name="city" value={form.city} onChange={handleChange} className={inputClasses}>
          <option value="Islamabad">Islamabad</option>
          <option value="Dubai">Dubai</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-[0.85rem] tracking-[0.04em] uppercase text-bright-gold font-display">
        Message <span className="text-red-400 text-xs">*</span>
        <textarea
          name="message"
          placeholder="How can we help?"
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClasses}
          data-error={!!errors.message}
        />
        <AnimatePresence>
          {errors.message && <ErrorMsg text={errors.message} />}
        </AnimatePresence>
      </label>

      <motion.button
        type="submit"
        disabled={submitting}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="w-full mt-1.5 inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display text-[0.85rem] tracking-[0.08em] uppercase font-semibold rounded bg-gradient-to-br from-bright-gold to-gold text-navy disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
      >
        <FaPaperPlane size={14} />
        {submitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending…
          </span>
        ) : (
          'Send Message'
        )}
      </motion.button>

      <p className="text-[0.78rem] opacity-60 text-center normal-case flex items-center justify-center gap-2">
        <FaShieldAlt size={14} className="text-bright-gold" />
        Your information is safe with us. We never share your data.
      </p>
    </form>
  );
};

const ErrorMsg = ({ text }: { text: string }) => (
  <motion.span
    className="block text-red-400 text-[0.78rem] normal-case font-body tracking-normal overflow-hidden"
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
  >
    {text}
  </motion.span>
);

export default ContactForm;