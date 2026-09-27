import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Compass, Award, Users, Layers, Globe } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon';

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
      className="relative min-h-screen flex items-center overflow-hidden w-full"
      style={{ background: 'linear-gradient(135deg,#071420 0%,#0f2438 40%,#1a3c5e 80%,#071420 100%)' }}
    >
      {/* Background image overlay - High Visibility (65% Opacity) */}
      <div
        className="absolute inset-0 opacity-65 transition-all duration-700"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Lightened Dark Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071420]/85 via-[#0f2438]/60 to-[#071420]/20" />

      {/* Dot pattern */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

      {/* Floating blobs - strictly contained */}
      <div className="absolute right-0 top-[-100px] w-[400px] h-[400px] rounded-full opacity-[0.08] animate-float pointer-events-none overflow-hidden"
        style={{ background: 'radial-gradient(circle,#c8973a,transparent)' }} />
      <div className="absolute left-0 bottom-[-80px] w-[300px] h-[300px] rounded-full opacity-[0.06] animate-float-slow pointer-events-none overflow-hidden"
        style={{ background: 'radial-gradient(circle,#245280,transparent)' }} />

      {/* CONTENT - STRICTLY LEFT ALIGNED & FULLY RESPONSIVE */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20 text-left">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[700px] flex flex-col items-start text-left"
        >
          {/* Badge */}
          <motion.div variants={item}
            className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent-light px-3.5 py-1.5 rounded-full text-[0.7rem] sm:text-xs font-bold tracking-widest uppercase mb-5 sm:mb-6 backdrop-blur-md self-start shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-light animate-pulse" />
            Trusted Travel &amp; Tourism Experts
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={item}
            className="font-heading font-extrabold text-white leading-[1.14] mb-4 sm:mb-5 text-left drop-shadow-lg"
            style={{ fontSize: 'clamp(2.1rem, 5.2vw, 4.1rem)' }}
          >
            Your Trusted Partner in{' '}
            <span className="text-gold-gradient">Travel &amp; Tourism</span>
          </motion.h1>

          {/* Description - Justified on Tablet/Desktop, Clean on Mobile */}
          <motion.p variants={item}
            className="text-white text-base sm:text-lg leading-relaxed mb-7 sm:mb-9 max-w-[580px] text-left sm:text-justify drop-shadow font-medium"
          >
            Kazmi Paradise Travel &amp; Tours offers comprehensive travel solutions — Umrah packages,
            visa services, hotel allotments and powerful B2B portals. Let us make your journey unforgettable.
          </motion.p>

          {/* Buttons - Clean Responsive Flex */}
          <motion.div variants={item} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-3.5 mb-10 sm:mb-14 w-full max-w-[580px]">
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
          </motion.div>

          {/* Stats glass bar - 100% No Overlap Responsive Grid */}
          <motion.div
            variants={item}
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
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
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
