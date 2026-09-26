import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const DestinationCard = ({ destination }) => {
  const { name, description, image, tag, tagColor } = destination;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-350 cursor-pointer group bg-white border border-gray-100"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        {tag && (
          <span
            className="absolute top-3 right-3 text-white text-[0.68rem] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md backdrop-blur-md"
            style={{ background: tagColor }}
          >
            {tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-[0.82rem] text-gray-500 leading-snug mb-3">{description}</p>
        <button className="text-[0.83rem] font-bold text-accent-dark inline-flex items-center gap-1.5
                           group-hover:text-primary transition-all duration-200">
          Explore Destination
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
