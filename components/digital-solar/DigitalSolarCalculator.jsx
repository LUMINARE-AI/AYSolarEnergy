import { useMemo, useState } from 'react';
import Link from 'next/link';
import r from '@/styles/rentARoof.module.css';
import ds from '@/styles/DigitalSolar.module.css';

/** Educational estimate: bill × offset % × conservative factor (not a promise). */
const CREDIT_TO_BILL_FACTOR = 0.78;

export default function DigitalSolarCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(4500);
  const [offsetPct, setOffsetPct] = useState(28);

  const { monthlySavings, annualSavings, approxKwhYear, co2Tonnes } = useMemo(() => {
    const m = Math.round(monthlyBill * (offsetPct / 100) * CREDIT_TO_BILL_FACTOR);
    const a = m * 12;
    const avgTariffApprox = 8.5;
    const kwhMo = monthlyBill / avgTariffApprox;
    const kwhY = Math.round(kwhMo * (offsetPct / 100) * 12 * CREDIT_TO_BILL_FACTOR);
    const co2 = ((kwhY * 0.82) / 1000).toFixed(2);
    return { monthlySavings: m, annualSavings: a, approxKwhYear: kwhY, co2Tonnes: co2 };
  }, [monthlyBill, offsetPct]);

  return (
    <div className={r.wrapWide}>
      <div id="calculator" className={`${r.visualCard} ${r.visualCardAccent} ${ds.calcCardWrap}`}>
        <h3 className={ds.calcTitle}>Forecast your bill relief</h3>
        <p className={ds.calcSub}>
          Sliders below give an <strong>illustrative</strong> range only. Final savings depend on DISCOM rules, project
          output, contract terms, and which part of your bill (energy vs fixed) can be offset.
        </p>

        <div className={ds.calcField}>
          <label htmlFor="ds-bill">
            <span>Average monthly electricity bill</span>
            <span className={ds.calcValue}>₹{monthlyBill.toLocaleString('en-IN')}</span>
          </label>
          <input
            id="ds-bill"
            type="range"
            min="1500"
            max="25000"
            step="100"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
          />
          <p className={ds.calcHint}>Typical residential range in Jaipur / Tonk — set close to your actual bill.</p>
        </div>

        <div className={ds.calcField}>
          <label htmlFor="ds-offset">
            <span>Target share of bill to offset via solar credits</span>
            <span className={ds.calcValue}>{offsetPct}%</span>
          </label>
          <input
            id="ds-offset"
            type="range"
            min="10"
            max="55"
            step="1"
            value={offsetPct}
            onChange={(e) => setOffsetPct(Number(e.target.value))}
          />
          <p className={ds.calcHint}>
            Many shared or credit-style models start with a part of the bill; rooftop on your own site can sometimes
            offset more where net metering applies.
          </p>
        </div>

        <div className={ds.calcResults}>
          <div className={ds.calcResultBox}>
            <div className={ds.calcResultLabel}>Est. monthly relief</div>
            <div className={ds.calcResultNum}>₹{monthlySavings.toLocaleString('en-IN')}</div>
          </div>
          <div className={ds.calcResultBox}>
            <div className={ds.calcResultLabel}>Est. yearly relief</div>
            <div className={ds.calcResultNum}>₹{annualSavings.toLocaleString('en-IN')}</div>
          </div>
          <div className={`${ds.calcResultBox} ${ds.calcResultBoxWide}`}>
            <div className={ds.calcResultLabel}>Indicative clean kWh / year (from bill)</div>
            <div className={ds.calcResultNum}>{approxKwhYear.toLocaleString('en-IN')} kWh</div>
          </div>
          <div className={`${ds.calcResultBox} ${ds.calcResultBoxWide}`}>
            <div className={ds.calcResultLabel}>Rough CO₂ avoided / year</div>
            <div className={ds.calcResultNum}>{co2Tonnes} t</div>
          </div>
        </div>

        <p className={ds.calcDisclaimer}>
          For <strong>planning only</strong> — not financial advice, not a guaranteed return. &quot;Digital&quot; or
          community-style programmes differ by state and DISCOM; rooftop with net metering is a separate path. AY
          Solar Energy helps you compare{' '}
          <Link href="/rent-a-roof" className={ds.calcInlineLink}>
            Rent A Roof (VNM / GNM)
          </Link>
          , PM Suryaghar subsidy rooftop, and conventional home solar, then validates figures on your real bill.
        </p>
      </div>
    </div>
  );
}
