import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, ChevronRight, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { services } from '../../data/services';

const LEADERSHIP_PHONE = '+92 321 115 50 50';
const OTHER_PHONE = '+92 321 115 40 40';
const WHATSAPP_NUM = '923211155050';
const EMAIL_ADDRESS = 'kazmiparadise@hotmail.com';
const ADDRESS_TEXT = 'Office No. 23 Ground Floor, Mian Trust Hospital, Sargodha Rd, Faisalabad.';

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...props}>
    <path d="M14 13.5h2.5l1-4H14V7c0-.926.756-1.5 1.5-1.5H18V1.5h-3.5C11.462 1.5 10 3.254 10 6.5v3H7v4h3v10h4V13.5z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" {...props}>
    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
);

const socialLinks = [
  {
    name: 'Facebook',
    icon: FacebookIcon,
    href: 'https://facebook.com/kazmiparadisetravel',
    color: 'hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white'
  },
  {
    name: 'Instagram',
    icon: InstagramIcon,
    href: 'https://instagram.com/kazmiparadisetravel',
    color: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent hover:text-white'
  },
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    href: 'https://linkedin.com/company/kazmiparadisetravel',
    color: 'hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white'
  },
];

const Footer = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#040d16] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* COL 1: BRAND & SOCIAL MEDIA CIRCLE BADGES */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpeg"
                alt="Kazmi Paradise Travel & Tours Logo"
                className="w-10 h-10 object-cover rounded-xl border border-amber-400/40 shadow-glow-gold"
              />
              <div className="leading-tight">
                <span className="block font-heading text-lg font-bold text-white">Kazmi Paradise</span>
                <span className="block text-[0.6rem] text-amber-400 font-semibold uppercase tracking-widest">Travel &amp; Tours</span>
              </div>
            </Link>
            <p className="text-white/60 text-xs leading-relaxed mb-5">
              Part of Kazmi Paradise Group of Companies. Premium travel, tourism, Umrah solutions, visa services, and B2B portal management.
            </p>

            {/* CIRCULAR SOCIAL MEDIA BADGES */}
            <div>
              <span className="block text-[0.68rem] text-amber-400 font-black uppercase tracking-widest mb-3">
                Follow Us On Social Media
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ name, icon: Icon, href, color }) => (
                  <motion.a
                    key={name}
                    whileHover={{ scale: 1.15, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className={`w-11 h-11 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.3)] ${color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div>
            <h4 className="font-heading text-sm font-bold text-amber-400 uppercase tracking-wider mb-4">Quick Links</h4>
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
                  <button onClick={action} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-amber-400/70" /> {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: SERVICES & PORTALS */}
          <div>
            <h4 className="font-heading text-sm font-bold text-amber-400 uppercase tracking-wider mb-4">Services &amp; Portals</h4>
            <ul className="space-y-2 text-xs text-white/70">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={s.route} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-amber-400/70" /> {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: CONTACT INFO */}
          <div>
            <h4 className="font-heading text-sm font-bold text-amber-400 uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{ADDRESS_TEXT}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <UserCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${LEADERSHIP_PHONE.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-bold">{LEADERSHIP_PHONE} (Leadership)</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${OTHER_PHONE.replace(/\s+/g, '')}`} className="hover:text-white transition-colors font-semibold">{OTHER_PHONE}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`https://wa.me/${WHATSAPP_NUM}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{LEADERSHIP_PHONE} (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white transition-colors">{EMAIL_ADDRESS}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© {new Date().getFullYear()} Kazmi Paradise Travel &amp; Tours. All rights reserved. Part of Kazmi Paradise Group of Companies.</p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold"
              >
                <Icon className="w-3.5 h-3.5" /> {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
