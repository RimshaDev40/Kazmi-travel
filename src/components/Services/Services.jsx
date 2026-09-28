import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import ServiceCard from '../ServiceCard/ServiceCard';
import { services } from '../../data/services';

const Services = () => {
  return (
    <section id="services" className="py-28 bg-slate-50 relative overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <SectionHeading
          badge="What We Offer"
          title="Our Travel Services"
          subtitle="We provide a complete suite of travel solutions designed for both individual travelers and professional B2B partners."
          light={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
