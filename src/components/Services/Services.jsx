import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import ServiceCard from '../ServiceCard/ServiceCard';
import { services } from '../../data/services';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          badge="What We Offer"
          title="Our Travel Services"
          subtitle="We provide a complete suite of travel solutions designed for both individual travelers and professional B2B partners."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
