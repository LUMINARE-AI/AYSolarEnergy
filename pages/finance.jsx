import Head from 'next/head';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { NextSeo } from 'next-seo';

export default function Finance() {
  return (
    <>
      <NextSeo
        title="Solar Finance & EMI Options - AY Solar Energy"
        description="Easy financing options and EMI calculator for solar installations"
      />

      <Head>
        <title>Solar Finance & EMI Options - AY Solar Energy</title>
        <meta name="description" content="Easy financing options and EMI calculator for solar installations" />
      </Head>

      <Hero title="Finance & Subsidy" subtitle="Affordable Solar Solutions" pageHero={true} />

      <section className="section">
        <div className="container">
          <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
            <h2 style={{ marginBottom: '0px', textAlign: 'center', color: '#333' }}>Financing Options</h2>
          </div>
          <div style={styles.options}>
            <div style={styles.option}>
              <h3 style={{ color: '#0057B8' }}>💰 Bank Loan</h3>
              <ul>
                <li>• Up to 2 Lakh: 5.75% interest</li>
                <li>• Above 2 Lakh: 8-8.5% interest</li>
                <li>• 7-10 year tenure</li>
                <li>• Minimal documentation</li>
                <li>• Quick approval</li>
              </ul>
            </div>
            <div style={styles.option}>
              <h3 style={{ color: '#0057B8' }}>🏦 Government Subsidy</h3>
              <ul>
                <li>• Up to ₹78,000 subsidy</li>
                <li>• PM Suryaghar Yojana</li>
                <li>• Reduced investment</li>
                <li>• Faster payback</li>
                <li>• Additional state subsidy</li>
              </ul>
            </div>
            <div style={styles.option}>
              <h3 style={{ color: '#0057B8' }}>💳 Hybrid Approach</h3>
              <ul>
                <li>• Subsidy + Bank Loan</li>
                <li>• Lowest EMI</li>
                <li>• Best savings</li>
                <li>• Recommended option</li>
                <li>• Maximum benefits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="container">
          <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
            <h2 style={{ marginBottom: '0px', textAlign: 'center', color: '#333' }}>EMI Calculator</h2>
          </div>
          <EMICalculator />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
            <h2 style={{ marginBottom: '0px', textAlign: 'center', color: '#333' }}>Partner Banks</h2>
          </div>
          <div style={styles.banks}>
            <div style={styles.bank}>
              <h4 style={{ color: '#0057B8' }}>HDFC Bank</h4>
              <p style={{ color: '#666' }}>Up to 2L: 5.75% | Above 2L: 8-8.5%</p>
            </div>
            <div style={styles.bank}>
              <h4 style={{ color: '#0057B8' }}>ICICI Bank</h4>
              <p style={{ color: '#666' }}>Up to 2L: 5.75% | Above 2L: 8-8.5%</p>
            </div>
            <div style={styles.bank}>
              <h4 style={{ color: '#0057B8' }}>Axis Bank</h4>
              <p style={{ color: '#666' }}>Up to 2L: 5.75% | Above 2L: 8-8.5%</p>
            </div>
            <div style={styles.bank}>
              <h4 style={{ color: '#0057B8' }}>SBI</h4>
              <p style={{ color: '#666' }}>Up to 2L: 5.75% | Above 2L: 8-8.5%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="container">
          <div style={{ backgroundColor: '#0057B8', color: 'white', textAlign: 'center', padding: '40px' }}>
            <h2 style={{ color: '#FFFFFF', marginBottom: '15px', fontSize: '2rem' }}>Ready to Go Solar?</h2>
            <p>Get personalized financing options for your solar system</p>
            <Link href="/contact" className="btn btn-primary">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function EMICalculator() {
  const [systemCost, setSystemCost] = React.useState(200000);
  const [subsidy, setSubsidy] = React.useState(100000);
  const [rate, setRate] = React.useState(9);
  const [years, setYears] = React.useState(7);

  const principal = systemCost - subsidy;
  const months = years * 12;
  const monthlyRate = rate / 100 / 12;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

  return (
    <div style={styles.calculator}>
      <div style={styles.calcInput}>
        <label>System Cost: ₹{systemCost.toLocaleString()}</label>
        <input type="range" min="50000" max="500000" step="10000" value={systemCost} onChange={(e) => setSystemCost(Number(e.target.value))} />
      </div>
      <div style={styles.calcInput}>
        <label>Subsidy: ₹{subsidy.toLocaleString()}</label>
        <input type="range" min="0" max="100000" step="10000" value={subsidy} onChange={(e) => setSubsidy(Number(e.target.value))} />
      </div>
      <div style={styles.calcInput}>
        <label>Interest Rate: {rate}%</label>
        <input type="range" min="6" max="12" step="0.5" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
      </div>
      <div style={styles.calcInput}>
        <label>Loan Tenure: {years} years</label>
        <input type="range" min="3" max="10" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} />
      </div>
      <div style={styles.calcResult}>
        <div>Your Investment: ₹{principal.toLocaleString()}</div>
        <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary-blue)' }}>
          Monthly EMI: ₹{Math.round(emi).toLocaleString()}
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const styles = {
  options: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  option: {
    padding: '30px',
    backgroundColor: '#F4F7FB',
    borderRadius: '8px',
    borderLeft: '4px solid var(--primary-blue)',
  },
  banks: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
  },
  bank: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  calculator: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  calcInput: {
    marginBottom: '20px',
  },
  calcResult: {
    marginTop: '30px',
    padding: '20px',
    backgroundColor: '#F4F7FB',
    borderRadius: '8px',
    textAlign: 'center',
  },
  cta: {
    textAlign: 'center',
    padding: '40px',
  },
};
