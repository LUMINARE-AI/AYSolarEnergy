/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { NextSeo } from 'next-seo';

export default function About() {
  return (
    <>
      <NextSeo
        title="About AY Solar Energy - Solar Company Jaipur"
        description="Learn about AY Solar Energy - leading solar installer in Jaipur & Tonk with 500+ projects and 5+ years of experience"
      />

      <Head>
        <title>About AY Solar Energy - Solar Company Jaipur</title>
        <meta name="description" content="Learn about AY Solar Energy - leading solar installer in Jaipur & Tonk with 500+ projects and 5+ years of experience" />
      </Head>

      <Hero title="About AY Solar Energy" subtitle="Leading Solar Solutions Provider" pageHero={true} />

      {/* Our Story Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', marginBottom: '20px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '0px', color: '#333' }}>Our Story</h2>
          </div>
          <div style={styles.content}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#555', marginBottom: '15px' }}>
              AY Solar Energy is a leading solar energy solutions provider based in Jaipur & Tonk, Rajasthan. 
              Founded with a mission to democratize solar energy, we have successfully installed solar systems 
              for over 500 households and businesses across Rajasthan.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#555', marginBottom: '15px' }}>
              With more than 2500+ kW of installed solar capacity and 5+ years of industry experience, we've 
              become a trusted name in the solar energy sector. Our commitment to quality, affordability, and 
              customer satisfaction has made us the preferred choice for solar installations in Jaipur and Tonk.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#555' }}>
              We are authorized installers for PM Suryaghar Yojana and PM KUSUM schemes, helping customers 
              maximize government subsidies while transitioning to clean, renewable energy.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ ...styles.section, backgroundColor: '#F4F7FB' }}>
        <div style={styles.container}>
          <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', marginBottom: '40px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '0px', fontSize: '2rem', color: '#333' }}>Our Mission & Vision</h2>
          </div>
          <div style={styles.missionVision}>
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#0057B8', marginBottom: '15px', fontSize: '1.5rem' }}>🎯 Our Mission</h3>
              <p style={{ lineHeight: '1.8', color: '#555' }}>
                To provide affordable, reliable, and sustainable solar energy solutions that empower individuals 
                and businesses to reduce their carbon footprint and energy costs. We believe in making solar energy 
                accessible to every household and business in Rajasthan.
              </p>
            </div>
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <h3 style={{ color: '#0057B8', marginBottom: '15px', fontSize: '1.5rem' }}>🌟 Our Vision</h3>
              <p style={{ lineHeight: '1.8', color: '#555' }}>
                To be the most trusted solar energy provider in Rajasthan, enabling a sustainable future through 
                clean energy adoption. We envision a Rajasthan where every home and business harnesses the power 
                of the sun for their energy needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', marginBottom: '40px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '0px', fontSize: '2rem', color: '#333' }}>Our Track Record</h2>
          </div>
          <div style={styles.stats}>
            <div style={{ ...styles.stat, backgroundColor: '#E3F2FD', borderRadius: '8px', padding: '30px' }}>
              <div style={styles.statNumber}>200+</div>
              <div style={{ fontSize: '1.1rem', color: '#555' }}>Projects Completed</div>
              <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '10px' }}>Across Jaipur & Tonk</p>
            </div>
            <div style={{ ...styles.stat, backgroundColor: '#E3F2FD', borderRadius: '8px', padding: '30px' }}>
              <div style={styles.statNumber}>2500+</div>
              <div style={{ fontSize: '1.1rem', color: '#555' }}>kW Installed</div>
              <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '10px' }}>Clean solar power</p>
            </div>
            <div style={{ ...styles.stat, backgroundColor: '#E3F2FD', borderRadius: '8px', padding: '30px' }}>
              <div style={styles.statNumber}>5+</div>
              <div style={{ fontSize: '1.1rem', color: '#555' }}>Years Experience</div>
              <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '10px' }}>Industry expertise</p>
            </div>
            <div style={{ ...styles.stat, backgroundColor: '#E3F2FD', borderRadius: '8px', padding: '30px' }}>
              <div style={styles.statNumber}>₹1 Cr+</div>
              <div style={{ fontSize: '1.1rem', color: '#555' }}>Customer Savings</div>
              <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '10px' }}>Annual electricity savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ ...styles.section, backgroundColor: '#F4F7FB' }}>
        <div style={styles.container}>
          <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', marginBottom: '40px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '0px', fontSize: '2rem', color: '#333' }}>Why Choose AY Solar Energy?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '25px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>✅</div>
              <h4 style={{ color: '#0057B8', marginBottom: '10px', fontSize: '1.2rem' }}>Government Authorized</h4>
              <p style={{ color: '#555', lineHeight: '1.6' }}>Authorized installer for PM Suryaghar Yojana and PM KUSUM schemes</p>
            </div>
            <div style={{ padding: '25px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏆</div>
              <h4 style={{ color: '#0057B8', marginBottom: '10px', fontSize: '1.2rem' }}>Quality Assured</h4>
              <p style={{ color: '#555', lineHeight: '1.6' }}>MNRE approved panels and inverters with 25-year warranty</p>
            </div>
            <div style={{ padding: '25px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💰</div>
              <h4 style={{ color: '#0057B8', marginBottom: '10px', fontSize: '1.2rem' }}>Maximum Subsidy</h4>
              <p style={{ color: '#555', lineHeight: '1.6' }}>We handle all subsidy paperwork to maximize your benefits</p>
            </div>
            <div style={{ padding: '25px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🚀</div>
              <h4 style={{ color: '#0057B8', marginBottom: '10px', fontSize: '1.2rem' }}>Fast Installation</h4>
              <p style={{ color: '#555', lineHeight: '1.6' }}>Professional installation completed in 3-7 working days</p>
            </div>
            <div style={{ padding: '25px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🛡️</div>
              <h4 style={{ color: '#0057B8', marginBottom: '10px', fontSize: '1.2rem' }}>After-Sales Support</h4>
              <p style={{ color: '#555', lineHeight: '1.6' }}>Comprehensive warranty and 24/7 customer support</p>
            </div>
            <div style={{ padding: '25px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🌍</div>
              <h4 style={{ color: '#0057B8', marginBottom: '10px', fontSize: '1.2rem' }}>Local Expertise</h4>
              <p style={{ color: '#555', lineHeight: '1.6' }}>Deep knowledge of Jaipur & Tonk market and regulations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', marginBottom: '15px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '0px', fontSize: '2rem', color: '#333' }}>Our Expert Team</h2>
          </div>
          <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.05rem', color: '#666' }}>
            Experienced professionals dedicated to delivering quality solar solutions
          </p>
          <div style={styles.team}>
            <div style={styles.teamMember}>
              <div style={styles.avatar}>👨‍🔧</div>
              <h4 style={{ color: '#0057B8', marginBottom: '10px' }}>Certified Engineers</h4>
              <p style={{ color: '#555', lineHeight: '1.6' }}>MNRE certified solar installation experts with years of field experience</p>
            </div>
            <div style={styles.teamMember}>
              <div style={styles.avatar}>👩‍💼</div>
              <h4 style={{ color: '#0057B8', marginBottom: '10px' }}>Support Team</h4>
              <p style={{ color: '#555', lineHeight: '1.6' }}>Dedicated customer support team available 24/7 for assistance</p>
            </div>
            <div style={styles.teamMember}>
              <div style={styles.avatar}>🔧</div>
              <h4 style={{ color: '#0057B8', marginBottom: '10px' }}>Maintenance Experts</h4>
              <p style={{ color: '#555', lineHeight: '1.6' }}>Regular system maintenance and troubleshooting support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ ...styles.section, backgroundColor: '#0057B8', color: 'white', textAlign: 'center' }}>
        <div style={styles.container}>
          <h2 style={{ marginBottom: '15px', fontSize: '2rem', color: '#FFFFFF' }}>Ready to Go Solar?</h2>
          <p style={{ marginBottom: '30px', fontSize: '1.1rem', opacity: 0.9 }}>
            Get a free consultation and quote for your solar installation today
          </p>
          <Link href="/contact" style={{
            backgroundColor: '#FFC107',
            color: '#333',
            padding: '14px 40px',
            borderRadius: '6px',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
            Get Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}

const styles = {
  section: {
    padding: '60px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  missionVision: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px',
  },
  stat: {
    textAlign: 'center',
    padding: '20px',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#0057B8',
    marginBottom: '10px',
  },
  team: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  teamMember: {
    textAlign: 'center',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  avatar: {
    fontSize: '3rem',
    marginBottom: '15px',
  },
};
