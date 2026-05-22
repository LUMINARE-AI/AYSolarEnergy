import Link from 'next/link';
import styles from '@/styles/rentARoof.module.css';
import { whatsappUrl, WA_DIGITAL_SOLAR_CONSULT } from '@/lib/whatsapp';

const STATS = [
  { value: '3', label: 'Simple steps' },
  { value: 'DISCOM', label: 'Bill-led sizing' },
  { value: 'Jaipur', label: '& Tonk focus' },
];

export default function DigitalSolarHero() {
  return (
    <section className={styles.featureHero} aria-labelledby="ds-feature-title">
      <div className={styles.wrapWide}>
        <div className={styles.featureHeroGrid}>
          <div>
            <span className={styles.eyebrow}>Credits &amp; shared solar</span>
            <h2 id="ds-feature-title" className={styles.featureTitle}>
              Digital solar — benefits without always needing your own{' '}
              <span className={styles.goldText}>rooftop</span>
            </h2>
            <p className={styles.featureLead}>
              Understand how off-site generation, bill credits, and group or virtual net metering can fit your
              situation — with numbers you can cross-check against your DISCOM bill.
            </p>
            <p className={styles.introHindi}>
              बिना हमेशा अपनी छत के — बिल और नियमों के हिसाब से साफ़ गणना।
            </p>
            <div className={styles.introActions}>
              <Link href="#calculator" className={styles.btnPrimary}>
                Try calculator
              </Link>
              <a
                href={whatsappUrl(WA_DIGITAL_SOLAR_CONSULT)}
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
                Planning first — promises only after we see your bill and roof rights.
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
