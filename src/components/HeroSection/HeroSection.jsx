import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Compass, Award, Users, Layers, Globe } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon';

const WHATSAPP = '923001234567';

const slides = [
  {
    id: 1,
    badge: 'Trusted Travel & Tourism Experts',
    title: 'Your Trusted Partner in',
    highlight: 'Travel & Tourism',
    description: 'Kazmi Paradise Travel & Tours offers comprehensive travel solutions — Umrah packages, visa services, hotel allotments and powerful B2B portals.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=80'
  },
  {
    id: 2,
    badge: "Pakistan's #1 B2B Umrah Portal",
    title: 'Direct Saudi Allotments &',
    highlight: 'Umrah & Hajj Portals',
    description: 'Direct Saudi Ministry authorization, instant BRN generation, VIP hotel rooms in Makkah & Madinah, and group seat allotments.',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?w=1920&q=80'
  },
  {
    id: 3,
    badge: 'National B2B Wholesaler of the Year',
    title: 'Luxury Corporate Travel &',
    highlight: 'Corporate Wholesaler',
    description: 'Tailored corporate travel management, group flight seat contracts, luxury concierge services, and 24/7 dedicated support.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80'
  },
  {
    id: 4,
    badge: 'Powerful Sub-Agent Engine',
    title: 'Next-Gen AI Powered',
    highlight: 'AI Travel Ecosystem',
    description: 'Empowering 500+ travel agencies across Pakistan with real-time flight API synchronization, instant wallet credit, and automated ticketing.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fast & Energetic auto-play slideshow loop every 2.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const stats = [
    { value: '10+', label: 'Years Experience', icon: Award },
    { value: '500+', label: 'Happy Clients', icon: Users },
    { value: '6', label: 'Travel Portals', icon: Layers },
    { value: '100+', label: 'B2B Partners', icon: Globe },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden w-full"
      style={{ background: 'linear-gradient(135deg,#071420 0%,#0f2438 40%,#1a3c5e 80%,#071420 100%)' }}
    >
      {/* Fast & Smooth Background Image Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.65, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${slides[currentSlide].image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071420]/95 via-[#0f2438]/75 to-[#071420]/30" />

      {/* Dot Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

      {/* Ambient Glow Orbs */}
      <div className="absolute right-10 top-1/4 w-[450px] h-[450px] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 text-left">
        <div className="max-w-[720px] flex flex-col items-start text-left min-h-[420px] justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(2px)' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent-light px-3.5 py-1.5 rounded-full text-[0.7rem] sm:text-xs font-bold tracking-widest uppercase mb-5 sm:mb-6 backdrop-blur-md self-start shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-accent-light animate-pulse" />
                {slides[currentSlide].badge}
              </div>

              {/* Heading */}
              <h1
                className="font-heading font-extrabold text-white leading-[1.14] mb-4 sm:mb-5 text-left drop-shadow-lg"
                style={{ fontSize: 'clamp(2.1rem, 5.2vw, 3.8rem)' }}
              >
                {slides[currentSlide].title}{' '}
                <span className="text-gold-gradient block sm:inline">
                  {slides[currentSlide].highlight}
                </span>
              </h1>

              {/* Description */}
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-7 sm:mb-9 max-w-[620px] text-left drop-shadow font-medium">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-3.5 mb-8 sm:mb-10 w-full max-w-[580px]">
            <button
              onClick={() => scrollTo('services')}
              className="btn-primary group shadow-2xl justify-center"
            >
              <Compass className="w-4 h-4" />
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp shadow-2xl justify-center flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" fill="white" />
              WhatsApp Us
            </a>
            <button onClick={() => scrollTo('packages')} className="btn-outline backdrop-blur-md bg-black/20 border-white/40 justify-center">
              Explore Packages
            </button>
          </div>

          {/* Slide Aesthetic Pill Indicators */}
          <div className="flex items-center gap-2.5 mb-8">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentSlide === idx
                    ? 'w-10 bg-gradient-to-r from-emerald-400 to-teal-300 shadow-[0_0_12px_rgba(37,211,102,0.6)]'
                    : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Stats Glass Bar */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 sm:gap-y-0 divide-x-0 sm:divide-x divide-white/10 rounded-2xl overflow-hidden w-full max-w-[580px] shadow-2xl p-3 sm:p-0"
            style={{ background: 'rgba(7,20,32,0.80)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.18)' }}
          >
            {stats.map((s) => {
              const IconComponent = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center py-3.5 px-2 text-center group">
                  <IconComponent className="w-4 h-4 text-accent-light/90 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="font-heading text-accent-light font-extrabold text-xl sm:text-2xl leading-none">{s.value}</span>
                  <span className="text-white/80 text-[0.62rem] uppercase tracking-widest mt-1 font-medium">{s.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-10"
        onClick={() => scrollTo('about')}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce-dot" />
        <span className="text-white text-[0.65rem] uppercase tracking-[0.15em] font-semibold">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
