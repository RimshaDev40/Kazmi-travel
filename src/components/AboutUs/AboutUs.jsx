import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Briefcase, Headphones, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const fadeLeft = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const highlights = [
  {
    icon: Award,
    title: 'Over 10 Years Experience',
    desc: 'Serving travelers nationally and internationally since founding.'
  },
  {
    icon: Globe,
    title: 'Global Travel Network',
    desc: 'Partnerships with airlines, hotels and visa agencies worldwide.'
  },
  {
    icon: Briefcase,
    title: 'B2B & B2C Services',
    desc: 'Solutions designed for individual travelers and travel agents.'
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    desc: 'Our dedicated team is always available to assist you.'
  }
];

const AboutUs = () => (
  <section id="about" className="py-28 bg-white relative overflow-hidden">
    {/* Ambient Glows */}
    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute bottom-0 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

    <div className="max-w-[1240px] mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Column: Image Banner with Interactive Parallax & Animated Rings */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group border border-slate-100">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=700&q=80"
              alt="Kazmi Paradise Travel team"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Floating Trust Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.08, rotate: 2 }}
              className="absolute bottom-6 right-6 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-2xl px-6 py-4 text-center shadow-[0_15px_35px_rgba(200,151,58,0.45)] border border-white/30 backdrop-blur-md cursor-pointer"
            >
              <span className="block font-heading text-3xl font-black text-white leading-none drop-shadow">10+</span>
              <span className="block text-white/90 text-[0.68rem] font-bold uppercase tracking-wider mt-1 drop-shadow">Years of Trust</span>
            </motion.div>

            {/* Top Left Verified Badge */}
            <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md border border-white/20 text-emerald-400 font-bold text-xs px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Certified Travel Wholesaler</span>
            </div>
          </div>

          {/* Continuous Rotating & Pulsing Decorative Diagonal Rings */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.12, 1],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
              scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full border-[6px] border-dashed border-amber-500/40 -z-10 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
          />

          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 1.15, 1],
            }}
            transition={{
              rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute -top-8 -right-8 w-32 h-32 rounded-full border-[5px] border-dashed border-emerald-500/40 -z-10 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
          />
        </motion.div>

        {/* Right Column: Text & 4 Interactive Tilted Mini Cards */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeading badge="About Us" title="Kazmi Paradise Travel & Tours" align="left" light={false} />

          <div className="space-y-3 text-slate-600 leading-relaxed text-[0.97rem] mb-8">
            <p className="text-justify">
              <strong className="text-slate-900 font-bold">Kazmi Groups of Companies</strong> is a trusted name in Pakistan's travel
              and tourism industry. Our primary travel business, <strong className="text-slate-900 font-bold">Kazmi Paradise
              Travel &amp; Tours</strong>, has been serving individual travelers, families, and corporate clients for over a decade.
            </p>
            <p className="text-justify">
              We specialize in Umrah packages, group air travel, visa services, hotel allotments, and B2B portal
              solutions — making every travel experience seamless, affordable and memorable.
            </p>
            <p className="text-justify">
              With a customer-first approach and a team of experienced travel professionals, we deliver
              services you can rely on — from the first enquiry to safe return.
            </p>
          </div>

          {/* Highlights Grid with 3D Tilt & Icon 360 Rotation on Hover */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => {
              const IconComp = h.icon;
              const tiltAngle = i % 2 === 0 ? -2 : 2;

              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 30, rotate: tiltAngle }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  whileHover={{
                    scale: 1.04,
                    y: -6,
                    rotate: tiltAngle,
                    zIndex: 20
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group relative flex items-center gap-3.5 bg-white rounded-2xl p-4 shadow-md hover:shadow-[0_20px_45px_rgba(200,151,58,0.22)] border border-slate-100 hover:border-amber-400/80 transition-all duration-300 cursor-pointer"
                >
                  {/* Icon Box with 360 Spin on Hover */}
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-amber-600 group-hover:text-slate-950 group-hover:border-transparent transition-all duration-500 shadow-sm">
                    <IconComp className="w-6 h-6 transition-transform duration-700 ease-out group-hover:rotate-[360deg] group-hover:scale-110" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <strong className="block text-sm text-slate-900 mb-0.5 group-hover:text-amber-700 transition-colors font-bold">
                      {h.title}
                    </strong>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {h.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default AboutUs;
