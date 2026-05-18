import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

function RoofIcon() {
  return (
    <svg
      className={styles.rentRoofIcon}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 11.5L12 4l9 7.5" />
      <path d="M5 10.5V20h14v-9.5" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const syncAuth = useCallback(() => {
    if (typeof window === 'undefined') return;
    setLoggedIn(!!localStorage.getItem('token')?.trim());
  }, []);

  useEffect(() => {
    syncAuth();
    router.events.on('routeChangeComplete', syncAuth);
    window.addEventListener('storage', syncAuth);
    return () => {
      router.events.off('routeChangeComplete', syncAuth);
      window.removeEventListener('storage', syncAuth);
    };
  }, [router.events, syncAuth]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setMobileMenuOpen(false);
    router.push('/');
  };

  const closeMenu = () => setMobileMenuOpen(false);

  const navClass = mobileMenuOpen
    ? `${styles.nav} ${styles.navOpen}`
    : styles.nav;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoImage}>
              <Image
                src="/images/logo.PNG"
                alt="AY Solar Energy"
                width={48}
                height={48}
                priority
              />
            </span>
            <span className={styles.logoText}>AY Solar Energy</span>
          </Link>

          <nav
            id="main-nav"
            className={navClass}
            aria-label="Main navigation"
          >
            <Link
              href="/rent-a-roof"
              className={styles.rentRoofBtnMobile}
              onClick={closeMenu}
            >
              <RoofIcon />
              Rent A Roof
            </Link>
            <ul className={styles.navList}>
              <li>
                <Link href="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" onClick={closeMenu}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={closeMenu}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pm-suryaghar" onClick={closeMenu}>
                  PM Suryaghar
                </Link>
              </li>
              <li>
                <Link href="/finance" onClick={closeMenu}>
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              <li>
                {loggedIn ? (
                  <button
                    type="button"
                    className={styles.authButton}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/admin/login"
                    className={styles.authLink}
                    onClick={closeMenu}
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          <div className={styles.headerActions}>
            <Link href="/rent-a-roof" className={styles.rentRoofBtn}>
              <RoofIcon />
              <span>Rent A Roof</span>
            </Link>
            <Link
              href="/rent-a-roof"
              className={styles.rentRoofBtnCompact}
              onClick={closeMenu}
            >
              <RoofIcon />
              <span>Rent A Roof</span>
            </Link>
            <button
              type="button"
              className={styles.mobileMenuBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="main-nav"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={styles.menuIcon} aria-hidden>
                {mobileMenuOpen ? '✕' : '☰'}
              </span>
            </button>
          </div>
          </div>
        </div>
      {mobileMenuOpen && (
        <button
          type="button"
          className={styles.navBackdrop}
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
