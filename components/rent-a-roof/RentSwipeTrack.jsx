'use client';

import { useRef, useState, useEffect, Children, useCallback } from 'react';
import styles from '@/styles/rentARoof.module.css';

export default function RentSwipeTrack({
  children,
  gridClassName = '',
  ariaLabel = 'Cards',
}) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = Children.count(children);

  const syncIndex = useCallback(() => {
    const el = trackRef.current;
    if (!el || count === 0) return;
    const first = el.children[0];
    if (!first) return;
    const slideWidth = first.getBoundingClientRect().width;
    if (slideWidth <= 0) return;
    const gap = parseFloat(getComputedStyle(el).gap) || 16;
    const i = Math.round(el.scrollLeft / (slideWidth + gap));
    setActiveIndex(Math.min(Math.max(i, 0), count - 1));
  }, [count]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', syncIndex, { passive: true });
    window.addEventListener('resize', syncIndex);
    syncIndex();
    return () => {
      el.removeEventListener('scroll', syncIndex);
      window.removeEventListener('resize', syncIndex);
    };
  }, [syncIndex]);

  const scrollTo = (i) => {
    const el = trackRef.current;
    const slide = el?.children[i];
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  if (count === 0) return null;

  return (
    <div className={styles.swipeOuter}>
      {count > 1 && (
        <div className={styles.swipeMeta}>
          <p className={styles.swipeHint} aria-hidden>
            Swipe to explore
          </p>
          <span className={styles.swipeCount} aria-live="polite">
            {activeIndex + 1} / {count}
          </span>
        </div>
      )}

      <div
        ref={trackRef}
        className={`${styles.swipeTrack} ${gridClassName}`.trim()}
        role="list"
        aria-label={ariaLabel}
      >
        {Children.map(children, (child, i) => (
          <div key={i} className={styles.swipeSlide} role="listitem">
            {child}
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className={styles.swipeNav}>
          <button
            type="button"
            className={styles.swipeArrow}
            disabled={activeIndex === 0}
            onClick={() => scrollTo(activeIndex - 1)}
            aria-label="Previous card"
          >
            ‹
          </button>
          <div className={styles.swipeDots}>
            {Array.from({ length: count }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to card ${i + 1}`}
                className={`${styles.swipeDot} ${activeIndex === i ? styles.swipeDotActive : ''}`}
                onClick={() => scrollTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className={styles.swipeArrow}
            disabled={activeIndex === count - 1}
            onClick={() => scrollTo(activeIndex + 1)}
            aria-label="Next card"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
