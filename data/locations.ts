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
    mapsLink: 'https://www.google.com/maps/place/BRIGHT+SHINE+CAR+CARE/@33.6844225,73.0474503,17z/data=!3m1!4b1!4m6!3m5!1s0x38dfeb304e9a6d03:0x33914600ca0c3cba!8m2!3d33.6844225!4d73.0474503!16s%2Fg%2F11ltfq8r32?entry=ttu',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.8842664486344!2d73.0474503!3d33.6844225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb304e9a6d03%3A0x33914600ca0c3cba!2sBRIGHT%20SHINE%20CAR%20CARE!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
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
   mapsLink: 'https://www.google.com/maps/place/BRIGHT+SHINE+CAR+CARE/@25.1711835,55.3664425,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f67000b78001f:0xc7281ffeb20fd5f!8m2!3d25.1711835!4d55.3664425!16s%2Fg%2F11ltfq8r32?entry=ttu',
   mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14430.2!2d55.3664425!3d25.1711835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f67000b78001f%3A0xc7281ffeb20fd5f!2sBRIGHT%20SHINE%20CAR%20CARE%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
  },
];