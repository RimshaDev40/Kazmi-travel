import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.15
    }
  })
};

const PortalCard = ({ service, index = 0 }) => {
  const { icon, title, badge, description, highlights, route, portalUrl, portalCTA } = service;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
      className="h-full group"
    >
      <div
        className="bg-white rounded-3xl p-8 border-t-4 border-t-amber-400 border-x border-b border-slate-200/90 shadow-lg
                   hover:shadow-[0_20px_45px_rgba(245,158,11,0.2)] hover:border-t-amber-500 hover:-translate-y-2 hover:scale-[1.015]
                   transition-all duration-300 ease-out flex flex-col justify-between h-full relative cursor-pointer"
      >
        <div>
          {/* Top Header Row with Icon & Badge */}
          <div className="flex items-center justify-between mb-5">
            {/* Bouncing & Rotating Emoji Icon Box */}
            <div
              className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-3xl shadow-sm shrink-0
                         group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-amber-600 transition-all duration-300"
            >
              <span className="inline-block transition-transform duration-500 ease-out group-hover:rotate-12 group-hover:scale-110">
                {icon}
              </span>
            </div>

            {/* Sleek Category Badge */}
            {badge && (
              <span
                className="text-[0.68rem] font-black uppercase tracking-wider text-amber-700 bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full flex items-center gap-1 shadow-sm
                           group-hover:scale-105 transition-transform duration-300"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                {badge}
              </span>
            )}
          </div>

          {/* Portal Title */}
          <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug group-hover:text-amber-700 transition-colors duration-300">
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
                  className="text-[0.7rem] font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg flex items-center gap-1.5
                             group-hover:bg-amber-50 group-hover:border-amber-300 group-hover:text-amber-950 transition-colors duration-300"
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
          <a
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center text-xs py-3.5 inline-flex items-center gap-2 shadow-lg font-extrabold
                       hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
          >
            <span>{portalCTA}</span>
            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          </a>

          {/* Learn More Route CTA */}
          <Link
            to={route}
            className="w-full justify-center text-xs font-extrabold text-slate-800 border border-slate-300 py-3 rounded-xl
                       hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 inline-flex items-center gap-1.5 text-center shadow-sm"
          >
            <span>View Full Details & Features</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortalCard;
