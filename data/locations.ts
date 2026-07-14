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
    mapsLink: 'https://www.google.com/maps?q=J4MP+RC5+BRIGHT+SHINE+CAR+CARE,+Ghauri+Garden,+Islamabad,+44790&ftid=0x38dfeb304e9a6d03:0x33914600ca0c3cba&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100813469,94286869&g_ep=CAISEjI2LjI4LjAuOTQyOTUxNTM4MBgAIIgnKkksOTQyOTc2OTksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsMTAwODEzNDY5LDk0Mjg2ODY5QgJQSw%3D%3D&skid=e68ec09c-c914-4e3d-809c-beca37617e3a&g_st=ic',
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
  mapsLink: 'https://www.google.com/maps/place/BRIGHT+SHINE+CAR+CARE/@25.1711835,55.3664425,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f67000b78001f:0xc7281ffeb20fd5f!8m2!3d25.1711835!4d55.3664425!16s%2Fg%2F11ltfq8r32!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2318.421525727944!2d55.3126323!3d25.2041107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6823df2c5b3d%3A0x8b7e5b2c8e5a5b2!2sBright%20Shine%20Car%20Care!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
},
];