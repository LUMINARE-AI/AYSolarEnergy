/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function PMSuryaghar() {
  return (
    <>
      <NextSeo
        title="PM Suryaghar Yojana Jaipur - Solar Subsidy ₹78,000 Rajasthan"
        description="Apply for PM Suryaghar Yojana in Jaipur & Tonk and get up to ₹78,000 subsidy on home solar installation. Free consultation by AY Solar Energy."
      />

      <div className="surya-root">
        {/* ── HERO ── */}
        <div className="surya-hero">
          <div className="surya-hero-sun" />
          <div className="surya-hero-rays">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="surya-ray"
                style={{ transform: `rotate(${i * 30}deg)` }}
              />
            ))}
          </div>
          <div className="surya-hero-grid" />
          <div className="surya-hero-content">
            <div className="surya-badge">
              <span className="surya-badge-dot" />
              Government Initiative 2024
            </div>
            <h1 className="surya-hero-title">
              PM <span>Suryaghar</span>
              <br />
              Yojana in Jaipur & Tonk
            </h1>
            <p className="surya-hero-sub">
              Apply for PM Suryaghar Yojana in Jaipur and get up to ₹78,000
              subsidy on rooftop solar installation. Reduce electricity bills
              and generate your own solar power with government support.
            </p>
            <Link href="/contact" className="surya-hero-btn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Get Free Consultation
            </Link>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "20px auto",
          }}
        >
          PM Suryaghar Yojana is a government solar subsidy scheme for
          homeowners in Rajasthan. AY Solar Energy helps you apply, install
          rooftop solar panels, and claim subsidy easily in Jaipur and Tonk.
        </p>

        {/* ── STATS BAR ── */}
        <div className="surya-stats-bar">
          {[
            { num: "₹1L", label: "Max Subsidy" },
            { num: "25 yr", label: "Panel Warranty" },
            { num: "3–5 yr", label: "Payback Period" },
            { num: "1–3 kW", label: "System Sizes" },
          ].map((s, i) => (
            <div key={i} className="surya-stat-item">
              <span className="surya-stat-num">{s.num}</span>
              <span className="surya-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* ── SUBSIDY SLABS ── */}
        <section className="surya-section" style={{ background: "#FFFBF0" }}>
          <p className="surya-section-eyebrow">Subsidy Slabs</p>
          <h2 className="surya-h2">
            PM Suryaghar Subsidy Details
            <br />
            in Rajasthan
          </h2>
          <p className="surya-section-sub">
            Central government subsidy based on system capacity. The larger your
            system, the more you save.
          </p>
          <div className="surya-subsidy-grid">
            <div className="surya-subsidy-card">
              <div className="surya-card-size">1 kW System</div>
              <div className="surya-card-subsidy">₹60,000</div>
              <div className="surya-card-divider" />
              <div className="surya-card-row">
                <span className="surya-card-row-label">
                  Your cost after subsidy
                </span>
                <span className="surya-card-row-val">₹20,000–40,000</span>
              </div>
              <div className="surya-card-payback">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Payback in 3–5 years
              </div>
            </div>
            <div className="surya-subsidy-card featured">
              <div className="surya-top-tag">Best Value</div>
              <div className="surya-card-size">2 kW System</div>
              <div className="surya-card-subsidy">₹1,00,000</div>
              <div className="surya-card-divider" />
              <div className="surya-card-row">
                <span className="surya-card-row-label">
                  Your cost after subsidy
                </span>
                <span className="surya-card-row-val">₹40,000–60,000</span>
              </div>
              <div className="surya-card-payback">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                Payback in 3–5 years
              </div>
            </div>
          </div>
        </section>

        {/* ── ELIGIBILITY ── */}
        <section className="surya-section surya-elig-bg">
          <p className="surya-section-eyebrow" style={{ color: "#FDE68A" }}>
            Eligibility for PM Suryaghar Yojana
          </p>
          <h2 className="surya-h2" style={{ color: "white" }}>
            Are you eligible?
          </h2>
          <p
            className="surya-section-sub"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Check if you qualify for the PM Suryaghar Yojana subsidy.
          </p>
          <div className="surya-elig-grid">
            {[
              { icon: "🇮🇳", text: "Indian citizen with valid government ID" },
              {
                icon: "🏠",
                text: "Own residential property with ownership documents",
              },
              {
                icon: "⚡",
                text: "Active electricity connection to the property",
              },
              {
                icon: "🚫",
                text: "No previous solar subsidy availed under any scheme",
              },
              {
                icon: "☀️",
                text: "Roof area suitable and structurally fit for solar panels",
              },
            ].map((item, i) => (
              <div key={i} className="surya-elig-item">
                <div className="surya-elig-icon">{item.icon}</div>
                <div className="surya-elig-text">{item.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="surya-section" style={{ background: "#FFFFFF" }}>
          <p className="surya-section-eyebrow">Application Process</p>
          <h2 className="surya-h2">
            6 simple steps
            <br />
            to solar freedom
          </h2>
          <p className="surya-section-sub">
            From registration to receiving your subsidy — we guide you through
            every stage.
          </p>
          <div className="surya-process-track">
            <div className="surya-process-line" />
            <div className="surya-process-grid">
              {[
                {
                  num: "1",
                  title: "Register",
                  desc: "Sign up on the official portal",
                  bg: "linear-gradient(135deg,#F59E0B,#D97706)",
                },
                {
                  num: "2",
                  title: "Verify",
                  desc: "Submit documents for review",
                  bg: "linear-gradient(135deg,#0EA5E9,#0284C7)",
                },
                {
                  num: "3",
                  title: "Approval",
                  desc: "Receive your approval letter",
                  bg: "linear-gradient(135deg,#F59E0B,#D97706)",
                },
                {
                  num: "4",
                  title: "Install",
                  desc: "Panels installed at your home",
                  bg: "linear-gradient(135deg,#0EA5E9,#0284C7)",
                },
                {
                  num: "5",
                  title: "Inspect",
                  desc: "Government quality inspection",
                  bg: "linear-gradient(135deg,#F59E0B,#D97706)",
                },
                {
                  num: "6",
                  title: "Subsidy",
                  desc: "Funds credited to your account",
                  bg: "linear-gradient(135deg,#16A34A,#15803D)",
                },
              ].map((step, i) => (
                <div key={i} className="surya-process-step">
                  <div
                    className="surya-process-circle"
                    style={{ background: step.bg }}
                  >
                    {step.num}
                  </div>
                  <div className="surya-process-title">{step.title}</div>
                  <div className="surya-process-desc">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DOCUMENTS ── */}
        <section className="surya-section" style={{ background: "#FFFBF0" }}>
          <p className="surya-section-eyebrow">Documents Required</p>
          <h2 className="surya-h2">What to keep ready</h2>
          <p className="surya-section-sub">
            Gather these documents before starting your application to make the
            process smooth.
          </p>
          <div className="surya-docs-grid">
            <div className="surya-doc-card">
              <div className="surya-doc-card-title">
                <div className="surya-doc-icon">🪪</div>
                Personal Documents
              </div>
              <ul className="surya-doc-list">
                {["Aadhar Card", "PAN Card", "Bank Account Details"].map(
                  (doc, i) => (
                    <li key={i}>
                      <span className="surya-doc-dot" />
                      {doc}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="surya-doc-card">
              <div className="surya-doc-card-title">
                <div className="surya-doc-icon">🏘️</div>
                Property Documents
              </div>
              <ul className="surya-doc-list">
                {[
                  "Property Ownership Proof",
                  "Latest Electricity Bill",
                  "Rooftop Photograph",
                ].map((doc, i) => (
                  <li key={i}>
                    <span className="surya-doc-dot" />
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="surya-cta-section" id="apply">
          <div className="surya-cta-inner">
            <svg
              className="surya-cta-icon"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="28" cy="28" r="12" fill="#F59E0B" />
              <line
                x1="28"
                y1="4"
                x2="28"
                y2="10"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="28"
                y1="46"
                x2="28"
                y2="52"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="4"
                y1="28"
                x2="10"
                y2="28"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="46"
                y1="28"
                x2="52"
                y2="28"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="11.515"
                y1="11.515"
                x2="15.757"
                y2="15.757"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="40.243"
                y1="40.243"
                x2="44.485"
                y2="44.485"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="44.485"
                y1="11.515"
                x2="40.243"
                y2="15.757"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="15.757"
                y1="40.243"
                x2="11.515"
                y2="44.485"
                stroke="#F59E0B"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <h2 className="surya-cta-h2">Ready to go solar?</h2>
            <p className="surya-cta-p">
              We handle everything — from application to installation. Let's get
              started today.
            </p>
            <Link href="/contact" className="surya-cta-btn">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Get Free Consultation
            </Link>
          </div>
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <Link href="/services/residential">Home Solar Installation</Link> |
            <Link href="/finance">Solar EMI Options</Link> |
            <Link href="/services/commercial">Commercial Solar</Link>
          </div>
        </section>

        <section style={{ background: '#FFFFFF' }} className="surya-section">
          <p className="surya-section-eyebrow" style={{ textAlign: "center" }}>
            Frequently Asked Questions
          </p>
          <h2 style={{ textAlign: "center" }} className="surya-h2">Your PM Suryaghar Questions Answered</h2>
          <p style={{ textAlign: "center", color: "#57534E" }} >
            Clear answers to the most common questions about PM Suryaghar Yojana
            and rooftop solar subsidy in Rajasthan.
          </p>

          <div style={{ textAlign: "center" }} className="surya-faq-list">
            <div className="surya-faq-item">
              <div className="surya-faq-question">What is PM Suryaghar Yojana?</div>
              <div className="surya-faq-answer">
                It is a government scheme that provides subsidy for rooftop solar
                installation for homes, helping homeowners reduce electricity bills
                and generate clean solar power.
              </div>
            </div>

            <div className="surya-faq-item">
              <div className="surya-faq-question">How much subsidy is available?</div>
              <div className="surya-faq-answer">
                You can get up to ₹78,000 subsidy depending on system size and
                eligibility, with lower installation costs for smaller rooftop solar systems.
              </div>
            </div>

            <div className="surya-faq-item">
              <div className="surya-faq-question">Who can apply?</div>
              <div className="surya-faq-answer">
                Any Indian homeowner with a valid electricity connection and a
                structurally sound rooftop can apply for the scheme through AY Solar Energy.
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
