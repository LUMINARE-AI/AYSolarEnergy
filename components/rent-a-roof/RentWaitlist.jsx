'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/rentARoof.module.css';
import { USER_TYPES } from '@/lib/rentARoofContent';
import { whatsappUrl, WA_RENT_WAITLIST } from '@/lib/whatsapp';

export default function RentWaitlist() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    userType: 'homeowner',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    if (type === 'roof' || type === 'roof_owner') {
      setForm((prev) => ({ ...prev, userType: 'roof_owner' }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const typeLabel = USER_TYPES.find((t) => t.value === form.userType)?.label ?? form.userType;
    const lines = [
      WA_RENT_WAITLIST,
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `City: ${form.city.trim()}`,
      `I am a: ${typeLabel}`,
    ];
    const url = whatsappUrl(lines.join('\n'));
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className={styles.waitlistSection} aria-labelledby="waitlist-title">
      <div className={styles.wrapWide}>
        <div className={styles.ctaSplit}>
          <div className={styles.ctaCopy}>
            <span className={styles.ctaEyebrow}>Contact us</span>
            <h2 id="waitlist-title">Join the waitlist today</h2>
            <p>
              Whether you want early access as a subscriber or plan to list a roof — fill the form and continue on
              WhatsApp <strong style={{ color: 'var(--rent-gold)' }}>98872 70041</strong>, or message us directly from
              the app.
            </p>
            <p className={styles.ctaNote}>
              Same number for quick questions — we respond as soon as we can.
            </p>
            <div className={styles.introActions} style={{ marginTop: 16 }}>
              <a
                href={whatsappUrl(WA_RENT_WAITLIST)}
                className={styles.btnGoldOutline}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderColor: 'rgba(255,255,255,0.85)', color: '#fff' }}
              >
                WhatsApp waitlist
              </a>
            </div>
          </div>

          <div className={styles.waitlistCard}>
            {submitted ? (
              <p className={styles.formSuccess}>
                WhatsApp should have opened with your details. If it did not, message us on{' '}
                <strong>98872 70041</strong>.
              </p>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="rent-name">Name</label>
                  <input
                    id="rent-name"
                    name="name"
                    type="text"
                    required
                    className={styles.formInput}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="rent-phone">Phone</label>
                  <input
                    id="rent-phone"
                    name="phone"
                    type="tel"
                    required
                    className={styles.formInput}
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="rent-city">City</label>
                  <input
                    id="rent-city"
                    name="city"
                    type="text"
                    required
                    className={styles.formInput}
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Jaipur, Tonk, etc."
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="rent-type">I am a</label>
                  <select
                    id="rent-type"
                    name="userType"
                    className={styles.formSelect}
                    value={form.userType}
                    onChange={handleChange}
                  >
                    {USER_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Get free consultation on WhatsApp
                </button>
                <p className={styles.formNote}>
                  Opens WhatsApp with your details — we only use this to follow up about Rent A Roof.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
