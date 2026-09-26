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
                 hover:shadow-card-hover hover:border-accent/30 transition-all duration-300 flex flex-col group"
    >
      <div className="w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-accent/15 flex items-center justify-center
                      text-3xl mb-4 transition-colors duration-300 border border-gray-100/80">
        {icon}
      </div>
      <h3 className="text-[0.97rem] font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-[0.83rem] text-gray-500 leading-relaxed flex-1 mb-5">{description}</p>

      <div className="flex flex-wrap items-center gap-2 pt-2">
        <Link
          to={route}
          className="text-[0.83rem] font-semibold text-primary border border-gray-200 px-3.5 py-2 rounded-lg
                     hover:bg-gray-50 transition-colors inline-flex items-center gap-1"
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href={portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary btn-sm inline-flex items-center gap-1.5"
        >
          {portalCTA}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export default PortalCard;
