import React from 'react';
import { motion } from 'framer-motion';
import {
  Award, Users, Globe, Handshake, Laptop, Sliders, Headphones, Heart
} from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const features = [
  {
    icon: Award,
    title: 'Professional Travel Services',
    desc: 'Our experienced team ensures every detail of your travel is handled with expertise and care.',
    swingDuration: 3.6,
    swingDelay: 0
  },
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Over a decade of industry experience gives us the knowledge to serve you better than anyone else.',
    swingDuration: 4.0,
    swingDelay: 0.4
  },
  {
    icon: Globe,
    title: 'Multiple Travel Solutions',
    desc: 'From Umrah to Dubai visas, group seats to hotel allotments — we cover it all under one roof.',
    swingDuration: 3.8,
    swingDelay: 0.8
  },
  {
    icon: Handshake,
    title: 'Trusted B2B Partnerships',
    desc: 'We maintain strong relationships with airlines, hotels, and visa agencies for best rates and service.',
    swingDuration: 4.2,
    swingDelay: 0.2
  },
  {
    icon: Laptop,
    title: 'Easy Portal Access',
    desc: 'Our digital portals make managing bookings, visas, and allotments fast and hassle-free for agents.',
    swingDuration: 3.7,
    swingDelay: 0.6
  },
  {
    icon: Sliders,
    title: 'Customized Travel Solutions',
    desc: 'Whether it\'s a family Umrah or a corporate group tour, we tailor packages to your requirements.',
    swingDuration: 4.1,
    swingDelay: 0.3
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    desc: 'We\'re always available to answer questions, resolve issues, and guide you through your journey.',
    swingDuration: 3.9,
    swingDelay: 0.7
  },
  {
    icon: Heart,
    title: 'Customer-Focused Approach',
    desc: 'Your satisfaction is our mission. We go above and beyond to ensure you travel with confidence.',
    swingDuration: 4.3,
    swingDelay: 0.5
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-28 bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-amber-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Why Choose Us"
          title="What Sets Us Apart"
          subtitle="We believe great travel starts with great service. Here's why thousands of travelers and agents trust Kazmi Paradise."
          light={false}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {features.map((f, i) => {
            const IconComponent = f.icon;

            return (
              /* Continuous Pendulum Oscillating Motion Container */
              <motion.div
                key={f.title}
                style={{ transformOrigin: 'top center' }}
                animate={{
                  rotate: i % 2 === 0 ? [-3.5, 3.5, -3.5] : [3.5, -3.5, 3.5]
                }}
                transition={{
                  duration: f.swingDuration,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                  delay: f.swingDelay
                }}
                className="relative pt-3"
              >
                {/* Pendulum Card */}
                <motion.div
                  whileHover={{ scale: 1.06, zIndex: 30 }}
                  className="bg-slate-50/90 rounded-3xl p-7 border-t-4 border-t-amber-400 border-x border-b border-slate-200/90 shadow-lg
                             hover:shadow-[0_20px_50px_rgba(245,158,11,0.25)] hover:border-t-amber-500 hover:bg-white
                             transition-all duration-300 text-center flex flex-col items-center group cursor-pointer relative mt-2"
                >
                  {/* Attached Solid Black Pin Dot at Top Center of Card */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 z-30 w-4 h-4 rounded-full bg-[#071420] border-2 border-amber-400 shadow-[0_2px_8px_rgba(7,20,32,0.4)] flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-amber-400" />
                  </div>

                  {/* Icon Box */}
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 mb-5 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-amber-600 group-hover:text-slate-950 transition-all duration-500 shadow-sm shrink-0 mt-2">
                    <IconComponent className="w-8 h-8 transition-transform duration-700 ease-out group-hover:rotate-[360deg] group-hover:scale-110" />
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-2.5 leading-snug group-hover:text-amber-700 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    {f.desc}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
