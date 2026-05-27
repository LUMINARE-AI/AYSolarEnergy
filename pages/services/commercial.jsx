import Hero from '@/components/Hero';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import SectionHeader from '@/components/layout/SectionHeader';
import PageIcon from '@/components/icons/PageIcon';
import sp from '@/styles/sitePage.module.css';

const RESCO_WHAT = [
  'AY Solar Energy invests in the complete solar project',
  'We install the solar plant on your rooftop or facility',
  'Your business purchases solar power through a long-term Power Purchase Agreement (PPA)',
  'AY Solar manages operations, monitoring, servicing, and maintenance',
  'You only pay for the electricity generated from the solar system at a tariff lower than your current DISCOM rates',
];

const KEY_BENEFITS = [
  {
    icon: 'savings',
    title: 'Zero upfront cost',
    text: 'No capital expenditure required for solar installation.',
  },
  {
    icon: 'chart',
    title: 'Lower electricity bills',
    text: 'Reduce electricity costs by up to 20–40% depending on load profile and tariff structure.',
  },
  {
    icon: 'shield',
    title: 'Long-term savings',
    text: 'Lock predictable energy pricing through long-term PPAs.',
  },
  {
    icon: 'leaf',
    title: 'No maintenance hassle',
    text: 'AY Solar handles plant monitoring, O&M, cleaning, repairs, and performance optimization.',
  },
  {
    icon: 'chart',
    title: 'Better cash flow',
    text: 'Avoid large upfront solar investments and preserve capital for core business growth.',
  },
  {
    icon: 'leaf',
    title: 'ESG & sustainability',
    text: 'Reduce carbon footprint and improve sustainability reporting.',
  },
];

const RESCO_PROCESS = [
  {
    num: '1',
    title: 'Site & energy assessment',
    desc: 'Our team evaluates rooftop space, electricity consumption, sanctioned load, shadow analysis, and financial feasibility.',
  },
  {
    num: '2',
    title: 'Customized solar design',
    desc: 'We design a high-efficiency solar system optimized for your facility’s energy profile.',
  },
  {
    num: '3',
    title: 'Power Purchase Agreement (PPA)',
    desc: 'A long-term agreement is signed between AY Solar Energy and your business for solar power supply. Typical RESCO agreements operate between 10–25 years depending on project economics and customer requirements.',
  },
  {
    num: '4',
    title: 'Installation & commissioning',
    desc: 'AY Solar handles engineering, procurement, installation, net metering approvals, safety compliance, and grid synchronization.',
  },
  {
    num: '5',
    title: 'Operations & maintenance',
    desc: 'We continuously monitor system performance to ensure maximum energy generation and uptime.',
  },
];

const INDUSTRIES = [
  { icon: 'manufacturing', title: 'Manufacturing units', text: 'Reduce operational energy costs significantly.' },
  { icon: 'office', title: 'Warehouses & logistics', text: 'Utilize large rooftop spaces for solar generation.' },
  { icon: 'hotel', title: 'Hotels & resorts', text: 'Lower high daytime electricity consumption costs.' },
  { icon: 'hospital', title: 'Hospitals', text: 'Reliable daytime energy savings for critical operations.' },
  { icon: 'school', title: 'Schools & colleges', text: 'Sustainable energy infrastructure for campuses.' },
  { icon: 'retail', title: 'Commercial buildings & offices', text: 'Reduce common area and HVAC electricity expenses.' },
];

const WHY_AY_CI = [
  {
    icon: 'office',
    title: 'Experienced C&I solar team',
    text: 'Professional execution for commercial-scale installations.',
  },
  {
    icon: 'chart',
    title: 'Flexible solar models',
    text: 'Available under RESCO / OPEX, CAPEX ownership, and hybrid solar models.',
  },
  {
    icon: 'shield',
    title: 'High-quality components',
    text: 'Tier-1 solar panels, inverters, and industrial-grade structures.',
  },
  {
    icon: 'savings',
    title: 'End-to-end support',
    text: 'From feasibility analysis to long-term maintenance.',
  },
  {
    icon: 'leaf',
    title: 'Digital monitoring',
    text: 'Real-time energy generation and performance visibility.',
  },
];

const IDEAL_FOR = [
  'Rising DISCOM tariffs',
  'High daytime electricity consumption',
  'Large unused rooftop areas',
  'ESG compliance requirements',
  'Budget limitations for CAPEX solar',
];

