import Link from 'next/link';
import HomeShowcase from './HomeShowcase';
import styles from '../styles/Hero.module.css';

export default function Hero({
  title,
  subtitle,
  cta = true,
  pageHero = false,
  homeShowcase = false,
}) {
  const heroClass = pageHero ? styles.pageHero : styles.hero;

  if (homeShowcase && !pageHero) {
    return (
      <div className="surya-hero surya-hero-showcase">
        <HomeShowcase embedded />
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
