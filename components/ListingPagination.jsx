import styles from "@/styles/listingCards.module.css";

/**
 * @param {number} page — 1-based current page
 * @param {number} totalPages
 * @param {(p: number) => void} onPageChange
 * @param {string} [suffix] — e.g. "projects" for aria labels
 */
export default function ListingPagination({
  page,
  totalPages,
  onPageChange,
  suffix = "items",
}) {
  if (totalPages <= 1) return null;

  const go = (p) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next !== page) onPageChange(next);
  };

  const windowSize = 5;
  let start = Math.max(1, page - Math.floor(windowSize / 2));
  const end = Math.min(totalPages, start + windowSize - 1);
  if (end - start + 1 < windowSize) start = Math.max(1, end - windowSize + 1);

  const pages = [];
  for (let i = start; i <= end; i += 1) pages.push(i);

  return (
    <nav
      className={styles.pagination}
      aria-label={`Pagination for ${suffix}`}
    >
      <button
        type="button"
        className={styles.paginationEdge}
        onClick={() => go(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        ← Prev
      </button>

      <div className={styles.paginationPages}>
        {start > 1 && (
          <>
            <button
              type="button"
              className={styles.paginationNum}
              onClick={() => go(1)}
              aria-label="Page 1"
            >
              1
            </button>
            {start > 2 && (
              <span className={styles.paginationEllipsis} aria-hidden>
                …
              </span>
            )}
          </>
        )}
        {pages.map((n) => (
          <button
            key={n}
            type="button"
            className={
              n === page
                ? `${styles.paginationNum} ${styles.paginationNumActive}`
                : styles.paginationNum
            }
            onClick={() => go(n)}
            aria-label={`Page ${n}`}
            aria-current={n === page ? "page" : undefined}
          >
            {n}
          </button>
        ))}
        {end < totalPages && (
          <>
            {end < totalPages - 1 && (
              <span className={styles.paginationEllipsis} aria-hidden>
                …
              </span>
            )}
            <button
              type="button"
              className={styles.paginationNum}
              onClick={() => go(totalPages)}
              aria-label={`Page ${totalPages}`}
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button
        type="button"
        className={styles.paginationEdge}
        onClick={() => go(page + 1)}
        disabled={page >= totalPages}
        aria-label="Next page"
      >
        Next →
      </button>

      <p className={styles.paginationMeta}>
        Page {page} of {totalPages}
      </p>
    </nav>
  );
}
