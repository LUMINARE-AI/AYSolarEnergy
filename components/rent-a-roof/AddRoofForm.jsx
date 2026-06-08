import { useState } from 'react';
import styles from '@/styles/rentARoof.module.css';

export default function AddRoofForm() {
  const [formData, setFormData] = useState({
    ownerName: '',
    phone: '',
    email: '',
    address: '',
    roofSize: '',
    electricityBill: '',
    roofType: 'Concrete',
    image: '',
  });

  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        setError('Image size should be less than 8MB');
        return;
      }
      setError('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      setError('Please upload an image of your roof');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/roofs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          ownerName: '',
          phone: '',
          email: '',
          address: '',
          roofSize: '',
          electricityBill: '',
          roofType: 'Concrete',
          image: '',
        });
        setImagePreview('');
      } else {
        setError(data.msg || 'Failed to submit roof details. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to submit roof details. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="add-roof" className={styles.waitlistSection} aria-labelledby="add-roof-title" style={{ borderTop: 'none', background: 'linear-gradient(135deg, #003d82 0%, #002244 100%)' }}>
      <div className={styles.wrapWide}>
        <div className={styles.ctaSplit}>
          <div className={styles.ctaCopy}>
            <span className={styles.ctaEyebrow}>Rooftop Partner</span>
            <h2 id="add-roof-title">List Your Rooftop for Rental</h2>
            <p>
              Earn passive monthly income or get cheaper solar power by renting out your roof space to AY Solar Energy. 
              We take care of the entire system installation, approvals, operations, and zero-cost maintenance.
            </p>
            <p className={styles.ctaNote}>
              Fill in your basic roof details and upload an image. Our engineering team will review your roof and draft a solar proposal.
            </p>
            <div style={{ marginTop: 24 }}>
              <h4 style={{ color: 'var(--rent-gold)', marginBottom: 10, fontSize: '0.95rem', fontWeight: 700 }}>Why rent your roof?</h4>
              <ul className={styles.modelBenefits} style={{ paddingLeft: 0, listStyle: 'none' }}>
                <li style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.88rem', paddingLeft: '22px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--rent-gold)' }}>✓</span>
                  Passive income with zero capital investment
                </li>
                <li style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.88rem', paddingLeft: '22px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--rent-gold)' }}>✓</span>
                  Help generate clean local energy for Rajasthan
                </li>
                <li style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.88rem', paddingLeft: '22px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--rent-gold)' }}>✓</span>
                  Continuous maintenance handled by our experts
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.waitlistCard}>
            {submitted ? (
              <div className={styles.formSuccess}>
                <h3 style={{ margin: 0, color: '#2e7d32', fontSize: '1.2rem' }}>✓ Submitted Successfully!</h3>
                <p style={{ marginTop: 12, fontSize: '0.92rem', color: '#1b5e20', fontWeight: 500, lineHeight: 1.5 }}>
                  Thank you! Your rooftop details and image have been successfully uploaded and saved. 
                  Our team will contact you soon.
                </p>
                <button 
                  onClick={() => setSubmitted(false)} 
                  className={styles.submitBtn}
                  style={{ marginTop: 20, background: 'var(--rent-blue)', color: '#fff' }}
                >
                  Submit Another Roof
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                {error && (
                  <div style={{ color: '#d32f2f', background: '#ffebee', padding: '10px 14px', borderRadius: 8, fontSize: '0.88rem', fontWeight: 600 }}>
                    {error}
                  </div>
                )}
                
                <div className={styles.formGroup}>
                  <label htmlFor="ownerName">Full Name *</label>
                  <input
                    id="ownerName"
                    name="ownerName"
                    type="text"
                    required
                    className={styles.formInput}
                    value={formData.ownerName}
                    onChange={handleChange}
                    placeholder="Enter roof owner name"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className={styles.formInput}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={styles.formInput}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@email.com"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="address">Rooftop Address/Location *</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    required
                    className={styles.formInput}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Full address of the property"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div className={styles.formGroup}>
                    <label htmlFor="roofSize">Rooftop Area (sq ft) *</label>
                    <input
                      id="roofSize"
                      name="roofSize"
                      type="text"
                      required
                      className={styles.formInput}
                      value={formData.roofSize}
                      onChange={handleChange}
                      placeholder="e.g. 1500 sq ft"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="electricityBill">Avg Monthly Bill (₹) (Optional)</label>
                    <input
                      id="electricityBill"
                      name="electricityBill"
                      type="text"
                      className={styles.formInput}
                      value={formData.electricityBill}
                      onChange={handleChange}
                      placeholder="e.g. 5000"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="roofType">Rooftop Structure Type *</label>
                  <select
                    id="roofType"
                    name="roofType"
                    className={styles.formSelect}
                    value={formData.roofType}
                    onChange={handleChange}
                  >
                    <option value="Concrete">Flat Concrete Roof</option>
                    <option value="Tin Shade">Industrial Tin Shade</option>
                    <option value="Asbestos Sheet">Asbestos Sheet Roof</option>
                    <option value="Open Ground">Open Ground / Land</option>
                    <option value="Other">Other / Mixed</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Rooftop Photo *</label>
                  <div className={styles.fileUploadContainer}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      required
                      id="roof-image"
                      className={styles.fileInputHidden}
                    />
                    <label htmlFor="roof-image" className={styles.fileUploadLabel}>
                      {imagePreview ? (
                        <div className={styles.previewContainer}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={imagePreview} alt="Roof preview" className={styles.imagePreview} />
                          <span className={styles.changeText}>Change Image</span>
                        </div>
                      ) : (
                        <div className={styles.uploadPlaceholder}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.uploadIcon}>
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                          </svg>
                          <span style={{ fontSize: '0.85rem' }}>Select Rooftop Image</span>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <button type="submit" disabled={loading} className={styles.submitBtn}>
                  {loading ? 'Uploading & Registering...' : 'List My Rooftop'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
