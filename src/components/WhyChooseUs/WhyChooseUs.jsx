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
  },
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Over a decade of industry experience gives us the knowledge to serve you better than anyone else.',
  },
  {
    icon: Globe,
    title: 'Multiple Travel Solutions',
    desc: 'From Umrah to Dubai visas, group seats to hotel allotments — we cover it all under one roof.',
  },
  {
    icon: Handshake,
    title: 'Trusted B2B Partnerships',
    desc: 'We maintain strong relationships with airlines, hotels, and visa agencies for best rates and service.',
  },
  {
    icon: Laptop,
    title: 'Easy Portal Access',
    desc: 'Our digital portals make managing bookings, visas, and allotments fast and hassle-free for agents.',
  },
  {
    icon: Sliders,
    title: 'Customized Travel Solutions',
    desc: 'Whether it\'s a family Umrah or a corporate group tour, we tailor packages to your requirements.',
  },
  {
    icon: Headphones,
    title: '24/7 Customer Support',
    desc: 'We\'re always available to answer questions, resolve issues, and guide you through your journey.',
  },
  {
    icon: Heart,
    title: 'Customer-Focused Approach',
    desc: 'Your satisfaction is our mission. We go above and beyond to ensure you travel with confidence.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          badge="Why Choose Us"
          title="What Sets Us Apart"
          subtitle="We believe great travel starts with great service. Here's why thousands of travelers and agents trust Kazmi Paradise."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const IconComponent = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-card-hover hover:border-accent/30 hover:bg-white transition-all duration-300 text-center flex flex-col items-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent-dark mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
