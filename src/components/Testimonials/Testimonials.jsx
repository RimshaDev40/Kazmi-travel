import React, { useState } from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import { testimonials } from '../../data/testimonials';

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const current = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Real experiences from real travelers. Client feedback from across Pakistan and international trips."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {current.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  page === i ? 'w-8 bg-accent' : 'w-2.5 bg-gray-300 hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
