export type Vessel = {
  id: string
  name: string
  year: string
  type: string
  designation: string
  image: string
  href: string
  blurb: string
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
    blurb:
      'Seventy feet of Burmese teak, once HSBC’s harbour launch, now a living icon still keeping the islands afloat in style.',
  },
  {
    id: 'so-fong',
    name: 'So Fong',
    year: '1937',
    type: 'Hong Kong-Built Gaff Schooner',
    designation: 'S/Y',
    image: '/vessels/home-so-fong.jpg',
    href: '/sofong',
    blurb:
      'A Sparkman & Stephens classic whose name means “Beautiful Girl” in Cantonese, home again after nearly nine decades at sea.',
  },
  {
    id: 'java',
    name: 'Java',
    year: '1935',
    type: 'Hong Kong-Built Motor Launch',
    designation: 'M/Y',
    image: '/vessels/home-java.jpg',
    href: '/java',
    blurb:
      'Once Marine 1, the government’s harbour workhorse, rescued from an uncertain fate and restored as a piece of living history.',
  },
  {
    id: 'tai-mo-shan',
    name: 'Tai Mo Shan',
    year: '1933',
    type: 'Hong Kong-Built Teak Ketch',
    designation: 'S/Y',
    image: '/vessels/home-tai-mo-shan.jpg',
    href: '/tai-mo-shan',
    blurb:
      'A Harold S. Rouse ketch from Hong Kong & Whampoa Dock, restored in Greece as a phoenix risen beyond her original glory.',
  },
  {
    id: 'typhoon',
    name: 'Typhoon',
    year: '1934',
    type: 'Hong Kong-Built Gaff Day Racer',
    designation: 'S/Y',
    image: '/vessels/home-typhoon.jpg',
    href: '/typhoon',
    blurb:
      'Once Mairi Bhan, a resilient Rouse W-class day racer, saved from the scrap heap and sailing again from St. Monans.',
  },
]
