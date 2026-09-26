import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Phone, MessageCircle, Mail, MapPin, ChevronRight } from 'lucide-react';
import { services } from '../../data/services';

const WHATSAPP = '923001234567';

const Footer = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-primary-darker text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* COL 1: BRAND */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-light to-accent flex items-center justify-center shadow-glow-gold">
                <Plane className="w-5 h-5 text-primary-darker -rotate-45" />
              </div>
              <div className="leading-tight">
                <span className="block font-heading text-lg font-bold text-white">Kazmi Paradise</span>
                <span className="block text-[0.6rem] text-accent-light font-semibold uppercase tracking-widest">Travel &amp; Tours</span>
              </div>
            </Link>
            <p className="text-white/60 text-xs leading-relaxed mb-4">
              Part of Kazmi Groups of Companies. Premium travel, tourism, Umrah solutions, visa services, and B2B portal management.
            </p>
            <span className="inline-block text-[0.7rem] text-accent-light bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Trust • Professionalism • Convenience
            </span>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div>
            <h4 className="font-heading text-sm font-bold text-accent-light uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-white/70">
              {[
                { label: 'Home', action: () => scrollTo('home') },
                { label: 'About Us', action: () => scrollTo('about') },
                { label: 'Vision & Mission', action: () => scrollTo('vision') },
                { label: 'Destinations', action: () => scrollTo('destinations') },
                { label: 'Travel Packages', action: () => scrollTo('packages') },
                { label: 'Our Portals', action: () => scrollTo('portals') },
                { label: 'Contact Us', action: () => scrollTo('contact') },
              ].map(({ label, action }) => (
                <li key={label}>
                  <button onClick={action} className="hover:text-accent-light transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-accent-light/60" /> {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: SERVICES & PORTALS */}
          <div>
            <h4 className="font-heading text-sm font-bold text-accent-light uppercase tracking-wider mb-4">Services &amp; Portals</h4>
            <ul className="space-y-2 text-xs text-white/70">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={s.route} className="hover:text-accent-light transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-accent-light/60" /> {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: CONTACT */}
          <div>
            <h4 className="font-heading text-sm font-bold text-accent-light uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-light shrink-0 mt-0.5" />
                <span>Kazmi Tower, Main Boulevard, Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-light shrink-0" />
                <a href="tel:+923001234567" className="hover:text-white transition-colors">+92 300 1234567</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+92 300 1234567 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-light shrink-0" />
                <a href="mailto:info@kazmiparadisetravel.com" className="hover:text-white transition-colors">info@kazmiparadisetravel.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Kazmi Paradise Travel &amp; Tours. All rights reserved. Part of Kazmi Groups of Companies.</p>
          <div className="flex gap-4">
            <span className="hover:text-white/70 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white/70 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
