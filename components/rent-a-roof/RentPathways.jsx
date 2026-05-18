import Link from "next/link";
import styles from "@/styles/rentARoof.module.css";
import { PATHWAY_CARDS } from "@/lib/rentARoofContent";
import RentIcon from "./RentIcon";
import RentSwipeTrack from "./RentSwipeTrack";

export default function RentPathways() {
  return (
    <section className={styles.section} aria-labelledby="pathways-title">
      <div className={styles.wrapWide}>
        <div className={styles.sectionTitle}>
          <span className={styles.eyebrow}>How it works</span>
          <h2 id="pathways-title">Expertise from roof to bill credits</h2>
          <p>
            Whether you own a roof, run a business, or simply want lower
            bills—choose the path that fits you.
          </p>
          <div className={styles.titleAccent} aria-hidden />
        </div>

        <RentSwipeTrack
          gridClassName={styles.pathwayGrid}
          ariaLabel="Ways to participate"
        >
          {PATHWAY_CARDS.map((card) => (
            <article key={card.title} className={styles.pathwayCard}>
              <div className={styles.pathwayIcon}>
                <RentIcon name={card.icon} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link href={card.href} className={styles.linkMore}>
                Learn more
                <span aria-hidden> →</span>
              </Link>
            </article>
          ))}
        </RentSwipeTrack>
      </div>
    </section>
  );
}
