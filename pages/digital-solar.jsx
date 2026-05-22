import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/layout/SectionHeader';
import sp from '@/styles/sitePage.module.css';

const HIGHLIGHTS = [
  {
    title: 'Clear numbers',
    text: 'Generation, savings and payback explained in plain language — no jargon overload.',
  },
  {
    title: 'Subsidy-ready paperwork',
    text: 'PM Suryaghar and DISCOM steps mapped so you know what happens next, before you sign.',
  },
  {
    title: 'Jaipur & Tonk focus',
    text: 'Local norms and timelines for rooftop solar in your area, not generic national copy.',
  },
];

export default function DigitalSolarPage() {
  return (
    <>
      <NextSeo
        title="Digital Solar — Online solar guidance | AY Solar Energy"
        description="Plan your rooftop solar with clear digital guidance: system sizing, subsidy path, and next steps from AY Solar Energy in Jaipur & Tonk."
      />

      <div className={sp.root}>
        <Hero
          title="Digital Solar"
          subtitle="Straightforward online guidance for rooftop solar in Jaipur & Tonk"
          pageHero
        />

        <p className={sp.pageIntro}>
          Use this space to understand your options before a site visit — sizing, subsidy direction, and how
          AY Solar Energy supports you from quote to net metering.
        </p>

        <section className={sp.section}>
          <div className={sp.wrap}>
            <SectionHeader
              eyebrow="Approach"
              title="What “Digital Solar” means here"
              sub="Human support with digital clarity — not a faceless bot or a hard sell"
            />
            <div className={sp.prose}>
              <p>
                We keep the process transparent: what you qualify for, what goes on your roof, and what you should
                expect on your bill after commissioning. When you are ready, we book a physical survey and lock the
                design to your structure and DISCOM rules.
              </p>
            </div>
          </div>
        </section>

        <section className={`${sp.section} ${sp.sectionMuted}`}>
          <div className={sp.wrapWide}>
            <div className={sp.grid3}>
              {HIGHLIGHTS.map((item) => (
                <article key={item.title} className={`${sp.card} ${sp.cardTopGold}`}>
                  <h3 style={{ color: 'var(--primary-blue)', marginBottom: 10, fontSize: '1.1rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, color: '#555', lineHeight: 1.65 }}>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={sp.ctaBand}>
          <h2>Prefer a conversation?</h2>
          <p>Call or WhatsApp — we will align digital planning with a real site check.</p>
          <Link href="/contact" className={sp.btnPrimary}>
            Get free consultation
          </Link>
        </section>
      </div>
    </>
  );
}
