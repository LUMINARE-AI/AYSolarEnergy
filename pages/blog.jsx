import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { NextSeo } from "next-seo";
import Link from "next/link";
import {
  CONTENT_CATEGORIES,
  DEFAULT_CATEGORY,
  normalizeCategory,
} from "@/lib/contentCategories";
import { getAuthHeaders, handleUnauthorized } from "@/lib/clientAuth";
import ListingPagination from "@/components/ListingPagination";
import lc from "@/styles/listingCards.module.css";

const filterCategories = ["All", ...CONTENT_CATEGORIES];
const BLOG_PAGE_SIZE = 6;

function cardExcerpt(post) {
  const raw = (post.excerpt || "").trim();
  if (raw) return raw.length > 180 ? `${raw.slice(0, 177)}…` : raw;
  const fromContent = (post.content || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
  return fromContent ? `${fromContent}…` : "";
}

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: DEFAULT_CATEGORY,
    excerpt: "",
    readTimeMinutes: "",
  });
  const [message, setMessage] = useState("");
  const [blogPage, setBlogPage] = useState(1);

  useEffect(() => {
    fetchPosts();
    if (typeof window !== "undefined") {
      setIsAdmin(!!localStorage.getItem("token")?.trim());
    }
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/blogs");
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: "",
      content: "",
      category: DEFAULT_CATEGORY,
      excerpt: "",
      readTimeMinutes: "",
    });
    setMessage("");
  };

  const buildPayload = () => {
    const readNum = parseInt(String(formData.readTimeMinutes).trim(), 10);
    const payload = {
      title: formData.title.trim(),
      content: formData.content.trim(),
      category: normalizeCategory(formData.category),
      excerpt: formData.excerpt.trim() || undefined,
    };
    if (!Number.isNaN(readNum) && readNum >= 1) {
      payload.readTimeMinutes = readNum;
    }
    return payload;
  };

  const handleSave = async () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      setMessage("Title and content are required.");
      return;
    }

    try {
      const payload = buildPayload();
      if (editingId) {
        await axios.put(`/api/blogs/${editingId}`, payload, {
          headers: getAuthHeaders(),
        });
        setMessage("Blog updated successfully.");
      } else {
        await axios.post("/api/blogs", payload, {
          headers: getAuthHeaders(),
        });
        setMessage("Blog added successfully.");
      }
      resetForm();
      fetchPosts();
    } catch (error) {
      if (handleUnauthorized(error, setIsAdmin, setMessage)) return;
      setMessage(error.response?.data?.msg || "Unable to save blog.");
    }
  };

  const handleEdit = (post) => {
    setEditingId(post._id);
    setFormData({
      title: post.title,
      content: post.content,
      category: normalizeCategory(post.category),
      excerpt: post.excerpt || "",
      readTimeMinutes:
        post.readTimeMinutes != null ? String(post.readTimeMinutes) : "",
    });
    setMessage("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog post?")) return;
    try {
      await axios.delete(`/api/blogs/${id}`, {
        headers: getAuthHeaders(),
      });
      fetchPosts();
    } catch (error) {
      if (handleUnauthorized(error, setIsAdmin, setMessage)) return;
      setMessage(error.response?.data?.msg || "Unable to delete blog.");
    }
  };

  const filteredPosts = useMemo(
    () =>
      activeCategory === "All"
        ? posts
        : posts.filter(
            (post) => normalizeCategory(post.category) === activeCategory
          ),
    [posts, activeCategory]
  );

  const blogTotalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / BLOG_PAGE_SIZE)
  );

  const paginatedPosts = useMemo(() => {
    const start = (blogPage - 1) * BLOG_PAGE_SIZE;
    return filteredPosts.slice(start, start + BLOG_PAGE_SIZE);
  }, [filteredPosts, blogPage]);

  useEffect(() => {
    setBlogPage(1);
  }, [activeCategory]);

  useEffect(() => {
    setBlogPage((p) => Math.min(p, blogTotalPages));
  }, [blogTotalPages]);

  return (
    <>
      <NextSeo
        title="Solar Blog Jaipur - Solar Panel Tips, Subsidy & Guides Rajasthan"
        description="Read latest blogs on solar panel installation in Jaipur, PM Suryaghar Yojana, subsidy, cost, and maintenance tips. Expert guides by AY Solar Energy."
      />

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
        government schemes, solar cost, maintenance, and energy-saving tips.
      </p>

      <section style={{ padding: "0 0 60px" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          {isAdmin && (
            <div
              style={{
                backgroundColor: "white",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
                marginBottom: "40px",
              }}
            >
              <h2 style={{ marginBottom: "16px", color: "#003A8C" }}>
                {editingId ? "Edit Blog" : "Add Blog"}
              </h2>
              <div style={{ display: "grid", gap: "16px" }}>
                <input
                  value={formData.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  placeholder="Blog title"
                  style={{
                    padding: "14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
                <select
                  value={formData.category}
                  onChange={(e) => handleChange("category", e.target.value)}
                  style={{
                    padding: "14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                >
                  {CONTENT_CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => handleChange("excerpt", e.target.value)}
                  placeholder="Short excerpt for cards (optional — auto from content if empty)"
                  rows={2}
                  style={{
                    padding: "14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    resize: "vertical",
                  }}
                />
                <input
                  type="number"
                  min={1}
                  value={formData.readTimeMinutes}
                  onChange={(e) =>
                    handleChange("readTimeMinutes", e.target.value)
                  }
                  placeholder="Read time in minutes (optional)"
                  style={{
                    padding: "14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
                <textarea
                  value={formData.content}
                  onChange={(e) => handleChange("content", e.target.value)}
                  placeholder="Blog body — Markdown supported: use ## for subheadings, **bold**, lists"
                  rows={8}
                  style={{
                    padding: "14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    resize: "vertical",
                  }}
                />
                {message && (
                  <div style={{ color: "#333", fontSize: "0.95rem" }}>
                    {message}
                  </div>
                )}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={handleSave}
                    style={{
                      backgroundColor: "#0057B8",
                      color: "white",
                      padding: "12px 20px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {editingId ? "Save Changes" : "Add Blog"}
                  </button>
                  {editingId && (
                    <button
                      type="button"
                      onClick={resetForm}
                      style={{
                        backgroundColor: "#F4F7FB",
                        color: "#333",
                        padding: "12px 20px",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                        cursor: "pointer",
                      }}
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={lc.listingSection}>
          <div className={lc.listingInner}>
            <div className={lc.filterRow}>
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={
                    cat === activeCategory ? lc.filterPillActive : lc.filterPill
                  }
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={lc.listingCardGrid}>
              {paginatedPosts.map((post) => (
                <article key={post._id} className={lc.blogCard}>
                  <div className={lc.blogCardInner}>
                    <span className={lc.categoryBadge}>
                      {normalizeCategory(post.category)}
                    </span>

                    <Link
                      href={`/blog/${post._id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <h3 className={lc.blogCardTitle}>{post.title}</h3>
                    </Link>

                    <p className={lc.blogCardExcerpt}>{cardExcerpt(post)}</p>

                    <div className={lc.blogMetaRow}>
                      <span>
                        {new Date(post.createdAt).toLocaleDateString(
                          undefined,
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                      <span>
                        {post.readTimeMinutes != null &&
                        post.readTimeMinutes >= 1
                          ? `${post.readTimeMinutes} min read`
                          : "—"}
                      </span>
                    </div>

                    <div className={lc.blogFooterRow}>
                      <Link
                        href={`/blog/${post._id}`}
                        className={lc.readMore}
                      >
                        Read more →
                      </Link>
                      {isAdmin && (
                        <span style={{ display: "flex", gap: "8px" }}>
                          <button
                            type="button"
                            onClick={() => handleEdit(post)}
                            style={{
                              backgroundColor: "#F4F7FB",
                              border: "1px solid #ddd",
                              borderRadius: "8px",
                              padding: "6px 10px",
                              cursor: "pointer",
                              fontSize: "0.8rem",
                            }}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(post._id)}
                            style={{
                              backgroundColor: "#ffe5e5",
                              border: "1px solid #f5c2c2",
                              borderRadius: "8px",
                              padding: "6px 10px",
                              cursor: "pointer",
                              fontSize: "0.8rem",
                            }}
                          >
                            Delete
                          </button>
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <ListingPagination
              page={blogPage}
              totalPages={blogTotalPages}
              onPageChange={setBlogPage}
              suffix="blog posts"
            />
          </div>
        </div>

        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              backgroundColor: "#F4F7FB",
              padding: "40px",
              borderRadius: "8px",
              textAlign: "center",
              marginBottom: "40px",
              marginTop: "60px",
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
    </>
  );
}
