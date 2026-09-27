import React from 'react';
import { MapPin } from 'lucide-react';

const DestinationCard = ({ destination }) => {
  const { name, image, tag, tagColor } = destination;

  return (
    <div
      className="pluto-card"
    >
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="pluto-card-img"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Tag */}
      {tag && (
        <span
          className="absolute top-3 left-1/2 -translate-x-1/2 text-white text-[0.6rem] font-extrabold 
                     px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow backdrop-blur-md whitespace-nowrap z-10"
          style={{ background: tagColor }}
        >
          {tag}
        </span>
      )}

      {/* Destination label */}
      <div className="absolute bottom-0 left-0 right-0 p-3 text-center z-10">
        <div className="flex items-center justify-center gap-1">
          <MapPin className="w-3 h-3 text-accent-light shrink-0" />
          <span className="text-white font-bold text-[0.78rem] leading-tight">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
