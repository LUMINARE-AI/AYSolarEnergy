import Link from 'next/link';

export default function ServiceCard({ icon, title, description, link }) {
  return (
    <div style={styles.card}>
      <div style={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <Link href={link} style={styles.link}>Learn More →</Link>}
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '15px',
  },
  link: {
    color: 'var(--primary-blue)',
    fontWeight: '600',
    marginTop: '15px',
    display: 'inline-block',
  },
};
