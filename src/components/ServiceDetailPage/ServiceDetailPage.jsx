import React, { useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ExternalLink, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap, Award, Star,
  HelpCircle, ChevronDown, ListOrdered
} from 'lucide-react';
import { services } from '../../data/services';
import WhatsAppIcon from '../common/WhatsAppIcon';

const WHATSAPP = '923001234567';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 14
    }
  }
};

const ServiceDetailPage = ({ service: propService }) => {
  const { serviceId } = useParams();
  const location = useLocation();
  const [openFaq, setOpenFaq] = useState(0);

  const service =
    propService ||
    services.find(
      (s) =>
        s.route === location.pathname ||
        s.route === `/${serviceId}` ||
        s.id.toString() === serviceId ||
        s.route.replace('/', '') === serviceId
    );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-10 bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-md"
        >
          <span className="text-6xl mb-4 block">🔍</span>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Portal Page Not Found</h2>
          <p className="text-sm text-slate-500 mb-6 font-medium">The requested service or portal page does not exist.</p>
          <Link to="/" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-xs">
            <ArrowLeft className="w-4 h-4" /> Back to Main Website
          </Link>
        </motion.div>
      </div>
    );
  }

  const { title, badge, description, icon, image, portalUrl, portalCTA, highlights, features, hero, intro, processSteps, faqs } = service;

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO BANNER WITH VIBRANT VISIBLE IMAGE & SPLIT LAYOUT */}
      <section className="relative pt-36 pb-24 min-h-[550px] flex items-center overflow-hidden bg-[#071420]">
        {/* Full-width VIBRANT Background Photo (High Opacity) */}
        {image && (
          <div
            className="absolute inset-0 opacity-75 transition-all duration-700 scale-105"
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}

        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none" />

        {/* Gradient Shadow Overlay for crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071420]/95 via-[#071420]/80 to-[#071420]/50" />

        <div className="relative z-10 max-w-[1240px] w-full mx-auto px-6">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-xs text-white/85 mb-8 font-medium"
          >
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>›</span>
            <Link to="/#portals" className="hover:text-amber-400 transition-colors">Our Portals</Link>
            <span>›</span>
            <span className="text-amber-400 font-extrabold">{title}</span>
          </motion.div>

          {/* Split Hero Layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left Column (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="lg:col-span-7"
            >
              {/* Header Icon & Badge */}
              <div className="flex items-center gap-3.5 mb-6">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 text-3xl flex items-center justify-center shadow-[0_10px_25px_rgba(245,158,11,0.4)] shrink-0"
                >
                  {icon}
                </motion.div>

                {badge && (
                  <span className="text-xs font-black uppercase tracking-widest text-amber-300 bg-amber-400/20 border border-amber-400/40 px-4 py-2 rounded-full inline-flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    {badge}
                  </span>
                )}
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight drop-shadow-lg">
                {hero || title}
              </h1>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-9 font-medium text-justify drop-shadow-sm">
                {description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shadow-2xl inline-flex items-center gap-2.5 px-8 py-3.5 text-xs font-extrabold"
                >
                  <span>{portalCTA}</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp shadow-2xl flex items-center gap-2 px-8 py-3.5 text-xs font-extrabold"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" fill="white" />
                  <span>WhatsApp Enquiry</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column (5 Cols): High-Vibrancy Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                whileHover={{ scale: 1.03, rotate: 1 }}
                className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border-4 border-white/90 group cursor-pointer"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-[360px] sm:h-[400px] object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Floating Rating Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center justify-between text-white shadow-xl">
                  <div>
                    <span className="text-[0.7rem] font-bold text-amber-400 uppercase tracking-wider block">Official Portal</span>
                    <h5 className="font-heading font-extrabold text-sm text-white">{title}</h5>
                  </div>
                  <div className="flex items-center gap-1 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-black text-amber-300">4.9 / 5.0</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Accent Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-6 -right-6 w-44 h-44 rounded-full border-2 border-dashed border-amber-400/30 -z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* LEFT 2 COLS */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="lg:col-span-2 space-y-10"
            >

              {/* Service Overview Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border-t-4 border-t-amber-400 border-x border-b border-slate-200/90 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-amber-700 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1 rounded-full">
                    Portal Overview
                  </span>
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Detailed Service Capabilities</h2>
                <p className="text-slate-600 leading-relaxed text-base text-justify font-medium mb-8">{intro}</p>

                {/* Highlights Grid */}
                {highlights && (
                  <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100">
                    {highlights.map((h, i) => (
                      <div key={i} className="text-center p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                        <Zap className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                        <span className="text-xs font-bold text-slate-800 block">{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* 4-STEP PROCESS WORKFLOW CARDS */}
              {processSteps && processSteps.length > 0 && (
                <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/90">
                  <div className="flex items-center gap-2 mb-2">
                    <ListOrdered className="w-5 h-5 text-amber-500" />
                    <span className="text-xs font-black uppercase tracking-widest text-amber-700">Simple Workflow</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-6">How The Portal Works</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {processSteps.map((stepItem) => (
                      <motion.div
                        key={stepItem.step}
                        whileHover={{ scale: 1.03, y: -3 }}
                        className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-amber-400 hover:shadow-md transition-all duration-300 relative group"
                      >
                        <span className="text-xs font-black text-amber-600 bg-amber-500/15 border border-amber-400/30 px-2.5 py-1 rounded-lg inline-block mb-3">
                          STEP {stepItem.step}
                        </span>
                        <h4 className="text-base font-extrabold text-slate-900 mb-1.5 group-hover:text-amber-700 transition-colors">
                          {stepItem.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">
                          {stepItem.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Key Features Cards */}
              {features && features.length > 0 && (
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/90"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span className="text-xs font-black uppercase tracking-widest text-amber-700">Core Capabilities</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Key Portal Features & Specifications</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {features.map((feat) => (
                      <motion.div
                        key={feat}
                        whileHover={{ scale: 1.03, y: -2 }}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-amber-400 hover:shadow-md transition-all duration-300 cursor-pointer"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">{feat}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* PORTAL SPECIFIC FAQS */}
              {faqs && faqs.length > 0 && (
                <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/90">
                  <div className="flex items-center gap-2 mb-2">
                    <HelpCircle className="w-5 h-5 text-amber-500" />
                    <span className="text-xs font-black uppercase tracking-widest text-amber-700">Frequently Asked Questions</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Common Questions About {title}</h2>

                  <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                      const isOpen = openFaq === idx;
                      return (
                        <div
                          key={idx}
                          className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                            isOpen ? 'border-amber-400 bg-amber-50/30 shadow-md' : 'border-slate-200 bg-slate-50'
                          }`}
                        >
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : idx)}
                            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base"
                          >
                            <span className="flex items-center gap-2.5">
                              <HelpCircle className={`w-4 h-4 ${isOpen ? 'text-amber-600' : 'text-slate-400'}`} />
                              {faq.q}
                            </span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 font-medium"
                              >
                                {faq.a}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* RIGHT SIDEBAR */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >

              {/* Direct Portal CTA Card */}
              <div className="rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden bg-[#071420]">
                {/* Moving Conic Light Beam */}
                <motion.div
                  className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,#f59e0b_280deg,#10b981_340deg,transparent_360deg)] opacity-60"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />

                <div className="relative z-10 bg-[#071420] p-6 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center text-2xl mb-4">
                    {icon}
                  </div>

                  <h3 className="font-heading text-xl font-extrabold text-amber-400 mb-2">Direct Portal Login</h3>
                  <p className="text-xs text-white/80 leading-relaxed mb-6 font-medium">
                    Access the official {title} platform directly through our secure external portal system.
                  </p>

                  <motion.a
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    href={portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center py-3.5 text-xs font-extrabold mb-3 shadow-lg flex items-center gap-2"
                  >
                    <span>{portalCTA}</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20need%20help%20with%20${encodeURIComponent(title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center py-3.5 text-xs font-extrabold flex items-center gap-2 shadow-lg"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" fill="white" />
                    <span>Contact Desk via WhatsApp</span>
                  </motion.a>
                </div>
              </div>

              {/* Other Services Navigation List */}
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200/90">
                <h3 className="font-heading text-xs font-extrabold text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-500" /> All Service Portals
                </h3>
                <ul className="space-y-1.5">
                  {services.map((s) => {
                    const isActive = s.route === location.pathname || s.route === `/${serviceId}` || s.id.toString() === serviceId;
                    return (
                      <li key={s.id}>
                        <Link
                          to={s.route}
                          className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all duration-300 ${
                            isActive
                              ? 'bg-[#071420] text-amber-400 shadow-md border border-amber-400/40'
                              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          <span className="text-base">{s.icon}</span>
                          <span className="truncate">{s.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Back to Home Button */}
              <Link to="/" className="w-full justify-center py-3.5 text-xs font-extrabold text-slate-700 bg-white border border-slate-300 rounded-2xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 inline-flex items-center gap-2 shadow-sm">
                <ArrowLeft className="w-4 h-4" /> Back to Main Website
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
