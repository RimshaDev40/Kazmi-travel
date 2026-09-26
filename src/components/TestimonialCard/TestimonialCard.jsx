import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  const { name, designation, review, rating, initials, color } = testimonial;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl p-7 border border-gray-100 shadow-card
                 hover:shadow-card-hover hover:border-accent/20 transition-all duration-300 flex flex-col gap-4 relative"
    >
      <Quote className="w-8 h-8 text-accent/15 absolute top-6 right-6" />

      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200'}`}
          />
        ))}
      </div>
      <p className="text-[0.88rem] text-gray-600 leading-relaxed italic flex-1">"{review}"</p>
      <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-[0.9rem] shrink-0 shadow-sm"
          style={{ background: color }}
        >
          {initials}
        </div>
        <div>
          <strong className="block text-sm font-bold text-gray-900">{name}</strong>
          <span className="text-xs text-gray-400">{designation}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
