import Head from 'next/head';
import Hero from '@/components/Hero';

export default function Residential() {
  return (
    <>
      <Head>
        <title>Residential Rooftop Solar - AY Solar Energy</title>
        <meta name="description" content="Home solar systems with flexible sizes and easy financing options" />
      </Head>

      <Hero title="Residential Rooftop Solar" subtitle="Perfect for Your Home" pageHero={true} />

      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '30px' }}>System Sizes Available</h2>
          <div style={styles.table}>
            <table>
              <thead>
                <tr>
                  <th>System Size</th>
                  <th>Monthly Savings</th>
                  <th>Investment</th>
                  <th>Payback Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 kW</td>
                  <td>₹500-800</td>
                  <td>₹80,000-100,000</td>
                  <td>10-12 years</td>
                </tr>
                <tr>
                  <td>2 kW</td>
                  <td>₹1,000-1,600</td>
                  <td>₹160,000-200,000</td>
                  <td>10-12 years</td>
                </tr>
                <tr>
                  <td>3 kW</td>
                  <td>₹1,500-2,400</td>
                  <td>₹240,000-300,000</td>
                  <td>10-12 years</td>
                </tr>
                <tr>
                  <td>5 kW</td>
                  <td>₹2,500-4,000</td>
                  <td>₹400,000-500,000</td>
                  <td>10-12 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="container">
          <h2 style={{ marginBottom: '30px' }}>Installation Process</h2>
          <div style={styles.steps}>
            {[
              { num: '1', title: 'Free Consultation', desc: 'Site survey and system design' },
              { num: '2', title: 'Quotation', desc: 'Detailed cost breakdown' },
              { num: '3', title: 'Documentation', desc: 'Subsidy and permission paperwork' },
              { num: '4', title: 'Installation', desc: 'Professional installation' },
              { num: '5', title: 'Testing', desc: 'System testing and commissioning' },
              { num: '6', title: 'Support', desc: '25-year warranty & support' },
            ].map((step, i) => (
              <div key={i} style={styles.step}>
                <div style={styles.stepNum}>{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '30px' }}>Key Features</h2>
          <ul style={styles.features}>
            <li>✓ High-efficiency solar panels (20%+ efficiency)</li>
            <li>✓ Advanced inverter technology</li>
            <li>✓ Net metering support</li>
            <li>✓ 25-year panel warranty</li>
            <li>✓ 5-year inverter warranty</li>
            <li>✓ Free maintenance for 5 years</li>
            <li>✓ 24/7 customer support</li>
            <li>✓ Government subsidy assistance</li>
          </ul>
        </div>
      </section>
    </>
  );
}

const styles = {
  table: {
    overflowX: 'auto',
  },
  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  step: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  stepNum: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--primary-blue)',
    marginBottom: '10px',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px',
    listStyle: 'none',
  },
};
