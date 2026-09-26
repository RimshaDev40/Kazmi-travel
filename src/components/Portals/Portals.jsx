import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import PortalCard from '../PortalCard/PortalCard';
import { services } from '../../data/services';

const Portals = () => {
  return (
    <section id="portals" className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          badge="Our Portals"
          title="Business Service Portals"
          subtitle="Access our existing digital portals for managing travel services, B2B operations, and more — all in one place."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <PortalCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portals;
