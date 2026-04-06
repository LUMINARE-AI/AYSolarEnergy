import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>About AY Solar Energy</h3>
              <p>Leading solar energy solutions provider in Jaipur & Tonk, Rajasthan. Specializing in residential, commercial, and government scheme installations.</p>
              <div className={styles.socialLinks}>
                <a href={process.env.NEXT_PUBLIC_WHATSAPP} target="_blank" rel="noopener noreferrer" title="WhatsApp">
                  💬
                </a>
                <a href={`https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM}`} target="_blank" rel="noopener noreferrer" title="Instagram">
                  📷
                </a>
              </div>
            </div>

            <div className={styles.footerSection}>
              <h3>Quick Links</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/pm-suryaghar">PM Suryaghar</Link></li>
                <li><Link href="/finance">Finance</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3>Services</h3>
              <ul>
                <li><Link href="/services/residential">Residential Solar</Link></li>
                <li><Link href="/services/commercial">C&I Solar</Link></li>
                <li><Link href="/services/kusum">Kusum Yojana</Link></li>
                <li><Link href="/finance">Finance Options</Link></li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3>Contact Info</h3>
              <div className={styles.footerContact}>
                <p>📞 {process.env.NEXT_PUBLIC_PHONE}</p>
                <p>📧 {process.env.NEXT_PUBLIC_EMAIL}</p>
                <p>📍 Jaipur & Tonk, Rajasthan</p>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>&copy; 2024 AY Solar Energy. All rights reserved.</p>
            <p>Powered by Next.js & Vercel</p>
          </div>
        </div>
      </footer>

      <a href={process.env.NEXT_PUBLIC_WHATSAPP} target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn} title="Chat on WhatsApp">
        💬
      </a>
    </>
  );
}
