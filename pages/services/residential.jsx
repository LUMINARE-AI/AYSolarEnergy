import Hero from '@/components/Hero';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import SectionHeader from '@/components/layout/SectionHeader';
import PageIcon from '@/components/icons/PageIcon';
import tableStyles from '@/styles/Residential.module.css';
import sp from '@/styles/sitePage.module.css';

const STEPS = [
  { num: '1', title: 'Free consultation', desc: 'Site survey and system design' },
  { num: '2', title: 'Quotation', desc: 'Detailed cost breakdown' },
  { num: '3', title: 'Documentation', desc: 'Subsidy and permission paperwork' },
  { num: '4', title: 'Installation', desc: 'Professional installation' },
  { num: '5', title: 'Testing', desc: 'System testing and commissioning' },
  { num: '6', title: 'Support', desc: '25-year warranty & support' },
];

const FEATURES = [
  'High-efficiency solar panels (20%+ efficiency)',
  'Advanced inverter technology',
  'Net metering support',
  '25-year panel warranty',
  '5-year inverter warranty',
  'Free maintenance for 5 years',
  'Dedicated customer support',
  'Government subsidy assistance',
];

export default function Residential() {
  return (
    <>
      <NextSeo
        title="Home Solar Panel Installation Jaipur - Rooftop Solar Systems Rajasthan"
        description="Residential rooftop solar panel installation in Jaipur & Tonk. 1kW to 10kW home solar systems with subsidy up to ₹78,000 and EMI options."
      />

      <div className={sp.root}>
        <Hero
          title="Home solar panel installation in Jaipur & Tonk"
          subtitle="Rooftop solar systems for homes"
          pageHero
        />

        <p className={sp.pageIntro}>
          AY Solar Energy provides residential rooftop solar panel installation in Jaipur and Tonk.
          Install 1kW to 10kW solar systems and reduce electricity bills by up to 90% with government
          subsidy benefits.
        </p>

        <section className={sp.section}>
          <div className={sp.wrapWide}>
            <SectionHeader
              eyebrow="Pricing"
              title="Home solar system sizes & pricing"
              sub="Estimated pricing for residential rooftop solar in Jaipur (after subsidy where applicable)"
            />
            <div className={`${sp.tableBlock} ${tableStyles.tableSection}`}>
              <div className={tableStyles.tableScroll}>
                <table className={tableStyles.pricingTable}>
                  <caption className={tableStyles.srOnly}>
                    Estimated residential rooftop solar pricing by system size in Jaipur
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">System size</th>
                      <th scope="col">Monthly savings</th>
                      <th scope="col">Investment</th>
                      <th scope="col">Payback</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 kW</td>
                      <td>₹500–800</td>
                      <td>₹30,000</td>
                      <td>1–1.5 years</td>
                    </tr>
                    <tr>
                      <td>2 kW</td>
                      <td>₹1,000–1,600</td>
                      <td>₹60,000</td>
                      <td>2.5–3.5 years</td>
                    </tr>
                    <tr>
                      <td>3 kW</td>
                      <td>₹1,500–2,400</td>
                      <td>₹78,000</td>
                      <td>1.7–2.2 years</td>
                    </tr>
                    <tr>
                      <td>5 kW</td>
                      <td>₹2,500–4,000</td>
                      <td>₹78,000</td>
                      <td>2.5–3.5 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className={`${sp.section} ${sp.sectionMuted}`}>
          <div className={sp.wrapWide}>
            <SectionHeader eyebrow="Process" title="Residential installation process" />
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

        <section className={sp.section}>
          <div className={sp.wrap}>
            <SectionHeader eyebrow="Features" title="Rooftop solar system features" />
            <ul className={sp.featureList}>
              {FEATURES.map((f) => (
                <li key={f}>
                  <PageIcon name="check" size={18} />
                  {f}
                </li>
              ))}
            </ul>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/contact" className={sp.btnPrimary}>
                Get free quote →
              </Link>
            </div>
            <nav className={sp.linkRow} aria-label="Related pages">
              <Link href="/pm-suryaghar">Solar subsidy yojana</Link>
              <Link href="/services/commercial">Commercial solar</Link>
              <Link href="/finance">Solar EMI options</Link>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
}
