import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { getAuthHeaders, handleUnauthorized } from '@/lib/clientAuth';
import InterestModal from './InterestModal';

export default function DigitalSolarProjects() {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  // Selected project for WhatsApp modal
  const [selectedProject, setSelectedProject] = useState(null);

  // Form State
  const [formState, setFormState] = useState({
    name: '',
    location: '',
    managedBy: 'AY Solar Energy',
    capacity: '',
    operationalValidity: '',
    projectedReward: '',
    status: 'active',
    imageUrl: '',
  });
  
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchProjects();
    if (typeof window !== 'undefined') {
      setIsAdmin(!!localStorage.getItem('token')?.trim());
    }
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/digital-solar-projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching SolarFi projects:', error);
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
      '/api/upload',
      { file: dataUrl },
      { headers: getAuthHeaders() }
    );
    return response.data.url;
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormState({
      name: project.name,
      location: project.location,
      managedBy: project.managedBy,
      capacity: project.capacity,
      operationalValidity: project.operationalValidity,
      projectedReward: project.projectedReward,
      status: project.status,
      imageUrl: project.imageUrl,
    });
    setSelectedFile(null);
    setMessage('');
    
    // Scroll to form
    const el = document.getElementById('ds-project-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this SolarFi project?')) return;
    try {
      await axios.delete(`/api/digital-solar-projects/${id}`, {
        headers: getAuthHeaders(),
      });
      fetchProjects();
    } catch (error) {
      if (handleUnauthorized(error, setIsAdmin, setMessage)) return;
      setMessage(error.response?.data?.msg || 'Unable to delete project.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.location.trim() || !formState.capacity.trim() || !formState.operationalValidity.trim() || !formState.projectedReward.trim()) {
      setMessage('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      let finalImageUrl = formState.imageUrl;
      if (selectedFile) {
        finalImageUrl = await uploadFile();
      }

      if (!finalImageUrl) {
        setMessage('Please upload a project image.');
        setLoading(false);
        return;
      }

      const payload = {
        ...formState,
        imageUrl: finalImageUrl,
      };

      if (editingId) {
        await axios.put(`/api/digital-solar-projects/${editingId}`, payload, {
          headers: getAuthHeaders(),
        });
        setMessage('Project updated successfully.');
      } else {
        await axios.post('/api/digital-solar-projects', payload, {
          headers: getAuthHeaders(),
        });
        setMessage('Project created successfully.');
      }

      // Reset
      setEditingId(null);
      setSelectedFile(null);
      setFormState({
        name: '',
        location: '',
        managedBy: 'AY Solar Energy',
        capacity: '',
        operationalValidity: '',
        projectedReward: '',
        status: 'active',
        imageUrl: '',
      });
      fetchProjects();
    } catch (error) {
      if (handleUnauthorized(error, setIsAdmin, setMessage)) return;
      setMessage(error.response?.data?.msg || 'Error saving project.');
    } finally {
      setLoading(false);
    }
  };

  // Counts for tabs
  const counts = useMemo(() => {
    return {
      all: projects.length,
      active: projects.filter(p => p.status === 'active').length,
      coming_soon: projects.filter(p => p.status === 'coming_soon').length,
      completed: projects.filter(p => p.status === 'completed').length,
    };
  }, [projects]);

  // Filtered list
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => p.status === activeFilter);
  }, [projects, activeFilter]);

  return (
    <section id="our-projects" style={styles.section}>
      <div style={styles.container}>
        
        {/* Admin Management Dashboard */}
        {isAdmin && (
          <div id="ds-project-form" style={styles.adminCard}>
            <h3 style={styles.adminTitle}>{editingId ? 'Edit SolarFi Project' : 'Add New SolarFi Project'}</h3>
            <form onSubmit={handleSubmit} style={styles.adminForm}>
              <div style={styles.formGrid}>
                <div style={styles.formGroup}>
                  <label style={styles.adminLabel}>Project Name *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState(p => ({ ...p, name: e.target.value }))}
                    placeholder="e.g. Mufis Home Stay"
                    style={styles.adminInput}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.adminLabel}>Location *</label>
                  <input
                    type="text"
                    required
                    value={formState.location}
                    onChange={(e) => setFormState(p => ({ ...p, location: e.target.value }))}
                    placeholder="e.g. Gurugram, Haryana"
                    style={styles.adminInput}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.adminLabel}>Managed By *</label>
                  <input
                    type="text"
                    required
                    value={formState.managedBy}
                    onChange={(e) => setFormState(p => ({ ...p, managedBy: e.target.value }))}
                    placeholder="e.g. Bridgeway Power"
                    style={styles.adminInput}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.adminLabel}>Capacity (kW) *</label>
                  <input
                    type="text"
                    required
                    value={formState.capacity}
                    onChange={(e) => setFormState(p => ({ ...p, capacity: e.target.value }))}
                    placeholder="e.g. 27 kW"
                    style={styles.adminInput}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.adminLabel}>Operational Validity *</label>
                  <input
                    type="text"
                    required
                    value={formState.operationalValidity}
                    onChange={(e) => setFormState(p => ({ ...p, operationalValidity: e.target.value }))}
                    placeholder="e.g. 2041"
                    style={styles.adminInput}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.adminLabel}>Projected Reward *</label>
                  <input
                    type="text"
                    required
                    value={formState.projectedReward}
                    onChange={(e) => setFormState(p => ({ ...p, projectedReward: e.target.value }))}
                    placeholder="e.g. 11% - 14%"
                    style={styles.adminInput}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.adminLabel}>Project Status *</label>
                  <select
                    value={formState.status}
                    onChange={(e) => setFormState(p => ({ ...p, status: e.target.value }))}
                    style={styles.adminSelect}
                  >
                    <option value="active">Active</option>
                    <option value="coming_soon">Coming Soon</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.adminLabel}>Project Image *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                    style={styles.adminFile}
                  />
                  {formState.imageUrl && !selectedFile && (
                    <span style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '4px' }}>Existing Image: {formState.imageUrl.slice(0, 30)}...</span>
                  )}
                </div>
              </div>

              {message && <div style={styles.adminMsg}>{message}</div>}

              <div style={styles.adminButtons}>
                <button type="submit" disabled={loading} style={styles.adminSubmitBtn}>
                  {loading ? 'Saving...' : editingId ? 'Update Project' : 'Create Project'}
                </button>
                {editingId && (
                  <button type="button" onClick={() => {
                    setEditingId(null);
                    setFormState({
                      name: '',
                      location: '',
                      managedBy: 'AY Solar Energy',
                      capacity: '',
                      operationalValidity: '',
                      projectedReward: '',
                      status: 'active',
                      imageUrl: '',
                    });
                  }} style={styles.adminCancelBtn}>
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Section Header with Tabs */}
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Our SolarFi Projects</h2>
          <div style={styles.tabContainer}>
            {[
              { id: 'all', label: `All (${counts.all})` },
              { id: 'active', label: `Active (${counts.active})` },
              { id: 'coming_soon', label: `Coming Soon (${counts.coming_soon})` },
              { id: 'completed', label: `Completed (${counts.completed})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  ...styles.tabPill,
                  ...(activeFilter === tab.id ? styles.tabPillActive : {})
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div style={styles.emptyState}>No projects found under this category.</div>
        ) : (
          <div style={styles.grid}>
            {filteredProjects.map((project) => (
              <div key={project._id} style={styles.card}>
                
                {/* Image & Absolute Status Badge */}
                <div style={styles.imageWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.imageUrl} alt={project.name} style={styles.cardImage} />
                  
                  {project.status === 'active' && (
                    <div style={{ ...styles.badge, ...styles.badgeActive }}>
                      <span style={{ marginRight: '4px' }}>✓</span> Active
                    </div>
                  )}
                  {project.status === 'coming_soon' && (
                    <div style={{ ...styles.badge, ...styles.badgeComing }}>
                      Coming Soon
                    </div>
                  )}
                  {project.status === 'completed' && (
                    <div style={{ ...styles.badge, ...styles.badgeCompleted }}>
                      Completed
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div style={styles.cardBody}>
                  <h3 style={styles.cardName}>{project.name}</h3>
                  
                  {/* Location with Pin Icon */}
                  <div style={styles.cardLocation}>
                    <svg style={styles.locIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{project.location}</span>
                  </div>

                  {/* Managed By */}
                  <div style={styles.cardManaged}>Managed by {project.managedBy}</div>

                  {/* Details Row: Capacity & Validity */}
                  <div style={styles.detailsRow}>
                    <div style={styles.detailBox}>
                      <div style={styles.detailValueRow}>
                        <svg style={{ ...styles.detailIcon, color: '#f59e0b' }} viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                        <span style={styles.detailValue}>{project.capacity}</span>
                      </div>
                      <span style={styles.detailLabel}>Capacity</span>
                    </div>

                    <div style={styles.detailBox}>
                      <div style={styles.detailValueRow}>
                        <svg style={{ ...styles.detailIcon, color: '#10b981' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span style={styles.detailValue}>{project.operationalValidity}</span>
                      </div>
                      <span style={styles.detailLabel}>Operational Validity</span>
                    </div>
                  </div>

                  {/* Projected Reward Box */}
                  <div style={styles.rewardBox}>
                    <span style={styles.rewardLabel}>Projected Reward</span>
                    <span style={styles.rewardValue}>{project.projectedReward}</span>
                  </div>

                  {/* Show Interest Button */}
                  <button 
                    onClick={() => setSelectedProject(project)} 
                    style={styles.actionBtn}
                  >
                    Show Interest ↗
                  </button>

                  {/* Admin Actions inside card */}
                  {isAdmin && (
                    <div style={styles.adminActionRow}>
                      <button onClick={() => handleEdit(project)} style={styles.adminEditBtn}>Edit</button>
                      <button onClick={() => handleDelete(project._id)} style={styles.adminDeleteBtn}>Delete</button>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Show Interest Modal Popup */}
      {selectedProject && (
        <InterestModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

    </section>
  );
}

const styles = {
  section: {
    padding: '60px 0',
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: '1140px',
    margin: '0 auto',
    padding: '0 20px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
    flexWrap: 'wrap',
    gap: '20px',
    borderBottom: '1px solid #f1f5f9',
    paddingBottom: '20px',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#002244',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '700',
    margin: 0,
  },
  tabContainer: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    backgroundColor: '#f8fafc',
    padding: '6px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
  },
  tabPill: {
    padding: '8px 16px',
    fontSize: '0.88rem',
    fontWeight: '600',
    color: '#64748b',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  tabPillActive: {
    backgroundColor: '#10b981',
    color: '#ffffff',
    boxShadow: '0 4px 10px rgba(16, 185, 129, 0.2)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
    gap: '30px',
  },
  emptyState: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#f8fafc',
    color: '#64748b',
    borderRadius: '12px',
    border: '1px dashed #cbd5e1',
    fontSize: '1.1rem',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  imageWrap: {
    position: 'relative',
    width: '100%',
    height: '200px',
    backgroundColor: '#f1f5f9',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  badge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    padding: '5px 12px',
    borderRadius: '999px',
    fontSize: '0.75rem',
    fontWeight: '700',
    boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
    textTransform: 'uppercase',
  },
  badgeActive: {
    backgroundColor: '#d1fae5',
    color: '#065f46',
  },
  badgeComing: {
    backgroundColor: '#fef3c7',
    color: '#92400e',
  },
  badgeCompleted: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
  },
  cardBody: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  cardName: {
    margin: 0,
    fontSize: '1.28rem',
    fontWeight: '700',
    color: '#0f172a',
    fontFamily: '"Poppins", sans-serif',
    lineHeight: '1.3',
  },
  cardLocation: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginTop: '8px',
    fontSize: '0.88rem',
    color: '#64748b',
    fontWeight: '500',
  },
  locIcon: {
    width: '14px',
    height: '14px',
    color: '#ef4444',
  },
  cardManaged: {
    fontSize: '0.82rem',
    color: '#94a3b8',
    marginTop: '4px',
    fontWeight: '500',
  },
  detailsRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
    borderTop: '1px solid #f1f5f9',
    marginTop: '16px',
    paddingTop: '14px',
  },
  detailBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  detailValueRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  detailIcon: {
    width: '16px',
    height: '16px',
  },
  detailValue: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: '#1e293b',
  },
  detailLabel: {
    fontSize: '0.75rem',
    color: '#94a3b8',
    fontWeight: '600',
  },
  rewardBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #f1f5f9',
    marginTop: '14px',
    paddingTop: '14px',
  },
  rewardLabel: {
    fontSize: '0.85rem',
    color: '#64748b',
    fontWeight: '500',
  },
  rewardValue: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#10b981',
  },
  actionBtn: {
    marginTop: '18px',
    padding: '12px',
    width: '100%',
    backgroundColor: '#0057B8',
    color: '#ffffff',
    fontSize: '0.95rem',
    fontWeight: '700',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    textAlign: 'center',
  },
  adminCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
    marginBottom: '40px',
  },
  adminTitle: {
    margin: '0 0 18px',
    fontSize: '1.4rem',
    color: '#003d82',
    fontFamily: '"Poppins", sans-serif',
  },
  adminForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
  },
  adminLabel: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#475569',
    marginBottom: '6px',
  },
  adminInput: {
    padding: '10px 12px',
    fontSize: '0.92rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    outline: 'none',
  },
  adminSelect: {
    padding: '10px 12px',
    fontSize: '0.92rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    outline: 'none',
    backgroundColor: '#ffffff',
  },
  adminFile: {
    fontSize: '0.85rem',
    color: '#64748b',
    padding: '6px 0',
  },
  adminMsg: {
    fontSize: '0.92rem',
    color: '#1e293b',
    padding: '6px 0',
    fontWeight: '600',
  },
  adminButtons: {
    display: 'flex',
    gap: '12px',
  },
  adminSubmitBtn: {
    backgroundColor: '#0057B8',
    color: '#ffffff',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
  },
  adminCancelBtn: {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
  },
  adminActionRow: {
    display: 'flex',
    gap: '10px',
    marginTop: '12px',
    borderTop: '1px dashed #e2e8f0',
    paddingTop: '12px',
  },
  adminEditBtn: {
    flex: 1,
    padding: '6px 12px',
    backgroundColor: '#f1f5f9',
    color: '#475569',
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.82rem',
    fontWeight: '600',
  },
  adminDeleteBtn: {
    flex: 1,
    padding: '6px 12px',
    backgroundColor: '#ffe5e5',
    color: '#b71c1c',
    border: '1px solid #f5c2c2',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.82rem',
    fontWeight: '600',
  },
};
