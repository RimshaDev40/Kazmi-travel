import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const PortalCard = ({ service, index = 0 }) => {
  const { icon, title, badge, description, highlights, route, portalUrl, portalCTA } = service;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.72, y: 75 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        type: 'spring',
        stiffness: 110,
        damping: 12,
        delay: index * 0.12
      }}
      whileHover={{ y: -16, scale: 1.04 }}
      className="bg-white rounded-3xl p-8 border-t-4 border-t-amber-400 border-x border-b border-slate-200/90 shadow-xl
                 hover:shadow-[0_30px_60px_rgba(245,158,11,0.3)] hover:border-t-amber-500
                 transition-all duration-300 flex flex-col justify-between group h-full relative cursor-pointer"
    >
      <div>
        {/* Top Header Row with Icon & Badge */}
        <div className="flex items-center justify-between mb-5">
          {/* Bouncing & Rotating Emoji Icon Box */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 12 }}
            className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-3xl shadow-sm shrink-0 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-amber-600 transition-all duration-500"
          >
            <motion.span className="inline-block transition-transform duration-700 ease-out group-hover:rotate-[360deg] group-hover:scale-125">
              {icon}
            </motion.span>
          </motion.div>

          {/* Sleek Category Badge */}
          {badge && (
            <motion.span
              whileHover={{ scale: 1.08 }}
              className="text-[0.68rem] font-black uppercase tracking-wider text-amber-700 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full flex items-center gap-1 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              {badge}
            </motion.span>
          )}
        </div>

        {/* Portal Title */}
        <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug group-hover:text-amber-700 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium mb-5">
          {description}
        </p>

        {/* Quick Highlights / Feature Pills */}
        {highlights && (
          <div className="flex flex-wrap gap-2 mb-8">
            {highlights.map((h, i) => (
              <span
                key={i}
                className="text-[0.7rem] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg flex items-center gap-1.5 group-hover:bg-amber-50 group-hover:border-amber-300 group-hover:text-amber-950 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                {h}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Stacked Interactive Action Buttons */}
      <div className="flex flex-col gap-3 mt-auto w-full pt-2">
        {/* Access Direct Portal CTA */}
        <motion.a
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          href={portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full justify-center text-xs py-3.5 inline-flex items-center gap-2 shadow-lg font-extrabold"
        >
          <span>{portalCTA}</span>
          <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        </motion.a>

        {/* Learn More Route CTA */}
        <motion.div whileHover={{ scale: 1.03, y: -1 }}>
          <Link
            to={route}
            className="w-full justify-center text-xs font-extrabold text-slate-800 border border-slate-300 py-3 rounded-xl
                       hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 inline-flex items-center gap-1.5 text-center shadow-sm"
          >
            <span>View Full Details & Features</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortalCard;
