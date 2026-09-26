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
        <span className={`section-badge ${light ? 'bg-white/10 border-white/20 text-accent-light' : ''}`}>
          {badge}
        </span>
      )}
      <h2
        className={`section-title mt-1 ${
          centered ? 'title-underline-center' : 'title-underline'
        } ${light ? 'text-white' : 'text-gray-900'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/60' : 'text-gray-500'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
