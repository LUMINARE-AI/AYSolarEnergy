import { useState } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";

const initialBlogPosts = [
  {
    id: 1,
    title: "How to Maximize Solar Panel Efficiency in Jaipur Homes",
    excerpt:
      "Learn the best practices to ensure your solar panels operate at peak efficiency throughout the year.",
    date: "March 15, 2024",
    category: "Solar Tips Jaipur",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "PM Suryaghar Yojana Guide Jaipur - How to Get Solar Subsidy",
    excerpt:
      "A comprehensive guide to India's biggest rooftop solar scheme and how to apply for maximum subsidy.",
    date: "March 10, 2024",
    category: "Government Solar Schemes in Rajasthan",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Solar vs Traditional Energy: Cost Comparison 2024",
    excerpt:
      "Detailed analysis of how solar energy compares to traditional electricity in terms of cost and efficiency.",
    date: "March 5, 2024",
    category: "Solar Cost & ROI",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Net Metering Explained: Sell Your Excess Solar Power",
    excerpt:
      "Understand how net metering works and how you can earn money by selling surplus solar power to the grid.",
    date: "February 28, 2024",
    category: "Solar Technology Guide",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "PM KUSUM Yojana for Farmers: Everything You Need to Know",
    excerpt:
      "Complete guide to the PM KUSUM scheme for farmers in Rajasthan and how to get solar pumps with 90% subsidy.",
    date: "February 20, 2024",
    category: "Government Schemes",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Maintenance Tips for Your Solar Installation",
    excerpt:
      "Essential maintenance practices to keep your solar system running smoothly for 25+ years.",
    date: "February 15, 2024",
    category: "Solar Maintenance tips",
    readTime: "5 min read",
  },
  {
    id: 7,
    title: "Solar Panel Degradation: What You Should Know",
    excerpt:
      "Understanding how solar panels degrade over time and what you can do to minimize efficiency loss.",
    date: "February 10, 2024",
    category: "Solar Technology",
    readTime: "6 min read",
  },
  {
    id: 8,
    title: "Financing Your Solar Installation: Loan Options in Rajasthan",
    excerpt:
      "Explore various financing options and loan schemes available for solar installations in Rajasthan.",
    date: "February 5, 2024",
    category: "Finance",
    readTime: "7 min read",
  },
];

const initialCategories = [
  "All",
  "Solar Tips",
  "Government Schemes",
  "Cost Analysis",
  "Solar Technology",
  "Maintenance",
  "Finance",
];

export default function Blog() {
  const blogPosts = initialBlogPosts;
  const categories = initialCategories;
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <>
      <NextSeo
        title="Solar Blog Jaipur - Solar Panel Tips, Subsidy & Guides Rajasthan"
        description="Read latest blogs on solar panel installation in Jaipur, PM Suryaghar Yojana, subsidy, cost, and maintenance tips. Expert guides by AY Solar Energy."
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
            Solar Panel Blog in Jaipur - Tips, Subsidy & Installation Guides
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
            Latest insights, tips, and guides about solar energy
          </p>
        </div>
      </section>

      <p
        style={{ maxWidth: "800px", margin: "10px auto", textAlign: "center" }}
      >
        Explore expert articles on solar panel installation in Jaipur,
        government schemes like PM Suryaghar and KUSUM Yojana, solar cost,
        maintenance, and energy-saving tips.
      </p>

      {/* Blog Content */}
      <section style={{ padding: "60px 0" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
              marginBottom: "40px",
              alignItems: "center",
            }}
          >
            {/* Category Filter */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "20px",
                    border: cat === activeCategory ? "none" : "1px solid #ddd",
                    backgroundColor:
                      cat === activeCategory ? "#0057B8" : "white",
                    color: cat === activeCategory ? "white" : "#333",
                    cursor: "pointer",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Scroll List */}
          <div
            className="blog-scroll"
            style={{ marginBottom: "60px", paddingBottom: "10px" }}
          >
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="blog-card"
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 16px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                }}
              >
                <div
                  style={{
                    padding: "20px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: "#E3F2FD",
                      color: "#0057B8",
                      padding: "4px 12px",
                      borderRadius: "12px",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                      marginBottom: "10px",
                      width: "fit-content",
                    }}
                  >
                    {post.category}
                  </div>

                  <a
                    href={`/blog/${post.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h3
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        color: "#003A8C",
                        marginBottom: "10px",
                        lineHeight: "1.4",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#0057B8";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#003A8C";
                      }}
                    >
                      {post.title}
                    </h3>
                  </a>

                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      marginBottom: "15px",
                      flex: 1,
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.85rem",
                      color: "#999",
                      borderTop: "1px solid #eee",
                      paddingTop: "15px",
                    }}
                  >
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "15px",
                    }}
                  >
                    <a
                      href={`/blog/${post.id}`}
                      style={{
                        color: "#0057B8",
                        fontWeight: "600",
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#003A8C";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = "#0057B8";
                      }}
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div
            style={{
              backgroundColor: "#F4F7FB",
              padding: "40px",
              borderRadius: "8px",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h3 style={{ marginBottom: "15px", color: "#003A8C" }}>
              Subscribe to Our Newsletter
            </h3>
            <p style={{ marginBottom: "20px", color: "#666" }}>
              Get the latest solar energy tips and updates delivered to your
              inbox
            </p>
            <div
              style={{
                display: "flex",
                gap: "10px",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                }}
              />
              <button
                style={{
                  backgroundColor: "#0057B8",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  border: "none",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#003A8C";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#0057B8";
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link href="/pm-suryaghar">Solar Subsidy Yojana</Link> |
          <Link href="/services/commercial">Commercial Solar</Link> |
          <Link href="/finance">Solar EMI Options</Link>
        </div>
        
      </section>
      <style jsx>{`
        .blog-scroll {
          display: flex;
          flex-wrap: nowrap;
          gap: 30px;
          overflow-x: auto;
          padding-bottom: 10px;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
        }

        .blog-card {
          min-width: 320px;
          max-width: 320px;
          flex: 0 0 auto;
          scroll-snap-align: start;
        }

        @media (max-width: 768px) {
          .blog-scroll {
            gap: 16px;
          }

          .blog-card {
            min-width: calc(100vw - 40px);
            max-width: calc(100vw - 40px);
          }
        }
      `}</style>
    </>
  );
}
