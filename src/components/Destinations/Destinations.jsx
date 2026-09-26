import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import DestinationCard from '../DestinationCard/DestinationCard';
import { destinations } from '../../data/destinations';

const Destinations = () => {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          badge="Explore the World"
          title="Popular Destinations"
          subtitle="Discover our most sought-after travel destinations, carefully curated for exceptional travel experiences."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
