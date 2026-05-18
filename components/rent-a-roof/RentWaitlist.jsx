'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/rentARoof.module.css';
import { USER_TYPES } from '@/lib/rentARoofContent';

export default function RentWaitlist() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    userType: 'homeowner',
  });
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      city: form.city.trim(),
      userType: form.userType,
      _subject: 'Rent A Roof — Waitlist',
      message: `Rent A Roof waitlist\nType: ${form.userType}\nCity: ${form.city}`,
    };

    try {
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          setSubmitted(true);
          setForm({ name: '', phone: '', city: '', userType: 'homeowner' });
        }
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className={styles.waitlistSection} aria-labelledby="waitlist-title">
      <div className={styles.wrapWide}>
        <div className={styles.ctaSplit}>
          <div className={styles.ctaCopy}>
            <span className={styles.ctaEyebrow}>Contact us</span>
            <h2 id="waitlist-title">Join the waitlist today</h2>
            <p>
              Whether you want early access as a subscriber or plan to list a
              roof—we will reach out when Rent A Roof launches in your area.
            </p>
            <p className={styles.ctaNote}>
              Give us your details. We respond as soon as we can.
            </p>
          </div>

          <div className={styles.waitlistCard}>
            {submitted ? (
              <p className={styles.formSuccess}>
                Thank you. We will contact you when Rent A Roof is live.
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
                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? 'Sending…' : 'Join early access'}
                </button>
                <p className={styles.formNote}>
                  We only use this to notify you about the launch.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
