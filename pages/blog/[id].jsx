import Head from 'next/head';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { NextSeo } from 'next-seo';

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <>
        <NextSeo
          title="Blog Post Not Found"
          description="The blog post you're looking for doesn't exist"
        />

        <Head>
          <title>Blog Post Not Found</title>
        </Head>
        <Hero title="Blog Post Not Found" subtitle="The post you're looking for doesn't exist" pageHero={true} />
        <section className="section">
          <div className="container">
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <h2>Sorry, this blog post could not be found.</h2>
              <p style={{ marginTop: '20px', marginBottom: '30px', color: '#666' }}>
                The blog post you&apos;re looking for might have been removed or is temporarily unavailable.
              </p>
              <Link href="/blog" style={{
                backgroundColor: '#0057B8',
                color: 'white',
                padding: '12px 30px',
                borderRadius: '6px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600'
              }}>
                Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <NextSeo
        title={`${post.title} - AY Solar Energy Blog`}
        description={post.excerpt}
      />
      <Head>
        <title>{post.title} - AY Solar Energy Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <Hero title={post.title} subtitle={post.category} pageHero={true} />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Meta Info */}
            <div style={{
              display: 'flex',
              gap: '20px',
              marginBottom: '30px',
              paddingBottom: '20px',
              borderBottom: '1px solid #eee',
              color: '#666',
              fontSize: '0.95rem'
            }}>
              <span>📅 {post.date}</span>
              <span>⏱️ {post.readTime}</span>
              <span>📁 {post.category}</span>
            </div>

            {/* Featured Image */}
            <div style={{
              width: '100%',
              height: '400px',
              backgroundColor: '#F4F7FB',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              marginBottom: '40px'
            }}>
              📰
            </div>

            {/* Content */}
            <div style={{ lineHeight: '1.8', color: '#555', fontSize: '1.05rem' }}>
              <p>{post.excerpt}</p>
              
              <h3 style={{ marginTop: '40px', marginBottom: '15px', color: '#333' }}>Key Points</h3>
              <ul style={{ marginLeft: '20px', marginBottom: '30px' }}>
                <li style={{ marginBottom: '10px' }}>Comprehensive information about {post.title.toLowerCase()}</li>
                <li style={{ marginBottom: '10px' }}>Expert insights and practical tips</li>
                <li style={{ marginBottom: '10px' }}>Real-world examples and case studies</li>
                <li style={{ marginBottom: '10px' }}>Actionable recommendations for implementation</li>
              </ul>

              <p>
                This article provides detailed guidance on {post.title.toLowerCase()}. 
                Whether you&apos;re a homeowner, business owner, or farmer, understanding these concepts 
                will help you make informed decisions about solar energy solutions.
              </p>

              <h3 style={{ marginTop: '40px', marginBottom: '15px', color: '#333' }}>Why This Matters</h3>
              <p>
                Solar energy is transforming the way we power our homes and businesses. 
                By learning about {post.title.toLowerCase()}, you can maximize the benefits 
                of solar installation and contribute to a sustainable future.
              </p>

              <h3 style={{ marginTop: '40px', marginBottom: '15px', color: '#333' }}>Next Steps</h3>
              <p>
                Ready to explore solar solutions? Contact AY Solar Energy for a free consultation 
                and personalized recommendations based on your specific needs.
              </p>
            </div>

            {/* CTA */}
            <div style={{
              backgroundColor: '#E3F2FD',
              padding: '30px',
              borderRadius: '8px',
              textAlign: 'center',
              marginTop: '50px'
            }}>
              <h3 style={{ marginBottom: '15px', color: '#333' }}>Ready to Go Solar?</h3>
              <p style={{ marginBottom: '20px', color: '#666' }}>
                Get a free consultation and quote for your solar installation
              </p>
              <Link href="/contact" style={{
                backgroundColor: '#0057B8',
                color: 'white',
                padding: '12px 30px',
                borderRadius: '6px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600'
              }}>
                Get Free Consultation
              </Link>
            </div>

            {/* Back to Blog */}
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/blog" style={{
                color: '#0057B8',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const blogPosts = [
    {
      id: 1,
      title: 'How to Maximize Your Solar Panel Efficiency',
      excerpt: 'Learn the best practices to ensure your solar panels operate at peak efficiency throughout the year.',
      date: 'March 15, 2024',
      category: 'Solar Tips',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Understanding PM Suryaghar Yojana: Complete Guide',
      excerpt: 'A comprehensive guide to India\'s biggest rooftop solar scheme and how to apply for maximum subsidy.',
      date: 'March 10, 2024',
      category: 'Government Schemes',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Solar vs Traditional Energy: Cost Comparison 2024',
      excerpt: 'Detailed analysis of how solar energy compares to traditional electricity in terms of cost and efficiency.',
      date: 'March 5, 2024',
      category: 'Cost Analysis',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Net Metering Explained: Sell Your Excess Solar Power',
      excerpt: 'Understand how net metering works and how you can earn money by selling surplus solar power to the grid.',
      date: 'February 28, 2024',
      category: 'Solar Technology',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'PM KUSUM Yojana for Farmers: Everything You Need to Know',
      excerpt: 'Complete guide to the PM KUSUM scheme for farmers in Rajasthan and how to get solar pumps with 90% subsidy.',
      date: 'February 20, 2024',
      category: 'Government Schemes',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Maintenance Tips for Your Solar Installation',
      excerpt: 'Essential maintenance practices to keep your solar system running smoothly for 25+ years.',
      date: 'February 15, 2024',
      category: 'Maintenance',
      readTime: '5 min read'
    },
    {
      id: 7,
      title: 'Solar Panel Degradation: What You Should Know',
      excerpt: 'Understanding how solar panels degrade over time and what you can do to minimize efficiency loss.',
      date: 'February 10, 2024',
      category: 'Solar Technology',
      readTime: '6 min read'
    },
    {
      id: 8,
      title: 'Financing Your Solar Installation: Loan Options in Rajasthan',
      excerpt: 'Explore various financing options and loan schemes available for solar installations in Rajasthan.',
      date: 'February 5, 2024',
      category: 'Finance',
      readTime: '7 min read'
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(params.id));

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 3600,
  };
}

export async function getStaticPaths() {
  const blogPosts = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];

  return {
    paths: blogPosts.map(post => ({
      params: { id: post.id.toString() },
    })),
    fallback: 'blocking',
  };
}
