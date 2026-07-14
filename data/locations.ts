import { CONTACT } from '@/lib/constants';

export interface Location {
  id: string;
  city: string;
  label: string;
  phone: string;
  whatsapp: string;
  address: string;
  description: string;
  image: string;
  map: string;
  mapsLink: string;
  mapEmbedUrl?: string;
}

export const LOCATIONS: Location[] = [
  {
    id: 'islamabad',
    city: 'Islamabad',
    label: CONTACT.islamabad.label,
    phone: CONTACT.islamabad.phone,
    whatsapp: CONTACT.islamabad.whatsapp,
    address: 'J4MP+R5, Ghauri Garden, Islamabad, 44790, Pakistan',
    description: 'Bright Shine Studio — crafted detail, studio-grade finish.',
    image: '/images/location-islamabad-1600x900.jpg',
    map: '/images/map-placeholder-islamabad.svg',
    mapsLink: 'https://maps.app.goo.gl/Nmh8vXnp6hX6dW7p9?g_st=ic',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.8842664486344!2d73.0474503!3d33.6844225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd6c8e3a5e1%3A0x8b7e5b2c8e5a5b2!2sJ4MP%2BR5%2C%20Ghauri%20Garden%2C%20Islamabad!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
  },
  {
    id: 'dubai',
    city: 'Dubai',
    label: CONTACT.dubai.label,
    phone: CONTACT.dubai.phone,
    whatsapp: CONTACT.dubai.whatsapp,
    address: '5CBC+FG6 – Ras Al Khor Ind. Second – Dubai – United Arab Emirates',
    description: 'Bright Shine Car Care — premium protection and finish.',
    image: '/images/location-dubai-1600x900.jpg',
    map: '/images/map-placeholder-dubai.svg',
    mapsLink: 'https://maps.app.goo.gl/sxtnZQS7AeFGwppe7?g_st=ic',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2318.421525727944!2d55.3126323!3d25.2041107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6823df2c5b3d%3A0x8b7e5b2c8e5a5b2!2sBright%20Shine%20Car%20Care!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
  },
];