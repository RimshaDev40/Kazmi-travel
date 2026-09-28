import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const WHATSAPP = '923001234567';

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
  },
  {
    id: 'ali',
    name: 'Muhammad Ali',
    role: 'Head of Umrah & Saudi Operations',
    experience: '12+ Years Ground Operations',
    badge: 'SAUDI GROUND & VISA OPERATIONS',
    headline: 'Direct Allotments & Flawless Ground Management',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80',
    quote1: 'On-ground execution in Makkah and Madinah is where trust is earned. We contract directly with top-rated 5-star & 4-star hotels and manage our own VIP luxury transport fleet in Saudi Arabia.',
    quote2: 'Our proprietary E-Visa application pipeline ensures real-time BRN generation and zero delays for pilgrims, corporate groups, and sub-agent delegations.',
    stats: [
      { label: 'Hotel Allotments', value: '1,200+ Rooms' },
      { label: 'E-Visa Approval Rate', value: '99.8%' },
      { label: 'Ground VIP Vehicles', value: '45+ Vans/Buses' }
    ],
    imageOnLeft: false
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1],
      staggerChildren: 0.15
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
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
          subtitle="Visionary founders and ground operation heads driving Pakistan's premier B2B travel wholesaler."
          light={false}
        />

        {/* Stacked 2 Leaders Showcase with Premium Scroll Animations */}
        <div className="flex flex-col gap-20 mt-12">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.id}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid lg:grid-cols-12 gap-12 items-center bg-gradient-to-br from-slate-50 via-white to-slate-50/80 border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-xl hover:shadow-[0_25px_60px_rgba(7,20,32,0.1)] transition-shadow duration-500 backdrop-blur-md relative overflow-hidden group"
            >
              {/* Subtle Top Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />

              {/* Image Column with 3D Float Hover Effect */}
              <motion.div
                variants={childVariants}
                className={`lg:col-span-5 relative ${leader.imageOnLeft ? '' : 'lg:order-last'}`}
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -6, rotate: leader.imageOnLeft ? -1 : 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group/img cursor-pointer"
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-[480px] object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover/img:opacity-75 transition-opacity duration-500" />

                  {/* Floating Leader Identity Badge */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute bottom-5 left-5 right-5 bg-black/85 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3.5 flex items-center justify-between text-white shadow-xl"
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
                  </motion.div>
                </motion.div>

                {/* Decorative Rotating Accent Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-6 -right-6 w-36 h-36 rounded-full border-2 border-dashed border-amber-500/25 -z-10"
                />
              </motion.div>

              {/* Text Column with Staggered Fade Up */}
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
                    "{leader.quote1}"
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
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="text-center cursor-default group/stat"
                    >
                      <span className="block font-heading text-xl sm:text-2xl font-black text-[#071420] group-hover/stat:text-amber-600 transition-colors">
                        {st.value}
                      </span>
                      <span className="block text-[0.7rem] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                        {st.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Action Button */}
                <motion.div variants={childVariants}>
                  <motion.a
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href={`https://wa.me/${WHATSAPP}?text=Hi!%20I%20would%20like%20to%20connect%20with%20${encodeURIComponent(leader.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2.5 px-8 py-3.5 shadow-lg text-xs"
                  >
                    <PhoneCall className="w-4 h-4" />
                    Connect With {leader.name.split(' ')[0]}
                  </motion.a>
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
