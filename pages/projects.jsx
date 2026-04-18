import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    images: [],
  });
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    fetchProjects();
    if (typeof window !== "undefined") {
      setIsAdmin(!!localStorage.getItem("token"));
    }
  }, []);

  const authHeaders = () => {
    if (typeof window === "undefined") return {};
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const readFileAsDataURL = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const uploadFiles = async () => {
    const urls = [];
    for (const file of selectedFiles) {
      const dataUrl = await readFileAsDataURL(file);
      const response = await axios.post(
        "/api/upload",
        { file: dataUrl },
        { headers: authHeaders() }
      );
      urls.push(response.data.url);
    }
    return urls;
  };

  const resetForm = () => {
    setEditingId(null);
    setFormState({ title: "", description: "", images: [] });
    setSelectedFiles([]);
    setMessage("");
  };

  const handleSubmit = async () => {
    if (!formState.title.trim() || !formState.description.trim()) {
      setMessage("Title and description are required.");
      return;
    }

    if (!editingId && selectedFiles.length === 0) {
      setMessage("Please select at least one image.");
      return;
    }

    try {
      setLoading(true);
      let images = [...formState.images];
      if (selectedFiles.length > 0) {
        const uploadUrls = await uploadFiles();
        images = [...images, ...uploadUrls];
      }

      if (editingId) {
        await axios.put(
          `/api/projects/${editingId}`,
          { title: formState.title, description: formState.description, images },
          { headers: authHeaders() }
        );
        setMessage("Project updated successfully.");
      } else {
        await axios.post(
          "/api/projects",
          { title: formState.title, description: formState.description, images },
          { headers: authHeaders() }
        );
        setMessage("Project added successfully.");
      }

      resetForm();
      fetchProjects();
    } catch (error) {
      setMessage(error.response?.data?.msg || "Unable to save project.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormState({
      title: project.title,
      description: project.description,
      images: project.images || [],
    });
    setSelectedFiles([]);
    setMessage("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await axios.delete(`/api/projects/${id}`, { headers: authHeaders() });
      fetchProjects();
    } catch (error) {
      setMessage(error.response?.data?.msg || "Unable to delete project.");
    }
  };

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files || []));
  };

  const removeExistingImage = (index) => {
    setFormState((prev) => ({
      ...prev,
      images: prev.images.filter((_, idx) => idx !== index),
    }));
  };

  const removeSelectedFile = (index) => {
    setSelectedFiles((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <>
      <NextSeo
        title="Our Projects - AY Solar Energy"
        description="View our completed solar projects across Jaipur & Tonk. Updated project management for admin users."
      />

      <section className="page-header">
        <div className="container">
          <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
            Our Completed Projects
          </h1>
          <p style={{ fontSize: "1.1rem", opacity: 0.9 }}>
            Real installations from satisfied customers across Rajasthan
          </p>
        </div>
      </section>

      <section style={{ padding: "60px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
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
                {editingId ? "Edit Project" : "Add Project"}
              </h2>
              <div style={{ display: "grid", gap: "16px" }}>
                <input
                  value={formState.title}
                  onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                  placeholder="Project title"
                  style={{ padding: "14px", borderRadius: "8px", border: "1px solid #ddd" }}
                />
                <textarea
                  value={formState.description}
                  onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                  placeholder="Project description"
                  rows={5}
                  style={{ padding: "14px", borderRadius: "8px", border: "1px solid #ddd", resize: "vertical" }}
                />
                <div>
                  <label style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}>
                    {editingId ? "Add more images" : "Project images"}
                  </label>
                  <input type="file" multiple accept="image/*" onChange={handleFileChange} />
                </div>
                {formState.images.length > 0 && (
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    {formState.images.map((image, index) => (
                      <div key={`${image}-${index}`} style={{ position: "relative", width: "120px" }}>
                        <img
                          src={image}
                          alt={`Project image ${index + 1}`}
                          style={{ width: "100%", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                        />
                        <button
                          type="button"
                          onClick={() => removeExistingImage(index)}
                          style={{
                            position: "absolute",
                            top: "6px",
                            right: "6px",
                            background: "rgba(0,0,0,0.6)",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            width: "24px",
                            height: "24px",
                            cursor: "pointer",
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {selectedFiles.length > 0 && (
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    {selectedFiles.map((file, index) => (
                      <div
                        key={`${file.name}-${index}`}
                        style={{ position: "relative", width: "120px", border: "1px solid #ddd", borderRadius: "8px", padding: "8px" }}
                      >
                        <div style={{ fontSize: "0.85rem", marginBottom: "8px" }}>{file.name}</div>
                        <button
                          type="button"
                          onClick={() => removeSelectedFile(index)}
                          style={{
                            position: "absolute",
                            top: "6px",
                            right: "6px",
                            background: "rgba(0,0,0,0.6)",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            width: "24px",
                            height: "24px",
                            cursor: "pointer",
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {message && (
                  <div style={{ color: "#333", fontSize: "0.95rem" }}>{message}</div>
                )}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    style={{
                      backgroundColor: "#0057B8",
                      color: "white",
                      padding: "12px 20px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {editingId ? "Save Project" : "Create Project"}
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
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              marginBottom: "60px",
            }}
          >
            {projects.map((project) => (
              <div
                key={project._id}
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                {project.images && project.images[0] && (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    style={{ width: "100%", height: "220px", objectFit: "cover" }}
                  />
                )}
                <div style={{ padding: "20px" }}>
                  <h3
                    style={{ marginBottom: "15px", color: "#0057B8", fontSize: "1.2rem" }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ marginBottom: "16px", color: "#555" }}>
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "0.95rem", color: "#333" }}>
                      <strong>{project.images?.length || 0}</strong> image(s)
                    </span>
                  </div>
                  {isAdmin && (
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      <button
                        type="button"
                        onClick={() => handleEdit(project)}
                        style={{
                          backgroundColor: "#F4F7FB",
                          color: "#333",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          padding: "10px 14px",
                          cursor: "pointer",
                        }}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(project._id)}
                        style={{
                          backgroundColor: "#ffe5e5",
                          color: "#b71c1c",
                          border: "1px solid #f5c2c2",
                          borderRadius: "8px",
                          padding: "10px 14px",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
              marginBottom: "60px",
            }}
          >
            <div style={{ textAlign: "center", padding: "30px", backgroundColor: "#F4F7FB", borderRadius: "8px" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "#0057B8", marginBottom: "10px" }}>500+</div>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>Projects Completed</h4>
              <p>Successful installations across Rajasthan</p>
            </div>
            <div style={{ textAlign: "center", padding: "30px", backgroundColor: "#F4F7FB", borderRadius: "8px" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "#0057B8", marginBottom: "10px" }}>2500+ kW</div>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>Total Capacity</h4>
              <p>Solar power generating clean energy</p>
            </div>
            <div style={{ textAlign: "center", padding: "30px", backgroundColor: "#F4F7FB", borderRadius: "8px" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "#0057B8", marginBottom: "10px" }}>₹5 Cr+</div>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>Customer Savings</h4>
              <p>Annual electricity bill savings</p>
            </div>
            <div style={{ textAlign: "center", padding: "30px", backgroundColor: "#F4F7FB", borderRadius: "8px" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "#0057B8", marginBottom: "10px" }}>5+</div>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>Years Experience</h4>
              <p>Trusted solar energy partner</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 0", backgroundColor: "#F4F7FB" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <div style={{ backgroundColor: "#E3F2FD", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
            <h2 style={{ marginBottom: "0px", color: "#333" }}>Ready to Join Our Success Stories?</h2>
          </div>
          <p style={{ marginBottom: "30px", fontSize: "1.1rem", color: "#666" }}>
            Get a free consultation and quote for your solar installation
          </p>
          <Link
            href="/contact"
            style={{
              backgroundColor: "#0057B8",
              color: "white",
              padding: "14px 40px",
              borderRadius: "6px",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#003A8C")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#0057B8")}
          >
            Get Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