export default function Commercial() {
  return (
    <>
      <NextSeo
        title="RESCO Solar for C&I | Zero Upfront Commercial Solar | AY Solar Energy Rajasthan"
        description="RESCO (OPEX) solar for businesses in Rajasthan: AY Solar installs, owns, and operates; you pay only for solar power at a lower PPA tariff. Zero CAPEX, 10–25 year PPAs, full O&M."
      />

      <div className={sp.root}>
        <Hero
          title="RESCO solar for commercial & industrial businesses"
          subtitle="Go solar with zero upfront investment"
          pageHero
        />

        <p className={sp.pageIntro}>
          AY Solar Energy offers RESCO (Renewable Energy Service Company) solar solutions for commercial & industrial
          businesses across Rajasthan. Under the RESCO model, AY Solar Energy installs, owns, operates, and maintains the
          solar power plant at your premises, while your business only pays for the solar electricity consumed at a
          pre-agreed lower tariff. No large capital investment. No maintenance burden. Just lower electricity costs from
          day one. The RESCO model is widely adopted in India for businesses looking to reduce energy expenses without
          upfront investment.
        </p>

        <section className={sp.section}>
          <div className={sp.wrapWide}>
            <SectionHeader eyebrow="Model" title="What is the RESCO model?" />
            <div className={sp.prose} style={{ maxWidth: '720px', margin: '0 auto' }}>
              <p style={{ marginBottom: 16, fontWeight: 600 }}>In the RESCO model:</p>
              <ul style={{ paddingLeft: '1.25rem', lineHeight: 1.75, color: '#444' }}>
                {RESCO_WHAT.map((line) => (
                  <li key={line} style={{ marginBottom: 8 }}>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={`${sp.section} ${sp.sectionMuted}`}>
          <div className={sp.wrapWide}>
            <SectionHeader
              eyebrow="Benefits"
              title="Key benefits for C&I customers"
              sub="OPEX solar designed for predictable savings and zero capex strain"
            />
            <div className={sp.grid3}>
              {KEY_BENEFITS.map((item) => (
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
          <div className={sp.wrapWide}>
            <SectionHeader
              eyebrow="Process"
              title="How the RESCO process works"
              sub="From assessment to decades of monitored generation"
            />
            <div className={sp.stepGrid}>
              {RESCO_PROCESS.map((step) => (
                <article key={step.num} className={sp.stepCard}>
                  <div className={sp.stepNum}>{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sp.section} ${sp.sectionMuted}`}>
          <div className={sp.wrapWide}>
            <SectionHeader eyebrow="Sectors" title="Industries we serve" />
            <div className={sp.grid3}>
              {INDUSTRIES.map((item) => (
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
          <div className={sp.wrapWide}>
            <SectionHeader eyebrow="Why AY" title="Why businesses choose AY Solar Energy" />
            <div className={sp.grid3}>
              {WHY_AY_CI.map((item) => (
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

        <section className={`${sp.section} ${sp.sectionMuted}`}>
          <div className={sp.wrapWide}>
            <SectionHeader eyebrow="Fit" title="Ideal for businesses facing" />
            <div
              className={sp.card}
              style={{ maxWidth: '640px', margin: '0 auto', padding: '28px 24px', borderTop: '3px solid var(--accent-gold, #ffc107)' }}
            >
              <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.8, color: '#444' }}>
                {IDEAL_FOR.map((line) => (
                  <li key={line} style={{ marginBottom: 6 }}>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={sp.ctaBand}>
          <h2>Start saving on electricity without investing in solar infrastructure</h2>
          <p>
            AY Solar Energy helps commercial & industrial businesses transition to clean energy with zero upfront
            investment under the RESCO model.
          </p>
          <p style={{ fontWeight: 700, marginBottom: 20 }}>Reduce costs. Improve sustainability. Go solar smarter.</p>
          <Link href="/contact" className={sp.btnPrimary}>
            Get commercial quote →
          </Link>
          <nav className={sp.linkRow} aria-label="Related pages" style={{ marginTop: 24 }}>
            <Link href="/services/residential">Residential solar</Link>
            <Link href="/pm-suryaghar">Solar subsidy yojana</Link>
            <Link href="/finance">Solar EMI options</Link>
            <Link href="/rent-a-roof">Rent A Roof</Link>
          </nav>
        </section>
      </div>
    </>
  );
}
