import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero({ title, subtitle, cta = true, pageHero = false }) {
  const heroClass = pageHero ? styles.pageHero : styles.hero;

  return (
    <section className={heroClass}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {cta && !pageHero ? (
            // Horizontal layout for home page
            <div className={styles.heroLayout}>
              {/* Left: Title & Subtitle */}
              <div className={styles.heroLeft}>
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
              </div>
              {/* Right: CTA Buttons */}
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
            // Vertical layout for other pages
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
