import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ThumbsUp, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const current = testimonials.slice(page * perPage, page * perPage + perPage);

  const nextPage = () => setPage((prev) => (prev + 1) % totalPages);
  const prevPage = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Verified Client Reviews"
          title="What Our Travelers & B2B Partners Say"
          subtitle="Real feedback from pilgrim families, corporate clients, and travel agency partners across Pakistan & GCC."
        />

        {/* Pluto-Style Overall Rating Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#071420] text-white rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl border border-amber-500/20 flex flex-wrap items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Subtle Top Accent Beam */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500" />

          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05, rotate: -3 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-400/40 flex flex-col items-center justify-center text-amber-400 shadow-lg shrink-0 cursor-default"
            >
              <span className="font-heading text-2xl font-black leading-none">4.9</span>
              <span className="text-[0.6rem] font-bold uppercase tracking-wider text-amber-200/80 mt-0.5">out of 5</span>
            </motion.div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs font-bold text-amber-300 ml-2">4.9 / 5.0 Rating</span>
              </div>
              <h4 className="font-heading text-lg sm:text-xl font-extrabold text-white">
                850+ Verified Client Reviews
              </h4>
            </div>
          </div>

          {/* Quick Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
            <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2.5 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10">
              <ThumbsUp className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="block font-extrabold text-white">98%</span>
                <span className="text-[0.65rem] text-slate-300">Satisfaction Rate</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2.5 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10">
              <Users className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="block font-extrabold text-white">500+</span>
                <span className="text-[0.65rem] text-slate-300">B2B Partners</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="flex items-center gap-2.5 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <div>
                <span className="block font-extrabold text-white">10+ Years</span>
                <span className="text-[0.65rem] text-slate-300">Industry Leader</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Testimonials Grid with AnimatePresence */}
        <div className="min-h-[360px] mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {current.map((t, idx) => (
                <TestimonialCard key={t.id} testimonial={t} index={idx} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Controls & Dots */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevPage}
              aria-label="Previous testimonials"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-md hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 active:scale-90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    page === i
                      ? 'w-9 bg-gradient-to-r from-amber-400 to-amber-500 shadow-md'
                      : 'w-2.5 bg-slate-300 hover:bg-amber-400/60'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              aria-label="Next testimonials"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-md hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
