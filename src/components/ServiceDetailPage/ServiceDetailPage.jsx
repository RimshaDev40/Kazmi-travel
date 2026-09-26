import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, MessageCircle, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { services } from '../../data/services';

const WHATSAPP = '923001234567';

const ServiceDetailPage = ({ service: propService }) => {
  const { serviceId } = useParams();
  const location = useLocation();

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
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-28 pb-16">
        <div className="text-center p-8 bg-white rounded-3xl shadow-card border border-gray-100 max-w-md">
          <span className="text-5xl mb-4 block">🔍</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Not Found</h2>
          <p className="text-sm text-gray-500 mb-6">The requested service or portal page does not exist.</p>
          <Link to="/" className="btn-primary btn-sm inline-flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const { title, description, icon, image, portalUrl, portalCTA, features, benefits, hero, intro } = service;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO BANNER WITH HIGH VISIBILITY BACKGROUND IMAGE */}
      <section
        className="relative pt-36 pb-24 min-h-[480px] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#071420 0%,#1a3c5e 60%,#0f2438 100%)' }}
      >
        {/* Background photo - Ultra High Visibility */}
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
        {/* Crisp Gradient overlay for 100% text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071420]/85 via-[#0f2438]/60 to-[#071420]/30" />
        <div className="absolute inset-0 pattern-dots opacity-20" />

        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-white/90 mb-6 font-medium">
            <Link to="/" className="hover:text-accent-light transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white/60">Services</span>
            <span>›</span>
            <span className="text-accent-light font-bold">{title}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[740px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/25 border border-accent/50 text-3xl flex items-center justify-center mb-6 shadow-glow-gold backdrop-blur-md">
              {icon}
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
              {hero || title}
            </h1>

            <p className="text-white text-base sm:text-lg leading-relaxed mb-9 drop-shadow-md font-medium text-justify">
              {description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shadow-2xl inline-flex items-center gap-2"
              >
                {portalCTA}
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp shadow-2xl"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                WhatsApp Enquiry
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* LEFT 2 COLS */}
            <div className="lg:col-span-2 space-y-10">

              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow-card border border-gray-100"
              >
                <span className="section-badge mb-3">Service Details</span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Overview</h2>
                <p className="text-gray-600 leading-relaxed text-base text-justify">{intro}</p>
              </motion.div>

              {/* Key Features */}
              {features && features.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-card border border-gray-100"
                >
                  <span className="section-badge mb-3">Core Capabilities</span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-gray-800">{feat}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Key Benefits */}
              {benefits && benefits.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-card border border-gray-100"
                >
                  <span className="section-badge mb-3">Why Use This Service</span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                  <ul className="space-y-3.5">
                    {benefits.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-6 h-6 rounded-full bg-accent/15 text-accent-dark flex items-center justify-center shrink-0">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium text-gray-800">{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="space-y-6">

              {/* Portal CTA Card */}
              <div
                className="rounded-3xl p-7 text-white shadow-xl relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg,#071420 0%,#1a3c5e 100%)' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
                <h3 className="font-heading text-xl font-bold text-accent-light mb-2">Quick Portal Access</h3>
                <p className="text-xs text-white/75 leading-relaxed mb-6">
                  Access the {title} platform directly through our secure external system.
                </p>
                <a
                  href={portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center py-3 text-sm mb-3"
                >
                  {portalCTA}
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%20need%20help%20with%20${encodeURIComponent(title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center py-3 text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" /> Contact via WhatsApp
                </a>
              </div>

              {/* All Services list */}
              <div className="bg-white rounded-3xl p-6 shadow-card border border-gray-100">
                <h3 className="font-heading text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-accent-dark" /> Other Services
                </h3>
                <ul className="space-y-1">
                  {services.map((s) => (
                    <li key={s.id}>
                      <Link
                        to={s.route}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          s.route === location.pathname || s.route === `/${serviceId}` || s.id.toString() === serviceId
                            ? 'bg-primary text-white font-semibold shadow-md'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                        }`}
                      >
                        <span className="text-base">{s.icon}</span>
                        <span className="truncate">{s.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back button */}
              <Link to="/" className="btn-outline w-full justify-center py-3 text-sm text-gray-700 border-gray-300">
                <ArrowLeft className="w-4 h-4" /> Back to Main Website
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
