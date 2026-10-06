import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const TestimonialCard = ({ testimonial, index = 0 }) => {
  const { name, designation, review, rating, initials, color } = testimonial;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -25, scale: 0.95 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-white rounded-3xl p-7 border border-slate-100/90 shadow-xl
                 hover:shadow-[0_22px_55px_rgba(7,20,32,0.12)] hover:border-amber-400/50
                 transition-all duration-300 flex flex-col justify-between relative group cursor-pointer overflow-hidden"
    >
      {/* Top Border Gradient Highlight on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />

      {/* Subtle Quote Background Icon */}
      <Quote className="w-10 h-10 text-amber-500/10 absolute top-5 right-6 group-hover:text-amber-500/25 group-hover:scale-110 transition-all duration-500" />

      <div>
        {/* Rating Stars with Hover Stagger */}
        <div className="flex items-center gap-1.5 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 12 }}
              transition={{ duration: 0.2 }}
            >
              <Star
                className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Review Paragraph */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium relative z-10">
          {review}
        </p>
      </div>

      {/* Author Details Footer */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300"
            style={{ background: color || '#071420' }}
          >
            {initials}
          </div>
          <div>
            <strong className="block text-sm font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
              {name}
            </strong>
            <span className="text-[0.72rem] text-slate-400 font-semibold">{designation}</span>
          </div>
        </div>

        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
