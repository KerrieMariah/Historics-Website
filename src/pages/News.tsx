import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { newsFormatLabels, newsItems, vessels, type NewsItem, type NewsPage } from '../data'
import { useReveal } from '../hooks/useReveal'

const longDate = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
const mastheadDate = new Intl.DateTimeFormat('en-GB', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

function formatDate(iso: string) {
  return longDate.format(new Date(`${iso}T00:00:00`))
}

function Reveal({ className = '', children }: { className?: string; children: ReactNode }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  )
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const media = window.matchMedia(query)
    const onChange = () => setMatches(media.matches)
    onChange()
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [query])

  return matches
}

function MagazineReader({
  item,
  startPage,
  onClose,
}: {
  item: NewsItem
  startPage: number | null
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const pages = item.pages ?? []
  const spreadMode = useMediaQuery('(min-width: 900px)')
  const [page, setPage] = useState(0)
  const open = startPage !== null

  const step = spreadMode ? 2 : 1
  const first = spreadMode ? page - (page % 2) : page
  const visible: NewsPage[] = pages.slice(first, first + step)
  const atStart = first === 0
  const atEnd = first + step >= pages.length

  const go = useCallback(
    (direction: 1 | -1) => {
      setPage((current) => {
        const base = spreadMode ? current - (current % 2) : current
        const next = base + direction * step
        return Math.min(Math.max(next, 0), pages.length - 1)
      })
    },
    [pages.length, spreadMode, step],
  )

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (startPage !== null) {
      setPage(startPage)
      if (!dialog.open) dialog.showModal()
      document.body.style.overflow = 'hidden'
    } else if (dialog.open) {
      dialog.close()
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open, startPage])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, go])

  const rangeLabel =
    visible.length > 1 ? `${visible[0].label.replace('p. ', 'pp. ')}–${visible[visible.length - 1].label.replace('p. ', '')}` : visible[0]?.label

  return (
    <dialog
      ref={dialogRef}
      className="reader"
      aria-label={`${item.title}, ${item.source}`}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="reader-bar">
        <div className="reader-title">
          <span className="reader-source">{item.source}</span>
          <strong>{item.title}</strong>
        </div>
        <div className="reader-tools">
          <a className="reader-link" href={item.href} target="_blank" rel="noreferrer">
            Open PDF
          </a>
          <a className="reader-link" href={item.href} download>
            Download
          </a>
          <button type="button" className="reader-close" aria-label="Close reader" onClick={onClose}>
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="reader-stage">
        <button
          type="button"
          className="reader-nav reader-nav--prev"
          aria-label="Previous page"
          disabled={atStart}
          onClick={() => go(-1)}
        >
          <span aria-hidden="true" />
        </button>

        <div className={`reader-spread${visible.length === 1 && spreadMode ? ' is-single' : ''}`} key={first}>
          {visible.map((entry) => (
            <img
              key={entry.image}
              src={entry.image}
              alt={`${item.title}, ${entry.label}`}
              width={1577}
              height={1890}
              decoding="async"
              style={{ backgroundImage: `url(${entry.thumb})` }}
            />
          ))}
        </div>

        <button
          type="button"
          className="reader-nav reader-nav--next"
          aria-label="Next page"
          disabled={atEnd}
          onClick={() => go(1)}
        >
          <span aria-hidden="true" />
        </button>
      </div>

      <div className="reader-foot">
        <span>{rangeLabel}</span>
        <div className="reader-dots" aria-hidden="true">
          {pages.map((entry, index) => (
            <span key={entry.image} className={index >= first && index < first + step ? 'is-active' : ''} />
          ))}
        </div>
        <span>
          {Math.min(first + step, pages.length)} / {pages.length}
        </span>
      </div>

      {open &&
        pages
          .slice(Math.max(first - step, 0), first + step * 2)
          .map((entry) => <link key={entry.image} rel="preload" as="image" href={entry.image} />)}
    </dialog>
  )
}

