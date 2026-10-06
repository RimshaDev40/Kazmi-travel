import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink, CheckCircle } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const row1Reviews = [
  {
    id: 1,
    name: 'Karisa Bachani',
    initials: 'KB',
    bgColor: 'bg-indigo-600',
    time: '1 week ago',
    stars: 5,
    tag: 'Corporate Travel Partner',
    review: 'Had a great experience with Kazmi Paradise Travels! The team was professional, responsive, and handled everything smoothly from Umrah visas to flight bookings. Highly recommended!'
  },
  {
    id: 2,
    name: 'Ajay Bale',
    initials: 'AB',
    bgColor: 'bg-amber-600',
    time: '2 weeks ago',
    stars: 5,
    tag: 'Umrah Package Family',
    review: 'I am thankful to the entire Kazmi team for helping my family get VIP hotel allotments in Makkah near Haram. The entire team kept us updated throughout our trip.'
  },
  {
    id: 3,
    name: 'Mohammed K.',
    initials: 'MK',
    bgColor: 'bg-purple-600',
    time: '1 month ago',
    stars: 5,
    tag: 'B2B Sub-Agent',
    review: 'Exceptional service! Kazmi Paradise handled our agency group flight allotments and Dubai visas flawlessly. High commission, fast wallet processing, and 24/7 support!'
  },
  {
    id: 4,
    name: 'Sarah L.',
    initials: 'SL',
    bgColor: 'bg-emerald-600',
    time: '3 weeks ago',
    stars: 5,
    tag: 'MICE Delegation',
    review: 'Outstanding corporate travel management. They saved our company thousands on bulk flight bookings and airport VIP transfers. Truly a 5-star partner!'
  },
  {
    id: 5,
    name: 'Ahmed C.',
    initials: 'AC',
    bgColor: 'bg-rose-600',
    time: '1 month ago',
    stars: 5,
    tag: 'Dubai Visa & Tours',
    review: 'The platinum standard in travel services! Instant Dubai express visa approval within 24 hours. The staff knows their job inside out!'
  }
];

const row2Reviews = [
  {
    id: 6,
    name: 'Tariq Mahmood',
    initials: 'TM',
    bgColor: 'bg-blue-600',
    time: '2 days ago',
    stars: 5,
    tag: 'Umrah VIP Group Leader',
    review: 'Flawless Umrah arrangements for our group of 45 pilgrims! Makkah Clock Tower 5-star hotel & VIP luxury transport was perfectly managed.'
  },
  {
    id: 7,
    name: 'Fatima Zahra',
    initials: 'FZ',
    bgColor: 'bg-pink-600',
    time: '5 days ago',
    stars: 5,
    tag: 'Family Holiday Dubai',
    review: 'Best luxury holiday package for Dubai & Baku! Return flights, e-visas, desert safari, and hotel bookings were all handled effortlessly.'
  },
  {
    id: 8,
    name: 'Usman Sheikh',
    initials: 'US',
    bgColor: 'bg-teal-600',
    time: '1 week ago',
    stars: 5,
    tag: 'Corporate Event Manager',
    review: 'Organized our annual company MICE conference in Dubai for 120 executives. Exceptional execution, zero delays, and great pricing!'
  },
  {
    id: 9,
    name: 'Rehan Siddiqui',
    initials: 'RS',
    bgColor: 'bg-amber-600',
    time: '2 weeks ago',
    stars: 5,
    tag: 'B2B Travel Agent Lahore',
    review: 'As a travel agency owner, Kazmi B2B portal has significantly increased our profit margins with direct BRN rates and instant Umrah visas!'
  },
  {
    id: 10,
    name: 'Bilal Khan',
    initials: 'BK',
    bgColor: 'bg-slate-800',
    time: '3 weeks ago',
    stars: 5,
    tag: 'Flight Seat Allotment Client',
    review: 'Got guaranteed PIA & Saudi Airlines group seat allotments during peak Ramadan season. Top notch service and instant confirmation.'
  }
];

