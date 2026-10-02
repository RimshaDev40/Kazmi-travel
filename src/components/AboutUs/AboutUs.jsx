import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const fadeLeft = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

// 6 Core B2C Gripped Services
const b2cServices = [
  { icon: '🏙️', title: 'Dubai Visa Services', desc: 'Express 24-48h UAE tourist & business entry permits.' },
  { icon: '🕌', title: 'Umrah Visa Services', desc: 'Direct Saudi MoFA electronic visa approval.' },
  { icon: '🕋', title: 'Umrah Packages', desc: 'Economy & VIP 5-star customized Holy packages.' },
  { icon: '📜', title: 'Travel History', desc: 'Expert visa documentation & history building.' },
  { icon: '🛡️', title: 'Travel Insurance', desc: 'Comprehensive medical & travel protection policies.' },
  { icon: '✈️', title: 'International Air Tickets', desc: 'Wholesale flight seat inventory on top global carriers.' },
];

const AboutUs = () => (
  <section id="about" className="py-28 bg-slate-100 relative overflow-hidden">
    <div className="max-w-[1240px] mx-auto px-6 relative z-10">

      {/* TOP ABOUT US CONTENT GRID */}
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

        {/* Left Column: Image Banner with Animated Badges */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-slate-200">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=700&q=80"
              alt="Kazmi Paradise Travel team"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />

            {/* Gradient Overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Floating Overall Experience Badge (20 Years - 2008 Onward) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.08, rotate: 2 }}
              className="absolute bottom-6 right-6 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-2xl px-6 py-4 text-center shadow-[0_15px_35px_rgba(200,151,58,0.45)] border border-white/30 backdrop-blur-md cursor-pointer"
            >
              <span className="block font-heading text-3xl font-black text-white leading-none drop-shadow">20+</span>
              <span className="block text-white/90 text-[0.68rem] font-bold uppercase tracking-wider mt-1 drop-shadow">Years Overall Experience</span>
              <span className="block text-amber-200 text-[0.6rem] font-extrabold uppercase tracking-widest mt-0.5">(2008 Onward)</span>
            </motion.div>

            {/* Top Left Corporate Experience Badge (1 Decade KPT - 2018 Onward) */}
            <div className="absolute top-6 left-6 bg-black/85 backdrop-blur-md border border-amber-400/40 text-amber-400 font-bold text-xs px-4 py-2.5 rounded-2xl flex flex-col gap-0.5 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-extrabold text-white">01 Decade Corporate Excellence</span>
              </div>
              <span className="text-[0.65rem] text-slate-300 font-semibold pl-6">KPT Corporate Experience (2018 Onward)</span>
            </div>
          </div>

          {/* Continuous Rotating Accent Rings */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full border-[6px] border-dashed border-amber-500/35 -z-10 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
          />
        </motion.div>

        {/* Right Column: Text & Experience Pill Boxes */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeading badge="About Us" title="Kazmi Paradise Group of Companies" align="left" light={false} />

          <div className="space-y-4 text-slate-600 leading-relaxed text-[0.97rem] mb-8">
            <p className="text-justify">
              <strong className="text-slate-900 font-bold">Kazmi Paradise Group of Companies</strong> is a premier, trusted name in Pakistan's travel
              and tourism industry. Our primary travel business, <strong className="text-slate-900 font-bold">Kazmi Paradise
              Travel &amp; Tours</strong>, brings over <strong className="text-amber-700 font-extrabold">20 years of overall field experience (2008 Onward)</strong>, alongside <strong className="text-amber-700 font-extrabold">1 decade of corporate excellence through KPT (2018 Onward)</strong>.
            </p>
            <p className="text-justify">
              We specialize in full-suite B2C gripped services and cutting-edge B2B portal solutions — making every travel experience seamless, affordable, and memorable for thousands of satisfied travelers.
            </p>
          </div>

          {/* Experience Highlight Pill Boxes */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-amber-900"
            >
              <span className="block text-xs font-extrabold uppercase tracking-wider text-amber-800 mb-0.5">Overall Field Experience</span>
              <span className="text-lg font-black text-amber-700">2 Decades (2008 Onward)</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-md text-emerald-900"
            >
              <span className="block text-xs font-extrabold uppercase tracking-wider text-emerald-800 mb-0.5">Corporate KPT Experience</span>
              <span className="text-lg font-black text-emerald-700">1 Decade (2018 Onward)</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* INTEGRATED CORE B2C GRIPPED SERVICES CARD CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden"
      >
        {/* Section Sub-Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-800 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-widest uppercase mb-3 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            Our Core B2C Offerings
          </motion.div>
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Mainly Our Gripped Services (B2C)
          </h3>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Directly serving retail clients, families, and corporate travelers with guaranteed excellence.
          </p>
        </div>

        {/* 6 Grid Service Cards with Staggered Entrance Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {b2cServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/80 hover:bg-white transition-all duration-300 group flex items-start gap-4 cursor-pointer relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl shrink-0 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-amber-600 transition-all duration-500 shadow-sm">
                <span className="transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 inline-block">
                  {s.icon}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-heading text-base font-extrabold text-slate-900 mb-1 group-hover:text-amber-700 transition-colors">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </section>
);

export default AboutUs;
