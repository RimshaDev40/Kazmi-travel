import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, Menu, X,
  Sparkles, Layers, ArrowRight, CheckCircle2
} from 'lucide-react';
import { services } from '../../data/services';
import WhatsAppIcon from '../common/WhatsAppIcon';

const WHATSAPP = '923211155050';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMenuOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    if (id === 'home') {
      if (!isHome) {
        window.location.href = '/';
        return;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMenuOpen(false);
      return;
    }
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home',           action: () => scrollTo('home') },
    { label: 'About Us',       action: () => scrollTo('about') },
    { label: 'Vision & Mission', action: () => scrollTo('vision') },
    { label: 'Destinations',   action: () => scrollTo('destinations') },
    { label: 'Packages',       action: () => scrollTo('packages') },
    { label: 'Our Portals',    action: () => scrollTo('portals') },
    { label: 'Contact',        action: () => scrollTo('contact') },
  ];

  return (
    <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[98%] max-w-[1450px] z-[1000] transition-all duration-300">
      <nav
        className={`w-full rounded-full transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-[#071420]/95 backdrop-blur-2xl border border-accent/40 shadow-[0_25px_60px_rgba(0,0,0,0.85)] py-2.5 px-4 sm:px-6'
            : 'bg-[#071420]/80 backdrop-blur-xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.6)] py-3 px-4 sm:px-6'
        }`}
      >
        <div className="w-full flex items-center justify-between gap-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src="/logo.jpeg"
              alt="Kazmi Paradise Travel & Tours Logo"
              className="w-11 h-11 object-cover rounded-xl border border-accent/40 shadow-glow-gold group-hover:scale-105 transition-transform duration-300"
            />
            <div className="leading-tight">
              <span className="block font-heading text-lg font-extrabold text-white tracking-tight group-hover:text-accent-light transition-colors whitespace-nowrap">
                Kazmi Paradise
              </span>
              <span className="block text-[0.6rem] text-accent-light font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                Travel &amp; Tours
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden xl:flex items-center gap-1">
            {navLinks.map(({ label, action }) => (
              <li key={label} className="shrink-0">
                <button
                  onClick={action}
                  className="text-white/85 text-sm font-medium px-3 py-1.5 rounded-lg hover:text-accent-light hover:bg-white/10 transition-all duration-200 whitespace-nowrap"
                >
                  {label}
                </button>
              </li>
            ))}

            {/* Services dropdown */}
            <li
              className="relative shrink-0"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-white/85 text-sm font-medium px-3.5 py-1.5 rounded-lg hover:text-accent-light hover:bg-white/10 transition-all duration-200 whitespace-nowrap">
                <Layers className="w-4 h-4 text-accent-light" />
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, rotateX: -10, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, rotateX: -6, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: "top right", transformStyle: "preserve-3d" }}
                    className="absolute top-full right-0 lg:right-[-40px] xl:right-0 mt-3 w-[740px] max-w-[92vw] bg-[#0c1e2e] rounded-2xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] p-5 z-50 border border-accent/40"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                        <span className="text-xs text-amber-400 font-extrabold uppercase tracking-wider">
                          Kazmi Paradise Travel Portals &amp; Services
                        </span>
                      </div>
                      <span className="text-[0.65rem] text-white/70 uppercase tracking-wider font-semibold bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
                        6 Portals
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3.5">
                      {services.map((s, idx) => {
                        const isActive = location.pathname === s.route || location.pathname === s.route + '/';

                        return (
                          <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 15, scale: 0.93 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.04, ease: "easeOut" }}
                          >
                            <Link
                              to={s.route}
                              onClick={() => setServicesOpen(false)}
                              className={`group relative flex flex-col rounded-xl overflow-hidden shadow-lg transition-all duration-300 h-full ${
                                isActive
                                  ? 'bg-[#1a3854] border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.45)] ring-2 ring-amber-400/30 -translate-y-1'
                                  : 'bg-[#12283c] border border-white/15 hover:border-accent/80 hover:bg-[#18344d] hover:-translate-y-1.5 hover:shadow-[0_12px_28px_rgba(200,151,58,0.35)]'
                              }`}
                            >
                              {/* Image Preview with Hover Zoom */}
                              <div className="relative h-24 w-full overflow-hidden bg-black/60 shrink-0">
                                <img
                                  src={s.image}
                                  alt={s.title}
                                  className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
                                    isActive ? 'scale-105' : 'group-hover:scale-110'
                                  }`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#12283c] via-black/20 to-transparent" />
                                <span className={`absolute top-2 left-2 text-base p-1 rounded-lg backdrop-blur-md border shadow-md ${
                                  isActive ? 'bg-amber-400/30 border-amber-400' : 'bg-black/75 border-white/20'
                                }`}>
                                  {s.icon}
                                </span>
                              </div>

                              {/* Card Content */}
                              <div className={`p-3 flex-1 flex flex-col justify-between transition-colors ${
                                isActive ? 'bg-[#1a3854]' : 'bg-[#12283c] group-hover:bg-[#18344d]'
                              }`}>
                                <div>
                                  <h5 className={`text-xs font-bold line-clamp-1 mb-1 transition-colors ${
                                    isActive ? 'text-amber-400 font-extrabold' : 'text-white group-hover:text-accent-light'
                                  }`}>
                                    {s.title}
                                  </h5>
                                  <p className="text-[0.65rem] text-gray-300 line-clamp-2 leading-relaxed font-medium">
                                    {s.description}
                                  </p>
                                </div>

                                <div className={`mt-2.5 pt-2 border-t flex items-center justify-between text-[0.65rem] font-extrabold ${
                                  isActive
                                    ? 'border-amber-400/30 text-amber-300'
                                    : 'border-white/10 text-accent-light group-hover:text-amber-300'
                                }`}>
                                  <span>{isActive ? '✓ Currently Viewing' : 'Explore Portal'}</span>
                                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                                    isActive ? 'text-amber-400 translate-x-0.5' : 'group-hover:translate-x-1'
                                  }`} />
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* CTA */}
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex btn-whatsapp btn-sm items-center gap-2 shadow-lg hover:shadow-glow-gold transition-all shrink-0 whitespace-nowrap"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" fill="white" />
            WhatsApp Us
          </a>

          {/* HAMBURGER FOR MEDIUM & SMALL SCREENS */}
          <button
            className="xl:hidden p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6 text-accent-light" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden overflow-hidden bg-[#071420]/98 backdrop-blur-2xl rounded-3xl mt-3 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
            >
              <div className="px-6 py-5 flex flex-col gap-1.5">
                {navLinks.map(({ label, action }) => (
                  <button
                    key={label}
                    onClick={action}
                    className="text-left text-white/85 text-base font-medium py-2.5 px-3 rounded-xl hover:bg-white/10 hover:text-accent-light transition-all"
                  >
                    {label}
                  </button>
                ))}
                <p className="text-accent-light text-xs font-bold uppercase tracking-widest px-3 pt-3 pb-1 opacity-80 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Our Services
                </p>
                <div className="grid grid-cols-2 gap-2 px-1">
                  {services.map((s) => {
                    const isActive = location.pathname === s.route || location.pathname === s.route + '/';
                    return (
                      <Link
                        key={s.id}
                        to={s.route}
                        className={`text-xs p-2.5 rounded-xl border transition-all flex flex-col gap-1.5 ${
                          isActive
                            ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-extrabold shadow-md'
                            : 'text-white bg-white/5 border-white/10 hover:bg-accent/20 hover:border-accent/40'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{s.icon}</span>
                          <span className="truncate">{s.title}</span>
                        </div>
                        {isActive && (
                          <span className="text-[0.6rem] font-black text-amber-400 uppercase tracking-wider flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Currently Viewing
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-4 justify-center py-3 flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" fill="white" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