function FeaturedMagazine({ item, onRead }: { item: NewsItem; onRead: (page: number) => void }) {
  const titlePage = item.pages?.[0]

  return (
    <section className="news-feature" aria-labelledby="feature-title">
      <Reveal className="news-feature-inner">
        <button type="button" className="magazine-stack" onClick={() => onRead(0)} aria-label={`Read ${item.title}`}>
          <span className="magazine-sheet magazine-sheet--back" aria-hidden="true">
            <img src={item.cover} alt="" loading="lazy" decoding="async" />
          </span>
          <span className="magazine-sheet magazine-sheet--front">
            <img src={titlePage?.image ?? item.cover} alt="" decoding="async" />
            <span className="magazine-open">Read the feature</span>
          </span>
        </button>

        <div className="news-feature-copy">
          <div className="news-tags">
            <span className="news-tag">{newsFormatLabels[item.format]}</span>
            <span className="news-tag news-tag--quiet">Cover story</span>
          </div>
          <p className="news-source">
            {item.source}
            <span aria-hidden="true">·</span>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
          </p>
          <h2 id="feature-title">{item.title}</h2>
          <p className="news-deck">{item.deck}</p>
          <dl className="news-meta">
            {item.byline && (
              <div>
                <dt>Words</dt>
                <dd>{item.byline}</dd>
              </div>
            )}
            {item.pageRange && (
              <div>
                <dt>Pages</dt>
                <dd>{item.pageRange}</dd>
              </div>
            )}
            {item.pages && (
              <div>
                <dt>Length</dt>
                <dd>{item.pages.length} pages</dd>
              </div>
            )}
          </dl>
          <div className="news-actions">
            <button type="button" className="btn btn-brass" onClick={() => onRead(0)}>
              Read the Feature
            </button>
            <a className="btn btn-line" href={item.href} download>
              Download PDF
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function PageStrip({ item, onRead }: { item: NewsItem; onRead: (page: number) => void }) {
  if (!item.pages?.length) return null

  return (
    <section className="news-pages" aria-labelledby="pages-title">
      <Reveal className="news-section-head">
        <p className="eyebrow">Inside the Issue</p>
        <h2 id="pages-title">Turn the pages</h2>
      </Reveal>
      <ol className="page-strip">
        {item.pages.map((entry, index) => (
          <li key={entry.thumb}>
            <button type="button" onClick={() => onRead(index)}>
              <span className="page-strip-paper">
                <img src={entry.thumb} alt={`${item.title}, ${entry.label}`} loading="lazy" decoding="async" />
              </span>
              <span className="page-strip-label">{entry.label}</span>
            </button>
          </li>
        ))}
      </ol>
    </section>
  )
}

function QuoteBand({ item }: { item: NewsItem }) {
  if (!item.quote) return null

  return (
    <section className="news-quote">
      <div className="news-quote-media" aria-hidden="true">
        <img src="/vessels/so-fong-05.jpg" alt="" loading="lazy" decoding="async" />
      </div>
      <Reveal className="news-quote-inner">
        <span className="news-quote-mark" aria-hidden="true">
          “
        </span>
        <blockquote>
          <p>{item.quote.text}</p>
        </blockquote>
        <p className="news-quote-cite">
          {item.quote.attribution}
          <span>
            {item.source}, {formatDate(item.date)}
          </span>
        </p>
      </Reveal>
    </section>
  )
}

function Highlights({ item }: { item: NewsItem }) {
  if (!item.highlights?.length) return null

  return (
    <section className="news-highlights" aria-labelledby="highlights-title">
      <Reveal className="news-section-head">
        <p className="eyebrow">From the Feature</p>
        <h2 id="highlights-title">Five vessels, five stories</h2>
        <p>Tales from the fleet as told in {item.source}.</p>
      </Reveal>
      <div className="highlight-grid">
        {item.highlights.map((highlight) => {
          const vessel = vessels.find((entry) => entry.id === highlight.vesselId)
          if (!vessel) return null

          return (
            <Reveal key={highlight.vesselId} className="highlight-card-wrap">
              <Link className="highlight-card" to={vessel.href}>
                <figure>
                  <img src={vessel.image} alt={`${vessel.designation} ${vessel.name}`} loading="lazy" decoding="async" />
                </figure>
                <div className="highlight-copy">
                  <p className="highlight-meta">
                    {vessel.designation} · {vessel.year}
                  </p>
                  <h3>{vessel.name}</h3>
                  <p>{highlight.text}</p>
                  <span className="highlight-more">Discover {vessel.name}</span>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export function News() {
  const [readerPage, setReaderPage] = useState<number | null>(null)
  const [featured] = newsItems
  const today = mastheadDate.format(new Date())

  useEffect(() => {
    document.title = 'News | Hong Kong Historic Vessels'
    return () => {
      document.title = 'Hong Kong Historic Vessels Foundation'
    }
  }, [])

  return (
    <>
      <SiteHeader />

      <main className="news-page" id="top">
        <header className="news-masthead">
          <div className="news-masthead-inner">
            <div className="news-dateline animate-in">
              <span>{today}</span>
              <span className="news-dateline-centre">Hong Kong Historic Vessels Foundation</span>
              <span>Kwun Tong Typhoon Shelter</span>
            </div>
            <h1 className="animate-in delay-1">
              News <em>&amp;</em> Press
            </h1>
            <p className="news-masthead-zh animate-in delay-2">最新消息</p>
            <p className="news-masthead-lede animate-in delay-2">
              Features, press and dispatches from the fleet, charting the stories of Hong Kong’s historic vessels as
              they are told on the page, on screen and on the water.
            </p>
            <div className="news-masthead-rule animate-in delay-3" aria-hidden="true" />
          </div>
        </header>

        {featured && (
          <>
            <FeaturedMagazine item={featured} onRead={setReaderPage} />
            <QuoteBand item={featured} />
            <PageStrip item={featured} onRead={setReaderPage} />
            <Highlights item={featured} />
            {featured.pages && (
              <MagazineReader item={featured} startPage={readerPage} onClose={() => setReaderPage(null)} />
            )}
          </>
        )}

        <section className="contact-panel news-press" aria-labelledby="press-title">
          <Reveal className="contact-panel-inner">
            <img className="mission-mark" src="/logo-outline.png" alt="" />
            <p className="eyebrow">Press Enquiries</p>
            <h2 id="press-title">Telling the harbour’s story</h2>
            <p>
              Writing about Hong Kong’s maritime heritage? We would be delighted to share archives, imagery and time
              aboard the fleet.
            </p>
            <Link className="btn btn-line news-press-btn" to="/contact">
              Get in Touch
            </Link>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
