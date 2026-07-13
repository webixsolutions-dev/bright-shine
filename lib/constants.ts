export interface CityContact {
  label: string;
  city: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  address: string;
}

export interface ContactMap {
  islamabad: CityContact;
  dubai: CityContact;
}

export interface Socials {
  instagram: string;
  facebook: string;
  tiktok: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  email: string;
  year: number;
}

export interface NavLink {
  label: string;
  path: string;
}

export const CONTACT: ContactMap = {
  islamabad: {
    label: 'Bright Shine Studio — Islamabad',
    city: 'Islamabad',
    phone: '+92 344 1863233',
    phoneHref: '+923441863233',
    whatsapp: 'https://wa.me/923441863233',
    address: 'Street 55, F-10/4, Islamabad, Pakistan',
  },
  dubai: {
    label: 'Bright Shine Car Care — Dubai',
    city: 'Dubai',
    phone: '+971 58 241 4169',
    phoneHref: '+971582414169',
    whatsapp: 'https://wa.me/971582414169',
    address: 'Dubai, United Arab Emirates',
  },
};

export const SOCIALS: Socials = {
  instagram: 'https://instagram.com/brightshinestudio',
  facebook: 'https://facebook.com/brightshinestudio',
  tiktok: 'https://tiktok.com/@brightshinestudio',
};

export const SITE: SiteInfo = {
  name: 'Bright Shine',
  tagline: 'Reinvent the Look. Armor the Finish.',
  email: 'Brightshine51214@gmail.com',
  year: new Date().getFullYear(),
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Service', path: '/service' },
    { label: 'FAQ', path: '/faq' },
  { label: 'Contact Us', path: '/contact' },

];
