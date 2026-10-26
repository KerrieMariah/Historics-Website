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

export type NewsFormat = 'magazine' | 'article' | 'video'

export const newsFormatLabels: Record<NewsFormat, string> = {
  magazine: 'Magazine',
  article: 'Article',
  video: 'Video',
}

export type NewsPage = {
  label: string
  image: string
  thumb: string
}

export type NewsHighlight = {
  vesselId: Vessel['id']
  text: string
}

export type NewsItem = {
  id: string
  format: NewsFormat
  title: string
  deck: string
  source: string
  date: string
  byline?: string
  cover: string
  href: string
  pageRange?: string
  pages?: NewsPage[]
  quote?: { text: string; attribution: string }
  highlights?: NewsHighlight[]
}

const postMagPages = Array.from({ length: 7 }, (_, index) => {
  const file = `page-${String(index + 1).padStart(2, '0')}.jpg`
  return {
    label: `p. ${16 + index}`,
    image: `/articles/postmag-2026-10/${file}`,
    thumb: `/articles/postmag-2026-10/thumbs/${file}`,
  }
})

export const newsItems: NewsItem[] = [
  {
    id: 'postmag-keeping-history-afloat',
    format: 'magazine',
    title: 'Keeping History Afloat',
    deck: 'Hong Kong’s maritime heritage is deeply embedded in the fabric of the city, but many of its hand-built wooden vessels have been lost to time and urban development. Alex Sherr discovers how one dedicated organisation is racing to preserve this inimitable slice of boating history.',
    source: 'Post Magazine',
    date: '2026-10-11',
    byline: 'Alex Sherr',
    cover: '/articles/postmag-2026-10/page-02.jpg',
    href: '/articles/F1%20HKHVF%20FIN%20FP_PostMag_11-10-2026_p16-p22.pdf',
    pageRange: 'pp. 16–22',
    pages: postMagPages,
    quote: {
      text: 'We don’t want these boats sitting in a museum as artefacts. We want them to remain active, accessible and connected to the people of Hong Kong.',
      attribution: 'Philip Giannecchini, CEO',
    },
    highlights: [
      {
        vesselId: 'way-foong',
        text: 'Ferried bullion across Victoria Harbour and hosted “burning picnics”, turning sacks of cancelled banknotes into fuel for her steam engine.',
      },
      {
        vesselId: 'java',
        text: 'As Marine 1 she carried VIPs, ran anti-piracy patrols and, on occasion, corralled a swimming water buffalo.',
      },
      {
        vesselId: 'so-fong',
        text: 'Seized in 1984, she was spirited out of Ho Chi Minh City under cover of darkness before finding her way home.',
      },
      {
        vesselId: 'tai-mo-shan',
        text: 'Carried Pierce Brosnan, Colin Firth and Stellan Skarsgård to the island of Kalokairi in Mamma Mia!',
      },
      {
        vesselId: 'typhoon',
        text: 'A Rouse-designed Royal Hong Kong Yacht Club racer, traced through Facebook to Scotland in 2025.',
      },
    ],
  },
]
