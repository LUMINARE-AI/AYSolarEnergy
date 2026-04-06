/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Link from 'next/link';
import Hero from '@/components/Hero';

export default function PMSuryaghar() {
  return (
    <>
      <Head>
        <title>PM Suryaghar Yojana - Free Solar Installation</title>
        <meta name="description" content="Get up to ₹1 lakh subsidy for home solar installation under PM Suryaghar Yojana" />
      </Head>

      <Hero title="PM Suryaghar Yojana" subtitle="Free Solar Installation for Your Home" pageHero={true} />

      <section className="section">
        <div className="container">
          <div style={styles.overview}>
            <h2>Scheme Overview</h2>
            <p>
              PM Suryaghar Yojana is a government initiative to provide free solar installations to eligible households. 
              Get up to ₹1 lakh subsidy for 1-2 kW systems with 25-year warranty.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="container">
          <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Subsidy Slabs</h2>
          <div style={styles.table}>
            <table>
              <thead>
                <tr>
                  <th>System Size</th>
                  <th>Subsidy Amount</th>
                  <th>Your Cost</th>
                  <th>Payback Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 kW</td>
                  <td>₹60,000</td>
                  <td>₹20,000-40,000</td>
                  <td>3-5 years</td>
                </tr>
                <tr>
                  <td>2 kW</td>
                  <td>₹1,00,000</td>
                  <td>₹40,000-60,000</td>
                  <td>3-5 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Eligibility Criteria</h2>
          <ul style={styles.criteria}>
            <li>✓ Indian citizen</li>
            <li>✓ Own residential property</li>
            <li>✓ Existing electricity connection</li>
            <li>✓ No previous solar subsidy</li>
            <li>✓ Roof suitable for solar installation</li>
          </ul>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="container">
          <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Application Process</h2>
          <div style={styles.process}>
            {[
              { num: '1', title: 'Registration', desc: 'Register on official portal' },
              { num: '2', title: 'Verification', desc: 'Document verification' },
              { num: '3', title: 'Approval', desc: 'Get approval letter' },
              { num: '4', title: 'Installation', desc: 'System installation' },
              { num: '5', title: 'Inspection', desc: 'Government inspection' },
              { num: '6', title: 'Subsidy', desc: 'Receive subsidy amount' },
            ].map((step, i) => (
              <div key={i} style={styles.processStep}>
                <div style={styles.processNum}>{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Required Documents</h2>
          <div style={styles.documents}>
            <div>
              <h4>Personal Documents</h4>
              <ul>
                <li>• Aadhar Card</li>
                <li>• PAN Card</li>
                <li>• Bank Account Details</li>
              </ul>
            </div>
            <div>
              <h4>Property Documents</h4>
              <ul>
                <li>• Property Ownership Proof</li>
                <li>• Electricity Bill</li>
                <li>• Roof Photograph</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="container">
          <div style={styles.cta}>
            <h2>Ready to Apply?</h2>
            <p>We'll help you with the entire process from registration to installation</p>
            <Link href="/contact" className="btn btn-primary">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  overview: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  table: {
    overflowX: 'auto',
  },
  criteria: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px',
    listStyle: 'none',
    maxWidth: '800px',
    margin: '0 auto',
  },
  process: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
  },
  processStep: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  processNum: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--primary-blue)',
    marginBottom: '10px',
  },
  documents: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  cta: {
    textAlign: 'center',
    padding: '40px',
  },
};
