import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, CheckCircle2, ShieldCheck, Star, Lightbulb, Heart, Globe2 } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const cards = [
  {
    type: 'vision', icon: Eye, title: 'Our Vision',
    desc: 'To become Pakistan\'s most trusted and innovative travel company — prioritizing excellence, integrity, and customer satisfaction in every journey we facilitate.',
    points: ['Leading travel partner across South Asia', 'Expand B2B travel services globally', 'Benchmark for Umrah travel excellence', 'Empower agents with digital portals'],
    gradient: 'from-primary-dark to-primary-light',
  },
  {
    type: 'mission', icon: Target, title: 'Our Mission',
    desc: 'To deliver reliable, affordable and high-quality travel solutions that serve individuals, families and business partners — making every travel experience smooth, safe and memorable.',
    points: ['Provide transparent, honest travel services', 'Make Umrah accessible for everyone', 'Offer 24/7 customer support', 'Build long-term client relationships'],
    gradient: 'from-[#2d1a05] to-[#7c4a08]',
  },
];

const values = [
  { icon: ShieldCheck, label: 'Trust' },
  { icon: Star, label: 'Excellence' },
  { icon: Lightbulb, label: 'Innovation' },
  { icon: Heart, label: 'Customer First' },
  { icon: Globe2, label: 'Global Reach' },
];

const VisionMission = () => (
  <section id="vision" className="py-24 bg-white">
    <div className="max-w-[1200px] mx-auto px-6">
      <SectionHeading
        badge="Our Direction"
        title="Vision & Mission"
        subtitle="We are driven by a clear purpose — to connect people with the world through trusted, professional travel services."
      />

      <div className="grid md:grid-cols-2 gap-7 mb-10">
        {cards.map((c, i) => {
          const IconComponent = c.icon;
          return (
            <motion.div
              key={c.type}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className={`relative bg-gradient-to-br ${c.gradient} rounded-3xl p-10 text-white overflow-hidden
                          transition-shadow duration-300 hover:shadow-2xl border border-white/10`}
            >
              {/* Subtle pattern */}
              <div className="absolute inset-0 pattern-dots opacity-20" />
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-accent-light mb-6 border border-white/15">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-accent-light mb-3">{c.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6 text-justify">{c.desc}</p>
                <ul className="space-y-2.5">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-white/75">
                      <CheckCircle2 className="w-4 h-4 text-accent-light shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Core Values Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 bg-gray-50 rounded-2xl p-6 border border-gray-100"
      >
        {values.map((v) => {
          const ValIcon = v.icon;
          return (
            <div
              key={v.label}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5
                         text-sm font-semibold text-gray-800 shadow-sm hover:bg-primary hover:text-white
                         hover:border-primary hover:-translate-y-0.5 transition-all duration-300 cursor-default group"
            >
              <ValIcon className="w-4 h-4 text-accent-dark group-hover:text-accent-light transition-colors" />
              {v.label}
            </div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default VisionMission;
