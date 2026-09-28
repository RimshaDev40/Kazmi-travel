import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import PortalCard from '../PortalCard/PortalCard';
import { services } from '../../data/services';

const Portals = () => {
  return (
    <section id="portals" className="py-28 bg-slate-50 relative overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Our Portals"
          title="Business Service Portals"
          subtitle="Access our existing digital portals for managing travel services, B2B operations, and more — all in one place."
          light={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <PortalCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portals;
