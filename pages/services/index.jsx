import Head from 'next/head';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { NextSeo } from 'next-seo';

export default function Services() {
  return (
    <>
      <NextSeo
        title="Solar Services - AY Solar Energy"
        description="Residential, commercial, and government scheme solar installations"
      />
      <Head>
        <title>Solar Services - AY Solar Energy</title>
        <meta name="description" content="Residential, commercial, and government scheme solar installations" />
      </Head>

      <Hero title="Our Services" subtitle="Complete Solar Solutions" pageHero={true} />

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid}>
            <ServiceCard
              icon="🏠"
              title="Residential Rooftop Solar"
              description="Solar systems for homes with flexible sizes from 1kW to 10kW"
              link="/services/residential"
            />
            <ServiceCard
              icon="🏭"
              title="Commercial & Industrial"
              description="Large-scale solar solutions for businesses and industries"
              link="/services/commercial"
            />
            <ServiceCard
              icon="🌾"
              title="PM Kusum Yojana"
              description="Government scheme for farmers and agricultural use"
              link="/services/kusum"
            />
            <ServiceCard
              icon="💳"
              title="Finance & Subsidy"
              description="Easy EMI options and government subsidy assistance"
              link="/finance"
            />
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, backgroundColor: '#F4F7FB' }}>
        <div style={styles.container}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Why Choose Our Services?</h2>
          <div style={styles.features}>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>✓</div>
              <h4>Expert Installation</h4>
              <p>Certified engineers with years of experience</p>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>✓</div>
              <h4>Quality Products</h4>
              <p>Top-tier solar panels and inverters</p>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>✓</div>
              <h4>25-Year Warranty</h4>
              <p>Comprehensive warranty coverage</p>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>✓</div>
              <h4>24/7 Support</h4>
              <p>Round-the-clock customer support</p>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.cta}>
            <h2>Ready to Go Solar?</h2>
            <p>Get a free consultation and site survey today</p>
            <Link href="/contact" style={styles.btnLink}>
              Request Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  feature: {
    textAlign: 'center',
    padding: '20px',
  },
  featureIcon: {
    fontSize: '2rem',
    color: 'var(--primary-blue)',
    marginBottom: '10px',
  },
  cta: {
    textAlign: 'center',
    padding: '40px',
    backgroundColor: '#F4F7FB',
    borderRadius: '8px',
  },
};
