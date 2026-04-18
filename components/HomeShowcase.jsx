'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomeShowcase() {
  const [activePanel, setActivePanel] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoSwitchTimerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-switch panels every 5 seconds (works on both mobile and desktop)
  useEffect(() => {
    const startAutoSwitch = () => {
      autoSwitchTimerRef.current = setInterval(() => {
        setActivePanel((prev) => (prev + 1) % 3);
      }, 5000);
    };

    startAutoSwitch();

    return () => {
      if (autoSwitchTimerRef.current) {
        clearInterval(autoSwitchTimerRef.current);
      }
    };
  }, []);

  const handleDotClick = (index) => {
    setActivePanel(index);
    // Reset auto-switch timer on manual click
    if (autoSwitchTimerRef.current) {
      clearInterval(autoSwitchTimerRef.current);
    }
    autoSwitchTimerRef.current = setInterval(() => {
      setActivePanel((prev) => (prev + 1) % 3);
    }, 5000);
  };

  // SVG Icons
  const SunIcon = () => (
    <svg viewBox="0 0 100 100" style={{ width: '80px', height: '80px', animation: 'spin 20s linear infinite' }}>
      <circle cx="50" cy="50" r="30" fill="#FFC107" />
      <g stroke="#FFC107" strokeWidth="4" strokeLinecap="round">
        <line x1="50" y1="5" x2="50" y2="15" />
        <line x1="50" y1="85" x2="50" y2="95" />
        <line x1="5" y1="50" x2="15" y2="50" />
        <line x1="85" y1="50" x2="95" y2="50" />
        <line x1="15" y1="15" x2="22" y2="22" />
        <line x1="78" y1="78" x2="85" y2="85" />
        <line x1="85" y1="15" x2="78" y2="22" />
        <line x1="22" y1="78" x2="15" y2="85" />
      </g>
    </svg>
  );

  const HouseIcon = () => (
    <svg viewBox="0 0 200 200" style={{ width: '140px', height: '140px' }}>
      {/* House body */}
      <rect x="40" y="80" width="120" height="100" fill="#E3F2FD" stroke="#0057B8" strokeWidth="2" />
      {/* Roof */}
      <polygon points="40,80 100,20 160,80" fill="#0057B8" stroke="#0057B8" strokeWidth="2" />
      {/* Door */}
      <rect x="85" y="120" width="30" height="60" fill="#8B4513" stroke="#654321" strokeWidth="1" />
      {/* Solar panels on roof */}
      <rect x="60" y="35" width="15" height="20" fill="#1976D2" stroke="#0057B8" strokeWidth="1" />
      <rect x="80" y="35" width="15" height="20" fill="#1976D2" stroke="#0057B8" strokeWidth="1" />
      <rect x="100" y="35" width="15" height="20" fill="#1976D2" stroke="#0057B8" strokeWidth="1" />
      <rect x="120" y="35" width="15" height="20" fill="#1976D2" stroke="#0057B8" strokeWidth="1" />
      {/* Sun rays */}
      <g stroke="#FFC107" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <line x1="100" y1="0" x2="100" y2="10" />
        <line x1="130" y1="10" x2="122" y2="18" />
        <line x1="140" y1="30" x2="132" y2="32" />
      </g>
    </svg>
  );

  const FarmIcon = () => (
    <svg viewBox="0 0 200 200" style={{ width: '140px', height: '140px' }}>
      {/* Sun */}
      <circle cx="160" cy="30" r="20" fill="#FFC107" />
      {/* Solar panels */}
      <rect x="20" y="40" width="50" height="40" fill="#1976D2" stroke="#0057B8" strokeWidth="2" />
      <line x1="30" y1="40" x2="30" y2="80" stroke="#0057B8" strokeWidth="1" />
      <line x1="40" y1="40" x2="40" y2="80" stroke="#0057B8" strokeWidth="1" />
      <line x1="50" y1="40" x2="50" y2="80" stroke="#0057B8" strokeWidth="1" />
      <line x1="60" y1="40" x2="60" y2="80" stroke="#0057B8" strokeWidth="1" />
      {/* Pump */}
      <rect x="85" y="100" width="15" height="30" fill="#666" stroke="#333" strokeWidth="1" />
      <circle cx="92.5" cy="95" r="8" fill="#999" />
      {/* Water flow */}
      <path d="M 92.5 130 Q 100 140 92.5 150" stroke="#0099FF" strokeWidth="3" fill="none" strokeDasharray="5,5" style={{ animation: 'flow 2s linear infinite' }} />
      {/* Field */}
      <rect x="20" y="150" width="160" height="40" fill="#90EE90" stroke="#228B22" strokeWidth="2" />
      <line x1="30" y1="150" x2="30" y2="190" stroke="#228B22" strokeWidth="1" opacity="0.5" />
      <line x1="50" y1="150" x2="50" y2="190" stroke="#228B22" strokeWidth="1" opacity="0.5" />
      <line x1="70" y1="150" x2="70" y2="190" stroke="#228B22" strokeWidth="1" opacity="0.5" />
      <line x1="90" y1="150" x2="90" y2="190" stroke="#228B22" strokeWidth="1" opacity="0.5" />
      <line x1="110" y1="150" x2="110" y2="190" stroke="#228B22" strokeWidth="1" opacity="0.5" />
      <line x1="130" y1="150" x2="130" y2="190" stroke="#228B22" strokeWidth="1" opacity="0.5" />
      <line x1="150" y1="150" x2="150" y2="190" stroke="#228B22" strokeWidth="1" opacity="0.5" />
      <line x1="170" y1="150" x2="170" y2="190" stroke="#228B22" strokeWidth="1" opacity="0.5" />
    </svg>
  );

  const StatCard = ({ value, label }) => (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      padding: '12px 16px',
      borderRadius: '8px',
      textAlign: 'center',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      minWidth: '100px'
    }}>
      <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#FFC107', marginBottom: '3px' }}>
        {value}
      </div>
      <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.9)' }}>
        {label}
      </div>
    </div>
  );

  const panelData = [
    {
      badge: "Government Scheme 2024",
      heading: "PM Suryaghar Muft Bijli Yojana",
      subheading: "300 Units FREE Electricity Every Month",
      description: "India's biggest rooftop solar scheme. Get up to ₹78,000 central subsidy + additional Rajasthan state subsidy. AY Solar Energy is your authorized installer in Jaipur & Tonk.",
      features: [
        '1 kW → ₹30,000',
        '2 kW → ₹60,000',
        '3 kW+ → ₹78,000'
      ],
      cta1: {
        label: 'Apply Now',
        href: '/pm-suryaghar',
        color: '#FFC107',
        textColor: '#333'
      },
      cta2: {
        label: 'Check Eligibility',
        href: '/contact',
        color: '#0057B8'
      },
      visual: (
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <SunIcon />
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            width: '100%',
            maxWidth: '240px'
          }}>
            <StatCard value="₹78,000" label="Max Subsidy" />
            <StatCard value="300 Units" label="Free per Month" />
            <StatCard value="1 Crore" label="Homes Targeted" />
            <StatCard value="25 Years" label="System Life" />
          </div>
        </div>
      ),
      bgColor: "#003A8C"
    },
    {
      badge: "Most Popular",
      heading: "Home Rooftop Solar Installation",
      subheading: "Cut Your Electricity Bill by 90%",
      description: "Install a 1kW–10kW rooftop solar system on your home in Jaipur, Tonk or nearby Rajasthan district. With 300+ sunny days in Rajasthan, solar pays for itself in 3–4 years.",
      features: [
        'MNRE approved panels & inverters',
        'Net metering — sell surplus to grid',
        '5-year installation warranty',
        'Complete subsidy paperwork handled',
        'Installation in 3–7 working days'
      ],
      cta1: {
        label: 'Get Free Quote',
        href: '/contact',
        color: '#0057B8',
        textColor: '#fff',
        trust: '500+ installations across Rajasthan'
      },
      visual: (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <HouseIcon />
        </div>
      ),
      bgColor: "#E3F2FD"
    },
    {
      badge: "For Farmers — किसानों के लिए",
      heading: "PM Kusum Yojana",
      subheading: "Solar Pumps for Rajasthan Farmers",
      description: "Replace diesel pumps with solar water pumps. Up to 90% government subsidy under PM KUSUM scheme. Farmer pays only 10%. Save ₹8,000–₹15,000 every month on irrigation costs.",
      features: [
        '90% Subsidy — Government pays',
        'Zero Diesel — Free solar irrigation',
        'Extra Income — Sell surplus power',
        '3HP–10HP — All pump sizes'
      ],
      cta1: {
        label: 'Apply for Solar Pump',
        href: '/kusum-yojana',
        color: '#2E7D32',
        textColor: '#fff'
      },
      cta2: {
        label: 'Available Districts',
        href: '/contact',
        color: '#2E7D32'
      },
      visual: (
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <FarmIcon />
          <div style={{
            fontSize: '1.8rem',
            fontWeight: '700',
            color: '#fff',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            सौर ऊर्जा से सिंचाई
          </div>
          <div style={{
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center'
          }}>
            Tonk • Jaipur • Dausa • Bundi • Sawai Madhopur
          </div>
        </div>
      ),
      bgColor: "#8BC34A"
    }
  ];

  const currentPanel = panelData[activePanel];

  return (
    <>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes flow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -10; }
        }
        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>

      <div style={{ position: 'relative' }}>
        {/* Carousel Container - Fit in Window */}
        <div style={{
          height: isMobile ? 'auto' : 'calc(100vh - 260px)',
          display: 'flex',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          alignItems: 'stretch',
          backgroundColor: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Right Visual */}
          <div style={{
            flex: isMobile ? '0 0 220px' : '1',
            backgroundColor: currentPanel.bgColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '20px' : '25px',
            height: isMobile ? '220px' : 'calc(100vh - 260px)',
            animation: 'fadeSlide 0.5s ease-out'
          }}>
            <div style={{ transform: isMobile ? 'scale(0.85)' : 'scale(0.75)' }}>
              {currentPanel.visual}
            </div>
          </div>

          {/* Left Content */}
          <div style={{
            flex: isMobile ? '1' : '1',
            padding: isMobile ? '20px 15px' : '25px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            height: isMobile ? 'auto' : 'calc(100vh - 360px)',
            overflow: 'hidden',
            animation: 'fadeSlide 0.5s ease-out'
          }}>
            <div style={{ maxWidth: '420px' }}>
              {/* Badge */}
              <div style={{
                display: 'inline-block',
                backgroundColor: '#F0F0F0',
                color: '#666',
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '0.65rem',
                fontWeight: '600',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {currentPanel.badge}
              </div>

              {/* Heading */}
              <h2 style={{
                fontSize: isMobile ? '1.3rem' : '1.55rem',
                fontWeight: '700',
                color: '#003A8C',
                marginBottom: '4px',
                lineHeight: '1.1'
              }}>
                {currentPanel.heading}
              </h2>

              {/* Subheading */}
              <h3 style={{
                fontSize: isMobile ? '0.85rem' : '0.98rem',
                fontWeight: '600',
                color: '#0057B8',
                marginBottom: '10px'
              }}>
                {currentPanel.subheading}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '0.8rem',
                color: '#555',
                lineHeight: '1.35',
                marginBottom: '10px'
              }}>
                {currentPanel.description}
              </p>

              {/* Features */}
              {currentPanel.features && (
                <div style={{ marginBottom: '10px' }}>
                  {currentPanel.features.map((feature, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '4px',
                      fontSize: '0.75rem',
                      color: '#333'
                    }}>
                      <span style={{ color: '#2E7D32', fontWeight: '700', marginRight: '5px', marginTop: '0px', flexShrink: 0 }}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div style={{
                display: 'flex',
                gap: '6px',
                flexWrap: 'wrap',
                marginBottom: '0px'
              }}>
                {currentPanel.cta1 && (
                  <Link href={currentPanel.cta1.href} style={{
                    backgroundColor: currentPanel.cta1.color || '#FFC107',
                    color: currentPanel.cta1.textColor || '#333',
                    padding: '7px 14px',
                    borderRadius: '4px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    fontSize: '0.74rem'
                  }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-1px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                    {currentPanel.cta1.label}
                  </Link>
                )}
                {currentPanel.cta2 && (
                  <Link href={currentPanel.cta2.href} style={{
                    backgroundColor: 'transparent',
                    color: currentPanel.cta2.color || '#0057B8',
                    padding: '7px 14px',
                    borderRadius: '4px',
                    fontWeight: '600',
                    textDecoration: 'none',
                    border: `1.5px solid ${currentPanel.cta2.color || '#0057B8'}`,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                    fontSize: '0.74rem'
                  }} onMouseEnter={(e) => {
                    e.target.style.backgroundColor = currentPanel.cta2.color || '#0057B8';
                    e.target.style.color = 'white';
                  }} onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = currentPanel.cta2.color || '#0057B8';
                  }}>
                    {currentPanel.cta2.label}
                  </Link>
                )}
              </div>

              {/* Trust line */}
              {currentPanel.cta1.trust && (
                <p style={{ fontSize: '0.7rem', color: '#999', fontStyle: 'italic', marginTop: '5px' }}>
                  {currentPanel.cta1.trust}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div style={{
          position: 'relative',
          padding: isMobile ? '12px 0' : '15px 0',
          display: 'flex',
          flexDirection: 'row',
          gap: '15px',
          justifyContent: 'center',
          backgroundColor: '#f9f9f9',
          borderTop: '1px solid #eee'
        }}>
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              style={{
                width: activePanel === i ? (isMobile ? '12px' : '14px') : (isMobile ? '8px' : '10px'),
                height: activePanel === i ? (isMobile ? '12px' : '14px') : (isMobile ? '8px' : '10px'),
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: i === 0 || i === 1 ? '#0057B8' : '#2E7D32',
                opacity: activePanel === i ? 1 : 0.5,
                transition: 'all 0.3s ease',
                boxShadow: activePanel === i ? '0 0 10px rgba(0, 87, 184, 0.5)' : 'none'
              }}
              aria-label={`Go to panel ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
