import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { NextSeo } from "next-seo";

export default function Services() {
  return (
    <>
      <NextSeo
        title="Solar Installation Services Jaipur & Tonk - Rooftop, Commercial, PM Schemes"
        description="Complete solar installation services in Jaipur & Tonk including residential rooftop solar, commercial systems, PM Suryaghar and Kusum Yojana. Get free consultation."
      />

      <Hero
        title="Solar Installation Services in Jaipur & Tonk"
        subtitle="Residential, Commercial & Government Solar Solutions"
        pageHero={true}
      />

      <p
        style={{ textAlign: "center", maxWidth: "800px", margin: "20px auto" }}
      >
        AY Solar Energy provides complete solar installation services in Jaipur
        and Tonk including home rooftop solar, commercial solar systems, and
        government schemes like PM Suryaghar and KUSUM Yojana.
      </p>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid}>
            <ServiceCard
              icon="🏠"
              title="Residential Rooftop Solar"
              description="Home solar panel installation in Jaipur with 1kW–10kW rooftop systems and subsidy benefits"
              link="/services/residential"
            />
            <ServiceCard
              icon="🏭"
              title="Commercial & Industrial"
              description="Commercial solar installation in Jaipur for industries, offices and factories with high ROI"
              link="/services/commercial"
            />
            <ServiceCard
              icon="🌾"
              title="PM Kusum Yojana"
              description="PM KUSUM Yojana solar pumps for farmers in Rajasthan with up to 90% subsidy"
              link="/services/kusum"
            />
            <ServiceCard
              icon="💳"
              title="Finance & Subsidy"
              description="Easy financing options and EMI calculator for solar installations in Jaipur"
              link="/finance"
            />
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, backgroundColor: "#F4F7FB" }}>
        <div style={styles.container}>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
            Why Choose Our Solar Installation Services in Jaipur & Tonk?
          </h2>
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

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link href="/pm-suryaghar">PM Suryaghar Subsidy</Link> |
          <Link href="/services/residential">Home Solar</Link> |
          <Link href="/services/commercial">Commercial Solar</Link>
        </div>
      </section>
    </>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  feature: {
    textAlign: "center",
    padding: "20px",
  },
  featureIcon: {
    fontSize: "2rem",
    color: "var(--primary-blue)",
    marginBottom: "10px",
  },
  cta: {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#F4F7FB",
    borderRadius: "8px",
  },
};
