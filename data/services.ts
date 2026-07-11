export interface Service {
  id: string;
  number: string;
  name: string;
  shortName: string;
  cardCopy: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'ppf',
    number: '01',
    name: 'PPF (Paint Protection Film)',
    shortName: 'PPF',
    cardCopy: 'Invisible armor for your paint — engineered to absorb impact before it reaches the surface.',
    description:
      'A virtually invisible film layer that absorbs stone chips, road debris, and fine scratches before they ever reach your paint — protection that works quietly in the background.',
    image: '/images/service-ppf-1400x900.jpg',
  },
  {
    id: 'wrapping',
    number: '02',
    name: 'Wrapping',
    shortName: 'Wrapping',
    cardCopy: 'A full color and finish change without touching a single panel of original paint.',
    description:
      'A full vinyl wrap for a complete color or finish change — satin, gloss, matte, or color-shift — without touching the factory paint underneath.',
    image: '/images/service-wrapping-1400x900.jpg',
  },
  {
    id: 'ceramic-coating',
    number: '03',
    name: 'Ceramic Coating',
    shortName: 'Ceramic Coating',
    cardCopy: 'Deep, lasting gloss and a hydrophobic shield that outlasts any wax.',
    description:
      'A hydrophobic, high-gloss coating that bonds to the paint for long-term shine and protection against UV, water spots, and light chemical staining.',
    image: '/images/service-ceramic-coating-1400x900.jpg',
  },
  {
    id: 'interior-deep-cleaning',
    number: '04',
    name: 'Interior Deep Cleaning',
    shortName: 'Interior Deep Cleaning',
    cardCopy: 'A full interior detail that restores the cabin to a like-new condition.',
    description:
      'A full interior detail — seats, dashboard, carpets, and every panel — restoring the cabin to a like-new condition.',
    image: '/images/service-interior-deep-cleaning-1400x900.jpg',
  },
  {
    id: 'polishing',
    number: '05',
    name: 'Polishing',
    shortName: 'Polishing',
    cardCopy: 'Machine paint correction that restores true gloss before protection goes on.',
    description:
      'Machine paint correction that removes swirl marks and light scratches, restoring true gloss before any protective layer goes on.',
    image: '/images/service-polishing-1400x900.jpg',
  },
];

export const FEATURED_SERVICE_IDS: string[] = ['ppf', 'wrapping', 'ceramic-coating'];
