import Head from 'next/head';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact AY Solar Energy - Get Free Consultation</title>
        <meta name="description" content="Contact us for free solar consultation and site survey" />
      </Head>

      <Hero title="Contact Us" subtitle="Get Your Free Solar Consultation" pageHero={true} />

      <section className="section">
        <div className="container">
          <div style={styles.contactGrid}>
            <div>
              <h3>Contact Information</h3>
              <div style={styles.contactInfo}>
                <div style={styles.infoItem}>
                  <span style={styles.icon}>📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p>{process.env.NEXT_PUBLIC_PHONE}</p>
                  </div>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.icon}>📧</span>
                  <div>
                    <strong>Email</strong>
                    <p>{process.env.NEXT_PUBLIC_EMAIL}</p>
                  </div>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.icon}>📍</span>
                  <div>
                    <strong>Location</strong>
                    <p>Jaipur & Tonk, Rajasthan</p>
                  </div>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.icon}>💬</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <a href={process.env.NEXT_PUBLIC_WHATSAPP} target="_blank" rel="noopener noreferrer">
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3>Send us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#F4F7FB' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Service Areas</h2>
          <div style={styles.serviceAreas}>
            <div style={styles.area}>
              <h4>Jaipur</h4>
              <p>All areas including C-Scheme, Bani Park, Malviya Nagar, and surrounding regions</p>
            </div>
            <div style={styles.area}>
              <h4>Tonk</h4>
              <p>City center and nearby villages</p>
            </div>
            <div style={styles.area}>
              <h4>Nearby Areas</h4>
              <p>Dausa, Karauli, and other nearby districts</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Frequently Asked Questions</h2>
          <div style={styles.faq}>
            {[
              {
                q: 'How long does installation take?',
                a: 'Typically 2-3 days for residential systems'
              },
              {
                q: 'What is the warranty period?',
                a: '25 years for panels, 5 years for inverter'
              },
              {
                q: 'Do you provide financing options?',
                a: 'Yes, we offer EMI options through partner banks'
              },
              {
                q: 'Is there any maintenance required?',
                a: 'Minimal maintenance - free for first 5 years'
              },
            ].map((item, i) => (
              <div key={i} style={styles.faqItem}>
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  infoItem: {
    display: 'flex',
    gap: '15px',
  },
  icon: {
    fontSize: '1.5rem',
  },
  serviceAreas: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  area: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  faq: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  faqItem: {
    padding: '20px',
    backgroundColor: '#F4F7FB',
    borderRadius: '8px',
    borderLeft: '4px solid var(--primary-blue)',
  },
};
