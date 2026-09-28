import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Trophy, Award, Users, Sparkles, Building, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const milestones = [
  {
    year: '2022',
    badge: 'Foundation',
    title: 'Kazmi Paradise Travel & Tours Established',
    description: 'Launched operations in Pakistan with direct Umrah ticketing, VIP Makkah hotel allotments, and Saudi ground transportation contracts.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80',
    stats: '10,000+ Pilgrims Served'
  },
  {
    year: '2023',
    badge: 'Achievement',
    title: 'IATA & Ministry of Hajj Accreditation',
    description: 'Secured official IATA accreditation and Saudi Ministry authorization for direct E-Visa issuance and real-time BRN processing.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    stats: '150+ B2B Partner Network'
  },
  {
    year: '2024',
    badge: 'Expansion',
    title: '50,000+ Happy Travelers & B2B Portal Launch',
    description: "Pioneered Pakistan's fastest B2B sub-agent portal with direct Makkah/Madinah inventory and instant wallet credit processing.",
    icon: Users,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    stats: '500+ Agency Portals Live'
  },
  {
    year: '2025',
    badge: 'Excellence Award',
    title: 'Best B2B Travel Wholesaler of the Year',
    description: 'Honored with the National Travel Excellence Award for outstanding B2B portal uptime, group flights, and customer satisfaction.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    stats: '98% Client Satisfaction'
  },
  {
    year: '2026',
    badge: 'Future-Ready',
    title: 'Next-Gen AI & Global Allotments Network',
    description: 'Expanding direct group flight seat allotments with 15+ international airlines and real-time AI hotel API synchronization.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    stats: 'Global Allotment Network'
  }
];

/*
 SVG Path Math:
 ─────────────────────────────────────────────────────────────────
 viewBox: 0 0 1280 2200   preserveAspectRatio="none"
 
 Card approximate height: image h-40 (160px) + content p-5 (~130px) = 290px
 Gap between rows (gap-24) = 96px
 
 Row card-centre Y values (actual px from container top):
   Card 1: 290/2             = 145px
   Card 2: 145 + 290 + 96   = 531px   (145 + 386)
   Card 3: 531 + 386         = 917px
   Card 4: 917 + 386         = 1303px
   Card 5: 1303 + 386        = 1689px
 
 Total container height ≈ 5×290 + 4×96 = 1834px
 Scale factor = 2200 / 1834 = 1.1995
 
 SVG Y per card centre:
   Card 1: 145 × 1.1995 ≈  174  → use 174
   Card 2: 531 × 1.1995 ≈  637  → use 637
   Card 3: 917 × 1.1995 ≈ 1100  → use 1100
   Card 4: 1303 × 1.1995 ≈ 1562 → use 1562
   Card 5: 1689 × 1.1995 ≈ 2026 → viewBox only 2200 so use 2025
 
 Horizontal positions (viewBox X for card node centers):
   centre column X = 640  (midpoint of 1280 viewBox)
   right-side surge X = 760  (swing right for even cards passing right)
   left-side surge X  = 520  (swing left for odd cards passing left)
 
 Bezier control point strategy:
   span = Y_next - Y_curr
   cp1_y = Y_curr + span × 0.40   (leave current node horizontally)
   cp2_y = Y_next - span × 0.40   (arrive at next node horizontally)
*/

const sineWave = `
  M 640 174
  C 760 329, 760 482, 640 637
  C 520 792, 520 945, 640 1100
  C 760 1255, 760 1407, 640 1562
  C 520 1717, 520 1870, 640 2025
`.trim().replace(/\s+/g, ' ');

const JourneyTimeline = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 30%', 'end 85%'],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      className="py-28 bg-gradient-to-b from-[#071420] via-[#091d30] to-[#071420] text-white relative overflow-hidden"
    >
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[760px] h-[760px] bg-emerald-500/8 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Our Legacy &amp; Growth"
          title="The Journey of Kazmi Paradise"
          subtitle="From a visionary Umrah provider to Pakistan's premier B2B travel portal and corporate travel wholesaler."
          light={true}
        />

        {/* Timeline wrapper */}
        <div className="relative mt-20">

          {/* ── SVG Sine-Wave (desktop only) ────────────── */}
          <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1280 2200"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%"   stopColor="#34D399" />
                  <stop offset="50%"  stopColor="#10B981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* ghost track */}
              <path
                d={sineWave}
                stroke="rgba(52,211,153,0.15)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="10 7"
              />

              {/* animated scroll-drawn line */}
              <motion.path
                d={sineWave}
                stroke="url(#emeraldGrad)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#softGlow)"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* ── Milestone rows ─────────────────────────── */}
          <div className="flex flex-col gap-16 lg:gap-24">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`relative flex flex-col lg:flex-row items-center justify-between gap-6 z-10 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className="w-full lg:w-[660px] shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="group relative bg-[#0c1e2e]/90 border border-white/15 hover:border-emerald-400/70 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl hover:shadow-[0_24px_48px_rgba(37,211,102,0.22)] transition-all duration-500 cursor-pointer"
                    >
                      {/* Image banner */}
                      <div className="relative h-40 w-full overflow-hidden bg-gray-900">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e2e] via-[#0c1e2e]/20 to-transparent" />

                        <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-10">
                          <span className="text-[0.68rem] font-black uppercase tracking-wider text-emerald-300 bg-[#071420]/85 backdrop-blur-md border border-emerald-400/40 px-3 py-1 rounded-full">
                            {item.badge}
                          </span>
                          <span className="font-heading text-base font-black text-amber-400 bg-[#071420]/85 backdrop-blur-md border border-amber-400/40 px-3 py-0.5 rounded-full">
                            {item.year}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6">
                        <h4 className="font-heading text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300 leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed mb-4 group-hover:text-white/90 transition-colors duration-300">
                          {item.description}
                        </p>
                        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold">
                          <span className="flex items-center gap-2 text-emerald-400">
                            <CheckCircle2 className="w-4 h-4" />
                            {item.stats}
                          </span>
                          <span className="flex items-center gap-1 text-amber-400 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all duration-300">
                            Explore <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center node icon */}
                  <div className="hidden lg:flex items-center justify-center shrink-0 z-20">
                    <motion.div
                      whileHover={{ scale: 1.25 }}
                      className="w-14 h-14 rounded-full flex items-center justify-center border-2 border-emerald-400 text-emerald-400 shadow-[0_0_28px_rgba(52,211,153,0.55)] bg-gradient-to-br from-[#0c1e2e] to-[#071420]"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Empty spacer */}
                  <div className="hidden lg:block w-full lg:w-[660px] shrink-0" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
