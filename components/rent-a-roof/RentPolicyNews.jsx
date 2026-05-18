import styles from "@/styles/rentARoof.module.css";
import { NEWS_ARTICLES } from "@/lib/rentARoofContent";
import NewsArticleCard from "./NewsArticleCard";
import RentSwipeTrack from "./RentSwipeTrack";

export default function RentPolicyNews() {
  return (
    <section className={styles.section} aria-labelledby="policy-title">
      <div className={styles.wrapWide}>
        <div className={styles.sectionTitle}>
          <span className={styles.eyebrow}>Policy &amp; updates</span>
          <h2 id="policy-title">Rajasthan opens broader solar access</h2>
          <p>
            RERC&apos;s Virtual Net Metering and Group Net Metering rules are the
            foundation for Rent A Roof in Rajasthan.
          </p>
          <div className={styles.titleAccent} aria-hidden />
        </div>

        <div className={styles.policyBlock}>
          <div className={styles.policyHead}>
            <p className={styles.policyLabel}>What changed</p>
            <p>
              You can use solar energy without installing panels on your own
              rooftop—credits can be shared across meters under the new
              framework.
            </p>
          </div>
          <div className={styles.policyBody}>
            <p className={styles.newsSectionLabel}>In the news</p>
            <RentSwipeTrack
              gridClassName={styles.newsGrid}
              ariaLabel="Policy news"
            >
              {NEWS_ARTICLES.map((article) => (
                <NewsArticleCard key={article.id} article={article} />
              ))}
            </RentSwipeTrack>
          </div>
        </div>
      </div>
    </section>
  );
}
