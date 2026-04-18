import Link from "next/link";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";

export default function BlogPost({ post }) {
  if (!post) {
    return (
      <>
        <NextSeo
          title="Blog Post Not Found"
          description="The post you're looking for doesn't exist."
        />
        <Hero
          title="Blog Post Not Found"
          subtitle="The post you're looking for doesn't exist"
          pageHero={true}
        />
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <h2>Sorry, this blog post could not be found.</h2>
              <p
                style={{
                  marginTop: "20px",
                  marginBottom: "30px",
                  color: "#666",
                }}
              >
                The blog post you&apos;re looking for might have been removed or
                is temporarily unavailable.
              </p>
              <Link
                href="/blog"
                style={{
                  backgroundColor: "#0057B8",
                  color: "white",
                  padding: "12px 30px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  display: "inline-block",
                  fontWeight: "600",
                }}
              >
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
        title={`${post.title} Jaipur - Solar Guide Rajasthan | AY Solar`}
        description={post.content.slice(0, 160)}
      />

      <Hero title={post.title} subtitle="Solar Blog" pageHero={true} />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "30px",
                paddingBottom: "20px",
                borderBottom: "1px solid #eee",
                color: "#666",
                fontSize: "0.95rem",
              }}
            >
              <span>📅 {new Date(post.createdAt).toLocaleDateString()}</span>
            </div>

            <div
              style={{ lineHeight: "1.8", color: "#555", fontSize: "1.05rem" }}
            >
              <p>{post.content}</p>
            </div>

            <div
              style={{
                backgroundColor: "#E3F2FD",
                padding: "30px",
                borderRadius: "8px",
                textAlign: "center",
                marginTop: "50px",
              }}
            >
              <h3 style={{ marginBottom: "15px", color: "#333" }}>
                Ready to Go Solar?
              </h3>
              <p style={{ marginBottom: "20px", color: "#666" }}>
                Get a free consultation and quote for your solar installation
              </p>
              <Link
                href="/contact"
                style={{
                  backgroundColor: "#0057B8",
                  color: "white",
                  padding: "12px 30px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  display: "inline-block",
                  fontWeight: "600",
                }}
              >
                Get Free Consultation
              </Link>
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link
                href="/blog"
                style={{
                  color: "#0057B8",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ params }) {
  await connectDB();
  const post = await Blog.findById(params.id).lean();

  return {
    props: {
      post: post
        ? {
            _id: post._id.toString(),
            title: post.title,
            content: post.content,
            createdAt: post.createdAt.toISOString(),
          }
        : null,
    },
  };
}
