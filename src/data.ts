export type Vessel = {
  id: string
  name: string
  year: string
  type: string
  designation: string
  image: string
  href: string
}

export const vessels: Vessel[] = [
  {
    id: 'way-foong',
    name: 'Way Foong',
    year: '1930',
    type: 'Hong Kong-Built Motor Launch',
    designation: 'M/Y',
    image: '/vessels/home-way-foong.jpg',
    href: '/wayfoong',
  },
  {
    id: 'so-fong',
    name: 'So Fong',
    year: '1937',
    type: 'Hong Kong-Built Gaff Schooner',
    designation: 'S/Y',
    image: '/vessels/home-so-fong.jpg',
    href: '/sofong',
  },
  {
    id: 'java',
    name: 'Java',
    year: '1935',
    type: 'Hong Kong-Built Motor Launch',
    designation: 'M/Y',
    image: '/vessels/home-java.jpg',
    href: '/java',
  },
  {
    id: 'tai-mo-shan',
    name: 'Tai Mo Shan',
    year: '1933',
    type: 'Hong Kong-Built Teak Ketch',
    designation: 'S/Y',
    image: '/vessels/home-tai-mo-shan.jpg',
    href: '/tai-mo-shan',
  },
  {
    id: 'typhoon',
    name: 'Typhoon',
    year: '1934',
    type: 'Hong Kong-Built Gaff Day Racer',
    designation: 'S/Y',
    image: '/vessels/home-typhoon.jpg',
    href: '/typhoon',
  },
]
