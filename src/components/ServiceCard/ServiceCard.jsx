import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
  const { icon, title, description, route } = service;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className="relative bg-white rounded-2xl p-7 border border-gray-100 shadow-card
                 hover:shadow-card-hover hover:border-accent/30 transition-all duration-300 group
                 flex flex-col overflow-hidden"
    >
      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold-gradient
                      scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-350" />

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-gray-50 group-hover:bg-accent/15 flex items-center justify-center
                      text-3xl mb-5 transition-colors duration-300 shadow-sm border border-gray-100/80">
        {icon}
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-6">{description}</p>

      <Link
        to={route}
        className="inline-flex items-center gap-2 text-sm font-bold text-accent-dark
                   hover:text-primary transition-all duration-200 group/link"
      >
        Explore Service
        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
