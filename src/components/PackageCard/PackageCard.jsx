import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const PackageCard = ({ pkg }) => {
  const { destination, name, duration, image, included, price, badge } = pkg;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-350 flex flex-col group"
    >
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={name} loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-500" />
        {badge && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-accent to-accent-dark text-white text-[0.68rem] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
            {badge}
          </span>
        )}
        <span className="absolute bottom-3 left-3 bg-black/60 text-white text-[0.7rem] font-semibold px-3 py-1 rounded-full backdrop-blur-md">
          {destination}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-gray-900 text-[1.05rem] mb-1 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-[0.82rem] text-gray-500 mb-4 flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-accent-dark shrink-0" />
          {duration}
        </p>
        <ul className="space-y-2 flex-1 mb-5">
          {included.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[0.82rem] text-gray-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-[0.78rem] font-extrabold text-accent-dark bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            {price}
          </span>
          <button
            onClick={() => window.open(
              `https://wa.me/923001234567?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(name)}`,
              '_blank', 'noopener noreferrer'
            )}
            className="btn-primary btn-sm flex items-center gap-1"
          >
            View Package
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;