const ReviewCard = ({ item }) => (
  <div
    className="w-[340px] sm:w-[380px] shrink-0 bg-white text-slate-900 rounded-3xl p-6 shadow-xl
               hover:shadow-[0_25px_60px_rgba(245,158,11,0.3)] hover:scale-105 hover:-translate-y-2.5
               transition-all duration-300 ease-out border border-slate-100/90
               flex flex-col justify-between select-none cursor-pointer relative z-10 hover:z-50 will-change-transform"
  >
    <div>
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-11 h-11 rounded-full ${item.bgColor} text-white font-bold text-sm flex items-center justify-center shadow-md shrink-0`}>
            {item.initials}
          </div>
          <div>
            <h5 className="font-extrabold text-slate-900 text-sm truncate max-w-[150px]">{item.name}</h5>
            <span className="text-[0.68rem] text-slate-400 font-medium block">{item.time}</span>
          </div>
        </div>

        {/* Google Badge */}
        <span className="text-[0.65rem] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 flex items-center gap-1 shrink-0">
          <span className="text-blue-500 font-black">G</span> Google
        </span>
      </div>

      {/* Rating Stars */}
      <div className="flex items-center gap-1 text-amber-400 mb-3">
        {[...Array(item.stars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-400" />
        ))}
        <span className="text-[0.7rem] font-bold text-slate-500 ml-1.5 truncate">{item.tag}</span>
      </div>

      {/* Quote */}
      <div className="relative pt-1">
        <Quote className="w-5 h-5 text-amber-500/20 absolute -top-2 -left-1 rotate-180 pointer-events-none" />
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed relative z-10 pl-2 line-clamp-4 font-medium">
          {item.review}
        </p>
      </div>
    </div>

    {/* Verified Footer */}
    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[0.72rem] text-emerald-600 font-bold">
      <span className="flex items-center gap-1.5">
        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Verified Google Review
      </span>
    </div>
  </div>
);

const ReviewsSlider = () => {
  const row1Duplicated = [...row1Reviews, ...row1Reviews, ...row1Reviews];
  const row2Duplicated = [...row2Reviews, ...row2Reviews, ...row2Reviews];

  return (
    <section className="py-28 bg-[#071420] text-white relative overflow-hidden">
      {/* CSS Keyframe animations for seamless hover-paused marquee */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }
        @keyframes marqueeRight {
          0% { transform: translate3d(-33.3333%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-left-track {
          animation: marqueeLeft 7.5s linear infinite;
          will-change: transform;
        }
        .marquee-right-track {
          animation: marqueeRight 7.5s linear infinite;
          will-change: transform;
        }
        .marquee-left-track:hover,
        .marquee-right-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 mb-10">
        <SectionHeading
          badge="Verified Client Feedback"
          title="What Our Travelers & B2B Partners Say"
          subtitle="Real reviews from corporate partners, pilgrim families, and travel agency managers on Google &amp; Trustpilot."
          light={true}
        />

        {/* Overall Rating Pop-up Banner with Moving Light Beam */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 140, damping: 14 }}
          className="flex flex-col items-center justify-center text-center mt-4"
        >
          <div className="relative p-[2px] rounded-full overflow-hidden shadow-2xl">
            {/* Moving Light Beam on Rating Badge */}
            <motion.div
              className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,#f59e0b_280deg,#10b981_340deg,transparent_360deg)] opacity-90"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            />

            <div className="relative z-10 inline-flex items-center gap-3 bg-[#071420] border border-white/20 px-8 py-3 rounded-full backdrop-blur-md">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-heading font-black text-xl text-white">4.9 / 5.0</span>
              <span className="text-xs text-amber-300 font-semibold">(850+ Verified Client Reviews)</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dual Row Continuous Infinite Horizontal Marquee */}
      <div className="space-y-2 relative py-2">
        {/* ROW 1: Right to Left */}
        <div className="overflow-hidden py-7 -my-4">
          <div className="flex gap-6 shrink-0 marquee-left-track">
            {row1Duplicated.map((item, idx) => (
              <ReviewCard key={`r1-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* ROW 2: Left to Right */}
        <div className="overflow-hidden py-7 -my-4">
          <div className="flex gap-6 shrink-0 marquee-right-track">
            {row2Duplicated.map((item, idx) => (
              <ReviewCard key={`r2-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Google Reviews CTA Button */}
      <div className="max-w-[1240px] mx-auto px-6 mt-12 flex justify-center relative z-10">
        <motion.a
          whileHover={{ scale: 1.06, y: -3 }}
          whileTap={{ scale: 0.97 }}
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold text-sm px-9 py-4 rounded-full shadow-2xl hover:shadow-[0_15px_40px_rgba(245,158,11,0.4)] transition-all duration-300"
        >
          <span className="text-slate-950 font-black text-lg">G</span>
          Read More Reviews on Google
          <ExternalLink className="w-4 h-4 ml-1" />
        </motion.a>
      </div>
    </section>
  );
};

export default ReviewsSlider;
