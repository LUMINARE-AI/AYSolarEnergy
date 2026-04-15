/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import HomeShowcase from "@/components/HomeShowcase";
import { NextSeo } from "next-seo";
import { useState } from "react";

const faqs = [
  {
    question: "What is the cost of solar panel installation in Jaipur?",
    answer:
      "Solar installation cost depends on system size, typically ranging from ₹1.5L to ₹5L with subsidy benefits.",
  },
  {
    question: "How much subsidy is available in Rajasthan?",
    answer: "Under PM Suryaghar Yojana, you can get up to ₹78,000 subsidy.",
  },
  {
    question: "How much space is required for solar panels?",
    answer: "Around 100 sq ft is required for a 1kW solar system.",
  },
  {
    question: "What is the lifespan of solar panels?",
    answer: "Solar panels typically last 25+ years with proper maintenance.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <NextSeo
        title="Solar Company Near Me Jaipur | AY Solar Energy"
        description="Looking for a reliable solar company near me in Jaipur? AY Solar Energy offers rooftop, commercial solar installation with subsidy up to ₹78,000. Get free consultation today!"
      />

      <Hero
        title="Solar Panel Installation in Jaipur & Tonk - AY Solar Energy"
        subtitle="Solar Solutions in Jaipur & Tonk"
        cta={true}
      />

      <HomeShowcase />

      <p
        style={{ textAlign: "center", maxWidth: "800px", margin: "20px auto" }}
      >
        AY Solar Energy provides professional solar panel installation in Jaipur
        and Tonk. We specialize in rooftop solar, commercial solar systems, and
        government schemes like PM Suryaghar Yojana.
      </p>

      {/* Why Solar Section */}
      <section style={{ padding: "60px 0" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
              backgroundColor: "#E3F2FD",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ color: "#333" }}>Why Choose Solar Energy?</h2>
            <p>Harness the unlimited power of the sun with proven benefits</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            <div
              style={{
                padding: "30px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>💰</div>
              <h3>Save on Bills</h3>
              <p>
                Reduce your electricity bills by up to 90% with rooftop solar
                installation. Generate your own clean energy.
              </p>
            </div>
            <div
              style={{
                padding: "30px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>🏛️</div>
              <h3>Government Subsidy</h3>
              <p>
                Get up to ₹78,000 subsidy under PM Suryaghar Yojana. Additional
                Rajasthan state subsidy available.
              </p>
            </div>
            <div
              style={{
                padding: "30px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>🌍</div>
              <h3>Clean Energy</h3>
              <p>
                Contribute to a sustainable future. Solar energy is renewable,
                clean, and environmentally friendly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ padding: "60px 0", backgroundColor: "#F4F7FB" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
              backgroundColor: "#E3F2FD",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ color: "#333" }}>Our Services</h2>
            <p>Complete solar solutions for homes, businesses, and farmers</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            <div
              style={{
                padding: "30px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                🏠
              </div>
              <h3 style={{ textAlign: "center" }}>Residential Rooftop Solar</h3>
              <p>
                1kW to 10kW systems for homeowners. Compatible with PM Suryaghar
                Yojana.
              </p>
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <Link
                  href="/services/residential"
                  style={{
                    color: "#0057B8",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div
              style={{
                padding: "30px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                🏭
              </div>
              <h3 style={{ textAlign: "center" }}>C&I Solar</h3>
              <p>
                Commercial and industrial solar solutions. Larger capacity
                systems with net metering.
              </p>
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <Link
                  href="/services/commercial"
                  style={{
                    color: "#0057B8",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div
              style={{
                padding: "30px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                🚜
              </div>
              <h3 style={{ textAlign: "center" }}>Kusum Yojana</h3>
              <p>
                PM KUSUM scheme for farmers. Solar pumps for agricultural use.
              </p>
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <Link
                  href="/services/kusum"
                  style={{
                    color: "#0057B8",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div
              style={{
                padding: "30px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                💳
              </div>
              <h3 style={{ textAlign: "center" }}>Finance Facility</h3>
              <p>
                Solar loans with flexible EMI options. Zero-cost solar finance
                available.
              </p>
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <Link
                  href="/finance"
                  style={{
                    color: "#0057B8",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PM Suryaghar Banner */}
      <section style={{ padding: "60px 0" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              backgroundColor: "#E3F2FD",
              color: "#333",
              padding: "40px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#333" }}>🌞 Apply for PM Suryaghar Yojana</h2>
            <p>
              Get up to ₹78,000 subsidy + 300 units free electricity per month
            </p>
            <Link
              href="/pm-suryaghar"
              style={{
                backgroundColor: "#FFC107",
                color: "#333",
                padding: "12px 30px",
                borderRadius: "4px",
                fontWeight: "600",
                display: "inline-block",
                textDecoration: "none",
                marginTop: "15px",
              }}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose AY Solar Energy */}
      <section style={{ padding: "60px 0", backgroundColor: "#F4F7FB" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
              backgroundColor: "#E3F2FD",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ color: "#333" }}>Why Choose AY Solar Energy?</h2>
            <p>Your trusted solar partner in Jaipur & Tonk</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>🎯</div>
              <h4>Local Experts</h4>
              <p>
                Deep knowledge of Jaipur & Tonk market and local regulations
              </p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>✅</div>
              <h4>Govt Empanelled</h4>
              <p>
                Authorized installer for PM Suryaghar and Kusum Yojana schemes
              </p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>🔧</div>
              <h4>End-to-End Service</h4>
              <p>From consultation to installation to subsidy processing</p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>🛡️</div>
              <h4>After Sales Support</h4>
              <p>Comprehensive warranty and maintenance support</p>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/pm-suryaghar">PM Suryaghar Subsidy</Link> |
          <Link href="/services/residential"> Home Solar Jaipur</Link> |
          <Link href="/finance"> Solar EMI Options</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "60px 0" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
              backgroundColor: "#E3F2FD",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ color: "#333" }}>What Our Customers Say</h2>
            <p>Real experiences from satisfied customers in Jaipur & Tonk</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            <div
              style={{
                padding: "30px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "15px",
                  color: "#666",
                }}
              >
                &quot;AY Solar Energy made the entire process so easy. From
                consultation to installation to subsidy approval, everything was
                handled professionally. My electricity bill has reduced
                significantly!&quot;
              </p>
              <div style={{ fontWeight: "600", color: "#0057B8" }}>
                Usha Bal
              </div>
              <div style={{ fontSize: "0.9rem", color: "#666" }}>
                Jaipur, Rajasthan
              </div>
            </div>
            <div
              style={{
                padding: "30px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "15px",
                  color: "#666",
                }}
              >
                &quot;I was skeptical about solar initially, but the team at AY
                Solar Energy explained everything clearly. The installation was
                quick and the quality is excellent. Highly recommended!&quot;
              </p>
              <div style={{ fontWeight: "600", color: "#0057B8" }}>
                Sunil Kumar
              </div>
              <div style={{ fontSize: "0.9rem", color: "#666" }}>
                Tonk, Rajasthan
              </div>
            </div>
            <div
              style={{
                padding: "30px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
              }}
            >
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "15px",
                  color: "#666",
                }}
              >
                &quot;Best decision I made for my home. The subsidy process was
                handled smoothly by AY Solar Energy. Now I&apos;m generating my
                own clean energy and saving money every month.&quot;
              </p>
              <div style={{ fontWeight: "600", color: "#0057B8" }}>
                Makbool Khatun
              </div>
              <div style={{ fontSize: "0.9rem", color: "#666" }}>
                Jaipur, Rajasthan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section style={{ padding: "60px 0", backgroundColor: "#F4F7FB" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
              backgroundColor: "#E3F2FD",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ color: "#333" }}>Ready to Go Solar?</h2>
            <p>Contact us today for a free consultation and quote</p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "40px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE?.replace(/\s/g, "")}`}
                style={{
                  color: "#0057B8",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                {process.env.NEXT_PUBLIC_PHONE}
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>
              <a
                href={process.env.NEXT_PUBLIC_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0057B8",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                WhatsApp Us
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                style={{
                  color: "#0057B8",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                {process.env.NEXT_PUBLIC_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Link to Projects Page */}
      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#F4F7FB",
          textAlign: "center",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
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
              View Our Completed Projects
            </h2>
          </div>
          <p
            style={{ marginBottom: "30px", fontSize: "1.1rem", color: "#666" }}
          >
            Explore 500+ successful solar installations across Rajasthan
          </p>
          <Link
            href="/projects"
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
            View All Projects →
          </Link>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section style={{ padding: "60px 0" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "40px",
              backgroundColor: "#E3F2FD",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <h2 style={{ color: "#333" }}>Our Brand Partners</h2>
            <p>We work with India's leading solar and inverter manufacturers</p>
          </div>

          <h3
            style={{
              textAlign: "center",
              margin: "2rem 0 1rem",
              color: "#0057B8",
              fontSize: "1.3rem",
            }}
          >
            Solar Panels
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "20px",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                padding: "20px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "600",
                color: "#333",
              }}
            >
              <Image
                src="/images/brands/adani-solar.PNG"
                alt="Solar panel installation in Jaipur - AY Solar Energy"
                width={150}
                height={60}
                style={{
                  maxWidth: "100%",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
              <div style={{ marginTop: "10px" }}>Adani Solar</div>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "600",
                color: "#333",
              }}
            >
              <Image
                src="/images/brands/tata-power-solar.PNG"
                alt="Solar panel installation in Jaipur - AY Solar Energy"
                width={150}
                height={60}
                style={{
                  maxWidth: "100%",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
              <div style={{ marginTop: "10px" }}>Tata Power Solar</div>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "600",
                color: "#333",
              }}
            >
              <Image
                src="/images/brands/vikram-solar.PNG"
                alt="Solar panel installation in Jaipur - AY Solar Energy"
                width={150}
                height={60}
                style={{
                  maxWidth: "100%",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
              <div style={{ marginTop: "10px" }}>Vikram Solar</div>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "600",
                color: "#333",
              }}
            >
              <Image
                src="/images/brands/rayzone-solar.PNG"
                alt="Solar panel installation in Jaipur - AY Solar Energy"
                width={150}
                height={60}
                style={{
                  maxWidth: "100%",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
              <div style={{ marginTop: "10px" }}>Rayzone Solar</div>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "600",
                color: "#333",
              }}
            >
              <Image
                src="/images/brands/waree-solar.PNG"
                alt="Solar panel installation in Jaipur - AY Solar Energy"
                width={150}
                height={60}
                style={{
                  maxWidth: "100%",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
              <div style={{ marginTop: "10px" }}>Waree Solar</div>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "600",
                color: "#333",
              }}
            >
              <Image
                src="/images/brands/luminous-solar.PNG"
                alt="Solar panel installation in Jaipur - AY Solar Energy"
                width={150}
                height={60}
                style={{
                  maxWidth: "100%",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
              <div style={{ marginTop: "10px" }}>Luminous Solar</div>
            </div>
          </div>

          <h3
            style={{
              textAlign: "center",
              margin: "2rem 0 1rem",
              color: "#0057B8",
              fontSize: "1.3rem",
            }}
          >
            Inverters
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                padding: "20px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "600",
                color: "#333",
              }}
            >
              <Image
                src="/images/brands/polycab.PNG"
                alt="Solar panel installation in Jaipur - AY Solar Energy"
                width={150}
                height={60}
                style={{
                  maxWidth: "100%",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
              <div style={{ marginTop: "10px" }}>Polycab</div>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "600",
                color: "#333",
              }}
            >
              <Image
                src="/images/brands/genus.PNG"
                alt="Solar panel installation in Jaipur - AY Solar Energy"
                width={150}
                height={60}
                style={{
                  maxWidth: "100%",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
              <div style={{ marginTop: "10px" }}>Genus</div>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "600",
                color: "#333",
              }}
            >
              <Image
                src="/images/brands/sungrow.PNG"
                alt="Solar panel installation in Jaipur - AY Solar Energy"
                width={150}
                height={60}
                style={{
                  maxWidth: "100%",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
              <div style={{ marginTop: "10px" }}>SunGrow</div>
            </div>
            <div
              style={{
                padding: "20px",
                backgroundColor: "#F4F7FB",
                borderRadius: "8px",
                textAlign: "center",
                fontWeight: "600",
                color: "#333",
              }}
            >
              <Image
                src="/images/brands/k-solar.PNG"
                alt="Solar panel installation in Jaipur - AY Solar Energy"
                width={150}
                height={60}
                style={{
                  maxWidth: "100%",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
              <div style={{ marginTop: "10px" }}>K Solar</div>
            </div>
          </div>
        </div>
      </section>

<section
      style={{
        padding: "60px 20px",
        backgroundColor: "#F4F7FB",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        Frequently Asked Questions
      </h2>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "15px",
              borderRadius: "10px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              cursor: "pointer",
            }}
            onClick={() => toggleFAQ(index)}
          >
            <div
              style={{
                padding: "18px 20px",
                fontWeight: "600",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>

            {activeIndex === index && (
              <div
                style={{
                  padding: "15px 20px",
                  borderTop: "1px solid #eee",
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

const styles = {
  section: {
    padding: "60px 0",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  sectionTitle: {
    textAlign: "center",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  highlightBanner: {
    backgroundColor: "var(--primary-blue)",
    color: "white",
    padding: "40px",
    borderRadius: "8px",
    textAlign: "center",
  },
  infoStrip: {
    backgroundColor: "#FFF3CD",
    color: "#856404",
    padding: "20px",
    textAlign: "center",
    borderLeft: "4px solid var(--accent-gold)",
  },
  badge: {
    textAlign: "center",
    padding: "30px 20px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  badgeIcon: {
    fontSize: "2.5rem",
    marginBottom: "15px",
  },
  brandCategory: {
    textAlign: "center",
    margin: "2rem 0 1rem",
    color: "var(--primary-blue)",
    fontSize: "1.3rem",
  },
  brandsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    marginBottom: "40px",
  },
  brandLogo: {
    padding: "20px",
    backgroundColor: "#F4F7FB",
    borderRadius: "8px",
    textAlign: "center",
    fontWeight: "600",
    color: "var(--text-dark)",
  },
  testimonialCard: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  testimonialText: {
    fontStyle: "italic",
    marginBottom: "15px",
    color: "var(--text-light)",
    lineHeight: "1.6",
  },
  testimonialAuthor: {
    fontWeight: "600",
    color: "var(--primary-blue)",
    marginBottom: "5px",
  },
  testimonialLocation: {
    fontSize: "0.9rem",
    color: "var(--text-light)",
  },
  contactInfo: {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  contactItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  btnLink: {
    backgroundColor: "var(--accent-gold)",
    color: "var(--text-dark)",
    padding: "12px 30px",
    borderRadius: "4px",
    fontWeight: "600",
    display: "inline-block",
    textDecoration: "none",
    transition: "all 0.3s ease",
  },
  subsidy: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "var(--primary-blue)",
  },
};
