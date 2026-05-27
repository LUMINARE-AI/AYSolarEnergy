/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Hero from '@/components/Hero';
import styles from '@/styles/Home.module.css';
import {
  HOME_STATS,
  WHY_SOLAR,
  HOME_SERVICES,
  WHY_AY,
  TESTIMONIALS,
  BRAND_PANELS,
  BRAND_INVERTERS,
  HOME_FAQS,
  QUICK_LINKS,
} from '@/lib/homePageData';

function SectionHead({ eyebrow, title, sub }) {
  return (
    <header className={styles.sectionHead}>
      <p className={styles.eyebrow}>
        <span className={styles.eyebrowDot} aria-hidden />
        {eyebrow}
      </p>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {sub && <p className={styles.sectionSub}>{sub}</p>}
    </header>
  );
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      <NextSeo
        title="Solar Company Near Me Jaipur | AY Solar Energy"
        description="Looking for a reliable solar company near me in Jaipur? AY Solar Energy offers rooftop, commercial solar installation with subsidy up to ₹78,000. Get free consultation today!"
      />

      <Hero homeShowcase />

      <div className={styles.homePage}>
        <div className={styles.statsBar}>
          {HOME_STATS.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <p className={styles.intro}>
          <strong>AY Solar Energy</strong> provides professional solar panel installation in{' '}
          <strong>Jaipur and Tonk</strong> — rooftop solar, <strong>RESCO / OPEX</strong> for businesses, PM Suryaghar
          subsidy, and our upcoming <strong>Rent A Roof</strong> program.
        </p>

        {/* Why Solar */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHead
              eyebrow="Benefits"
              title="Why choose solar energy?"
              sub="Harness Rajasthan's sunshine with proven savings and government support"
            />
            <div className={styles.grid3}>
              {WHY_SOLAR.map((item) => (
                <article key={item.title} className={styles.featureCard}>
                  <span className={styles.featureIcon} aria-hidden>
                    {item.icon}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <SectionHead
              eyebrow="What we offer"
              title="Our solar services"
              sub="Complete solutions for homes, businesses, farmers — and innovative Rent A Roof"
            />
            <div className={styles.grid5}>
              {HOME_SERVICES.map((svc) => (
                <article
                  key={svc.title}
                  className={`${styles.serviceCard} ${svc.featured ? styles.serviceCardFeatured : ''}`}
                >
                  {svc.tag && <span className={styles.serviceTag}>{svc.tag}</span>}
                  <span className={styles.serviceIcon} aria-hidden>
                    {svc.icon}
                  </span>
                  <h3>{svc.title}</h3>
                  <p>{svc.text}</p>
                  <Link href={svc.href} className={styles.serviceLink}>
                    Learn more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PM Suryaghar promo */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.promoBanner}>
              <h2>Apply for PM Suryaghar Yojana</h2>
              <p>Up to ₹78,000 subsidy + 300 units free electricity every month in Rajasthan</p>
              <Link href="/pm-suryaghar" className={styles.btnGold}>
                Apply now
              </Link>
            </div>
          </div>
        </section>

        {/* Why AY */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <SectionHead
              eyebrow="Why us"
              title="Why choose AY Solar Energy?"
              sub="Your trusted MNRE-channel partner in Jaipur & Tonk"
            />
            <div className={styles.grid4}>
              {WHY_AY.map((item) => (
                <article key={item.title} className={styles.trustCard}>
                  <div className={styles.trustIcon} aria-hidden>
                    {item.icon}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <nav className={styles.quickLinks} aria-label="Related pages">
              {QUICK_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className={styles.quickLink}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHead
              eyebrow="Reviews"
              title="What our customers say"
              sub="Real experiences from homeowners in Jaipur & Tonk"
            />
            <div className={styles.grid3}>
              {TESTIMONIALS.map((t) => (
                <blockquote key={t.name} className={styles.testimonialCard}>
                  <p className={styles.testimonialQuote}>&quot;{t.quote}&quot;</p>
                  <footer>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialPlace}>{t.place}</div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className={`${styles.section} ${styles.sectionDark}`}>
          <div className={styles.container}>
            <SectionHead
              eyebrow="Get started"
              title="Ready to go solar?"
              sub="Free site survey and quote — call or WhatsApp us today"
            />
            <div className={styles.contactGrid}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE?.replace(/\s/g, '')}`}
                  className={styles.contactLink}
                >
                  {process.env.NEXT_PUBLIC_PHONE}
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </span>
                <a
                  href={process.env.NEXT_PUBLIC_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  WhatsApp us
                </a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className={styles.contactLink}>
                  {process.env.NEXT_PUBLIC_EMAIL}
                </a>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: 24 }}>
              <Link href="/contact" className={styles.btnOutline}>
                Request free consultation
              </Link>
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.projectsBlock}>
              <SectionHead
                eyebrow="Portfolio"
                title="View our completed projects"
                sub="500+ successful solar installations across Rajasthan"
              />
              <Link href="/projects" className={styles.btnBlue}>
                View all projects →
              </Link>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <SectionHead
              eyebrow="Partners"
              title="Our brand partners"
              sub="India's leading solar panel and inverter manufacturers"
            />
            <h3 className={styles.brandGroupTitle}>Solar panels</h3>
            <div className={styles.grid4}>
              {BRAND_PANELS.map((b) => (
                <div key={b.name} className={styles.brandTile}>
                  <Image
                    src={b.src}
                    alt={`${b.name} — AY Solar Energy Jaipur`}
                    width={150}
                    height={52}
                    className={styles.brandImg}
                  />
                  <div className={styles.brandName}>{b.name}</div>
                </div>
              ))}
            </div>
            <h3 className={styles.brandGroupTitle}>Inverters</h3>
            <div className={styles.grid4}>
              {BRAND_INVERTERS.map((b) => (
                <div key={b.name} className={styles.brandTile}>
                  <Image
                    src={b.src}
                    alt={`${b.name} inverter — AY Solar Energy`}
                    width={150}
                    height={52}
                    className={styles.brandImg}
                  />
                  <div className={styles.brandName}>{b.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHead
              eyebrow="FAQ"
              title="Frequently asked questions"
              sub="Common questions about solar installation in Jaipur & Tonk"
            />
            <div className={styles.faqList}>
              {HOME_FAQS.map((faq, index) => {
                const open = activeFaq === index;
                return (
                  <div
                    key={faq.question}
                    className={`${styles.faqItem} ${open ? styles.faqItemOpen : ''}`}
                    onClick={() => setActiveFaq(open ? null : index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveFaq(open ? null : index);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={styles.faqQuestion}>
                      {faq.question}
                      <span className={styles.faqToggle} aria-hidden>
                        {open ? '−' : '+'}
                      </span>
                    </div>
                    {open && <p className={styles.faqAnswer}>{faq.answer}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
