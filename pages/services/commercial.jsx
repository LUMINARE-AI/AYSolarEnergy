import Hero from '@/components/Hero';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import SectionHeader from '@/components/layout/SectionHeader';
import PageIcon from '@/components/icons/PageIcon';
import sp from '@/styles/sitePage.module.css';

const APPLICATIONS = [
  { icon: 'office', title: 'Office buildings', text: 'Reduce operational costs with rooftop solar' },
  { icon: 'manufacturing', title: 'Manufacturing units', text: 'Large-scale solar for industrial operations' },
  { icon: 'retail', title: 'Retail stores', text: 'Solar solutions for shopping complexes' },
  { icon: 'hospital', title: 'Hospitals & clinics', text: 'Reliable backup power with solar' },
  { icon: 'school', title: 'Educational institutions', text: 'Sustainable energy for schools & colleges' },
  { icon: 'hotel', title: 'Hotels & resorts', text: 'Cost-effective energy for hospitality' },
];

const BENEFITS = [
  { icon: 'savings', title: 'Reduce operating costs', text: 'Save up to 80% on electricity bills' },
  { icon: 'chart', title: 'Increase profitability', text: 'Better bottom line with lower energy costs' },
  { icon: 'leaf', title: 'Corporate responsibility', text: 'Demonstrate environmental commitment' },
  { icon: 'shield', title: 'Energy independence', text: 'Protection from rising electricity rates' },
];

const PROCESS = [
  { num: '1', title: 'Energy audit', desc: 'Analyze your energy consumption' },
  { num: '2', title: 'Custom design', desc: 'Tailored solar solution' },
  { num: '3', title: 'ROI analysis', desc: 'Clear financial projections' },
  { num: '4', title: 'Installation', desc: 'Professional implementation' },
  { num: '5', title: 'Monitoring', desc: 'Real-time performance tracking' },
  { num: '6', title: 'Support', desc: 'Ongoing maintenance & support' },
];

export default function Commercial() {
  return (
    <>
      <NextSeo
        title="Commercial & Industrial Solar - AY Solar Energy"
        description="Large-scale solar solutions for businesses and industries in Jaipur & Tonk"
      />

      <div className={sp.root}>
        <Hero
          title="Commercial solar installation in Jaipur & Tonk"
          subtitle="Industrial solar solutions for businesses"
          pageHero
        />

        <p className={sp.pageIntro}>
          AY Solar Energy provides commercial solar installation in Jaipur and Tonk for offices, factories,
          schools, and industries. Reduce electricity costs by up to 80% with high-efficiency solar systems.
        </p>

        <section className={sp.section}>
          <div className={sp.wrapWide}>
            <SectionHeader eyebrow="Applications" title="Commercial solar applications" />
            <div className={sp.grid3}>
              {APPLICATIONS.map((item) => (
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
            <SectionHeader eyebrow="Benefits" title="Benefits of commercial solar" />
            <div className={sp.grid4}>
              {BENEFITS.map((item) => (
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
            <SectionHeader eyebrow="Process" title="Our installation process" />
            <div className={sp.stepGrid}>
              {PROCESS.map((step) => (
                <article key={step.num} className={sp.stepCard}>
                  <div className={sp.stepNum}>{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </article>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 40 }}>
              <Link href="/contact" className={sp.btnPrimary}>
                Get commercial quote →
              </Link>
            </div>
            <nav className={sp.linkRow} aria-label="Related pages">
              <Link href="/services/residential">Residential solar</Link>
              <Link href="/pm-suryaghar">Solar subsidy yojana</Link>
              <Link href="/finance">Solar EMI options</Link>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
}
