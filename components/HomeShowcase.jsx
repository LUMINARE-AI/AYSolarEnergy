'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/HomeShowcase.module.css';

const PANEL_COUNT = 4;
const AUTO_MS = 5000;

function RoofIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden>
      <polygon points="100,25 175,95 25,95" fill="#0057B8" />
      <rect x="55" y="95" width="90" height="75" fill="#E3F2FD" stroke="#0057B8" strokeWidth="2" />
      <rect x="80" y="115" width="40" height="55" fill="#8B4513" />
      <circle cx="145" cy="55" r="22" fill="#FFC107" />
    </svg>
  );
}

function SunIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden>
      <circle cx="50" cy="50" r="30" fill="#FFC107" />
      <g stroke="#FFC107" strokeWidth="4" strokeLinecap="round">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line key={deg} x1="50" y1="8" x2="50" y2="18" transform={`rotate(${deg} 50 50)`} />
        ))}
      </g>
    </svg>
  );
}

function HouseIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden>
      <rect x="40" y="80" width="120" height="100" fill="#E3F2FD" stroke="#0057B8" strokeWidth="2" />
      <polygon points="40,80 100,20 160,80" fill="#0057B8" />
      <rect x="85" y="120" width="30" height="60" fill="#8B4513" />
      {[60, 80, 100, 120].map((x) => (
        <rect key={x} x={x} y="35" width="15" height="20" fill="#1976D2" stroke="#0057B8" strokeWidth="1" />
      ))}
    </svg>
  );
}

function FarmIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden>
      <circle cx="160" cy="30" r="20" fill="#FFC107" />
      <rect x="20" y="40" width="50" height="40" fill="#1976D2" stroke="#0057B8" strokeWidth="2" />
      <rect x="20" y="150" width="160" height="40" fill="#90EE90" stroke="#228B22" strokeWidth="2" />
    </svg>
  );
}

function SolarCells({ active }) {
  return (
    <span className={`${styles.solarCells} ${active ? styles.solarCellsActive : ''}`} aria-hidden>
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className={styles.solarCell} />
      ))}
    </span>
  );
}

const PANEL_DATA = [
  {
    id: 'rent',
    shortTitle: 'Rent A Roof',
    badge: 'Coming Soon',
    featured: true,
    theme: 'rent',
    heading: 'Rent A Roof',
    subheading: 'Solar without your own rooftop',
    description:
      'Virtual and Group Net Metering in Rajasthan. Use solar credits from another site, list your roof for income, or join early access in Jaipur and Tonk.',
    features: [
      'VNM and GNM under new RERC rules',
      'No panels required on every property',
      'Early access waitlist open now',
    ],
    cta1: { label: 'Join waitlist', href: '/rent-a-roof#waitlist', variant: 'gold' },
    cta2: { label: 'Explore', href: '/rent-a-roof', variant: 'ghost' },
    visual: <RoofIcon className={styles.visualSvg} />,
  },
  {
    id: 'suryaghar',
    shortTitle: 'PM Suryaghar',
    badge: 'Government scheme',
    theme: 'suryaghar',
    heading: 'PM Suryaghar Muft Bijli Yojana',
    subheading: '300 units FREE electricity every month',
    description:
      "India's biggest rooftop solar scheme. Up to Rs 78,000 central subsidy plus Rajasthan state subsidy. Authorized installer in Jaipur and Tonk.",
    features: ['1 kW - Rs 30,000', '2 kW - Rs 60,000', '3 kW+ - Rs 78,000'],
    cta1: { label: 'Apply now', href: '/pm-suryaghar', variant: 'gold' },
    cta2: { label: 'Eligibility', href: '/contact', variant: 'ghost' },
    visual: <SunIcon className={`${styles.visualSvg} ${styles.visualSpin}`} />,
    stats: [
      { value: 'Rs 78k', label: 'Max subsidy' },
      { value: '300', label: 'Free units/mo' },
    ],
  },
  {
    id: 'home',
    shortTitle: 'Home Solar',
    badge: 'Most popular',
    theme: 'home',
    heading: 'Home rooftop solar installation',
    subheading: 'Cut your electricity bill by up to 90%',
    description:
      '1kW to 10kW rooftop systems in Jaipur, Tonk and nearby districts. MNRE-approved hardware and complete subsidy paperwork.',
    features: [
      'MNRE approved panels and inverters',
      '5-year installation warranty',
      'Install in 3-7 working days',
    ],
    cta1: { label: 'Get free quote', href: '/contact', variant: 'primary' },
    cta2: { label: 'Learn more', href: '/services/residential', variant: 'ghost' },
    visual: <HouseIcon className={styles.visualSvg} />,
  },
  {
    id: 'kusum',
    shortTitle: 'PM Kusum',
    badge: 'For farmers',
    theme: 'kusum',
    heading: 'PM Kusum Yojana',
    subheading: 'Solar pumps for Rajasthan farmers',
    description:
      'Replace diesel pumps with solar irrigation. Up to 90% subsidy. Save Rs 8,000 to Rs 15,000 monthly in Tonk, Jaipur and more.',
    features: ['90% government subsidy', 'Zero diesel costs', '3HP to 10HP pump sizes'],
    cta1: { label: 'Apply for pump', href: '/services/kusum', variant: 'green' },
    cta2: { label: 'Districts', href: '/contact', variant: 'ghost' },
    visual: <FarmIcon className={styles.visualSvg} />,
  },
];

