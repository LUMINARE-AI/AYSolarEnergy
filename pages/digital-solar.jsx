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

const HOW_IT_WORKS = [
  {
    icon: 'resco',
    title: '1. AY Solar installs commercial solar projects',
    description:
      'We develop and operate solar projects on commercial & industrial properties under long-term energy agreements.',
    bullets: [
      'Up to 30% lower electricity costs',
      'Zero maintenance responsibility',
      'Long-term clean energy benefits',
    ],
    href: whatsappUrl(
      'Hi AY Solar Energy, I want to know more about your commercial solar projects for Digital Solar.',
    ),
    linkText: 'Enquire on WhatsApp',
  },
  {
    icon: 'credits',
    title: '2. You reserve solar capacity',
    description:
      'Instead of installing rooftop solar at your home, you can digitally reserve a portion of capacity from an AY Solar project.',
    bullets: [
      'Reserve 1 kW, 2 kW, or more',
      'View available projects online',
      'Monitor generation digitally',
      'Start receiving monthly bill savings',
      'No rooftop installation required',
    ],
    href: whatsappUrl(WA_DIGITAL_SOLAR_CONSULT),
    linkText: 'Reserve via WhatsApp',
  },
];

const TENURE_SAVINGS = [
  {
    icon: 'vnm',
    title: '10-year Digital Solar tenure',
    text:
      'Each Digital Solar project comes with a fixed tenure of 10 years. During this tenure, your reserved solar capacity continuously generates clean energy; monthly credits or savings are linked to that generation and can be adjusted against your electricity bills. Many Digital Solar platforms in India commonly operate between 10–15 year project tenures depending on project structure and economics.',
  },
  {
    icon: 'subscription',
    title: 'Monthly electricity bill savings',
    text:
      'The electricity generated from your reserved solar capacity is converted into energy credits or bill savings. These savings help reduce your monthly electricity expenses without needing rooftop solar installation at your premises. Higher reserved capacity typically means higher potential bill savings.',
  },
];

const WHO_CAN_USE = [
  {
    title: 'Apartment owners',
    text: 'Go solar even without rooftop access.',
  },
  {
    title: 'Tenants & rental homes',
    text: 'Continue using Digital Solar benefits even if you shift locations.',
  },
  {
    title: 'Small businesses & shops',
    text: 'Reduce electricity bills without investing in rooftop systems.',
  },
  {
    title: 'Families with multiple connections',
    text: 'Use savings across multiple electricity accounts.',
  },
];

const WHY_CHOOSE = [
  { title: 'No rooftop required', text: 'Access solar energy from professionally managed remote projects.' },
  { title: 'Zero maintenance', text: 'AY Solar handles installation, monitoring, cleaning, servicing, and operations.' },
  { title: 'Lower electricity bills', text: 'Reduce dependency on rising grid electricity tariffs.' },
  { title: 'Digital monitoring', text: 'Track project generation and your reserved solar capacity online.' },
  { title: 'Flexible participation', text: 'Start small and increase your reserved capacity anytime.' },
  { title: 'Sustainable energy', text: 'Support clean power generation and carbon reduction.' },
  {
    title: 'Project transparency',
    text: 'Location, installed capacity, expected generation, tenure, estimated savings, and live monitoring — similar to modern Digital Solar listings.',
  },
];

const TRANSPARENCY_ITEMS = [
  'Project location',
  'Installed capacity',
  'Expected energy generation',
  'Tenure',
  'Estimated bill savings',
  'Live project monitoring',
];

const WHY_MATTERS_BULLETS = [
  'Apartments & shared buildings',
  'Rental properties',
  'Lack of roof ownership',
  'Space limitations',
  'High upfront costs',
];

