import Head from 'next/head';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { NextSeo } from 'next-seo';

export default function Contact() {
  return (
    <>
      <NextSeo
        title="Contact AY Solar Energy - Get Free Consultation"
        description="Contact us for free solar consultation and site survey"
      />
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
                  <span style={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Phone</strong>
                    <p>{process.env.NEXT_PUBLIC_PHONE}</p>
                  </div>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Email</strong>
                    <p>{process.env.NEXT_PUBLIC_EMAIL}</p>
                  </div>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </span>
                  <div>
                    <strong>Location</strong>
                    <p>Jaipur & Tonk, Rajasthan</p>
                  </div>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </span>
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
