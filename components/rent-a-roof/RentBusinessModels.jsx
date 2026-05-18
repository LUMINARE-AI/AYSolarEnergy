import Link from "next/link";
import styles from "@/styles/rentARoof.module.css";
import { BUSINESS_MODELS } from "@/lib/rentARoofContent";
import RentIcon from "./RentIcon";
import RentSwipeTrack from "./RentSwipeTrack";

export default function RentBusinessModels() {
  return (
    <section
      id="participate"
      className={`${styles.section} ${styles.sectionMuted}`}
      aria-labelledby="models-title"
    >
      <div className={styles.wrapWide}>
        <div className={styles.sectionTitle}>
          <span className={styles.eyebrow}>Participate</span>
          <h2 id="models-title">Six ways to get started</h2>
          <p>
            Detailed models under Rajasthan&apos;s VNM and GNM framework—for
            homes, businesses, investors, and roof owners.
          </p>
          <div className={styles.titleAccent} aria-hidden />
        </div>

        <RentSwipeTrack
          gridClassName={styles.modelsGrid}
          ariaLabel="Participation models"
        >
          {BUSINESS_MODELS.map((model) => (
            <article key={model.title} className={styles.modelCard}>
              <div className={styles.modelIcon}>
                <RentIcon name={model.icon} />
              </div>
              <h3>{model.title}</h3>
              <p className={styles.modelDesc}>{model.description}</p>
              <ul className={styles.modelBenefits}>
                {model.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className={styles.modelAudience}>{model.audience}</p>
              <Link href="#waitlist" className={styles.linkMore}>
                Join waitlist
                <span aria-hidden> →</span>
              </Link>
            </article>
          ))}
        </RentSwipeTrack>
      </div>
    </section>
  );
}
