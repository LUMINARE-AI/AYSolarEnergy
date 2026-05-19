import Link from 'next/link';
import PageIcon from '@/components/icons/PageIcon';
import sp from '@/styles/sitePage.module.css';

export default function ServiceCard({ icon, title, description, link }) {
  return (
    <article className={sp.serviceCard}>
      <div className={sp.iconWrap}>
        <PageIcon name={icon} size={28} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <Link href={link} className={sp.serviceLink}>
          Learn more →
        </Link>
      )}
    </article>
  );
}
