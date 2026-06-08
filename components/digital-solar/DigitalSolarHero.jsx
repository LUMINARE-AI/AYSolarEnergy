import Link from 'next/link';
import styles from '@/styles/rentARoof.module.css';
import { whatsappUrl, WA_SOLARFI_CONSULT } from '@/lib/whatsapp';

const STATS = [
  { value: '10 yr', label: 'Typical tenure' },
  { value: 'C&I', label: 'Hosted projects' },
  { value: 'Digital', label: 'Reserve & monitor' },
];

export default function DigitalSolarHero() {
  return (
    <section className={styles.featureHero} aria-labelledby="ds-feature-title">
      <div className={styles.wrapWide}>
        <div className={styles.featureHeroGrid}>
          <div>
            <span className={styles.eyebrow}>SolarFi</span>
            <h2 id="ds-feature-title" className={styles.featureTitle}>
              Own solar capacity digitally &amp;{' '}
              <span className={styles.goldText}>reduce your electricity bills</span>
            </h2>
            <p className={styles.featureLead}>
              Reserve capacity from large commercial &amp; industrial solar projects installed and managed by AY
              Solar Energy — clean energy from your reserved share becomes bill savings over a fixed tenure, with no
              rooftop installation at your home.
            </p>
            <div className={styles.introActions}>
              <Link href="#calculator" className={styles.btnPrimary}>
                Try calculator
              </Link>
              <a
                href={whatsappUrl(WA_SOLARFI_CONSULT)}
                className={styles.btnOutline}
                target="_blank"
                rel="noopener noreferrer"
              >
                Talk to us
              </a>
              <Link href="/rent-a-roof" className={styles.btnGoldOutline}>
                Rent A Roof
              </Link>
            </div>
          </div>

          <div className={styles.featureVisual}>
            <div className={`${styles.visualCard} ${styles.visualCardAccent}`}>
              <span className={styles.pill}>
                <span className={styles.pillDot} aria-hidden />
                AY Solar Energy
              </span>
              <p className={styles.visualTagline}>
                Inspired by emerging SolarFi and community solar platforms in India.
              </p>
              <div className={styles.statsGrid}>
                {STATS.map((s) => (
                  <div key={s.label} className={styles.statCard}>
                    <span className={styles.statValue}>{s.value}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
