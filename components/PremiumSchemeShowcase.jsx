'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/PremiumSchemeShowcase.module.css';

const SLIDES = [
  {
    id: 'rent',
    title: 'Rent A Roof',
    subtitle: 'Solar without your own rooftop',
    description:
      'Virtual and Group Net Metering in Rajasthan. Use solar credits from another site, list your roof for income, or join early access.',
    image: '/images/Rent-a-roof.jpeg',
    badge: 'Coming Soon',
    cta1: { label: 'Join Waitlist', href: '/rent-a-roof#waitlist', variant: 'primary' },
    cta2: { label: 'Learn More', href: '/rent-a-roof', variant: 'secondary' },
    color: '#0057B8',
    theme: 'rent',
  },
  {
    id: 'suryaghar',
    title: 'PM Suryaghar',
    subtitle: '₹78,000 Government Subsidy',
    description:
      "India's biggest rooftop solar scheme. Get up to ₹78,000 in central subsidy plus state benefits. Approved installer in Jaipur and Tonk.",
    image: '/images/PM-Suryaghar.jpeg',
    badge: 'Government Scheme',
    cta1: { label: 'Apply Now', href: '/pm-suryaghar', variant: 'primary' },
    cta2: { label: 'Check Eligibility', href: '/contact', variant: 'secondary' },
    color: '#1976D2',
    theme: 'suryaghar',
  },
  {
    id: 'kusum',
    title: 'PM Kusum Yojana',
    subtitle: 'Solar Pumps for Farmers',
    description:
      'Replace diesel pumps with solar irrigation. Get up to 90% subsidy and save ₹8,000–₹15,000 monthly in Tonk, Jaipur and beyond.',
    image: '/images/PM-Kusum.jpeg',
    badge: 'For Farmers',
    cta1: { label: 'Apply for Pump', href: '/services/kusum', variant: 'primary' },
    cta2: { label: 'View Districts', href: '/contact', variant: 'secondary' },
    color: '#2e7d32',
    theme: 'kusum',
  },
  {
    id: 'resco',
    title: 'C&I RESCO Solar',
    subtitle: 'Zero Upfront Investment',
    description:
      'We install, own, and maintain your solar plant. Pay only for clean electricity at rates 20–40% lower than the grid.',
    image: '/images/Resco.jpeg',
    badge: 'Zero CAPEX',
    cta1: { label: 'Explore RESCO', href: '/services/commercial', variant: 'primary' },
    cta2: { label: 'Get Quote', href: '/contact', variant: 'secondary' },
    color: '#5d4037',
    theme: 'resco',
  },
];

const contentVariants = {
  enter: { opacity: 0, x: -32 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 32 },
};

export default function PremiumSchemeShowcase({ embedded = false }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
      setAnimKey((prev) => prev + 1);
    }, 5500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrent(index);
    setAnimKey((prev) => prev + 1);
    setIsPaused(true);
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const nextSlide = () => goToSlide((current + 1) % SLIDES.length);
  const prevSlide = () => goToSlide((current - 1 + SLIDES.length) % SLIDES.length);

  const slide = SLIDES[current];

  return (
    <section
      className={`${styles.showcase} ${embedded ? styles.embedded : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Solar schemes showcase"
    >
      <div className={styles.sliderWrapper}>

        {/* ── Background Image with Ken Burns ── */}
        <div className={styles.imageLayer} key={animKey}>
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            quality={90}
            className={styles.image}
            sizes="100vw"
          />
        </div>

        {/* ── Gradient Overlay ── */}
        <div className={styles.gradientOverlay} />

        {/* ── Slide Content ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={styles.contentLeft}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.contentInner}>
              <span className={styles.badge}>{slide.badge}</span>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
              <p className={styles.slideSubtitle}>{slide.subtitle}</p>
              <p className={styles.slideDescription}>{slide.description}</p>
              <div className={styles.ctaContainer}>
                <Link href={slide.cta1.href} className={`${styles.btn} ${styles.btnPrimary}`}>
                  {slide.cta1.label}
                </Link>
                <Link href={slide.cta2.href} className={`${styles.btn} ${styles.btnSecondary}`}>
                  {slide.cta2.label}
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Prev Arrow ── */}
        <button
          onClick={prevSlide}
          className={`${styles.navButton} ${styles.navLeft}`}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* ── Next Arrow ── */}
        <button
          onClick={nextSlide}
          className={`${styles.navButton} ${styles.navRight}`}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* ── Bottom Bar: Dots + Counter + Progress ── */}
        <div className={styles.bottomBar}>
          {/* Dots */}
          <div className={styles.dots}>
            {SLIDES.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`${styles.dot} ${index === current ? styles.dotActive : ''}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === current ? 'true' : undefined}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className={styles.counter}>
            <span className={styles.counterCurrent}>{String(current + 1).padStart(2, '0')}</span>
            <span className={styles.counterSep}>/</span>
            <span className={styles.counterTotal}>{String(SLIDES.length).padStart(2, '0')}</span>
          </div>
        </div>

        {/* ── Progress Bar ── */}
        <div className={styles.progressBar}>
          <motion.div
            className={styles.progressFill}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            key={`progress-${current}-${animKey}`}
            transition={{ duration: 5.5, ease: 'linear' }}
            style={{ '--accent-color': slide.color }}
          />
        </div>

        {/* ── Accent Bar ── */}
        <div
          className={styles.accentBar}
          style={{ '--accent-color': slide.color }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}