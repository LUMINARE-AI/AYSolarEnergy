import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Residential() {
  return (
    <>
      <NextSeo
        title="Home Solar Panel Installation Jaipur - Rooftop Solar Systems Rajasthan"
        description="Residential rooftop solar panel installation in Jaipur & Tonk. 1kW to 10kW home solar systems with subsidy up to ₹78,000 and EMI options. Free consultation."
      />

      <Hero
        title="Home Solar Panel Installation in Jaipur & Tonk"
        subtitle="Rooftop Solar Systems for Homes"
      />

      <p
        style={{ textAlign: "center", maxWidth: "800px", margin: "20px auto" }}
      >
        AY Solar Energy provides residential rooftop solar panel installation in
        Jaipur and Tonk. Install 1kW to 10kW solar systems for your home and
        reduce electricity bills by up to 90% with government subsidy benefits.
      </p>

      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: "30px" }}>
            Home Solar System Sizes & Pricing in Jaipur
          </h2>
          <div style={styles.table}>
            <p>
              The cost of home solar panel installation in Jaipur depends on
              system size and subsidy. Below is an estimated pricing for
              residential rooftop solar systems:
            </p>
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
                  <td>₹30,000</td>
                  <td>1 - 1.5 years</td>
                </tr>
                <tr>
                  <td>2 kW</td>
                  <td>₹1,000-1,600</td>
                  <td>₹60,000</td>
                  <td>2.5 - 3.5 years</td>
                </tr>
                <tr>
                  <td>3 kW</td>
                  <td>₹1,500-2,400</td>
                  <td>₹78,000</td>
                  <td>1.7 - 2.2 years</td>
                </tr>
                <tr>
                  <td>5 kW</td>
                  <td>₹2,500-4,000</td>
                  <td>₹78,000</td>
                  <td>2.5 - 3.5 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "#F4F7FB" }}>
        <div className="container">
          <h2 style={{ marginBottom: "30px" }}>
            Residential Solar Installation Process in Rajasthan
          </h2>
          <div style={styles.steps}>
            {[
              {
                num: "1",
                title: "Free Consultation",
                desc: "Site survey and system design",
              },
              { num: "2", title: "Quotation", desc: "Detailed cost breakdown" },
              {
                num: "3",
                title: "Documentation",
                desc: "Subsidy and permission paperwork",
              },
              {
                num: "4",
                title: "Installation",
                desc: "Professional installation",
              },
              {
                num: "5",
                title: "Testing",
                desc: "System testing and commissioning",
              },
              {
                num: "6",
                title: "Support",
                desc: "25-year warranty & support",
              },
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
          <h2 style={{ marginBottom: "30px" }}>
            Features of Rooftop Solar Systems for Homes
          </h2>
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

        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <h3 style={{ marginBottom: "20px" }}>
            Get Home Solar Installation Quote in Jaipur
          </h3>
          <Link
            href="/contact"
            style={{
              backgroundColor: "#0057B8",
              color: "white",
              padding: "12px 30px",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Get Free Quote →
          </Link>
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link href="/pm-suryaghar">Solar Subsidy Yojana</Link> |
          <Link href="/services/commercial">Commercial Solar</Link> |
          <Link href="/finance">Solar EMI Options</Link>
        </div>
      </section>
    </>
  );
}

const styles = {
  table: {
    overflowX: "auto",
  },
  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  step: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  stepNum: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "var(--primary-blue)",
    marginBottom: "10px",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
    listStyle: "none",
  },
};
