import { useState } from 'react';
import { whatsappUrl } from '@/lib/whatsapp';

export default function InterestModal({ project, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    reserveCapacity: '1',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const lines = [
      `Hi AY Solar Energy, I am interested in reserving capacity for the following SolarFi project:`,
      `Project Name: ${project.name}`,
      `Capacity of Project: ${project.capacity}`,
      `Operational Validity: ${project.operationalValidity}`,
      `Projected Reward: ${project.projectedReward}`,
      `Location: ${project.location}`,
      ``,
      `Here are my details:`,
      `Name: ${formData.name.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Capacity I want to reserve: ${formData.reserveCapacity.trim()} kW`,
    ];

    const url = whatsappUrl(lines.join('\n'));
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <div>
            <h3 style={styles.title}>Confirm Your Interest</h3>
            <p style={styles.subtitle}>Reserving capacity for {project.name}</p>
          </div>
          <button style={styles.closeBtn} onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Your Name *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              style={styles.input}
            />
          </div>

          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile"
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                style={styles.input}
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Capacity to Reserve (kW) *</label>
            <input
              type="number"
              name="reserveCapacity"
              required
              min="0.5"
              step="0.5"
              value={formData.reserveCapacity}
              onChange={handleChange}
              placeholder="e.g. 1"
              style={styles.input}
            />
            <span style={styles.hint}>Typical reservation starts from 1 kW. Each kW provides monthly bill savings.</span>
          </div>

          <div style={styles.actions}>
            <button type="button" onClick={onClose} style={styles.cancelBtn}>
              Cancel
            </button>
            <button type="submit" style={styles.submitBtn}>
              Confirm on WhatsApp →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  modal: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    border: '1px solid #e2e8f0',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '24px 24px 16px',
    borderBottom: '1px solid #f1f5f9',
  },
  title: {
    margin: 0,
    fontSize: '1.25rem',
    color: '#0f172a',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '700',
  },
  subtitle: {
    margin: '4px 0 0',
    fontSize: '0.88rem',
    color: '#64748b',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '1.8rem',
    color: '#94a3b8',
    cursor: 'pointer',
    padding: 0,
    lineHeight: '1',
  },
  form: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#334155',
    marginBottom: '6px',
  },
  input: {
    padding: '10px 12px',
    fontSize: '0.95rem',
    border: '1px solid #cbd5e1',
    borderRadius: '8px',
    outline: 'none',
  },
  hint: {
    fontSize: '0.78rem',
    color: '#64748b',
    marginTop: '4px',
  },
  actions: {
    display: 'flex',
    gap: '12px',
    marginTop: '8px',
  },
  cancelBtn: {
    flex: 1,
    padding: '12px',
    backgroundColor: '#f1f5f9',
    color: '#475569',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    textAlign: 'center',
  },
  submitBtn: {
    flex: 2,
    padding: '12px',
    backgroundColor: '#25D366',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '700',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)',
  },
};
