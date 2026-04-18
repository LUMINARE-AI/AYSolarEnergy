import Link from "next/link";
import Hero from "@/components/Hero";
import { NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { normalizeCategory } from "@/lib/contentCategories";
import styles from "@/styles/BlogPost.module.css";

function CalendarGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 2v3M16 2v3M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 14h18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

function ClockGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function seoDescription(post) {
  const ex = (post.excerpt || "").trim();
  if (ex) return ex.slice(0, 160);
  const raw = (post.content || "")
    .replace(/^#+\s+/gm, "")
    .replace(/\*\*?|__|`|\[|\]|\([^)]*\)/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return raw.slice(0, 160);
}

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

  const categoryLabel = normalizeCategory(post.category);
  const readLine =
    post.readTimeMinutes != null && post.readTimeMinutes >= 1
      ? `${post.readTimeMinutes} min read`
      : null;
  const published = new Date(post.createdAt);
  const dateLabel = published.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <NextSeo
        title={`${post.title} Jaipur - Solar Guide Rajasthan | AY Solar`}
        description={seoDescription(post)}
      />

      <Hero title={post.title} subtitle={categoryLabel} pageHero={true} />

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className={styles.metaWrap} role="group" aria-label="Article details">
              <div className={styles.metaItem}>
                <div className={styles.metaIconWrap} aria-hidden>
                  <CalendarGlyph />
                </div>
                <div className={styles.metaBody}>
                  <span className={styles.metaEyebrow}>Published</span>
                  <time
                    dateTime={published.toISOString()}
                    className={styles.metaPrimary}
                  >
                    {dateLabel}
                  </time>
                </div>
              </div>
              {readLine && (
                <>
                  <span className={styles.metaSep} aria-hidden />
                  <div className={styles.metaItem}>
                    <div
                      className={`${styles.metaIconWrap} ${styles.metaIconWrapClock}`}
                      aria-hidden
                    >
                      <ClockGlyph />
                    </div>
                    <div className={styles.metaBody}>
                      <span className={styles.metaEyebrow}>Reading time</span>
                      <span className={styles.metaPrimary}>{readLine}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <article className="blog-post-body">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>

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
            category: normalizeCategory(post.category),
            excerpt: post.excerpt ?? null,
            readTimeMinutes: post.readTimeMinutes ?? null,
            createdAt: post.createdAt.toISOString(),
          }
        : null,
    },
  };
}
