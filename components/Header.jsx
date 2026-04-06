import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <>
      <div className={styles.topBar} style={!isHome ? { padding: '5px 0' } : {}}>
        <div className={styles.container}>
          <div className={styles.topBarContent} style={!isHome ? { fontSize: '0.8rem', gap: '15px' } : {}}>
            <div className={styles.topBarLeft}>
              <span>📞 {process.env.NEXT_PUBLIC_PHONE}</span>
              <span>📧 {process.env.NEXT_PUBLIC_EMAIL}</span>
            </div>
            <div className={styles.topBarRight}>
              <a href={process.env.NEXT_PUBLIC_WHATSAPP} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href={`https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM}`} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className={styles.header} style={!isHome ? { padding: '8px 0' } : {}}>
        <div className={styles.container}>
          <div className={styles.headerContent} style={!isHome ? { padding: '8px 0' } : {}}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/images/logo.PNG"
                alt="AY Solar Energy Logo"
                width={70}
                height={70}
                style={{ marginRight: '10px' }}
              />
              <span>AY Solar Energy</span>
            </Link>

            <button
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              ☰
            </button>

            <nav className={mobileMenuOpen ? styles.navActive : styles.nav}>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/pm-suryaghar">PM Suryaghar</Link></li>
                <li><Link href="/finance">Finance</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
