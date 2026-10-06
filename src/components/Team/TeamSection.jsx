import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const WHATSAPP = '923211155050';

const leaders = [
  {
    id: 'kazim',
    name: 'Syed Kazim Raza',
    role: 'Founder & Managing Director',
    experience: '15+ Years Industry Leadership',
    badge: 'LEADERSHIP IN TRAVEL & B2B',
    headline: 'Pioneering Umrah & Corporate Travel Excellence',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80',
    quote1: 'From our early days in direct Umrah ticketing to building Pakistan’s premier B2B travel portal ecosystem, our mission has always been focused on turning travel management into a seamless, high-value experience.',
    quote2: 'Over the past 15 years, we have empowered over 500+ travel sub-agents with instant wallet credit, direct Makkah & Madinah hotel allotments, and guaranteed group airline seat allocations.',
    stats: [
      { label: 'Pilgrims Served', value: '50,000+' },
      { label: 'Client Satisfaction', value: '98%' },
      { label: 'B2B Sub-Agents', value: '500+' }
    ],
    imageOnLeft: true
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const TeamSection = () => {
  return (
    <section id="team" className="py-28 bg-white relative overflow-hidden">
      {/* Ambient Lighting Background */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Our Leadership"
          title="Meet Our Executive Leadership"
          subtitle="Visionary founders driving Pakistan's premier B2B travel wholesaler."
          light={false}
        />

        {/* Stacked Leaders Showcase */}
        <div className="flex flex-col gap-20 mt-12">
          {leaders.map((leader) => (
            <motion.div
              key={leader.id}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid lg:grid-cols-12 gap-12 items-center bg-gradient-to-br from-slate-50 via-white to-slate-50/80 border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-[0_25px_60px_rgba(7,20,32,0.12)] transition-all duration-500 backdrop-blur-md relative overflow-hidden group"
            >
              {/* Subtle Top Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />

              {/* Image Column */}
              <motion.div
                variants={childVariants}
                className={`lg:col-span-5 relative ${leader.imageOnLeft ? '' : 'lg:order-last'}`}
              >
                {/* 3D Glowing Ambient Aura behind Card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/25 via-emerald-500/15 to-amber-400/25 rounded-3xl blur-2xl opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none" />

                <motion.div
                  whileHover={{ scale: 1.04, y: -10 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group/img cursor-pointer will-change-transform
                             hover:shadow-[0_30px_70px_rgba(7,20,32,0.28)]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-[480px] object-cover group-hover/img:scale-110 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent opacity-85 group-hover/img:opacity-60 transition-opacity duration-500 pointer-events-none" />

                  {/* Floating Leader Identity Badge */}
                  <div
                    className="absolute bottom-5 left-5 right-5 bg-black/85 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3.5 flex items-center justify-between text-white shadow-2xl
                               group-hover/img:-translate-y-2 group-hover/img:scale-[1.02] transition-transform duration-500 ease-out"
                  >
                    <div>
                      <h5 className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                        {leader.name}
                        <ShieldCheck className="w-4 h-4 text-amber-400 inline shrink-0" />
                      </h5>
                      <span className="text-xs text-amber-400 font-semibold">{leader.role}</span>
                    </div>
                    <span className="text-[0.68rem] font-bold text-emerald-300 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-400/30">
                      {leader.experience}
                    </span>
                  </div>
                </motion.div>

                {/* Decorative Rotating Accent Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full border-2 border-dashed border-amber-500/25 -z-10"
                />
              </motion.div>

              {/* Text Column */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <motion.span
                    variants={childVariants}
                    className="text-[0.72rem] font-black uppercase tracking-widest text-amber-700 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-4"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    {leader.badge}
                  </motion.span>

                  <motion.h3
                    variants={childVariants}
                    className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#071420] mb-5 leading-tight"
                  >
                    {leader.headline}
                  </motion.h3>

                  <motion.p
                    variants={childVariants}
                    className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 font-medium text-justify"
                  >
                    {leader.quote1}
                  </motion.p>

                  <motion.p
                    variants={childVariants}
                    className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-medium text-justify"
                  >
                    {leader.quote2}
                  </motion.p>
                </div>

                {/* Interactive Stat Metrics Bar */}
                <motion.div
                  variants={childVariants}
                  className="grid grid-cols-3 gap-4 py-5 px-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm mb-8"
                >
                  {leader.stats.map((st, i) => (
                    <div
                      key={i}
                      className="text-center cursor-default group/stat hover:-translate-y-1 transition-transform duration-300"
                    >
                      <span className="block font-heading text-xl sm:text-2xl font-black text-[#071420] group-hover/stat:text-amber-600 transition-colors">
                        {st.value}
                      </span>
                      <span className="block text-[0.7rem] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                        {st.label}
                      </span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Action Button */}
                <motion.div variants={childVariants}>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=Hi!%20I%20would%20like%20to%20connect%20with%20${encodeURIComponent(leader.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2.5 px-8 py-3.5 shadow-lg text-xs hover:scale-105 active:scale-95 transition-transform duration-200"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Connect With {leader.name.split(' ')[0]}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
