import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, Award, Users } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const current = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <SectionHeading
          badge="Verified Client Reviews"
          title="What Our Travelers &amp; B2B Partners Say"
          subtitle="Real feedback from pilgrim families, corporate clients, and travel agency partners across Pakistan & GCC."
        />

        {/* Pluto-Style Overall Rating Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#071420] text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl border border-accent/30 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/40 flex flex-col items-center justify-center text-accent-light shadow-glow-gold">
              <span className="font-heading text-2xl font-black leading-none">4.9</span>
              <span className="text-[0.6rem] font-bold uppercase tracking-wider text-white/70">out of 5</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-white ml-2">4.9 / 5.0 Rating</span>
              </div>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                850+ Verified Client Reviews
              </h4>
            </div>
          </div>

          {/* Quick Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
            <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10">
              <ThumbsUp className="w-4 h-4 text-accent-light shrink-0" />
              <div>
                <span className="block font-bold text-white">98%</span>
                <span className="text-[0.65rem] text-white/60">Satisfaction Rate</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10">
              <Users className="w-4 h-4 text-accent-light shrink-0" />
              <div>
                <span className="block font-bold text-white">500+</span>
                <span className="text-[0.65rem] text-white/60">B2B Partners</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
              <Award className="w-4 h-4 text-accent-light shrink-0" />
              <div>
                <span className="block font-bold text-white">10+ Years</span>
                <span className="text-[0.65rem] text-white/60">Industry Leader</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {current.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  page === i ? 'w-8 bg-accent' : 'w-2.5 bg-gray-300 hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
