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
    

      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoImage}>
                <Image
                  src="/images/logo.PNG"
                  alt="AY Solar Energy Logo"
                  width={56}
                  height={56}
                />
              </span>
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
