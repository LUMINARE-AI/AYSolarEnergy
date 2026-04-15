import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";
import Link from "next/link";

export default function Commercial() {
  return (
    <>
      <NextSeo
        title="Commercial & Industrial Solar - AY Solar Energy"
        description="Large-scale solar solutions for businesses and industries"
      />

      <Hero
        title="Commercial Solar Installation in Jaipur & Tonk"
        subtitle="Industrial Solar Solutions for Businesses"
        pageHero={true}
      />

      <p
        style={{ textAlign: "center", maxWidth: "800px", margin: "20px auto" }}
      >
        AY Solar Energy provides commercial solar installation in Jaipur and
        Tonk for offices, factories, schools, and industries. Reduce electricity
        costs by up to 80% with high-efficiency solar systems.
      </p>

      <section className="section">
        <div className="container">
          <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
            Commercial Solar Applications in Jaipur
          </h2>
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

      <section className="section" style={{ backgroundColor: "#F4F7FB" }}>
        <div className="container">
          <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
            Benefits of Commercial Solar Installation
          </h2>
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
          <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
            Our Solar Installation Process in Rajasthan
          </h2>
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
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link href="/services/residential">Residential Solar</Link> |
          <Link href="/pm-suryaghar">Solar Subsidy Yojana</Link> |
          <Link href="/finance">Solar EMI Options</Link>
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h3 style={{ marginBottom: "20px" }}>Get Commercial Solar Installation Quote in Jaipur</h3>
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
      </section>
    </>
  );
}

const styles = {
  applications: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  app: {
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  benefits: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  benefit: {
    textAlign: "center",
    padding: "20px",
  },
  benefitIcon: {
    fontSize: "2.5rem",
    marginBottom: "10px",
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
};