const FAQ = [
  {
    q: 'What is Digital Solar at AY Solar Energy?',
    a: 'A way to reserve capacity from large commercial & industrial solar projects we install and operate. The energy from your share is converted into bill savings or credits over a fixed tenure — without panels on your own roof.',
  },
  {
    q: 'Do I need a rooftop?',
    a: 'No. You participate digitally by reserving capacity from projects hosted on factories, warehouses, schools, hospitals, hotels, and other commercial buildings.',
  },
  {
    q: 'How long is the programme?',
    a: 'We describe a 10-year Digital Solar tenure for listed projects; actual tenure may vary by project and contract, in line with how many Indian Digital Solar programmes operate in the 10–15 year range.',
  },
  {
    q: 'Can you guarantee the calculator numbers?',
    a: 'No. The calculator is illustrative only. Real savings depend on generation, your bill structure, DISCOM rules, and contract terms.',
  },
];

export default function DigitalSolarPage() {
  return (
    <>
      <NextSeo
        title="Digital Solar — Own capacity digitally & save on bills | AY Solar Energy"
        description="Reserve solar capacity from AY Solar commercial & industrial projects. Bill savings, 10-year tenure, digital monitoring — no rooftop required. Jaipur, Tonk & Rajasthan."
      />

      <div className={r.root}>
        <Hero
          title="Digital Solar"
          subtitle="Own Solar Capacity Digitally & Reduce Your Electricity Bills"
          pageHero
          cta={false}
        />

        <DigitalSolarHero />

        <section className={r.section} aria-labelledby="ds-overview-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>Overview</span>
              <h2 id="ds-overview-title">Solar power — without rooftop hassles</h2>
              <p>
                AY Solar Energy brings a new way to go solar — without installing panels on your rooftop.
              </p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
              <p className={r.introText}>
                With Digital Solar, you can reserve capacity from large commercial & industrial solar projects installed
                and managed by AY Solar Energy. The clean energy generated from your reserved capacity is converted into
                electricity bill savings over a fixed tenure.
              </p>
              <p className={r.introText}>
                We install solar systems on factories, warehouses, schools, hospitals, hotels, and other commercial
                buildings. Businesses receive cheaper solar power, while users participating in Digital Solar receive
                monthly energy credits linked to their reserved solar capacity.
              </p>
              <p className={r.introText} style={{ marginBottom: 0 }}>
                This model is inspired by emerging Digital Solar and community solar platforms in India. For VNM/GNM
                and rooftop options in Rajasthan, see{' '}
                <Link href="/rent-a-roof" style={{ fontWeight: 700, color: 'var(--rent-blue)', textDecoration: 'underline' }}>
                  Rent A Roof
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className={`${r.section} ${r.sectionMuted}`} aria-labelledby="ds-how-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>How it works</span>
              <h2 id="ds-how-title">From our sites to your bill</h2>
              <p>Commercial hosts benefit; you reserve capacity and receive savings linked to generation.</p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <RentSwipeTrack gridClassName={r.pathwayGrid} ariaLabel="How Digital Solar works">
              {HOW_IT_WORKS.map((step) => (
                <article key={step.title} className={r.pathwayCard}>
                  <div className={r.pathwayIcon}>
                    <RentIcon name={step.icon} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {step.bullets?.length > 0 && (
                    <ul className={r.modelBenefits} style={{ margin: '14px 0 0', textAlign: 'left', width: '100%' }}>
                      {step.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  <WaOrLink href={step.href} className={r.linkMore}>
                    {step.linkText}
                    <span aria-hidden> →</span>
                  </WaOrLink>
                </article>
              ))}
            </RentSwipeTrack>
          </div>
        </section>

        <section className={r.section} aria-labelledby="ds-tenure-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>Savings & tenure</span>
              <h2 id="ds-tenure-title">Tenure and how savings reach you</h2>
              <p>Clear structure for reserved capacity and monthly bill impact.</p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <div className={r.conceptGrid}>
              {TENURE_SAVINGS.map((item) => (
                <article key={item.title} className={r.conceptCard}>
                  <div className={r.conceptIcon} aria-hidden>
                    <RentIcon name={item.icon} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${r.section} ${r.sectionBenefits}`} aria-labelledby="ds-who-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>Who can use</span>
              <h2 id="ds-who-title">Who can use Digital Solar?</h2>
              <p>Built for users who cannot or prefer not to install rooftop PV at their premises.</p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <div className={r.conceptGrid}>
              {WHO_CAN_USE.map((item) => (
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

        <section className={r.section} aria-labelledby="ds-why-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>Why AY</span>
              <h2 id="ds-why-title">Why choose AY Digital Solar?</h2>
              <p>End-to-end delivery, transparency, and savings without rooftop installation.</p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <div className={r.conceptGrid}>
              {WHY_CHOOSE.map((item) => (
                <article key={item.title} className={r.conceptCard}>
                  <div className={r.conceptIcon} aria-hidden>
                    <RentIcon name="credits" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${r.section} ${r.sectionMuted}`} aria-labelledby="ds-transparency-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>Transparency</span>
              <h2 id="ds-transparency-title">What every listed project includes</h2>
              <p>Users can explore and reserve available capacity similar to modern Digital Solar platforms.</p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <article className={r.modelCard} style={{ maxWidth: '640px', margin: '0 auto' }}>
              <div className={r.modelIcon} aria-hidden>
                <RentIcon name="invest" />
              </div>
              <h3>Project transparency</h3>
              <p className={r.modelDesc}>
                Every Digital Solar project listed by AY Solar Energy is presented with the information you need to
                decide:
              </p>
              <ul className={r.modelBenefits}>
                {TRANSPARENCY_ITEMS.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <WaOrLink href={whatsappUrl(WA_DIGITAL_SOLAR_CONSULT)} className={r.linkMore}>
                Ask which projects are open
                <span aria-hidden> →</span>
              </WaOrLink>
            </article>
          </div>
        </section>

        <section className={r.section} aria-labelledby="ds-matters-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>Impact</span>
              <h2 id="ds-matters-title">Why Digital Solar matters</h2>
              <p>Millions of people cannot install rooftop solar because of common barriers — Digital Solar helps bridge the gap.</p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <p className={r.introText} style={{ maxWidth: '48rem', margin: '0 auto 20px', textAlign: 'center' }}>
              Digital Solar makes clean energy accessible without these barriers by connecting users directly to larger
              solar projects remotely.
            </p>
            <ul className={r.modelBenefits} style={{ maxWidth: '480px', margin: '0 auto', listStyle: 'none', padding: 0 }}>
              {WHY_MATTERS_BULLETS.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={r.section} aria-labelledby="ds-calc-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>Calculator</span>
              <h2 id="ds-calc-title">Estimate bill relief from reserved capacity</h2>
              <p>Illustrative only — final numbers depend on your project, tenure, and electricity account.</p>
              <div className={r.titleAccent} aria-hidden />
            </div>
            <DigitalSolarCalculator />
          </div>
        </section>

        <section className={`${r.section} ${r.sectionMuted}`} aria-labelledby="ds-faq-title">
          <div className={r.wrapWide}>
            <div className={r.sectionTitle}>
              <span className={r.eyebrow}>FAQ</span>
              <h2 id="ds-faq-title">Quick answers</h2>
              <p>Programme availability and DISCOM settlement vary by location — we confirm details for your case.</p>
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
                <span className={r.ctaEyebrow}>Start your journey</span>
                <h2 id="ds-cta-title">Start your Digital Solar journey</h2>
                <p>
                  Reserve solar capacity from AY Solar Energy projects and start reducing your electricity bills through
                  clean energy.
                </p>
                <p className={r.ctaNote}>Solar power — without rooftop hassles.</p>
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
                <h2 style={{ fontSize: '1.15rem', marginBottom: 12 }}>Have ready</h2>
                <ul className={r.modelBenefits} style={{ marginBottom: 0 }}>
                  <li>Average monthly electricity bill</li>
                  <li>DISCOM name and consumer number</li>
                  <li>How many kW you may want to reserve</li>
                  <li>City / district (e.g. Jaipur, Tonk)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