export default function HomeShowcase({ embedded = false }) {
  const [activePanel, setActivePanel] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;
    timerRef.current = setInterval(() => {
      setActivePanel((p) => (p + 1) % PANEL_COUNT);
    }, AUTO_MS);
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  useEffect(() => {
    if (!isMobile || !trackRef.current) return;
    const child = trackRef.current.children[activePanel];
    child?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activePanel, isMobile]);

  const goTo = (index) => {
    setActivePanel(index);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActivePanel((p) => (p + 1) % PANEL_COUNT);
    }, AUTO_MS);
  };

  const syncScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.children[0];
    if (!first) return;
    const w = first.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(el).gap) || 14;
    const i = Math.round(el.scrollLeft / (w + gap));
    setActivePanel(Math.min(Math.max(i, 0), PANEL_COUNT - 1));
  };

  const panel = PANEL_DATA[activePanel];

  const renderPanelBody = (p) => (
    <>
      <span className={`${styles.badge} ${p.featured ? styles.badgeFeatured : ''}`}>
        {p.featured && <span className={styles.badgeIcon} aria-hidden>☀</span>}
        {p.badge}
      </span>
      <h2 className={styles.cardHeading}>{p.heading}</h2>
      <p className={styles.cardSub}>{p.subheading}</p>
      <p className={styles.cardDesc}>{p.description}</p>
      <ul className={styles.featureList}>
        {p.features.map((f) => (
          <li key={f} className={styles.featureRow}>
            <span className={styles.featureSun} aria-hidden>◆</span>
            {f}
          </li>
        ))}
      </ul>
      <div className={styles.ctaRow}>
        <Link href={p.cta1.href} className={`${styles.ctaPrimary} ${styles[`cta_${p.cta1.variant}`]}`}>
          {p.cta1.label}
        </Link>
        <Link href={p.cta2.href} className={`${styles.ctaGhost} ${styles[`ctaGhost_${p.theme}`]}`}>
          {p.cta2.label}
        </Link>
      </div>
    </>
  );

  return (
    <section
      className={`${styles.pageWrap} ${embedded ? styles.pageWrapEmbedded : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Solar schemes showcase"
    >
      <div className={styles.heroDecor} aria-hidden>
        <span className={styles.heroSun} />
        <span className={styles.heroRays} />
      </div>

      <header className={styles.heroHeader}>
        {/* <span className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          MNRE-channel partner · Rajasthan
        </span> */}
        <h1 className={styles.heroTitle}>
          Solar panel installation in{' '}
          <span className={styles.heroAccent}>Jaipur &amp; Tonk</span>
        </h1>
      </header>

      {!isMobile && (
        <>
          <p className={styles.schemeEyebrow}>Schemes &amp; services</p>
          <div className={styles.schemeTabs} role="tablist" aria-label="Solar schemes">
            {PANEL_DATA.map((p, i) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={activePanel === i}
                className={`${styles.schemeTab} ${activePanel === i ? styles.schemeTabActive : ''} ${
                  p.featured ? styles.schemeTabFeatured : ''
                }`}
                onClick={() => goTo(i)}
              >
                <SolarCells active={activePanel === i} />
                <span className={styles.schemeTabTitle}>{p.shortTitle}</span>
                {p.featured && <span className={styles.schemeTabTag}>New</span>}
              </button>
            ))}
          </div>
        </>
      )}

      {isMobile && (
        <p className={styles.mobileLead}>
          Swipe or tap a scheme — <strong>{panel.shortTitle}</strong>
          {panel.featured && <span className={styles.mobileNewTag}>New</span>}
        </p>
      )}

      <div
        className={`${styles.solarFrame} ${panel.featured ? styles.solarFrameFeatured : ''}`}
        data-theme={panel.theme}
      >
        {!isMobile ? (
          <div key={panel.id} className={`${styles.showcasePanel} ${styles.panelFade}`}>
            <div className={`${styles.visualPane} ${styles[`visualTheme_${panel.theme}`]}`}>
              <div className={styles.solarGridBg} aria-hidden />
              <div className={styles.visualGlow} aria-hidden />
              <div className={styles.visualInner}>
                {panel.visual}
                {panel.stats && (
                  <div className={styles.statRow}>
                    {panel.stats.map((s) => (
                      <div key={s.label} className={styles.statChip}>
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.contentPane}>{renderPanelBody(panel)}</div>
          </div>
        ) : (
          <div ref={trackRef} className={styles.mobileTrack} onScroll={syncScroll}>
            {PANEL_DATA.map((p, i) => (
              <article
                key={p.id}
                className={`${styles.mobileCard} ${activePanel === i ? styles.mobileCardActive : ''} ${
                  p.featured ? styles.mobileCardFeatured : ''
                }`}
                data-theme={p.theme}
              >
                <div className={`${styles.visualPane} ${styles.visualPaneMobile} ${styles[`visualTheme_${p.theme}`]}`}>
                  <div className={styles.solarGridBg} aria-hidden />
                  <span className={styles.mobileCardLabel}>
                    {p.shortTitle}
                    {p.featured && ' · Coming soon'}
                  </span>
                  <div className={styles.visualInner}>{p.visual}</div>
                </div>
                <div className={styles.contentPane}>{renderPanelBody(p)}</div>
              </article>
            ))}
          </div>
        )}

        <div className={styles.frameFooter}>
          <div className={styles.progressTrack} aria-hidden>
            <span
              className={styles.progressFill}
              style={{ animationDuration: isPaused ? '0s' : `${AUTO_MS}ms` }}
              key={activePanel}
            />
          </div>
          <nav className={styles.nav} aria-label="Slide navigation">
            {isMobile ? (
              <div className={styles.mobileNavPills}>
                {PANEL_DATA.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`${styles.mobileNavPill} ${
                      activePanel === i ? styles.mobileNavPillActive : ''
                    } ${p.featured ? styles.mobileNavPillFeatured : ''}`}
                    aria-current={activePanel === i ? 'true' : undefined}
                  >
                    {p.shortTitle}
                  </button>
                ))}
              </div>
            ) : (
              <>
                {PANEL_DATA.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => goTo(i)}
                    className={`${styles.navDot} ${activePanel === i ? styles.navDotActive : ''} ${
                      p.featured ? styles.navDotFeatured : ''
                    }`}
                    data-theme={p.theme}
                    aria-label={p.shortTitle}
                    aria-current={activePanel === i ? 'true' : undefined}
                  />
                ))}
                <span className={styles.navCounter}>
                  {activePanel + 1} / {PANEL_COUNT}
                </span>
              </>
            )}
          </nav>
        </div>
      </div>
    </section>
  );
}
