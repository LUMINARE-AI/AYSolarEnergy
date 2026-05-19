/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Hero from '@/components/Hero';
import { NextSeo } from 'next-seo';
import SectionHeader from '@/components/layout/SectionHeader';
import PageIcon from '@/components/icons/PageIcon';
import sp from '@/styles/sitePage.module.css';

const WHY_US = [
  { icon: 'check', title: 'Government authorized', text: 'Authorized installer for PM Suryaghar Yojana and PM KUSUM schemes' },
  { icon: 'trophy', title: 'Quality assured', text: 'MNRE approved panels and inverters with 25-year warranty' },
  { icon: 'savings', title: 'Maximum subsidy', text: 'We handle all subsidy paperwork to maximize your benefits' },
  { icon: 'rocket', title: 'Fast installation', text: 'Professional installation completed in 3–7 working days' },
  { icon: 'shield', title: 'After-sales support', text: 'Comprehensive warranty and dedicated customer support' },
  { icon: 'globe', title: 'Local expertise', text: 'Deep knowledge of Jaipur & Tonk market and regulations' },
];

const TEAM = [
  { icon: 'engineer', title: 'Certified engineers', text: 'MNRE certified solar installation experts with years of field experience' },
  { icon: 'support', title: 'Support team', text: 'Dedicated customer support available for assistance across Rajasthan' },
  { icon: 'tools', title: 'Maintenance experts', text: 'Regular system maintenance and troubleshooting support' },
];

export default function About() {
  return (
    <>
      <NextSeo
        title="About AY Solar Energy - Solar Company Jaipur"
        description="Learn about AY Solar Energy - leading solar installer in Jaipur & Tonk with 500+ projects and 5+ years of experience"
      />

      <div className={sp.root}>
        <Hero title="About AY Solar Energy" subtitle="Leading solar solutions provider in Rajasthan" pageHero />

        <section className={sp.section}>
          <div className={sp.wrap}>
            <SectionHeader eyebrow="Our story" title="Who we are" />
            <div className={sp.prose}>
              <p>
                AY Solar Energy is a leading solar energy solutions provider based in Jaipur & Tonk,
                Rajasthan. Founded with a mission to democratize solar energy, we have successfully
                installed solar systems for over 500 households and businesses across Rajasthan.
              </p>
              <p>
                With more than 2500+ kW of installed solar capacity and 5+ years of industry experience,
                we&apos;ve become a trusted name in the solar energy sector. Our commitment to quality,
                affordability, and customer satisfaction has made us the preferred choice for solar
                installations in Jaipur and Tonk.
              </p>
              <p>
                We are authorized installers for PM Suryaghar Yojana and PM KUSUM schemes, helping
                customers maximize government subsidies while transitioning to clean, renewable energy.
              </p>
            </div>
          </div>
        </section>

        <section className={`${sp.section} ${sp.sectionMuted}`}>
          <div className={sp.wrap}>
            <SectionHeader eyebrow="Purpose" title="Mission & vision" />
            <div className={sp.grid2}>
              <article className={`${sp.card} ${sp.cardTopGold}`}>
                <div className={sp.iconWrap} style={{ margin: '0 0 16px' }}>
                  <PageIcon name="mission" />
                </div>
                <h3 style={{ color: 'var(--primary-blue)', marginBottom: 12 }}>Our mission</h3>
                <p style={{ lineHeight: 1.75, color: '#555', margin: 0 }}>
                  To provide affordable, reliable, and sustainable solar energy solutions that empower
                  individuals and businesses to reduce their carbon footprint and energy costs — making
                  solar accessible to every household and business in Rajasthan.
                </p>
              </article>
              <article className={`${sp.card} ${sp.cardTopGold}`}>
                <div className={sp.iconWrap} style={{ margin: '0 0 16px' }}>
                  <PageIcon name="vision" />
                </div>
                <h3 style={{ color: 'var(--primary-blue)', marginBottom: 12 }}>Our vision</h3>
                <p style={{ lineHeight: 1.75, color: '#555', margin: 0 }}>
                  To be the most trusted solar energy provider in Rajasthan, enabling a sustainable
                  future through clean energy adoption — a state where every home and business harnesses
                  the power of the sun.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={sp.section}>
          <div className={sp.wrapWide}>
            <SectionHeader eyebrow="Track record" title="Our numbers" sub="Proven results across Jaipur, Tonk and nearby districts" />
            <div className={sp.grid4}>
              {[
                { num: '200+', label: 'Projects completed', hint: 'Across Jaipur & Tonk' },
                { num: '2500+', label: 'kW installed', hint: 'Clean solar power' },
                { num: '5+', label: 'Years experience', hint: 'Industry expertise' },
                { num: '₹1 Cr+', label: 'Customer savings', hint: 'Annual electricity savings' },
              ].map((s) => (
                <div key={s.label} className={sp.statCard}>
                  <span className={sp.statNum}>{s.num}</span>
                  <span className={sp.statLabel}>{s.label}</span>
                  <p className={sp.statHint}>{s.hint}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sp.section} ${sp.sectionMuted}`}>
          <div className={sp.wrapWide}>
            <SectionHeader eyebrow="Why us" title="Why choose AY Solar Energy?" />
            <div className={sp.grid3}>
              {WHY_US.map((item) => (
                <article key={item.title} className={`${sp.card} ${sp.iconCard}`}>
                  <div className={sp.iconWrap}>
                    <PageIcon name={item.icon} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={sp.section}>
          <div className={sp.wrap}>
            <SectionHeader
              eyebrow="People"
              title="Our expert team"
              sub="Experienced professionals dedicated to delivering quality solar solutions"
            />
            <div className={sp.grid3}>
              {TEAM.map((item) => (
                <article key={item.title} className={`${sp.card} ${sp.iconCard}`}>
                  <div className={sp.iconWrap}>
                    <PageIcon name={item.icon} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={sp.ctaBand}>
          <h2>Ready to go solar?</h2>
          <p>Get a free consultation and quote for your solar installation today</p>
          <Link href="/contact" className={sp.btnPrimary}>
            Get free quote
          </Link>
        </section>
      </div>
    </>
  );
}
