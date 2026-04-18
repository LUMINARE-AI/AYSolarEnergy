import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { NextSeo } from "next-seo";
import { getAuthHeaders, handleUnauthorized } from "@/lib/clientAuth";
import ListingPagination from "@/components/ListingPagination";
import lc from "@/styles/listingCards.module.css";

const PROJECTS_PAGE_SIZE = 6;

function displayOrDash(value) {
  const s = (value || "").trim();
  return s || "—";
}

/** Blue headline on the card — separate from customer name */
function projectHeadline(project) {
  const s = (project.mainTopic || project.title || "").trim();
  return s || "Solar project";
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    mainTopic: "",
    description: "",
    images: [],
    customerName: "",
    location: "",
    capacity: "",
    monthlySavings: "",
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [projectPage, setProjectPage] = useState(1);

  const projectTotalPages = Math.max(
    1,
    Math.ceil(projects.length / PROJECTS_PAGE_SIZE)
  );

  const paginatedProjects = useMemo(() => {
    const start = (projectPage - 1) * PROJECTS_PAGE_SIZE;
    return projects.slice(start, start + PROJECTS_PAGE_SIZE);
  }, [projects, projectPage]);

  useEffect(() => {
    setProjectPage((p) => Math.min(p, projectTotalPages));
  }, [projectTotalPages]);

  useEffect(() => {
    fetchProjects();
    if (typeof window !== "undefined") {
      setIsAdmin(!!localStorage.getItem("token")?.trim());
    }
  }, []);

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
        { headers: getAuthHeaders() }
      );
      urls.push(response.data.url);
    }
    return urls;
  };

  const resetForm = () => {
    setEditingId(null);
    setFormState({
      mainTopic: "",
      description: "",
      images: [],
      customerName: "",
      location: "",
      capacity: "",
      monthlySavings: "",
    });
    setSelectedFiles([]);
    setMessage("");
  };

  const buildPayload = (images) => {
    const main = formState.mainTopic.trim();
    const desc = formState.description.trim();
    return {
      mainTopic: main,
      title: main,
      description: desc || undefined,
      images,
      customerName: formState.customerName.trim() || undefined,
      location: formState.location.trim() || undefined,
      capacity: formState.capacity.trim() || undefined,
      monthlySavings: formState.monthlySavings.trim() || undefined,
    };
  };

  const handleSubmit = async () => {
    if (!formState.mainTopic.trim()) {
      setMessage("Main topic is required (e.g. Home Rooftop Solar).");
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

      const payload = buildPayload(images);

      if (editingId) {
        await axios.put(`/api/projects/${editingId}`, payload, {
          headers: getAuthHeaders(),
        });
        setMessage("Project updated successfully.");
      } else {
        await axios.post("/api/projects", payload, {
          headers: getAuthHeaders(),
        });
        setMessage("Project added successfully.");
      }

      resetForm();
      fetchProjects();
    } catch (error) {
      if (handleUnauthorized(error, setIsAdmin, setMessage)) return;
      setMessage(error.response?.data?.msg || "Unable to save project.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormState({
      mainTopic: (project.mainTopic || project.title || "").trim(),
      description: project.description || "",
      images: project.images || [],
      customerName: project.customerName || "",
      location: project.location || "",
      capacity: project.capacity || "",
      monthlySavings: project.monthlySavings || "",
    });
    setSelectedFiles([]);
    setMessage("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    try {
      await axios.delete(`/api/projects/${id}`, { headers: getAuthHeaders() });
      fetchProjects();
    } catch (error) {
      if (handleUnauthorized(error, setIsAdmin, setMessage)) return;
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

  const kvRow = (label, value) => (
    <div className={lc.kvRow}>
      <span className={lc.kvLabel}>{label}</span>
      <span className={lc.kvValue}>{displayOrDash(value)}</span>
    </div>
  );

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

      <section style={{ padding: "0 0 60px" }}>
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
                  value={formState.mainTopic}
                  onChange={(e) =>
                    setFormState({ ...formState, mainTopic: e.target.value })
                  }
                  placeholder='Main topic (e.g. Home Rooftop Solar, Residential Solar System)'
                  style={{
                    padding: "14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
                <input
                  value={formState.customerName}
                  onChange={(e) =>
                    setFormState({ ...formState, customerName: e.target.value })
                  }
                  placeholder="Customer name (e.g. Hamza Saeedi)"
                  style={{
                    padding: "14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
                <input
                  value={formState.location}
                  onChange={(e) =>
                    setFormState({ ...formState, location: e.target.value })
                  }
                  placeholder="Location (e.g. Tonk, Rajasthan)"
                  style={{
                    padding: "14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
                <input
                  value={formState.capacity}
                  onChange={(e) =>
                    setFormState({ ...formState, capacity: e.target.value })
                  }
                  placeholder="Capacity (e.g. 8 kW)"
                  style={{
                    padding: "14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
                <input
                  value={formState.monthlySavings}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      monthlySavings: e.target.value,
                    })
                  }
                  placeholder="Monthly savings (e.g. ₹8,000+)"
                  style={{
                    padding: "14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
                <textarea
                  value={formState.description}
                  onChange={(e) =>
                    setFormState({ ...formState, description: e.target.value })
                  }
                  placeholder="Internal notes (optional — not shown on project cards)"
                  rows={4}
                  style={{
                    padding: "14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    resize: "vertical",
                  }}
                />
                <div>
                  <label
                    style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}
                  >
                    {editingId ? "Add more images" : "Project images"}
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                {formState.images.length > 0 && (
                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    {formState.images.map((image, index) => (
                      <div
                        key={`${image}-${index}`}
                        style={{ position: "relative", width: "120px" }}
                      >
                        <img
                          src={image}
                          alt={`Project image ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "80px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
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
                        style={{
                          position: "relative",
                          width: "120px",
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          padding: "8px",
                        }}
                      >
                        <div style={{ fontSize: "0.85rem", marginBottom: "8px" }}>
                          {file.name}
                        </div>
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
                  <div style={{ color: "#333", fontSize: "0.95rem" }}>
                    {message}
                  </div>
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
        </div>

        <div className={lc.listingSection}>
          <div className={lc.listingInner}>
            <div className={lc.listingCardGrid}>
              {paginatedProjects.map((project) => (
                <div key={project._id} className={lc.projectCard}>
                  <div className={lc.projectImageWrap}>
                    {project.images && project.images[0] ? (
                      <img
                        src={project.images[0]}
                        alt={projectHeadline(project)}
                        className={lc.projectImage}
                      />
                    ) : null}
                  </div>
                  <div className={lc.projectCardBody}>
                    <h3 className={lc.projectTitle}>
                      {projectHeadline(project)}
                    </h3>
                    {kvRow("Customer Name", project.customerName)}
                    {kvRow("Location", project.location)}
                    {kvRow("Capacity", project.capacity)}
                    {kvRow("Monthly Savings", project.monthlySavings)}
                    {isAdmin && (
                      <div className={lc.projectAdminRow}>
                        <button
                          type="button"
                          onClick={() => handleEdit(project)}
                          style={{
                            backgroundColor: "#F4F7FB",
                            color: "#333",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            padding: "8px 12px",
                            cursor: "pointer",
                            fontSize: "0.85rem",
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
                            padding: "8px 12px",
                            cursor: "pointer",
                            fontSize: "0.85rem",
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

            <ListingPagination
              page={projectPage}
              totalPages={projectTotalPages}
              onPageChange={setProjectPage}
              suffix="projects"
            />
          </div>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "30px",
              marginBottom: "60px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#0057B8",
                  marginBottom: "10px",
                }}
              >
                500+
              </div>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                Projects Completed
              </h4>
              <p>Successful installations across Rajasthan</p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#0057B8",
                  marginBottom: "10px",
                }}
              >
                2500+ kW
              </div>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                Total Capacity
              </h4>
              <p>Solar power generating clean energy</p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#0057B8",
                  marginBottom: "10px",
                }}
              >
                ₹5 Cr+
              </div>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                Customer Savings
              </h4>
              <p>Annual electricity bill savings</p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  color: "#0057B8",
                  marginBottom: "10px",
                }}
              >
                5+
              </div>
              <h4 style={{ marginBottom: "10px", color: "#333" }}>
                Years Experience
              </h4>
              <p>Trusted solar energy partner</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "60px 0", backgroundColor: "#F4F7FB" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#E3F2FD",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <h2 style={{ marginBottom: "0px", color: "#333" }}>
              Ready to Join Our Success Stories?
            </h2>
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
