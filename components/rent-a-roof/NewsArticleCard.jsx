import styles from "@/styles/rentARoof.module.css";

export default function NewsArticleCard({ article }) {
  return (
    <article className={styles.newsArticle} aria-labelledby={`news-${article.id}`}>
      <div className={styles.newsArticlePaper}>
        <div className={styles.newsArticleTop}>
          <span className={styles.newsCornerBadge} aria-hidden>
            <span className={styles.newsCornerNews}>News</span>
            <span className={styles.newsCornerCorner}>Corner</span>
          </span>
          <div className={styles.newsArticleMeta}>
            <span className={styles.newsArticleSource}>{article.source}</span>
            {article.sourceUrl && (
              <span className={styles.newsArticleUrl}>{article.sourceUrl}</span>
            )}
            {article.location && (
              <span className={styles.newsArticleLocation}>{article.location}</span>
            )}
          </div>
        </div>

        <h3 id={`news-${article.id}`} className={styles.newsArticleHeadline}>
          {article.headline}
        </h3>
        {article.subheadline && (
          <p className={styles.newsArticleSubhead}>{article.subheadline}</p>
        )}
        {article.byline && (
          <p className={styles.newsArticleByline}>By {article.byline}</p>
        )}

        <p className={styles.newsArticleIntro}>{article.intro}</p>

        {article.rules?.length > 0 && (
          <div className={styles.newsRulesBox}>
            <p className={styles.newsRulesTitle}>{article.rulesTitle}</p>
            <ul className={styles.newsRulesList}>
              {article.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        )}

        {article.caseStudy && (
          <aside className={styles.newsCaseStudy}>
            <p className={styles.newsCaseStudyTitle}>{article.caseStudy.title}</p>
            <p>{article.caseStudy.body}</p>
          </aside>
        )}

        {article.footer && (
          <p className={styles.newsArticleFooter}>{article.footer}</p>
        )}
      </div>
    </article>
  );
}
