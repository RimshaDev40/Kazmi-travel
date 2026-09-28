import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ShieldCheck, Award, Star, ExternalLink, Plane, Building2, Sparkles } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const awardsList = [
  {
    id: 1,
    title: 'Award Recognition 2025',
    subtitle: 'Outstanding Service Delivery & B2B Wholesaler of the Year',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    badge: 'National Tourism Summit',
    icon: Trophy
  },
  {
    id: 2,
    title: 'IATA Global Accreditation',
    subtitle: 'Industry Leadership & Direct Airline Allotment Authority',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
    badge: 'IATA Certified',
    icon: ShieldCheck
  },
  {
    id: 3,
    title: 'Saudi Ministry Hajj & Umrah Honor',
    subtitle: 'Excellence in Saudi E-Visa & Ground Logistics Management',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=600&q=80',
    badge: 'Kingdom Authorized',
    icon: Award
  },
  {
    id: 4,
    title: 'Future-Ready Brand of the Year',
    subtitle: 'Awarded at MarTech Leadership Summit & Travel Awards 2025',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    badge: 'MarTech Award 2025',
    icon: Star
  },
  {
    id: 5,
    title: 'Best B2B Flight Seat Provider',
    subtitle: 'Direct Group Flight Allotments with 15+ International Airlines',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80',
    badge: 'Aviation Excellence',
    icon: Plane
  },
  {
    id: 6,
    title: 'Luxury Corporate Wholesaler',
    subtitle: 'Tailored VIP Corporate Travel & MICE Event Logistics',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    badge: 'Corporate MICE Award',
    icon: Building2
  },
  {
    id: 7,
    title: 'Excellence in Travel Tech',
    subtitle: 'Real-Time Sub-Agent API Synchronization & Instant BRN Portal',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    badge: 'Tech Innovation 2025',
    icon: Sparkles
  },
  {
    id: 8,
    title: 'Pakistan Tourism Leadership',
    subtitle: 'Top Umrah & Domestic Group Ticketing Distributor Network',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    badge: 'National Leadership',
    icon: Trophy
  }
];

// Doubled array for infinite 3D marquee slider
const duplicatedAwards = [...awardsList, ...awardsList];

const AwardsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="awards" className="py-28 bg-[#071420] text-white relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Honors & Accreditations"
          title="Awards '25"
          subtitle="Recognized for excellence in corporate travel management, Umrah operations, and outstanding B2B portal delivery."
          light={true}
        />
      </div>

      {/* Pluto 3D Perspective Marquee Slider Container */}
      <div
        className="relative w-full overflow-hidden py-10 mt-4"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#071420] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#071420] to-transparent z-20 pointer-events-none" />

        {/* 3D Track with Accelerated Marquee Speed (20s duration) */}
        <motion.div
          className="flex h-full items-stretch"
          style={{ gap: '36px', transformStyle: 'preserve-3d' }}
          animate={isPaused ? {} : { x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear'
          }}
        >
          {duplicatedAwards.map((item, idx) => {
            const Icon = item.icon;
            const rotateYVal = idx % 2 === 0 ? 18 : -18;

            return (
              <div
                key={`${item.id}-${idx}`}
                className="relative shrink-0 overflow-visible group cursor-pointer transition-all duration-500"
                style={{
                  width: '280px',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div
                  className="bg-white text-slate-900 rounded-[28px] p-5 shadow-xl border border-slate-100/90 flex flex-col justify-between h-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)] group-hover:z-30"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: `translateZ(60px) rotateY(${rotateYVal}deg)`,
                    transition: 'transform 0.5s ease-out, shadow 0.5s ease-out, opacity 0.5s ease-out',
                    opacity: 0.9,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(120px) rotateY(0deg)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `translateZ(60px) rotateY(${rotateYVal}deg)`;
                    e.currentTarget.style.opacity = '0.9';
                  }}
                >
                  {/* Image Frame */}
                  <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-gray-900 mb-4 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-112 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-amber-400 text-[0.65rem] font-bold px-3 py-1 rounded-full border border-amber-400/40 shadow-md">
                      {item.badge}
                    </span>
                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-xs leading-relaxed font-medium line-clamp-3">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600 group-hover:text-emerald-600">
                      <span>Verified Achievement</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
