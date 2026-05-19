import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { NextSeo } from 'next-seo';
import SectionHeader from '@/components/layout/SectionHeader';
import PageIcon from '@/components/icons/PageIcon';
import sp from '@/styles/sitePage.module.css';

const FEATURES = [
  { title: 'Expert installation', text: 'Certified engineers with years of experience' },
  { title: 'Quality products', text: 'Top-tier solar panels and inverters' },
  { title: '25-year warranty', text: 'Comprehensive warranty coverage' },
  { title: 'Dedicated support', text: 'Responsive customer support across Rajasthan' },
];

export default function Services() {
  return (
    <>
      <NextSeo
        title="Solar Installation Services Jaipur & Tonk - Rooftop, Commercial, PM Schemes"
        description="Complete solar installation services in Jaipur & Tonk including residential rooftop solar, commercial systems, PM Suryaghar and Kusum Yojana."
      />

      <div className={sp.root}>
        <Hero
          title="Solar installation services in Jaipur & Tonk"
          subtitle="Residential, commercial & government solar solutions"
          pageHero
        />

        <p className={sp.pageIntro}>
          AY Solar Energy provides complete solar installation in Jaipur and Tonk — home rooftop solar,
          commercial systems, and government schemes like PM Suryaghar and KUSUM Yojana.
        </p>

        <section className={sp.section}>
          <div className={sp.wrapWide}>
            <div className={sp.grid4}>
              <ServiceCard
                icon="home"
                title="Residential rooftop solar"
                description="Home solar panel installation in Jaipur with 1kW–10kW rooftop systems and subsidy benefits"
                link="/services/residential"
              />
              <ServiceCard
                icon="factory"
                title="Commercial & industrial"
                description="Commercial solar installation for industries, offices and factories with high ROI"
                link="/services/commercial"
              />
              <ServiceCard
                icon="farm"
                title="PM Kusum Yojana"
                description="PM KUSUM solar pumps for farmers in Rajasthan with up to 90% subsidy"
                link="/services/kusum"
              />
              <ServiceCard
                icon="finance"
                title="Finance & subsidy"
                description="Easy financing options and EMI calculator for solar installations"
                link="/finance"
              />
            </div>
          </div>
        </section>

        <section className={`${sp.section} ${sp.sectionMuted}`}>
          <div className={sp.wrap}>
            <SectionHeader
              eyebrow="Why us"
              title="Why choose our solar services?"
              sub="End-to-end installation and subsidy support in Jaipur & Tonk"
            />
            <div className={sp.grid4}>
              {FEATURES.map((f) => (
                <article key={f.title} className={`${sp.card} ${sp.iconCard}`}>
                  <div className={sp.iconWrap}>
                    <PageIcon name="check" />
                  </div>
                  <h4>{f.title}</h4>
                  <p>{f.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={sp.section}>
          <div className={sp.wrap}>
            <div className={sp.ctaInner}>
              <SectionHeader eyebrow="Get started" title="Ready to go solar?" sub="Free site survey and quote" />
              <Link href="/contact" className={sp.btnPrimary}>
                Request free consultation
              </Link>
            </div>
            <nav className={sp.linkRow} aria-label="Related services">
              <Link href="/pm-suryaghar">PM Suryaghar subsidy</Link>
              <Link href="/services/residential">Home solar</Link>
              <Link href="/services/commercial">Commercial solar</Link>
            </nav>
          </div>
        </section>
      </div>
    </>
  );
}
