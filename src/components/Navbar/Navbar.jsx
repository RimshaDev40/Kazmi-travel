import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plane, ChevronDown, Menu, X, MessageSquare,
  Sparkles, Layers, ArrowRight
} from 'lucide-react';
import { services } from '../../data/services';

const WHATSAPP = '923001234567';

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
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-[#071420]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-5 flex items-center justify-between gap-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-light to-accent flex items-center justify-center shadow-glow-gold group-hover:scale-105 transition-transform duration-300">
              <Plane className="w-5 h-5 text-primary-darker -rotate-45" />
            </div>
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
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-3 w-[620px] bg-[#071420]/95 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-5 z-50 border border-accent/30"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                      <p className="text-[0.7rem] text-accent-light font-bold uppercase tracking-widest flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-accent-light" /> Kazmi Paradise Travel Portals &amp; Services
                      </p>
                      <span className="text-[0.65rem] text-white/50 uppercase tracking-wider font-semibold">6 Services</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5">
                      {services.map((s) => (
                        <Link
                          key={s.id}
                          to={s.route}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-accent/20 hover:border-accent/50 text-white transition-all group backdrop-blur-md shadow-sm"
                        >
                          <span className="text-xl group-hover:scale-110 transition-transform shrink-0 p-1.5 rounded-lg bg-white/5">{s.icon}</span>
                          <div className="flex-1 min-w-0">
                            <span className="block text-xs font-bold text-white group-hover:text-accent-light transition-colors truncate">
                              {s.title}
                            </span>
                            <span className="block text-[0.63rem] text-white/50 group-hover:text-white/80 transition-colors truncate">
                              Access Details ↗
                            </span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-accent-light opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                        </Link>
                      ))}
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
            <MessageSquare className="w-4 h-4 fill-current" />
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
              className="xl:hidden overflow-hidden bg-[#071420]/98 backdrop-blur-2xl border-t border-white/10"
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
                <div className="grid grid-cols-1 gap-2 px-2">
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      to={s.route}
                      className="text-white/80 text-sm py-2.5 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-accent-light transition-all flex items-center gap-3"
                    >
                      <span>{s.icon}</span> {s.title}
                    </Link>
                  ))}
                </div>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-4 justify-center py-3"
                >
                  <MessageSquare className="w-4 h-4 fill-current" /> WhatsApp Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
