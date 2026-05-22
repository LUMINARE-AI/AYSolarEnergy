import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Hero from '@/components/Hero';
import DigitalSolarHero from '@/components/digital-solar/DigitalSolarHero';
import DigitalSolarCalculator from '@/components/digital-solar/DigitalSolarCalculator';
import RentSwipeTrack from '@/components/rent-a-roof/RentSwipeTrack';
import RentIcon from '@/components/rent-a-roof/RentIcon';
import r from '@/styles/rentARoof.module.css';
import { whatsappUrl, WA_DIGITAL_SOLAR_CONSULT } from '@/lib/whatsapp';

function WaOrLink({ href, className, children }) {
  if (typeof href === 'string' && /^https?:\/\//.test(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return <Link href={href} className={className}>{children}</Link>;
}

const STEPS = [
  {
    icon: 'credits',
    title: 'Share your bill & roof story',
    description:
      'Upload or describe your consumption, slab, and whether you own the roof, rent, or live in a society — so we can check compatibility with credits, rooftop, or group models.',
    href: whatsappUrl(
      'Hi AY Solar Energy, I want Digital Solar guidance and can share my bill / roof details (Jaipur or Tonk).',
    ),
    linkText: 'Contact us',
  },
  {
    icon: 'vnm',
    title: 'Match a pathway',
    description:
      'Rooftop PV with net metering, PM Suryaghar paperwork where eligible, or Rent A Roof for VNM/GNM when rules support it — we do not promise products the regulations do not allow.',
    href: '/rent-a-roof',
    linkText: 'Rent A Roof',
  },
  {
    icon: 'investment',
    title: 'Track savings honestly',
    description:
      'After install or enrolment, reconcile expected kWh with credited units on your bill — conservative, transparent reporting.',
    href: whatsappUrl(WA_DIGITAL_SOLAR_CONSULT),
    linkText: 'Get consultation',
  },
];

const COMPARE = [
  {
    title: 'Digital / credits / shared models',
    benefits: [
      'Strong fit when you rent, have shade, or lack exclusive roof rights',
      'Bill impact often through credits or allocated generation — no panels on your flat',
      'Depends on policy, project pipeline, and DISCOM settlement',
      'Check contract: lock-in, exit, and whether savings apply to usage, fixed charges, or both',
    ],
  },
  {
    title: 'Rooftop on your property',
    benefits: [
      'Strong control when you own roof space and net or gross metering suits your load',
      'Upfront or loan; PM Suryaghar subsidy path where you qualify',
      'Generation at your site — you own O&M and warranty relationships',
      'Often the highest share of bill offset when conditions are right',
    ],
  },
];

const AUDIENCE = [
  {
    title: 'Renters & apartments',
    text: 'No exclusive roof — exploring credits or group models instead of private net metering.',
  },
  {
    title: 'Weak roof or heavy shade',
    text: 'Want solar exposure without betting everything on a poor roof layout.',
  },
  {
    title: 'MSME & institutions',
    text: 'Onsite PPAs, open access, or group net metering for multiple meters.',
  },
  {
    title: 'Solar-curious households',
    text: 'An educational baseline before quotes — subsidy vs non-subsidy paths.',
  },
];

const HIGHLIGHTS = [
  {
    icon: 'ownership',
    title: 'No rooftop? Still options',
    text: 'We map what is realistic today in Rajasthan versus what opens up through VNM/GNM as rules mature.',
    href: '/rent-a-roof',
    linkText: 'Explore Rent A Roof',
  },
  {
    icon: 'subscription',
    title: 'Clear bill math',
    text: 'kWh, slabs, and export rules translated into rupees you can sanity-check — no hype.',
    href: whatsappUrl(WA_DIGITAL_SOLAR_CONSULT),
    linkText: 'Talk to us',
  },
  {
    icon: 'resco',
    title: 'Jaipur & Tonk',
    text: 'DISCOM-aware steps for rooftop paperwork and shared allocation where permitted.',
    href: whatsappUrl(
      'Hi AY Solar Energy, I want to book guidance for rooftop / digital solar in Jaipur or Tonk.',
    ),
    linkText: 'Book guidance',
  },
];

const FAQ = [
  {
    q: 'What is “Digital Solar” in simple words?',
    a: 'Solar you benefit from without panels on your own roof: power from a shared or host site is reflected as credits or adjustments on your electricity account, depending on programme design. In India the exact mechanism depends on state policy and your DISCOM — we explain what applies to you in Rajasthan.',
  },
  {
    q: 'Is this the same as rooftop solar on my house?',
    a: 'No. Rooftop is PV on your property with net or gross metering. Digital or shared models focus on bill offsets or credits from generation elsewhere. AY Solar still installs rooftop systems; this page helps you compare both ideas.',
  },
  {
    q: 'Can you guarantee the calculator numbers?',
    a: 'No. The tool is illustrative. Actual outcomes depend on generation, contract terms, the structure of your bill, and regulatory changes. We use conservative factors so expectations stay realistic.',
  },
  {
    q: 'What should I do next in Jaipur or Tonk?',
    a: 'Share a recent electricity bill and whether you own the roof. We will recommend rooftop plus subsidy where it fits, or pre-register you for Rent A Roof (VNM/GNM) when policy supports group or virtual net metering.',
  },
];

export default function DigitalSolarPage() {
  return (
    <>
      <NextSeo
        title="Digital Solar — Bill credits & shared solar | AY Solar Energy Jaipur & Tonk"
        description="Digital solar explained for Rajasthan: off-site generation, bill credits, rooftop comparison, and an illustrative savings calculator. AY Solar Energy Jaipur & Tonk."
      />

      <div className={r.root}>
        <Hero
          title="Digital Solar"
          subtitle="Credits, shared models, and honest bill math — with a Rajasthan lens"
          pageHero
          cta={false}
        />

        <DigitalSolarHero />

        <section className={r.section} aria-labelledby="ds-concept-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>Concept</span>
              <h2 id="ds-concept-title">What it means on your bill</h2>
              <p>
                In many markets, subscribers support a remote solar site; clean energy enters the grid; your account
                may receive credits or a structured benefit against approved charges. Indian programmes and DISCOMs
                differ — we translate the idea into what your bill line items can support today.
              </p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <p className={r.introText} style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center' }}>
              <strong>With AY Solar Energy</strong> we do not replace your DISCOM. We compare physical{' '}
              <strong>rooftop solar</strong> (often the best fit when you own the roof) with{' '}
              <strong>shared or virtual paths</strong> under{' '}
              <Link href="/rent-a-roof" style={{ fontWeight: 700, color: 'var(--rent-blue)', textDecoration: 'underline' }}>
                Rent A Roof
              </Link>{' '}
              as Rajasthan publishes workable rules. Everything ties back to <strong>your tariff, fixed charges, and
              export settlement</strong>.
            </p>
          </div>
        </section>

        <section className={`${r.section} ${r.sectionMuted}`} aria-labelledby="ds-compare-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>Compare</span>
              <h2 id="ds-compare-title">Shared / credits vs rooftop at home</h2>
              <p>Same decision many households face — here in language tied to Indian bills.</p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <div className={r.modelsGrid}>
              {COMPARE.map((col, i) => (
                <article key={col.title} className={r.modelCard}>
                  <div className={r.modelIcon} aria-hidden>
                    <RentIcon name={i === 0 ? 'credits' : 'ownership'} />
                  </div>
                  <h3>{col.title}</h3>
                  <ul className={r.modelBenefits}>
                    {col.benefits.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={r.section} aria-labelledby="ds-steps-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>How it works</span>
              <h2 id="ds-steps-title">Three steps — from question to a number you trust</h2>
              <p>Join → align → track — adapted for DISCOM reality in Rajasthan.</p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <RentSwipeTrack gridClassName={r.pathwayGrid} ariaLabel="Digital solar steps">
              {STEPS.map((step) => (
                <article key={step.title} className={r.pathwayCard}>
                  <div className={r.pathwayIcon}>
                    <RentIcon name={step.icon} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <WaOrLink href={step.href} className={r.linkMore}>
                    {step.linkText}
                    <span aria-hidden> →</span>
                  </WaOrLink>
                </article>
              ))}
            </RentSwipeTrack>
          </div>
        </section>

        <section className={`${r.section} ${r.sectionBenefits}`} aria-labelledby="ds-audience-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>Who it fits</span>
              <h2 id="ds-audience-title">Who asks about digital or shared solar?</h2>
              <p>Typical profiles we guide in Jaipur and Tonk.</p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <div className={r.conceptGrid}>
              {AUDIENCE.map((item) => (
                <article key={item.title} className={r.conceptCard}>
                  <div className={r.conceptIcon} aria-hidden>
                    <RentIcon name="gnm" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={r.section} aria-labelledby="ds-calc-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>Calculator</span>
              <h2 id="ds-calc-title">Illustrative bill-relief forecast</h2>
              <p>Sliders only — not a substitute for a signed DISCOM or project agreement.</p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <DigitalSolarCalculator />
          </div>
        </section>

        <section className={`${r.section} ${r.sectionMuted}`} aria-labelledby="ds-highlights-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>Why AY</span>
              <h2 id="ds-highlights-title">What you get from the conversation</h2>
              <p>Practical checkpoints — not generic national copy.</p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <RentSwipeTrack gridClassName={r.pathwayGrid} ariaLabel="Highlights">
              {HIGHLIGHTS.map((item) => (
                <article key={item.title} className={r.pathwayCard}>
                  <div className={r.pathwayIcon}>
                    <RentIcon name={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <WaOrLink href={item.href} className={r.linkMore}>
                    {item.linkText}
                    <span aria-hidden> →</span>
                  </WaOrLink>
                </article>
              ))}
            </RentSwipeTrack>
          </div>
        </section>

        <section className={r.section} aria-labelledby="ds-faq-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>FAQ</span>
              <h2 id="ds-faq-title">Quick answers</h2>
              <p>Rules change — ask us for your specific DISCOM and consumer category.</p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <div className={r.benefitList}>
              {FAQ.map((item) => (
                <article key={item.q} className={r.benefitCard}>
                  <div className={r.benefitCopy}>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={r.waitlistSection} aria-labelledby="ds-cta-title">
          <div className={r.wrapWide}>
            <div className={r.ctaSplit}>
              <div className={r.ctaCopy}>
                <span className={r.ctaEyebrow}>Next step</span>
                <h2 id="ds-cta-title">Turn the slider into a real plan</h2>
                <p>
                  Share your latest bill and city — we map rooftop, subsidy, and any shared or virtual path that
                  regulations allow for Jaipur and Tonk.
                </p>
                <p className={r.ctaNote}>No obligation — we respond as soon as we can.</p>
                <div className={r.introActions} style={{ marginTop: 20 }}>
                  <a
                    href={whatsappUrl(WA_DIGITAL_SOLAR_CONSULT)}
                    className={r.btnPrimary}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get free consultation
                  </a>
                  <Link href="/rent-a-roof" className={r.btnGoldOutline}>
                    Rent A Roof
                  </Link>
                </div>
              </div>
              <div className={r.waitlistCard}>
                <h2 style={{ fontSize: '1.15rem', marginBottom: 12 }}>Bring to the call</h2>
                <ul className={r.modelBenefits} style={{ marginBottom: 0 }}>
                  <li>Latest electricity bill (PDF or clear photo)</li>
                  <li>Consumer number and DISCOM name</li>
                  <li>Roof ownership or society permission status</li>
                  <li>Rough monthly units or bill amount</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
