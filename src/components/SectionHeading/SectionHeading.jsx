import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

const SectionHeading = ({ badge, title, subtitle, align = 'center', light = false }) => {
  const centered = align === 'center';
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <span
          className={`font-bold uppercase tracking-widest text-[0.7rem] px-4 py-1.5 rounded-full inline-block mb-3 backdrop-blur-md ${
            light
              ? 'bg-amber-500/10 border border-amber-500/30 text-amber-400'
              : 'bg-amber-500/10 border border-amber-500/30 text-amber-600'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight mt-1 ${
          centered ? 'title-underline-center' : 'title-underline'
        } ${light ? 'text-white drop-shadow-md' : 'text-[#071420]'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed max-w-2xl font-medium ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/80' : 'text-slate-600'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
