import Head from 'next/head';
import Hero from '@/components/Hero';
import { NextSeo } from 'next-seo';

export default function Commercial() {
  return (
    <>
      <NextSeo
        title="Commercial & Industrial Solar - AY Solar Energy"
        description="Large-scale solar solutions for businesses and industries"
      />
      <Head>
        <title>Commercial & Industrial Solar - AY Solar Energy</title>
        <meta name="description" content="Large-scale solar solutions for businesses and industries" />
      </Head>

      <Hero title="Commercial & Industrial Solar" subtitle="Large-Scale Solar Solutions" pageHero={true} />

      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Applications</h2>
          <div style={styles.applications}>
            <div style={styles.app}>
              <h4>🏢 Office Buildings</h4>
              <p>Reduce operational costs with rooftop solar</p>
            </div>
            <div style={styles.app}>
              <h4>🏭 Manufacturing Units</h4>
              <p>Large-scale solar for industrial operations</p>
            </div>
            <div style={styles.app}>
              <h4>🏪 Retail Stores</h4>
              <p>Solar solutions for shopping complexes</p>
            </div>
            <div style={styles.app}>
              <h4>🏥 Hospitals & Clinics</h4>
              <p>Reliable backup power with solar</p>
            </div>
            <div style={styles.app}>
              <h4>🎓 Educational Institutions</h4>
              <p>Sustainable energy for schools & colleges</p>
            </div>
            <div style={styles.app}>
              <h4>🏨 Hotels & Resorts</h4>
              <p>Cost-effective energy for hospitality</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="container">
          <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Key Benefits</h2>
          <div style={styles.benefits}>
            <div style={styles.benefit}>
              <div style={styles.benefitIcon}>💰</div>
              <h4>Reduce Operating Costs</h4>
              <p>Save up to 80% on electricity bills</p>
            </div>
            <div style={styles.benefit}>
              <div style={styles.benefitIcon}>📈</div>
              <h4>Increase Profitability</h4>
              <p>Better bottom line with lower energy costs</p>
            </div>
            <div style={styles.benefit}>
              <div style={styles.benefitIcon}>🌍</div>
              <h4>Corporate Responsibility</h4>
              <p>Demonstrate environmental commitment</p>
            </div>
            <div style={styles.benefit}>
              <div style={styles.benefitIcon}>🛡️</div>
              <h4>Energy Independence</h4>
              <p>Protection from rising electricity rates</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Our Process</h2>
          <div style={styles.process}>
            <div style={styles.step}>
              <div style={styles.stepNum}>1</div>
              <h4>Energy Audit</h4>
              <p>Analyze your energy consumption</p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNum}>2</div>
              <h4>Custom Design</h4>
              <p>Tailored solar solution for your needs</p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNum}>3</div>
              <h4>ROI Analysis</h4>
              <p>Clear financial projections</p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNum}>4</div>
              <h4>Installation</h4>
              <p>Professional implementation</p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNum}>5</div>
              <h4>Monitoring</h4>
              <p>Real-time performance tracking</p>
            </div>
            <div style={styles.step}>
              <div style={styles.stepNum}>6</div>
              <h4>Support</h4>
              <p>Ongoing maintenance & support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  applications: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  app: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  benefits: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  benefit: {
    textAlign: 'center',
    padding: '20px',
  },
  benefitIcon: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  process: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
  },
  step: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#F4F7FB',
    borderRadius: '8px',
  },
  stepNum: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--primary-blue)',
    marginBottom: '10px',
  },
};
