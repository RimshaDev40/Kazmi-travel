import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const ServiceCard = ({ service, index = 0 }) => {
  const { icon, title, description, route } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-md
                 hover:shadow-[0_20px_50px_rgba(7,20,32,0.12)] hover:border-amber-400/60
                 transition-all duration-300 group flex flex-col justify-between overflow-hidden h-full cursor-pointer"
    >
      {/* Top Animated Edge Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500
                      scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />

      <div>
        {/* Animated Icon Box */}
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-amber-600 flex items-center justify-center text-3xl mb-6 transition-all duration-500 shadow-sm shrink-0">
          <motion.span
            className="inline-block transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12"
          >
            {icon}
          </motion.span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-extrabold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
          {description}
        </p>
      </div>

      {/* Explore Link with Bouncing Arrow */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={route}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600
                     group-hover:text-amber-700 transition-all duration-200"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 text-amber-500" />
        </Link>
        <Sparkles className="w-4 h-4 text-amber-400/40 group-hover:text-amber-500 group-hover:rotate-45 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
