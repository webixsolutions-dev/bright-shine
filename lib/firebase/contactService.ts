import { db } from './config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  company?: string;
  submittedAt: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...data,
      createdAt: serverTimestamp(),
      status: 'pending',
      source: 'website',
      read: false,
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
};