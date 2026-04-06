/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import HomeShowcase from '@/components/HomeShowcase';

export default function Home() {
  return (
    <>
      <Head>
        <title>AY Solar Energy - Solar Panel Installation Jaipur & Tonk</title>
        <meta name="description" content="Leading solar energy solutions in Jaipur & Tonk. PM Suryaghar, residential, commercial, and Kusum Yojana installations." />
      </Head>

      <Hero
        title="Harness the Power of Sun"
        subtitle="Solar Solutions in Jaipur & Tonk"
        cta={true}
      />

      <HomeShowcase />

      {/* Why Solar Section */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px', backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ color: '#333' }}>Why Choose Solar Energy?</h2>
            <p>Harness the unlimited power of the sun with proven benefits</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💰</div>
              <h3>Save on Bills</h3>
              <p>Reduce your electricity bills by up to 90% with rooftop solar installation. Generate your own clean energy.</p>
            </div>
            <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🏛️</div>
              <h3>Government Subsidy</h3>
              <p>Get up to ₹78,000 subsidy under PM Suryaghar Yojana. Additional Rajasthan state subsidy available.</p>
            </div>
            <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '8px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🌍</div>
              <h3>Clean Energy</h3>
              <p>Contribute to a sustainable future. Solar energy is renewable, clean, and environmentally friendly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: '60px 0', backgroundColor: '#F4F7FB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px', backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ color: '#333' }}>Our Services</h2>
            <p>Complete solar solutions for homes, businesses, and farmers</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', textAlign: 'center' }}>🏠</div>
              <h3 style={{ textAlign: 'center' }}>Residential Rooftop Solar</h3>
              <p>1kW to 10kW systems for homeowners. Compatible with PM Suryaghar Yojana.</p>
              <div style={{ textAlign: 'center', marginTop: '15px' }}>
                <Link href="/services/residential" style={{ color: '#0057B8', fontWeight: '600', textDecoration: 'none' }}>
                  Learn More →
                </Link>
              </div>
            </div>
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', textAlign: 'center' }}>🏭</div>
              <h3 style={{ textAlign: 'center' }}>C&I Solar</h3>
              <p>Commercial and industrial solar solutions. Larger capacity systems with net metering.</p>
              <div style={{ textAlign: 'center', marginTop: '15px' }}>
                <Link href="/services/commercial" style={{ color: '#0057B8', fontWeight: '600', textDecoration: 'none' }}>
                  Learn More →
                </Link>
              </div>
            </div>
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', textAlign: 'center' }}>🚜</div>
              <h3 style={{ textAlign: 'center' }}>Kusum Yojana</h3>
              <p>PM KUSUM scheme for farmers. Solar pumps for agricultural use.</p>
              <div style={{ textAlign: 'center', marginTop: '15px' }}>
                <Link href="/services/kusum" style={{ color: '#0057B8', fontWeight: '600', textDecoration: 'none' }}>
                  Learn More →
                </Link>
              </div>
            </div>
            <div style={{ padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px', textAlign: 'center' }}>💳</div>
              <h3 style={{ textAlign: 'center' }}>Finance Facility</h3>
              <p>Solar loans with flexible EMI options. Zero-cost solar finance available.</p>
              <div style={{ textAlign: 'center', marginTop: '15px' }}>
                <Link href="/finance" style={{ color: '#0057B8', fontWeight: '600', textDecoration: 'none' }}>
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PM Suryaghar Banner */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ backgroundColor: '#E3F2FD', color: '#333', padding: '40px', borderRadius: '8px', textAlign: 'center' }}>
            <h2 style={{ color: '#333' }}>🌞 Apply for PM Suryaghar Yojana</h2>
            <p>Get up to ₹78,000 subsidy + 300 units free electricity per month</p>
            <Link href="/pm-suryaghar" style={{ backgroundColor: '#FFC107', color: '#333', padding: '12px 30px', borderRadius: '4px', fontWeight: '600', display: 'inline-block', textDecoration: 'none', marginTop: '15px' }}>
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose AY Solar Energy */}
      <section style={{ padding: '60px 0', backgroundColor: '#F4F7FB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px', backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ color: '#333' }}>Why Choose AY Solar Energy?</h2>
            <p>Your trusted solar partner in Jaipur & Tonk</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🎯</div>
              <h4>Local Experts</h4>
              <p>Deep knowledge of Jaipur & Tonk market and local regulations</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>✅</div>
              <h4>Govt Empanelled</h4>
              <p>Authorized installer for PM Suryaghar and Kusum Yojana schemes</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🔧</div>
              <h4>End-to-End Service</h4>
              <p>From consultation to installation to subsidy processing</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🛡️</div>
              <h4>After Sales Support</h4>
              <p>Comprehensive warranty and maintenance support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px', backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ color: '#333' }}>What Our Customers Say</h2>
            <p>Real experiences from satisfied customers in Jaipur & Tonk</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '15px', color: '#666' }}>
                &quot;AY Solar Energy made the entire process so easy. From consultation to installation to subsidy approval, everything was handled professionally. My electricity bill has reduced significantly!&quot;
              </p>
              <div style={{ fontWeight: '600', color: '#0057B8' }}>Rajesh Kumar</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Jaipur, Rajasthan</div>
            </div>
            <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '15px', color: '#666' }}>
                &quot;I was skeptical about solar initially, but the team at AY Solar Energy explained everything clearly. The installation was quick and the quality is excellent. Highly recommended!&quot;
              </p>
              <div style={{ fontWeight: '600', color: '#0057B8' }}>Priya Sharma</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Tonk, Rajasthan</div>
            </div>
            <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '15px', color: '#666' }}>
                &quot;Best decision I made for my home. The subsidy process was handled smoothly by AY Solar Energy. Now I&apos;m generating my own clean energy and saving money every month.&quot;
              </p>
              <div style={{ fontWeight: '600', color: '#0057B8' }}>Vikram Singh</div>
              <div style={{ fontSize: '0.9rem', color: '#666' }}>Jaipur, Rajasthan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section style={{ padding: '60px 0', backgroundColor: '#F4F7FB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px', backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ color: '#333' }}>Ready to Go Solar?</h2>
            <p>Contact us today for a free consultation and quote</p>
          </div>
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>📞</div>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE?.replace(/\s/g, '')}`} style={{ color: '#0057B8', fontWeight: '600', textDecoration: 'none' }}>
                {process.env.NEXT_PUBLIC_PHONE}
              </a>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>💬</div>
              <a href={process.env.NEXT_PUBLIC_WHATSAPP} target="_blank" rel="noopener noreferrer" style={{ color: '#0057B8', fontWeight: '600', textDecoration: 'none' }}>
                WhatsApp Us
              </a>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '10px' }}>✉️</div>
              <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} style={{ color: '#0057B8', fontWeight: '600', textDecoration: 'none' }}>
                {process.env.NEXT_PUBLIC_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Link to Projects Page */}
      <section style={{ padding: '60px 0', backgroundColor: '#F4F7FB', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
            <h2 style={{ marginBottom: '0px', color: '#333' }}>View Our Completed Projects</h2>
          </div>
          <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: '#666' }}>
            Explore 500+ successful solar installations across Rajasthan
          </p>
          <Link href="/projects" style={{
            backgroundColor: '#0057B8',
            color: 'white',
            padding: '14px 40px',
            borderRadius: '6px',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => e.target.style.backgroundColor = '#003A8C'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0057B8'}>
            View All Projects →
          </Link>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px', backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px' }}>
            <h2 style={{ color: '#333' }}>Our Brand Partners</h2>
            <p>We work with India's leading solar and inverter manufacturers</p>
          </div>

          <h3 style={{ textAlign: 'center', margin: '2rem 0 1rem', color: '#0057B8', fontSize: '1.3rem' }}>Solar Panels</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            <div style={{ padding: '20px', backgroundColor: '#F4F7FB', borderRadius: '8px', textAlign: 'center', fontWeight: '600', color: '#333' }}>
              <Image src="/images/brands/adani-solar.PNG" alt="Adani Solar" width={150} height={60} style={{ maxWidth: '100%', height: '60px', objectFit: 'contain' }} />
              <div style={{ marginTop: '10px' }}>Adani Solar</div>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#F4F7FB', borderRadius: '8px', textAlign: 'center', fontWeight: '600', color: '#333' }}>
              <Image src="/images/brands/tata-power-solar.PNG" alt="Tata Power Solar" width={150} height={60} style={{ maxWidth: '100%', height: '60px', objectFit: 'contain' }} />
              <div style={{ marginTop: '10px' }}>Tata Power Solar</div>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#F4F7FB', borderRadius: '8px', textAlign: 'center', fontWeight: '600', color: '#333' }}>
              <Image src="/images/brands/vikram-solar.PNG" alt="Vikram Solar" width={150} height={60} style={{ maxWidth: '100%', height: '60px', objectFit: 'contain' }} />
              <div style={{ marginTop: '10px' }}>Vikram Solar</div>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#F4F7FB', borderRadius: '8px', textAlign: 'center', fontWeight: '600', color: '#333' }}>
              <Image src="/images/brands/rayzone-solar.PNG" alt="Rayzone Solar" width={150} height={60} style={{ maxWidth: '100%', height: '60px', objectFit: 'contain' }} />
              <div style={{ marginTop: '10px' }}>Rayzone Solar</div>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#F4F7FB', borderRadius: '8px', textAlign: 'center', fontWeight: '600', color: '#333' }}>
              <Image src="/images/brands/waree-solar.PNG" alt="Waree Solar" width={150} height={60} style={{ maxWidth: '100%', height: '60px', objectFit: 'contain' }} />
              <div style={{ marginTop: '10px' }}>Waree Solar</div>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#F4F7FB', borderRadius: '8px', textAlign: 'center', fontWeight: '600', color: '#333' }}>
              <Image src="/images/brands/luminous-solar.PNG" alt="Luminous Solar" width={150} height={60} style={{ maxWidth: '100%', height: '60px', objectFit: 'contain' }} />
              <div style={{ marginTop: '10px' }}>Luminous Solar</div>
            </div>
          </div>

          <h3 style={{ textAlign: 'center', margin: '2rem 0 1rem', color: '#0057B8', fontSize: '1.3rem' }}>Inverters</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '20px', backgroundColor: '#F4F7FB', borderRadius: '8px', textAlign: 'center', fontWeight: '600', color: '#333' }}>
              <Image src="/images/brands/polycab.PNG" alt="Polycab" width={150} height={60} style={{ maxWidth: '100%', height: '60px', objectFit: 'contain' }} />
              <div style={{ marginTop: '10px' }}>Polycab</div>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#F4F7FB', borderRadius: '8px', textAlign: 'center', fontWeight: '600', color: '#333' }}>
              <Image src="/images/brands/genus.PNG" alt="Genus" width={150} height={60} style={{ maxWidth: '100%', height: '60px', objectFit: 'contain' }} />
              <div style={{ marginTop: '10px' }}>Genus</div>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#F4F7FB', borderRadius: '8px', textAlign: 'center', fontWeight: '600', color: '#333' }}>
              <Image src="/images/brands/sungrow.PNG" alt="SunGrow" width={150} height={60} style={{ maxWidth: '100%', height: '60px', objectFit: 'contain' }} />
              <div style={{ marginTop: '10px' }}>SunGrow</div>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#F4F7FB', borderRadius: '8px', textAlign: 'center', fontWeight: '600', color: '#333' }}>
              <Image src="/images/brands/k-solar.PNG" alt="K Solar" width={150} height={60} style={{ maxWidth: '100%', height: '60px', objectFit: 'contain' }} />
              <div style={{ marginTop: '10px' }}>K Solar</div>
            </div>
          </div>
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
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  grid4: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  highlightBanner: {
    backgroundColor: 'var(--primary-blue)',
    color: 'white',
    padding: '40px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  infoStrip: {
    backgroundColor: '#FFF3CD',
    color: '#856404',
    padding: '20px',
    textAlign: 'center',
    borderLeft: '4px solid var(--accent-gold)',
  },
  badge: {
    textAlign: 'center',
    padding: '30px 20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  badgeIcon: {
    fontSize: '2.5rem',
    marginBottom: '15px',
  },
  brandCategory: {
    textAlign: 'center',
    margin: '2rem 0 1rem',
    color: 'var(--primary-blue)',
    fontSize: '1.3rem',
  },
  brandsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
  brandLogo: {
    padding: '20px',
    backgroundColor: '#F4F7FB',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: '600',
    color: 'var(--text-dark)',
  },
  testimonialCard: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  testimonialText: {
    fontStyle: 'italic',
    marginBottom: '15px',
    color: 'var(--text-light)',
    lineHeight: '1.6',
  },
  testimonialAuthor: {
    fontWeight: '600',
    color: 'var(--primary-blue)',
    marginBottom: '5px',
  },
  testimonialLocation: {
    fontSize: '0.9rem',
    color: 'var(--text-light)',
  },
  contactInfo: {
    display: 'flex',
    gap: '40px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  contactItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  btnLink: {
    backgroundColor: 'var(--accent-gold)',
    color: 'var(--text-dark)',
    padding: '12px 30px',
    borderRadius: '4px',
    fontWeight: '600',
    display: 'inline-block',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  subsidy: {
    fontSize: '2rem',
    fontWeight: '700',
    color: 'var(--primary-blue)',
  },
};
