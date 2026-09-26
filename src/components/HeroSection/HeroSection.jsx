import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, MessageSquare, Compass, Award, Users, Layers, Globe } from 'lucide-react';

const WHATSAPP = '923001234567';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } };

const HeroSection = () => {
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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#071420 0%,#0f2438 40%,#1a3c5e 80%,#071420 100%)' }}
    >
      {/* Background image overlay - Increased Visibility (65% Opacity) */}
      <div
        className="absolute inset-0 opacity-65 transition-all duration-700 scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Lightened Dark Gradient overlay for 100% photo clarity */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071420]/85 via-[#0f2438]/60 to-[#071420]/20" />

      {/* Dot pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20" />

      {/* Floating blobs */}
      <div className="absolute right-[-80px] top-[-100px] w-[500px] h-[500px] rounded-full opacity-[0.08] animate-float"
        style={{ background: 'radial-gradient(circle,#c8973a,transparent)' }} />
      <div className="absolute left-[-60px] bottom-[-80px] w-[350px] h-[350px] rounded-full opacity-[0.06] animate-float-slow"
        style={{ background: 'radial-gradient(circle,#245280,transparent)' }} />

      {/* CONTENT - STRICTLY LEFT ALIGNED */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 pt-32 pb-20 text-left">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[700px] flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div variants={item}
            className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent-light px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md self-start shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-light animate-pulse" />
            Trusted Travel &amp; Tourism Experts
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={item}
            className="font-heading font-extrabold text-white leading-[1.12] mb-5 text-left drop-shadow-lg"
            style={{ fontSize: 'clamp(2.3rem,5.2vw,4.1rem)' }}
          >
            Your Trusted Partner in{' '}
            <span className="text-gold-gradient">Travel &amp; Tourism</span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={item}
            className="text-white text-lg leading-relaxed mb-9 max-w-[580px] text-left drop-shadow font-medium"
          >
            Kazmi Paradise Travel &amp; Tours offers comprehensive travel solutions — Umrah packages,
            visa services, hotel allotments and powerful B2B portals. Let us make your journey unforgettable.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="flex flex-wrap items-center justify-start gap-3.5 mb-14 w-full">
            <button
              onClick={() => scrollTo('services')}
              className="btn-primary group shadow-2xl"
            >
              <Compass className="w-4 h-4" />
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp shadow-2xl"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              WhatsApp Us
            </a>
            <button onClick={() => scrollTo('packages')} className="btn-outline backdrop-blur-md bg-black/20 border-white/40">
              Explore Packages
            </button>
          </motion.div>

          {/* Stats glass bar */}
          <motion.div
            variants={item}
            className="grid grid-cols-4 divide-x divide-white/10 rounded-2xl overflow-hidden w-full max-w-[580px] shadow-2xl"
            style={{ background: 'rgba(7,20,32,0.65)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.18)' }}
          >
            {stats.map((s) => {
              const IconComponent = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center py-4 px-2 text-center group">
                  <IconComponent className="w-4 h-4 text-accent-light/80 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="font-heading text-accent-light font-extrabold text-2xl leading-none">{s.value}</span>
                  <span className="text-white/70 text-[0.63rem] uppercase tracking-widest mt-1 font-medium">{s.label}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-10"
        onClick={() => scrollTo('about')}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce-dot" />
        <span className="text-white text-[0.65rem] uppercase tracking-[0.15em] font-semibold">Scroll</span>
      </div>
    </section>
  );
};

export default HeroSection;
