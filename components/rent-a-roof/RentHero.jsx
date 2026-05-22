import styles from "@/styles/rentARoof.module.css";
import { HERO_STATS } from "@/lib/rentARoofContent";
import { whatsappUrl, WA_RENT_ROOF, WA_RENT_WAITLIST } from "@/lib/whatsapp";

export default function RentHero() {
  return (
    <section className={styles.featureHero} aria-labelledby="rent-feature-title">
      <div className={styles.wrapWide}>
        <div className={styles.featureHeroGrid}>
          <div className={styles.featureHeroCopy}>
            <span className={styles.eyebrow}>Virtual &amp; group net metering</span>
            <h2 id="rent-feature-title" className={styles.featureTitle}>
              Solar access at scale—without your own{" "}
              <span className={styles.goldText}>rooftop</span>
            </h2>
            <p className={styles.featureLead}>
              Rent A Roof by AY Solar Energy brings community-style solar to
              Rajasthan. Own, subscribe, or invest under new VNM and GNM rules.
            </p>
            <p className={styles.introHindi}>
              अब कहीं भी solar लगाओ, हर जगह सस्ती बिजली पाओ।
            </p>
            <div className={styles.introActions}>
              <a
                href={whatsappUrl(WA_RENT_WAITLIST)}
                className={styles.btnPrimary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join waitlist
              </a>
              <a
                href={whatsappUrl(WA_RENT_ROOF)}
                className={styles.btnGoldOutline}
                target="_blank"
                rel="noopener noreferrer"
              >
                List your roof
              </a>
            </div>
          </div>

          <div className={styles.featureVisual}>
            <div className={`${styles.visualCard} ${styles.visualCardAccent}`}>
              <span className={styles.pill}>
                <span className={styles.pillDot} aria-hidden />
                Coming soon
              </span>
              <p className={styles.visualTagline}>
                Launching first in Jaipur &amp; Tonk, Rajasthan
              </p>
              <div className={styles.statsGrid}>
                {HERO_STATS.map((s) => (
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
