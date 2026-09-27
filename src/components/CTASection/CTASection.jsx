import React from 'react';
import { motion } from 'framer-motion';
import { Plane, ArrowRight, Compass } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon';

const WHATSAPP = '923001234567';

const CTASection = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#071420 0%,#1a3c5e 50%,#0f2438 100%)' }}>
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="absolute right-[-100px] top-[-100px] w-96 h-96 rounded-full opacity-10 animate-float"
        style={{ background: 'radial-gradient(circle,#c8973a,transparent)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[700px] mx-auto"
        >
          <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-6 text-accent-light shadow-glow-gold">
            <Plane className="w-7 h-7 -rotate-45" />
          </div>

          <span className="section-badge bg-white/10 text-accent-light border-white/20 mb-4 inline-block">
            Start Your Journey Today
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Ready to Plan Your Next Travel Experience?
          </h2>

          <p className="text-white/75 text-base leading-relaxed mb-9">
            Whether you need Umrah packages, group flight bookings, visa processing or portal access — Kazmi Paradise Travel &amp; Tours is here to help.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollTo('contact')}
              className="btn-primary"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp shadow-lg flex items-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" fill="white" />
              WhatsApp Us
            </a>
            <button
              onClick={() => scrollTo('services')}
              className="btn-outline"
            >
              <Compass className="w-4 h-4" />
              Explore Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
