/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";

export default function Kusum() {
  return (
    <>
      <NextSeo
        title="PM KUSUM Yojana Solar Pump Jaipur - Subsidy for Farmers Rajasthan"
        description="Get PM KUSUM Yojana solar pump in Jaipur with up to 60% subsidy. Solar irrigation systems for farmers in Rajasthan. Apply now with AY Solar Energy."
      />

      <Hero
        title="PM KUSUM Yojana Solar Pump Installation in Jaipur & Tonk"
        subtitle="Government Subsidy Scheme for Farmers"
      />

      <p
        style={{ textAlign: "center", maxWidth: "800px", margin: "20px auto" }}
      >
        AY Solar Energy provides PM KUSUM Yojana solar pump installation in
        Jaipur and Tonk. Farmers can get up to 60% subsidy on solar irrigation
        systems and reduce diesel costs permanently.
      </p>

      <section className="section">
        <div className="container">
          <div style={styles.overview}>
            <h2>PM KUSUM Yojana Overview in Rajasthan</h2>
            <p>
              PM Kusum Yojana is a government initiative to provide solar energy
              solutions to farmers. It includes solar pumps, grid-connected
              systems, and standalone systems for agricultural use.
            </p>
            <p>
              The PM KUSUM Yojana in Rajasthan helps farmers install solar pumps
              for irrigation. It reduces electricity and diesel costs while
              providing a reliable power source for agriculture.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "#F4F7FB" }}>
        <div className="container">
          <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
            Solar Pump Components under KUSUM Scheme
          </h2>
          <div style={styles.components}>
            <div style={styles.component}>
              <h3>Component A</h3>
              <p>
                <strong>Solar Pumps</strong>
              </p>
              <ul>
                <li>• 0.5 to 7.5 HP capacity</li>
                <li>• For irrigation</li>
                <li>• 60% subsidy</li>
              </ul>
            </div>
            <div style={styles.component}>
              <h3>Component B</h3>
              <p>
                <strong>Grid-Connected Systems</strong>
              </p>
              <ul>
                <li>• 1 to 10 MW capacity</li>
                <li>• Sell excess power</li>
                <li>• 40% subsidy</li>
              </ul>
            </div>
            <div style={styles.component}>
              <h3>Component C</h3>
              <p>
                <strong>Standalone Systems</strong>
              </p>
              <ul>
                <li>• For remote areas</li>
                <li>• 50% subsidy</li>
                <li>• No grid connection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
            Benefits of Solar Pump for Farmers
          </h2>
          <div style={styles.benefits}>
            <div style={styles.benefit}>
              <div style={styles.icon}>💰</div>
              <h4>Reduce Costs</h4>
              <p>Save on diesel and electricity</p>
            </div>
            <div style={styles.benefit}>
              <div style={styles.icon}>🌾</div>
              <h4>Increase Yield</h4>
              <p>Reliable water supply for irrigation</p>
            </div>
            <div style={styles.benefit}>
              <div style={styles.icon}>💵</div>
              <h4>Additional Income</h4>
              <p>Sell excess power to grid</p>
            </div>
            <div style={styles.benefit}>
              <div style={styles.icon}>🌍</div>
              <h4>Eco-Friendly</h4>
              <p>Clean energy for agriculture</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "#F4F7FB" }}>
        <div className="container">
          <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
            Eligibility for PM KUSUM Yojana
          </h2>
          <ul style={styles.criteria}>
            <li>✓ Indian farmer</li>
            <li>✓ Own agricultural land</li>
            <li>✓ No previous solar subsidy</li>
            <li>✓ Land suitable for solar</li>
            <li>✓ Electricity connection (for grid-connected)</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
            How to Apply for PM KUSUM Yojana in Jaipur
          </h2>
          <div style={styles.process}>
            {[
              { num: "1", title: "Registration", desc: "Register on portal" },
              { num: "2", title: "Verification", desc: "Land verification" },
              { num: "3", title: "Approval", desc: "Get approval" },
              { num: "4", title: "Installation", desc: "System installation" },
              { num: "5", title: "Inspection", desc: "Government inspection" },
              { num: "6", title: "Subsidy", desc: "Receive subsidy" },
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

      <section className="section" style={{ backgroundColor: "#F4F7FB" }}>
        <div className="container">
          <div style={styles.cta}>
            <h2>Apply for PM KUSUM Yojana Solar Pump</h2>
            <p>Get up to 90% subsidy on solar pumps in Jaipur & Tonk</p>
            <Link href="/contact" className="btn btn-primary">
              Get Free Consultation
            </Link>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link href="/services/residential">Home Solar</Link> |
          <Link href="/pm-suryaghar">Solar Subsidy Scheme</Link> |
          <Link href="/finance">Solar EMI Options</Link>
        </div>
      </section>
    </>
  );
}

const styles = {
  overview: {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  },
  components: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  component: {
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  benefits: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
  },
  benefit: {
    textAlign: "center",
    padding: "20px",
  },
  icon: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  criteria: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "15px",
    listStyle: "none",
    maxWidth: "800px",
    margin: "0 auto",
  },
  process: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
  },
  step: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#F4F7FB",
    borderRadius: "8px",
  },
  stepNum: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "var(--primary-blue)",
    marginBottom: "10px",
  },
  cta: {
    textAlign: "center",
    padding: "40px",
  },
};
