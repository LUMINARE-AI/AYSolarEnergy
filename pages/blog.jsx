import { useEffect, useState } from "react";
import axios from "axios";
import { NextSeo } from "next-seo";
import Link from "next/link";

const categories = ["All"];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchPosts();
    if (typeof window !== "undefined") {
      setIsAdmin(!!localStorage.getItem("token"));
    }
  }, []);

  const authHeaders = () => {
    if (typeof window === "undefined") return {};
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

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
    setFormData({ title: "", content: "" });
    setMessage("");
  };

  const handleSave = async () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      setMessage("Title and content are required.");
      return;
    }

    try {
      if (editingId) {
        await axios.put(`/api/blogs/${editingId}`, formData, {
          headers: authHeaders(),
        });
        setMessage("Blog updated successfully.");
      } else {
        await axios.post("/api/blogs", formData, {
          headers: authHeaders(),
        });
        setMessage("Blog added successfully.");
      }
      resetForm();
      fetchPosts();
    } catch (error) {
      setMessage(error.response?.data?.msg || "Unable to save blog.");
    }
  };

  const handleEdit = (post) => {
    setEditingId(post._id);
    setFormData({ title: post.title, content: post.content });
    setMessage("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog post?")) return;
    try {
      await axios.delete(`/api/blogs/${id}`, {
        headers: authHeaders(),
      });
      fetchPosts();
    } catch (error) {
      setMessage(error.response?.data?.msg || "Unable to delete blog.");
    }
  };

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

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

      <section style={{ padding: "60px 0" }}>
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
                  style={{ padding: "14px", borderRadius: "8px", border: "1px solid #ddd" }}
                />
                <textarea
                  value={formData.content}
                  onChange={(e) => handleChange("content", e.target.value)}
                  placeholder="Blog content"
                  rows={8}
                  style={{ padding: "14px", borderRadius: "8px", border: "1px solid #ddd", resize: "vertical" }}
                />
                {message && (
                  <div style={{ color: "#333", fontSize: "0.95rem" }}>{message}</div>
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
                    backgroundColor: cat === activeCategory ? "#0057B8" : "white",
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

          <div
            className="blog-scroll"
            style={{ marginBottom: "60px", paddingBottom: "10px" }}
          >
            {filteredPosts.map((post) => (
              <article
                key={post._id}
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
                    Solar Blog
                  </div>

                  <Link href={`/blog/${post._id}`}>
                    <h3
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        color: "#003A8C",
                        marginBottom: "10px",
                        lineHeight: "1.4",
                      }}
                    >
                      {post.title}
                    </h3>
                  </Link>

                  <p
                    style={{
                      color: "#666",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      marginBottom: "15px",
                      flex: 1,
                    }}
                  >
                    {post.content.slice(0, 150)}...
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
                    <span>
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                    {isAdmin && (
                      <span style={{ display: "flex", gap: "10px" }}>
                        <button
                          type="button"
                          onClick={() => handleEdit(post)}
                          style={{
                            backgroundColor: "#F4F7FB",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "8px 12px",
                            cursor: "pointer",
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
                            padding: "8px 12px",
                            cursor: "pointer",
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
              Get the latest solar energy tips and updates delivered to your inbox
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
