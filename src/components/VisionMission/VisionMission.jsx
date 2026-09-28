import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, CheckCircle2, ShieldCheck, Star, Lightbulb, Heart, Globe2 } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const cards = [
  {
    type: 'vision',
    icon: Eye,
    title: 'Our Vision',
    desc: 'To become Pakistan\'s most trusted and innovative travel company — prioritizing excellence, integrity, and customer satisfaction in every journey we facilitate.',
    points: [
      'Leading travel partner across South Asia',
      'Expand B2B travel services globally',
      'Benchmark for Umrah travel excellence',
      'Empower agents with digital portals'
    ],
    gradient: 'from-[#071420] via-[#0b1f33] to-[#071420]',
    // Thicker, brighter gold conic light beam
    beamColor: 'conic-gradient(from 0deg, transparent 0deg, transparent 180deg, #f59e0b 260deg, #fbbf24 320deg, #f59e0b 340deg, transparent 360deg)',
    shadowGlow: 'hover:shadow-[0_20px_50px_rgba(245,158,11,0.4)]',
    accentColor: 'text-amber-400',
    iconBg: 'bg-amber-400/10 border-amber-400/30 text-amber-400',
    floatRange: [0, -18, 0],
    floatDuration: 3.8
  },
  {
    type: 'mission',
    icon: Target,
    title: 'Our Mission',
    desc: 'To deliver reliable, affordable and high-quality travel solutions that serve individuals, families and business partners — making every travel experience smooth, safe and memorable.',
    points: [
      'Provide transparent, honest travel services',
      'Make Umrah accessible for everyone',
      'Offer 24/7 customer support',
      'Build long-term client relationships'
    ],
    gradient: 'from-[#071420] via-[#0c263d] to-[#071420]',
    // Thicker, brighter emerald conic light beam
    beamColor: 'conic-gradient(from 0deg, transparent 0deg, transparent 180deg, #10b981 260deg, #34d399 320deg, #10b981 340deg, transparent 360deg)',
    shadowGlow: 'hover:shadow-[0_20px_50px_rgba(16,185,129,0.4)]',
    accentColor: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10 border-emerald-400/30 text-emerald-400',
    floatRange: [-14, 4, -14],
    floatDuration: 4.2
  }
];

const values = [
  { icon: ShieldCheck, label: 'Trust', color: 'hover:border-amber-400 hover:text-amber-500' },
  { icon: Star, label: 'Excellence', color: 'hover:border-emerald-400 hover:text-emerald-500' },
  { icon: Lightbulb, label: 'Innovation', color: 'hover:border-amber-400 hover:text-amber-500' },
  { icon: Heart, label: 'Customer First', color: 'hover:border-rose-400 hover:text-rose-500' },
  { icon: Globe2, label: 'Global Reach', color: 'hover:border-blue-400 hover:text-blue-500' }
];

const VisionMission = () => (
  <section id="vision" className="py-28 bg-white relative overflow-hidden">
    {/* Ambient Background Glows */}
    <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[160px] pointer-events-none" />
    <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[160px] pointer-events-none" />

    <div className="max-w-[1240px] mx-auto px-6 relative z-10">
      <SectionHeading
        badge="Our Direction"
        title="Vision & Mission"
        subtitle="We are driven by a clear purpose — to connect people with the world through trusted, professional travel services."
        light={false}
      />

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {cards.map((c) => {
          const IconComponent = c.icon;
          return (
            /* Outer Wrapper for Infinite Float Animation (Up / Down continuous bobbing) */
            <motion.div
              key={c.type}
              animate={{ y: c.floatRange }}
              transition={{
                duration: c.floatDuration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut'
              }}
              className="w-full"
            >
              {/* Card Container with Thicker 4px Border Padding (p-[4px]) & Sharp rounded-2xl Edges */}
              <motion.div
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.3 }}
                className={`relative p-[4px] rounded-2xl overflow-hidden group shadow-2xl ${c.shadowGlow} transition-all duration-500 cursor-pointer`}
              >
                {/* Thick Moving Light Beam Travelling Around Card Edges */}
                <motion.div
                  className="absolute -inset-[180%]"
                  style={{ background: c.beamColor }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
                />

                {/* Inner Card Box */}
                <div className={`relative z-10 bg-gradient-to-br ${c.gradient} rounded-[12px] p-8 sm:p-10 text-white overflow-hidden h-full flex flex-col justify-between border border-white/10`}>
                  {/* Dots background */}
                  <div className="absolute inset-0 pattern-dots opacity-15 pointer-events-none" />

                  <div>
                    <div className={`w-14 h-14 rounded-xl border ${c.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-md`}>
                      <IconComponent className="w-7 h-7 transition-transform duration-500 group-hover:rotate-12" />
                    </div>

                    <h3 className={`font-heading text-2xl sm:text-3xl font-extrabold ${c.accentColor} mb-4 tracking-tight`}>
                      {c.title}
                    </h3>

                    <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-6 font-medium text-justify">
                      {c.desc}
                    </p>
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-white/10">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-xs sm:text-sm text-white/90 font-medium">
                        <CheckCircle2 className={`w-4 h-4 ${c.accentColor} shrink-0`} />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Core Values Bar (SS2) with Thicker 3px Edge Beam & Continuous Floating Pills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative p-[3px] rounded-2xl overflow-hidden shadow-lg"
      >
        {/* Thick Moving Light Beam for Core Values Bar */}
        <motion.div
          className="absolute -inset-[180%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_180deg,#f59e0b_260deg,#10b981_320deg,transparent_360deg)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 bg-slate-50/95 backdrop-blur-md rounded-[13px] p-6 sm:p-8 flex flex-wrap justify-center items-center gap-4">
          {values.map((v, i) => {
            const ValIcon = v.icon;
            return (
              <motion.div
                key={v.label}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                  delay: i * 0.45
                }}
                whileHover={{ scale: 1.1, y: -8 }}
                className={`flex items-center gap-2.5 bg-white border border-slate-200 rounded-full px-6 py-3
                           text-sm font-bold text-slate-800 shadow-sm ${v.color} hover:bg-[#071420] hover:text-white
                           hover:border-[#071420] transition-all duration-300 cursor-pointer group`}
              >
                <ValIcon className="w-4 h-4 text-amber-500 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300" />
                <span>{v.label}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    </div>
  </section>
);

export default VisionMission;
