import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Residential Solar Installation',
      customer: 'Usha Bal',
      location: 'Jaipur, Rajasthan',
      capacity: '11 kW',
      savings: '₹15,000+',
      image: '/images/project-1.jpeg'
    },
    {
      id: 2,
      title: 'Home Rooftop Solar',
      customer: 'Sunil Kumar',
      location: 'Jaipur, Rajasthan',
      capacity: '10 kW',
      savings: '₹12,000+',
      image: '/images/project-2.jpeg'
    },
    {
      id: 3,
      title: 'Home Rooftop Solar',
      customer: 'Makbool Khatun',
      location: 'Chaksu, Jaipur, Rajasthan',
      capacity: '5 kW',
      savings: '₹5,000+',
      image: '/images/project-3.jpeg'
    },
    {
      id: 4,
      title: 'Home Rooftop Solar',
      customer: 'Hamza Saeedi',
      location: 'Tonk, Rajasthan',
      capacity: '8 kW',
      savings: '₹8,000+',
      image: '/images/project-4.jpeg'
    },
    {
      id: 5,
      title: 'Residential Solar System',
      customer: 'Hasan Khan',
      location: 'Tonk, Rajasthan',
      capacity: '5 kW',
      savings: '₹5,000+',
      image: '/images/project-5.jpeg'
    },
    {
      id: 6,
      title: 'Residential Solar System',
      customer: 'Saifurrahman Khan',
      location: 'Tonk, Rajasthan',
      capacity: '3 kW',
      savings: '₹3,000+',
      image: '/images/project-6.jpeg'
    }
  ];

  return (
    <>
      <NextSeo
        title="Our Projects - AY Solar Energy"
        description="View our completed solar projects across Jaipur & Tonk. 500+ successful installations with real customer testimonials."
      />
      <Head>
        <title>Our Projects - AY Solar Energy</title>
        <meta name="description" content="View our completed solar projects across Jaipur & Tonk. 500+ successful installations with real customer testimonials." />
      </Head>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Our Completed Projects</h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Real installations from satisfied customers across Rajasthan</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            {projects.map((project) => (
              <div key={project.id} style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }}>
                <Image src={project.image} alt={project.title} width={300} height={200} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <h3 style={{ marginBottom: '15px', color: '#0057B8', fontSize: '1.2rem' }}>{project.title}</h3>
                  <div style={{ marginBottom: '10px', fontSize: '0.95rem' }}><strong>Customer:</strong> {project.customer}</div>
                  <div style={{ marginBottom: '10px', fontSize: '0.95rem' }}><strong>Location:</strong> {project.location}</div>
                  <div style={{ marginBottom: '10px', fontSize: '0.95rem' }}><strong>Capacity:</strong> {project.capacity}</div>
                  <div style={{ fontSize: '0.95rem', color: '#2E7D32', fontWeight: '600' }}><strong>Monthly Savings:</strong> {project.savings}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Track Record Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#F4F7FB', borderRadius: '8px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#0057B8', marginBottom: '10px' }}>500+</div>
              <h4 style={{ marginBottom: '10px', color: '#333' }}>Projects Completed</h4>
              <p>Successful installations across Rajasthan</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#F4F7FB', borderRadius: '8px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#0057B8', marginBottom: '10px' }}>2500+ kW</div>
              <h4 style={{ marginBottom: '10px', color: '#333' }}>Total Capacity</h4>
              <p>Solar power generating clean energy</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#F4F7FB', borderRadius: '8px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#0057B8', marginBottom: '10px' }}>₹5 Cr+</div>
              <h4 style={{ marginBottom: '10px', color: '#333' }}>Customer Savings</h4>
              <p>Annual electricity bill savings</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#F4F7FB', borderRadius: '8px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#0057B8', marginBottom: '10px' }}>5+</div>
              <h4 style={{ marginBottom: '10px', color: '#333' }}>Years Experience</h4>
              <p>Trusted solar energy partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '60px 0', backgroundColor: '#F4F7FB' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{ backgroundColor: '#E3F2FD', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
            <h2 style={{ marginBottom: '0px', color: '#333' }}>Ready to Join Our Success Stories?</h2>
          </div>
          <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: '#666' }}>
            Get a free consultation and quote for your solar installation
          </p>
          <Link href="/contact" style={{
            backgroundColor: '#0057B8',
            color: 'white',
            padding: '14px 40px',
            borderRadius: '6px',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => e.target.style.backgroundColor = '#003A8C'} onMouseLeave={(e) => e.target.style.backgroundColor = '#0057B8'}>
            Get Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
