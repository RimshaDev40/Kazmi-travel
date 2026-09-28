import React from 'react';
import { motion } from 'framer-motion';
import { Plane, ArrowRight, Compass } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon';

const WHATSAPP = '923001234567';

const CTASection = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="py-28 relative overflow-hidden bg-[#071420]">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 130, damping: 14 }}
          className="max-w-[760px] mx-auto bg-slate-900/60 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          {/* Top Moving Gradient Border */}
          <motion.div
            className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,#f59e0b_280deg,#10b981_340deg,transparent_360deg)] opacity-75"
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
          />

          <div className="relative z-10">
            {/* Floating Airplane Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 border border-amber-300 flex items-center justify-center mx-auto mb-6 text-slate-950 shadow-[0_10px_30px_rgba(245,158,11,0.4)]"
            >
              <Plane className="w-8 h-8 -rotate-45" />
            </motion.div>

            <span className="text-[0.72rem] font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/30 px-5 py-2 rounded-full inline-block mb-4 shadow-sm">
              Start Your Journey Today
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
              Ready to Plan Your Next Travel Experience?
            </h2>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-9 font-medium max-w-[620px] mx-auto">
              Whether you need Umrah packages, group flight bookings, visa processing or portal access — Kazmi Paradise Travel &amp; Tours is here to help.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo('contact')}
                className="btn-primary flex items-center gap-2 px-8 py-3.5 shadow-xl text-xs font-extrabold"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs px-8 py-3.5 rounded-full shadow-xl flex items-center gap-2 transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" fill="white" />
                <span>WhatsApp Us</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollTo('services')}
                className="border border-white/30 text-white hover:bg-white hover:text-slate-950 font-extrabold text-xs px-8 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
              >
                <Compass className="w-4 h-4" />
                <span>Explore Services</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
