import styles from '@/styles/sitePage.module.css';

export default function SectionHeader({ eyebrow, title, sub, onDark = false }) {
  return (
    <div className={`${styles.sectionTitle} ${onDark ? styles.sectionTitleOnDark : ''}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
      <div className={styles.titleAccent} aria-hidden />
    </div>
  );
}
