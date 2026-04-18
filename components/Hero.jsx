import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero({
  title,
  subtitle,
  cta = true,
  pageHero = false,
  homeShowcase = false,
  homeBadge = 'Trusted solar partner · Jaipur & Tonk',
  homeTitleLead = 'Solar panel installation in',
  homeTitleAccent = 'Jaipur & Tonk',
  homeTitleRest = 'by AY Solar Energy',
  homeSubtitle,
}) {
  const heroClass = pageHero ? styles.pageHero : styles.hero;
  const sub = homeSubtitle ?? subtitle;

  if (homeShowcase && !pageHero) {
    return (
      <div className="surya-hero">
        <div className="surya-hero-sun" />
        <div className="surya-hero-rays">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="surya-ray"
              style={{ transform: `rotate(${i * 30}deg)` }}
            />
          ))}
        </div>
        <div className="surya-hero-grid" />
        <div className="surya-hero-content">
          <div className="surya-badge">
            <span className="surya-badge-dot" />
            {homeBadge}
          </div>
          <h1 className="surya-hero-title">
            {homeTitleLead} <span>{homeTitleAccent}</span>
            <br />
            {homeTitleRest}
          </h1>
          {sub && <p className="surya-hero-sub">{sub}</p>}
          {cta && (
            <div className="surya-hero-actions">
              <Link href="/pm-suryaghar" className="surya-hero-btn">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Explore PM Suryaghar
              </Link>
              <Link href="/contact" className="surya-hero-btn-outline">
                Get free consultation
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className={heroClass}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {cta && !pageHero ? (
            <div className={styles.heroLayout}>
              <div className={styles.heroLeft}>
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
              </div>
              <div className={styles.heroRight}>
                <div className={styles.heroCta}>
                  <Link href="/pm-suryaghar" className={`${styles.btn} ${styles.btnPrimary}`}>
                    Explore PM Suryaghar
                  </Link>
                  <Link href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
                    Get Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h1>{title}</h1>
              {subtitle && <p>{subtitle}</p>}
              {cta && !pageHero && (
                <div className={styles.heroCta}>
                  <Link href="/pm-suryaghar" className={`${styles.btn} ${styles.btnPrimary}`}>
                    Explore PM Suryaghar
                  </Link>
                  <Link href="/contact" className={`${styles.btn} ${styles.btnSecondary}`}>
                    Get Free Consultation
                  </Link>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
