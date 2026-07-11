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
}

export const LOCATIONS: Location[] = [
  {
    id: 'islamabad',
    city: 'Islamabad',
    label: CONTACT.islamabad.label,
    phone: CONTACT.islamabad.phone,
    whatsapp: CONTACT.islamabad.whatsapp,
    address: CONTACT.islamabad.address,
    description: 'Bright Shine Studio — crafted detail, studio-grade finish.',
    image: '/images/location-islamabad-1600x900.jpg',
    map: '/images/map-placeholder-islamabad.svg',
    mapsLink: 'https://maps.google.com/?q=Islamabad+Pakistan',
  },
  {
    id: 'dubai',
    city: 'Dubai',
    label: CONTACT.dubai.label,
    phone: CONTACT.dubai.phone,
    whatsapp: CONTACT.dubai.whatsapp,
    address: CONTACT.dubai.address,
    description: 'Bright Shine Car Care — premium protection and finish.',
    image: '/images/location-dubai-1600x900.jpg',
    map: '/images/map-placeholder-dubai.svg',
    mapsLink: 'https://maps.google.com/?q=Dubai+UAE',
  },
];
