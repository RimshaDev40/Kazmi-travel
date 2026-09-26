import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const PortalCard = ({ service }) => {
  const { icon, title, description, route, portalUrl, portalCTA } = service;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl p-7 border border-gray-100 shadow-card
                 hover:shadow-card-hover hover:border-accent/30 transition-all duration-300 flex flex-col group h-full text-center"
    >
      {/* Centered Icon */}
      <div className="w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-accent/15 flex items-center justify-center
                      text-3xl mb-4 transition-colors duration-300 border border-gray-100/80 shrink-0 mx-auto">
        {icon}
      </div>

      {/* Centered Heading */}
      <h3 className="text-[0.97rem] font-bold text-gray-900 mb-2 text-center group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[0.83rem] text-gray-500 leading-relaxed flex-1 mb-6 text-center">{description}</p>

      {/* Uniform Full-Width Stacked Buttons */}
      <div className="flex flex-col gap-2.5 mt-auto w-full pt-2">
        <a
          href={portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full justify-center text-xs py-2.5 inline-flex items-center gap-1.5 shadow-sm"
        >
          {portalCTA}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <Link
          to={route}
          className="w-full justify-center text-xs font-semibold text-primary border border-gray-200 py-2.5 rounded-xl
                     hover:bg-gray-50 transition-colors inline-flex items-center gap-1 text-center"
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
};

export default PortalCard;
