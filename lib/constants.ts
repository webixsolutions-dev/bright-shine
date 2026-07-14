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
  title:string,
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
    address: 'J4MP+RC5, Ghauri Garden, Islamabad, 44790, Pakistan',
  },
  dubai: {
    label: 'Bright Shine Car Care — Dubai',
    city: 'Dubai',
    phone: '+971 58 241 4169',
    phoneHref: '+971582414169',
    whatsapp: 'https://wa.me/971582414169',
    address: '59C8+FGF - Ras Al Khor Ind. Second - Dubai - United Arab Emirates',
  },
};

export const SOCIALS: {
  islamabad: Socials;
  dubai: Socials;
} = {
  islamabad: {
    title: "Islamabad Social Links",
    instagram: 'https://www.instagram.com/bright_shine_studio?igsh=eG83Zmpta2lvYTg4&utm_source=qr',
    facebook: 'https://www.facebook.com/share/1AoGQmjRfQ/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@brightshinestudio?_r=1&_t=ZS-981R8FI916O',
  },
  dubai: {
    title: "Dubai Social Links",
    instagram: 'https://www.instagram.com/brightshinecarcare?igsh=ZTJ6a3MxcmxxaGNw&utm_source=qr',
    facebook: 'https://www.facebook.com/share/1D3cXwoM4w/?mibextid=wwXIfr',
    tiktok: 'https://www.tiktok.com/@brightshinecarcare?_r=1&_t=ZS-981RJ72UAcS',
  }
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
