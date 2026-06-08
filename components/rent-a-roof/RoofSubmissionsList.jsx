import { useState, useEffect } from 'react';

export default function RoofSubmissionsList() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchSubmissions = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const res = await fetch('/api/roofs', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (res.ok) {
        setSubmissions(data);
      } else {
        setError(data.msg || 'Failed to load submissions.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while loading submissions.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this rooftop application?')) return;

    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`/api/roofs/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        fetchSubmissions();
      } else {
        alert('Failed to delete submission.');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting submission.');
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', color: '#0057B8', fontWeight: 600 }}>
        Loading rooftop applications...
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <span style={styles.badge}>Admin View Only</span>
          <h2 style={styles.title}>Rooftop Partner Applications</h2>
        </div>
        <div style={styles.countBadge}>{submissions.length} Submissions</div>
      </div>

      {error && <div style={styles.error}>{error}</div>}

      {submissions.length === 0 ? (
        <div style={styles.emptyState}>No rooftop applications submitted yet.</div>
      ) : (
        <div style={styles.grid}>
          {submissions.map((sub) => (
            <div key={sub._id} style={styles.card}>
              <div style={styles.imageCol}>
                {sub.imageUrl ? (
                  <a href={sub.imageUrl} target="_blank" rel="noopener noreferrer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={sub.imageUrl} alt={sub.ownerName} style={styles.image} />
                  </a>
                ) : (
                  <div style={styles.noImage}>No Photo</div>
                )}
              </div>
              <div style={styles.detailsCol}>
                <div style={styles.nameRow}>
                  <h3 style={styles.ownerName}>{sub.ownerName}</h3>
                  <button onClick={() => handleDelete(sub._id)} style={styles.deleteBtn}>
                    Delete
                  </button>
                </div>

                <div style={styles.metaGrid}>
                  <div style={styles.metaItem}>
                    <strong>Phone:</strong> <a href={`tel:${sub.phone}`} style={styles.link}>{sub.phone}</a>
                  </div>
                  <div style={styles.metaItem}>
                    <strong>Email:</strong> <a href={`mailto:${sub.email}`} style={styles.link}>{sub.email}</a>
                  </div>
                  <div style={styles.metaItem}>
                    <strong>Roof Size:</strong> {sub.roofSize}
                  </div>
                  <div style={styles.metaItem}>
                    <strong>Roof Type:</strong> {sub.roofType || 'Concrete'}
                  </div>
                  <div style={styles.metaItem}>
                    <strong>Monthly Bill:</strong> {sub.electricityBill || '—'}
                  </div>
                  <div style={styles.metaItem}>
                    <strong>Submitted:</strong> {new Date(sub.createdAt).toLocaleDateString()}
                  </div>
                </div>

                <div style={styles.address}>
                  <strong>Location:</strong> {sub.address}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1140px',
    margin: '40px auto 60px',
    padding: '0 20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    borderBottom: '2px solid #e2e8f0',
    paddingBottom: '16px',
    flexWrap: 'wrap',
    gap: '12px',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#ffe5e5',
    color: '#b71c1c',
    fontSize: '0.75rem',
    fontWeight: '700',
    padding: '4px 8px',
    borderRadius: '4px',
    textTransform: 'uppercase',
    marginBottom: '6px',
  },
  title: {
    fontSize: '1.6rem',
    color: '#002244',
    margin: 0,
    fontFamily: '"Poppins", sans-serif',
  },
  countBadge: {
    backgroundColor: '#0057B8',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: '700',
    fontSize: '0.9rem',
  },
  error: {
    padding: '12px',
    backgroundColor: '#ffebee',
    color: '#c62828',
    borderRadius: '8px',
    marginBottom: '20px',
    fontWeight: '600',
  },
  emptyState: {
    textAlign: 'center',
    padding: '60px 20px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    color: '#64748b',
    border: '2px dashed #cbd5e1',
    fontSize: '1.1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  },
  card: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  imageCol: {
    width: '100%',
    maxWidth: '240px',
    height: '180px',
    backgroundColor: '#f1f5f9',
    position: 'relative',
    flexShrink: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    cursor: 'zoom-in',
  },
  noImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    color: '#94a3b8',
    fontWeight: '600',
    textAlign: 'center',
  },
  detailsCol: {
    flex: 1,
    padding: '20px',
    minWidth: '280px',
  },
  nameRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '14px',
    gap: '12px',
  },
  ownerName: {
    margin: 0,
    fontSize: '1.25rem',
    color: '#0f172a',
    fontFamily: '"Poppins", sans-serif',
  },
  deleteBtn: {
    backgroundColor: '#ffe5e5',
    color: '#b71c1c',
    border: '1px solid #f5c2c2',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.82rem',
    fontWeight: '600',
    transition: 'all 0.2s ease',
  },
  metaGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '10px 16px',
    marginBottom: '14px',
    fontSize: '0.92rem',
    color: '#475569',
  },
  metaItem: {
    lineHeight: '1.4',
  },
  link: {
    color: '#0057B8',
    textDecoration: 'underline',
  },
  address: {
    fontSize: '0.92rem',
    color: '#334155',
    borderTop: '1px dashed #e2e8f0',
    paddingTop: '10px',
    marginTop: '10px',
    lineHeight: '1.4',
  },
};
