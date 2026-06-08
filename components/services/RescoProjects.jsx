import { useEffect, useState } from "react";
import axios from "axios";
import { getAuthHeaders, handleUnauthorized } from "@/lib/clientAuth";

const initialForm = {
  name: "",
  location: "",
  industryType: "",
  capacity: "",
  contractTenure: "",
  savingsNote: "",
  status: "active",
  imageUrl: "",
};

export default function RescoProjects() {
  const [projects, setProjects] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState(initialForm);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchProjects();
    if (typeof window !== "undefined") {
      setIsAdmin(!!localStorage.getItem("token")?.trim());
    }
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get("/api/resco-projects");
      setProjects(response.data || []);
    } catch (error) {
      console.error("Error fetching RESCO projects:", error);
    }
  };

  const readFileAsDataURL = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const uploadFile = async () => {
    if (!selectedFile) return null;
    const dataUrl = await readFileAsDataURL(selectedFile);
    const response = await axios.post(
      "/api/upload",
      { file: dataUrl },
      { headers: getAuthHeaders() }
    );
    return response.data.url;
  };

  const resetForm = () => {
    setEditingId(null);
    setSelectedFile(null);
    setFormState(initialForm);
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormState({
      name: project.name || "",
      location: project.location || "",
      industryType: project.industryType || "",
      capacity: project.capacity || "",
      contractTenure: project.contractTenure || "",
      savingsNote: project.savingsNote || "",
      status: project.status || "active",
      imageUrl: project.imageUrl || "",
    });
    setSelectedFile(null);
    setMessage("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this RESCO project?")) return;
    try {
      await axios.delete(`/api/resco-projects/${id}`, {
        headers: getAuthHeaders(),
      });
      fetchProjects();
    } catch (error) {
      if (handleUnauthorized(error, setIsAdmin, setMessage)) return;
      setMessage(error.response?.data?.msg || "Unable to delete project.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = [
      formState.name,
      formState.location,
      formState.industryType,
      formState.capacity,
      formState.contractTenure,
      formState.savingsNote,
      formState.status,
    ];
    if (values.some((item) => !String(item).trim())) {
      setMessage("Please fill all fields.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      let finalImageUrl = formState.imageUrl;
      if (selectedFile) {
        finalImageUrl = await uploadFile();
      }

      if (!finalImageUrl) {
        setMessage("Please upload a project image.");
        setLoading(false);
        return;
      }

      const payload = {
        ...formState,
        imageUrl: finalImageUrl,
      };

      if (editingId) {
        await axios.put(`/api/resco-projects/${editingId}`, payload, {
          headers: getAuthHeaders(),
        });
        setMessage("RESCO project updated.");
      } else {
        await axios.post("/api/resco-projects", payload, {
          headers: getAuthHeaders(),
        });
        setMessage("RESCO project created.");
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

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {isAdmin && (
          <div style={styles.adminCard}>
            <h3 style={styles.adminTitle}>{editingId ? "Edit RESCO Project" : "Add New RESCO Project"}</h3>
            <form onSubmit={handleSubmit} style={styles.adminForm}>
              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Project Name *</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                    placeholder="e.g. ABC Foods Plant"
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Location *</label>
                  <input
                    type="text"
                    value={formState.location}
                    onChange={(e) => setFormState((p) => ({ ...p, location: e.target.value }))}
                    placeholder="e.g. Sitapura, Jaipur"
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Industry Type *</label>
                  <input
                    type="text"
                    value={formState.industryType}
                    onChange={(e) => setFormState((p) => ({ ...p, industryType: e.target.value }))}
                    placeholder="e.g. Manufacturing"
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Installed Capacity *</label>
                  <input
                    type="text"
                    value={formState.capacity}
                    onChange={(e) => setFormState((p) => ({ ...p, capacity: e.target.value }))}
                    placeholder="e.g. 350 kW"
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Contract Tenure *</label>
                  <input
                    type="text"
                    value={formState.contractTenure}
                    onChange={(e) => setFormState((p) => ({ ...p, contractTenure: e.target.value }))}
                    placeholder="e.g. 15 years"
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Savings / Tariff Note *</label>
                  <input
                    type="text"
                    value={formState.savingsNote}
                    onChange={(e) => setFormState((p) => ({ ...p, savingsNote: e.target.value }))}
                    placeholder="e.g. Up to 28% lower tariff"
                    style={styles.input}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Status *</label>
                  <select
                    value={formState.status}
                    onChange={(e) => setFormState((p) => ({ ...p, status: e.target.value }))}
                    style={styles.select}
                  >
                    <option value="active">Active</option>
                    <option value="coming_soon">Coming Soon</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Project Image *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    style={styles.file}
                  />
                </div>
              </div>

              {message && <div style={styles.message}>{message}</div>}

              <div style={styles.buttonRow}>
                <button type="submit" disabled={loading} style={styles.submitBtn}>
                  {loading ? "Saving..." : editingId ? "Update Project" : "Create Project"}
                </button>
                {editingId && (
                  <button type="button" onClick={resetForm} style={styles.cancelBtn}>
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        <div style={styles.headerRow}>
          <h2 style={styles.sectionTitle}>RESCO Projects</h2>
          <span style={styles.countPill}>{projects.length} Total</span>
        </div>

        {projects.length === 0 ? (
          <div style={styles.emptyState}>No RESCO projects available yet.</div>
        ) : (
          <div style={styles.grid}>
            {projects.map((project) => (
              <article key={project._id} style={styles.card}>
                <div style={styles.imageWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.imageUrl} alt={project.name} style={styles.image} />
                  <span style={{ ...styles.badge, ...(badgeStyles[project.status] || badgeStyles.active) }}>
                    {project.status === "coming_soon" ? "Coming Soon" : project.status === "completed" ? "Completed" : "Active"}
                  </span>
                </div>
                <div style={styles.cardBody}>
                  <h3 style={styles.cardTitle}>{project.name}</h3>
                  <p style={styles.metaLine}>{project.location}</p>
                  <p style={styles.metaLine}>Industry: {project.industryType}</p>
                  <div style={styles.details}>
                    <div style={styles.detailBlock}>
                      <span style={styles.detailLabel}>Capacity</span>
                      <span style={styles.detailValue}>{project.capacity}</span>
                    </div>
                    <div style={styles.detailBlock}>
                      <span style={styles.detailLabel}>Tenure</span>
                      <span style={styles.detailValue}>{project.contractTenure}</span>
                    </div>
                  </div>
                  <div style={styles.savingsBox}>
                    <span style={styles.savingsLabel}>Savings / Tariff</span>
                    <span style={styles.savingsValue}>{project.savingsNote}</span>
                  </div>

                  {isAdmin && (
                    <div style={styles.adminActionRow}>
                      <button type="button" onClick={() => handleEdit(project)} style={styles.editBtn}>
                        Edit
                      </button>
                      <button type="button" onClick={() => handleDelete(project._id)} style={styles.deleteBtn}>
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  section: { padding: "12px 0 8px" },
  container: { width: "100%", margin: "0 auto" },
  adminCard: {
    backgroundColor: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: "14px",
    padding: "20px",
    marginBottom: "24px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  },
  adminTitle: { margin: "0 0 14px", color: "#003d82", fontSize: "1.2rem" },
  adminForm: { display: "flex", flexDirection: "column", gap: "12px" },
  formGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "12px" },
  formGroup: { display: "flex", flexDirection: "column" },
  label: { fontSize: "0.84rem", fontWeight: 600, color: "#334155", marginBottom: "6px" },
  input: { padding: "10px 12px", border: "1px solid #cbd5e1", borderRadius: "8px" },
  select: { padding: "10px 12px", border: "1px solid #cbd5e1", borderRadius: "8px", backgroundColor: "#fff" },
  file: { padding: "6px 0", fontSize: "0.88rem" },
  message: { color: "#1f2937", fontWeight: 600, fontSize: "0.92rem" },
  buttonRow: { display: "flex", gap: "10px" },
  submitBtn: {
    backgroundColor: "#0057B8",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 18px",
    cursor: "pointer",
    fontWeight: 600,
  },
  cancelBtn: {
    backgroundColor: "#f1f5f9",
    color: "#334155",
    border: "none",
    borderRadius: "8px",
    padding: "10px 18px",
    cursor: "pointer",
    fontWeight: 600,
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
    marginBottom: "14px",
    flexWrap: "wrap",
  },
  sectionTitle: { margin: 0, color: "#0f172a", fontSize: "1.85rem" },
  countPill: {
    padding: "6px 12px",
    borderRadius: "999px",
    backgroundColor: "#e2e8f0",
    color: "#334155",
    fontSize: "0.82rem",
    fontWeight: 700,
  },
  emptyState: {
    padding: "40px 20px",
    textAlign: "center",
    color: "#64748b",
    border: "1px dashed #cbd5e1",
    borderRadius: "12px",
    backgroundColor: "#f8fafc",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,320px),1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #e2e8f0",
    borderRadius: "14px",
    overflow: "hidden",
    backgroundColor: "#fff",
    boxShadow: "0 6px 16px rgba(0,0,0,0.04)",
  },
  imageWrap: { height: "190px", position: "relative", backgroundColor: "#f1f5f9" },
  image: { width: "100%", height: "100%", objectFit: "cover" },
  badge: {
    position: "absolute",
    top: "12px",
    right: "12px",
    borderRadius: "999px",
    fontSize: "0.72rem",
    fontWeight: 700,
    padding: "5px 10px",
    textTransform: "uppercase",
  },
  cardBody: { padding: "16px" },
  cardTitle: { margin: 0, fontSize: "1.2rem", color: "#0f172a" },
  metaLine: { margin: "6px 0 0", color: "#64748b", fontSize: "0.9rem" },
  details: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginTop: "12px",
    paddingTop: "12px",
    borderTop: "1px solid #f1f5f9",
  },
  detailBlock: { display: "flex", flexDirection: "column", gap: "3px" },
  detailLabel: { fontSize: "0.74rem", color: "#94a3b8", fontWeight: 600 },
  detailValue: { fontSize: "1rem", color: "#1e293b", fontWeight: 700 },
  savingsBox: {
    marginTop: "12px",
    paddingTop: "12px",
    borderTop: "1px solid #f1f5f9",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
  },
  savingsLabel: { fontSize: "0.8rem", color: "#64748b" },
  savingsValue: { fontSize: "0.92rem", color: "#0f766e", fontWeight: 700 },
  adminActionRow: {
    marginTop: "12px",
    display: "flex",
    gap: "10px",
    borderTop: "1px dashed #e2e8f0",
    paddingTop: "12px",
  },
  editBtn: {
    flex: 1,
    border: "1px solid #cbd5e1",
    backgroundColor: "#f1f5f9",
    borderRadius: "8px",
    padding: "8px 10px",
    cursor: "pointer",
    fontWeight: 600,
  },
  deleteBtn: {
    flex: 1,
    border: "1px solid #fecaca",
    backgroundColor: "#fee2e2",
    color: "#b91c1c",
    borderRadius: "8px",
    padding: "8px 10px",
    cursor: "pointer",
    fontWeight: 600,
  },
};

const badgeStyles = {
  active: { backgroundColor: "#d1fae5", color: "#065f46" },
  coming_soon: { backgroundColor: "#fef3c7", color: "#92400e" },
  completed: { backgroundColor: "#dbeafe", color: "#1e40af" },
};
