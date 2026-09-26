import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, Briefcase, Headphones } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const fadeLeft  = { hidden: { opacity: 0, x: -48 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } };
const fadeRight = { hidden: { opacity: 0, x: 48  }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } } };

const highlights = [
  { icon: Award, title: 'Over 10 Years Experience', desc: 'Serving travelers nationally and internationally since founding.' },
  { icon: Globe, title: 'Global Travel Network',    desc: 'Partnerships with airlines, hotels and visa agencies worldwide.' },
  { icon: Briefcase, title: 'B2B & B2C Services',        desc: 'Solutions designed for individual travelers and travel agents.' },
  { icon: Headphones, title: '24/7 Customer Support',     desc: 'Our dedicated team is always available to assist you.' },
];

const AboutUs = () => (
  <section id="about" className="py-24 bg-gray-50">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          variants={fadeLeft} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=700&q=80"
              alt="Kazmi Paradise Travel team"
              className="w-full h-[480px] object-cover group-hover:scale-[1.04] transition-transform duration-500"
              loading="lazy"
            />
            {/* Gold badge */}
            <div className="absolute bottom-6 right-6 bg-gradient-to-br from-accent to-accent-dark rounded-2xl px-6 py-4 text-center shadow-2xl border border-white/20">
              <span className="block font-heading text-3xl font-extrabold text-white leading-none">10+</span>
              <span className="block text-white/90 text-xs font-bold uppercase tracking-wider mt-1">Years of Trust</span>
            </div>
          </div>
          {/* Decorative ring */}
          <div className="absolute -bottom-5 -left-5 w-36 h-36 rounded-full border-[6px] border-accent/20 -z-10" />
          <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full border-[4px] border-primary/15 -z-10" />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeRight} initial="hidden" whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <SectionHeading badge="About Us" title="Kazmi Paradise Travel & Tours" align="left" />

          <p className="text-gray-600 leading-relaxed mb-3 text-[0.97rem] text-justify">
            <strong className="text-gray-900">Kazmi Groups of Companies</strong> is a trusted name in Pakistan's travel
            and tourism industry. Our primary travel business, <strong className="text-gray-900">Kazmi Paradise
            Travel &amp; Tours</strong>, has been serving individual travelers, families, and corporate clients for over a decade.
          </p>
          <p className="text-gray-600 leading-relaxed mb-3 text-[0.97rem] text-justify">
            We specialize in Umrah packages, group air travel, visa services, hotel allotments, and B2B portal
            solutions — making every travel experience seamless, affordable and memorable.
          </p>
          <p className="text-gray-600 leading-relaxed mb-7 text-[0.97rem] text-justify">
            With a customer-first approach and a team of experienced travel professionals, we deliver
            services you can rely on — from the first enquiry to safe return.
          </p>

          {/* Highlights grid - Balanced Padding & Clean Alignment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {highlights.map((h, i) => {
              const IconComp = h.icon;
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 bg-white rounded-2xl p-3.5 px-4 shadow-card border border-gray-100
                             hover:border-accent/40 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent-dark shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-sm text-gray-900 mb-0.5 group-hover:text-primary transition-colors">{h.title}</strong>
                    <p className="text-xs text-gray-500 leading-relaxed">{h.desc}</p>
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
