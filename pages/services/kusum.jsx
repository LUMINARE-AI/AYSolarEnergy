/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Hero from '@/components/Hero';
import { NextSeo } from 'next-seo';
import SectionHeader from '@/components/layout/SectionHeader';
import PageIcon from '@/components/icons/PageIcon';
import sp from '@/styles/sitePage.module.css';

const COMPONENTS = [
  {
    title: 'Component A',
    name: 'Solar pumps',
    items: ['0.5 to 7.5 HP capacity', 'For irrigation', 'Up to 60% subsidy'],
  },
  {
    title: 'Component B',
    name: 'Grid-connected systems',
    items: ['1 to 10 MW capacity', 'Sell excess power', 'Up to 40% subsidy'],
  },
  {
    title: 'Component C',
    name: 'Standalone systems',
    items: ['For remote areas', 'Up to 50% subsidy', 'No grid connection'],
  },
];

const BENEFITS = [
  { icon: 'savings', title: 'Reduce costs', text: 'Save on diesel and electricity' },
  { icon: 'farm', title: 'Increase yield', text: 'Reliable water supply for irrigation' },
  { icon: 'coins', title: 'Additional income', text: 'Sell excess power to grid' },
  { icon: 'leaf', title: 'Eco-friendly', text: 'Clean energy for agriculture' },
];

const CRITERIA = [
  'Indian farmer with agricultural land',
  'No previous solar subsidy availed (as per scheme rules)',
  'Land suitable for solar installation',
  'Valid electricity connection (for grid-connected options)',
];

const STEPS = [
  { num: '1', title: 'Registration', desc: 'Register on portal' },
  { num: '2', title: 'Verification', desc: 'Land verification' },
  { num: '3', title: 'Approval', desc: 'Get approval' },
  { num: '4', title: 'Installation', desc: 'System installation' },
  { num: '5', title: 'Inspection', desc: 'Government inspection' },
  { num: '6', title: 'Subsidy', desc: 'Receive subsidy' },
];

export default function Kusum() {
  return (
    <>
      <NextSeo
        title="PM KUSUM Yojana Solar Pump Jaipur - Subsidy for Farmers Rajasthan"
        description="PM KUSUM Yojana solar pump in Jaipur with up to 60% subsidy. Solar irrigation for farmers in Rajasthan."
      />

      <div className={sp.root}>
        <Hero
          title="PM KUSUM Yojana solar pump installation"
          subtitle="Government subsidy scheme for farmers"
          pageHero
        />

        <p className={sp.pageIntro}>
          AY Solar Energy provides PM KUSUM Yojana solar pump installation in Jaipur and Tonk. Farmers
          can get up to 60% subsidy on solar irrigation systems and reduce diesel costs permanently.
        </p>

        <section className={sp.section}>
          <div className={sp.wrap}>
            <SectionHeader
              eyebrow="Overview"
              title="PM KUSUM Yojana in Rajasthan"
              sub="Solar pumps, grid-connected systems and standalone options for agricultural use"
            />
            <div className={sp.prose}>
              <p>
                PM Kusum Yojana is a government initiative to provide solar energy solutions to farmers.
                It includes solar pumps, grid-connected systems, and standalone systems for agricultural use.
              </p>
              <p>
                The scheme in Rajasthan helps farmers install solar pumps for irrigation, reduce electricity
                and diesel costs, and provides a reliable power source for agriculture.
              </p>
            </div>
          </div>
        </section>

        <section className={`${sp.section} ${sp.sectionMuted}`}>
          <div className={sp.wrapWide}>
            <SectionHeader eyebrow="Scheme" title="Solar pump components under KUSUM" />
            <div className={sp.grid3}>
              {COMPONENTS.map((c) => (
                <article key={c.title} className={`${sp.card} ${sp.cardTopGold}`}>
                  <h3 style={{ color: 'var(--primary-blue)', marginBottom: 8 }}>{c.title}</h3>
                  <p style={{ fontWeight: 700, marginBottom: 12 }}>{c.name}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {c.items.map((item) => (
                      <li key={item} style={{ fontSize: '0.9rem', color: '#555', padding: '4px 0' }}>
                        ◆ {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={sp.section}>
          <div className={sp.wrap}>
            <SectionHeader eyebrow="Benefits" title="Benefits for farmers" />
            <div className={sp.grid4}>
              {BENEFITS.map((b) => (
                <article key={b.title} className={`${sp.card} ${sp.iconCard}`}>
                  <div className={sp.iconWrap}>
                    <PageIcon name={b.icon} />
                  </div>
                  <h4>{b.title}</h4>
                  <p>{b.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sp.section} ${sp.sectionMuted}`}>
          <div className={sp.wrap}>
            <SectionHeader eyebrow="Eligibility" title="Who can apply?" />
            <ul className={sp.criteriaList}>
              {CRITERIA.map((item) => (
                <li key={item}>
                  <PageIcon name="check" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={sp.section}>
          <div className={sp.wrapWide}>
            <SectionHeader eyebrow="How to apply" title="Application process" />
            <div className={sp.stepGrid}>
              {STEPS.map((step) => (
                <article key={step.num} className={sp.stepCard}>
                  <div className={sp.stepNum}>{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={sp.ctaBand}>
          <h2>Apply for PM KUSUM solar pump</h2>
          <p>Get up to 60% subsidy on solar pumps in Jaipur & Tonk</p>
          <Link href="/contact" className={sp.btnPrimary}>
            Get free consultation
          </Link>
          <nav className={sp.linkRow} style={{ marginTop: 24 }}>
            <Link href="/services/residential" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
              Home solar
            </Link>
            <Link href="/pm-suryaghar" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
              PM Suryaghar
            </Link>
            <Link href="/finance" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
              Solar EMI
            </Link>
          </nav>
        </section>
      </div>
    </>
  );
}
