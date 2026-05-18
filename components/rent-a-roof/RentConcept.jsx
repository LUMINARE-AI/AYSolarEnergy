import styles from "@/styles/rentARoof.module.css";
import { CONCEPT_CARDS } from "@/lib/rentARoofContent";
import RentIcon from "./RentIcon";

export default function RentConcept() {
  return (
    <section
      className={`${styles.section} ${styles.sectionMuted}`}
      aria-labelledby="concept-title"
    >
      <div className={styles.wrapWide}>
        <div className={styles.sectionTitle}>
          <span className={styles.eyebrow}>The opportunity</span>
          <h2 id="concept-title">What is Rent A Roof?</h2>
          <p>
            Rooftops become solar assets. You can own capacity, subscribe to
            cheaper power, or invest—without needing your own roof.
          </p>
          <div className={styles.titleAccent} aria-hidden />
        </div>
        <div className={styles.conceptGrid}>
          {CONCEPT_CARDS.map((card) => (
            <article key={card.title} className={styles.conceptCard}>
              <div className={styles.conceptIcon}>
                <RentIcon name={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
