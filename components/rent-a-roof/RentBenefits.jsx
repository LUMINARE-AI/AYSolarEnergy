import styles from "@/styles/rentARoof.module.css";
import { BENEFIT_ROWS } from "@/lib/rentARoofContent";
import RentIcon from "./RentIcon";

export default function RentBenefits() {
  return (
    <section
      className={`${styles.section} ${styles.sectionBenefits}`}
      aria-labelledby="benefits-title"
    >
      <div className={styles.wrapWide}>
        <div className={styles.sectionTitle}>
          <span className={styles.eyebrow}>Subscribe and save</span>
          <h2 id="benefits-title">Benefits of Rent A Roof</h2>
          <p>
            Economic and environmental gains of community-style solar—adapted for
            Rajasthan&apos;s VNM and GNM framework.
          </p>
          <div className={styles.titleAccent} aria-hidden />
        </div>

        <div className={styles.benefitList}>
          {BENEFIT_ROWS.map((row, index) => (
            <article
              key={row.title}
              className={`${styles.benefitCard} ${styles.benefitRow} ${
                index % 2 === 1 ? styles.benefitRowReverse : ""
              }`}
            >
              <div className={styles.benefitVisual}>
                <RentIcon name={row.icon} />
              </div>
              <div className={styles.benefitCopy}>
                <h3>{row.title}</h3>
                <p>{row.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
