import React, { useState } from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { NextSeo } from 'next-seo';
import SectionHeader from '@/components/layout/SectionHeader';
import PageIcon from '@/components/icons/PageIcon';
import sp from '@/styles/sitePage.module.css';

const OPTIONS = [
  {
    icon: 'bank',
    title: 'Bank loan',
    items: [
      'Up to ₹2 Lakh: 5.75% interest',
      'Above ₹2 Lakh: 8–8.5% interest',
      '7–10 year tenure',
      'Minimal documentation',
      'Quick approval',
    ],
  },
  {
    icon: 'subsidy',
    title: 'Government subsidy',
    items: [
      'Up to ₹78,000 subsidy',
      'PM Suryaghar Yojana',
      'Reduced upfront investment',
      'Faster payback',
      'Additional state subsidy',
    ],
  },
  {
    icon: 'hybrid',
    title: 'Hybrid approach',
    items: [
      'Subsidy + bank loan combined',
      'Lowest EMI option',
      'Best long-term savings',
      'Recommended for most homes',
      'Maximum benefits',
    ],
  },
];

const BANKS = ['HDFC Bank', 'ICICI Bank', 'Axis Bank', 'SBI'];

function EMICalculator() {
  const [systemCost, setSystemCost] = useState(200000);
  const [subsidy, setSubsidy] = useState(100000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(7);

  const principal = systemCost - subsidy;
  const months = years * 12;
  const monthlyRate = rate / 100 / 12;
  const emi =
    (principal * monthlyRate * (1 + monthlyRate) ** months) /
    ((1 + monthlyRate) ** months - 1);

  return (
    <div className={sp.calculator}>
      <div className={sp.calcField}>
        <label>System cost: ₹{systemCost.toLocaleString('en-IN')}</label>
        <input
          type="range"
          min="50000"
          max="500000"
          step="10000"
          value={systemCost}
          onChange={(e) => setSystemCost(Number(e.target.value))}
        />
      </div>
      <div className={sp.calcField}>
        <label>Subsidy: ₹{subsidy.toLocaleString('en-IN')}</label>
        <input
          type="range"
          min="0"
          max="100000"
          step="10000"
          value={subsidy}
          onChange={(e) => setSubsidy(Number(e.target.value))}
        />
      </div>
      <div className={sp.calcField}>
        <label>Interest rate: {rate}%</label>
        <input
          type="range"
          min="6"
          max="12"
          step="0.5"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
      </div>
      <div className={sp.calcField}>
        <label>Loan tenure: {years} years</label>
        <input
          type="range"
          min="3"
          max="10"
          step="1"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
        />
      </div>
      <div className={sp.calcResult}>
        <div>Your investment: ₹{principal.toLocaleString('en-IN')}</div>
        <div className={sp.calcResultEmi}>
          Monthly EMI: ₹{Math.round(emi).toLocaleString('en-IN')}
        </div>
      </div>
    </div>
  );
}

export default function Finance() {
  return (
    <>
      <NextSeo
        title="Solar Finance & EMI Options - AY Solar Energy"
        description="Easy financing options and EMI calculator for solar installations"
      />

      <div className={sp.root}>
        <Hero title="Finance & Subsidy" subtitle="Affordable solar solutions for every budget" pageHero />

        <section className={sp.section}>
          <div className={sp.wrapWide}>
            <SectionHeader
              eyebrow="Options"
              title="Financing options"
              sub="Combine government subsidy with bank loans for the lowest out-of-pocket cost"
            />
            <div className={sp.grid3}>
              {OPTIONS.map((opt) => (
                <article key={opt.title} className={sp.optionCard}>
                  <h3>
                    <span className={sp.iconWrap} style={{ width: 40, height: 40, margin: 0 }}>
                      <PageIcon name={opt.icon} size={22} />
                    </span>
                    {opt.title}
                  </h3>
                  <ul>
                    {opt.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sp.section} ${sp.sectionMuted}`}>
          <div className={sp.wrap}>
            <SectionHeader eyebrow="Calculator" title="EMI calculator" sub="Estimate your monthly payment after subsidy" />
            <EMICalculator />
          </div>
        </section>

        <section className={sp.section}>
          <div className={sp.wrap}>
            <SectionHeader eyebrow="Partners" title="Partner banks" />
            <div className={sp.grid4}>
              {BANKS.map((bank) => (
                <div key={bank} className={`${sp.card} ${sp.iconCard}`}>
                  <h4>{bank}</h4>
                  <p>Up to ₹2L: 5.75% · Above ₹2L: 8–8.5%</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={sp.ctaBand}>
          <h2>Ready to go solar?</h2>
          <p>Get personalized financing options for your solar system</p>
          <Link href="/contact" className={sp.btnPrimary}>
            Get free consultation
          </Link>
        </section>
      </div>
    </>
  );
}
