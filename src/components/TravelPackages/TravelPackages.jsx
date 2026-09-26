import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import PackageCard from '../PackageCard/PackageCard';
import { packages } from '../../data/packages';

const TravelPackages = () => {
  return (
    <section id="packages" className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          badge="Travel Packages"
          title="Curated Travel Packages"
          subtitle="Choose from our hand-picked travel packages — each designed to deliver exceptional value and unforgettable experiences."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 bg-white border border-gray-200 rounded-xl py-3 px-6 max-w-xl mx-auto shadow-sm">
          📌 Prices are subject to change based on season and availability. Contact us for latest pricing.
        </p>
      </div>
    </section>
  );
};

export default TravelPackages;
