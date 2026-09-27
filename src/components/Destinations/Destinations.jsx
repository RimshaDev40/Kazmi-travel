import React, { useEffect, useRef, useState } from 'react';
import { MapPin, X } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { destinations } from '../../data/destinations';

/* ── Triple list for seamless infinite loop ── */
const loopDests = [...destinations, ...destinations, ...destinations];

const SPEED     = 1.4;    // px per frame — increased speed
const MAX_ANGLE = 65;     // deeper concave inward bend

const Destinations = () => {
  const trackRef      = useRef(null);
  const posRef        = useRef(0);
  const pausedRef     = useRef(false);
  const rafRef        = useRef(null);
  const hoveredRef    = useRef(null); // tracks currently hovered card-wrapper el

  /* Active (clicked) card state */
  const [active, setActive] = useState(null); // { image, name, tag, tagColor }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      /* ── Move track ── */
      if (!pausedRef.current) {
        posRef.current += SPEED;
        const oneThird = track.scrollWidth / 3;
        if (posRef.current >= oneThird) posRef.current -= oneThird;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }

      /* ── Dynamic rotateY + hover scale per card ── */
      const vpCx = window.innerWidth / 2;
      track.querySelectorAll('.pluto-card-wrapper').forEach((card) => {
        const r      = card.getBoundingClientRect();
        const cardCx = r.left + r.width / 2;
        const norm   = (cardCx - vpCx) / vpCx;   // -1 … +1
        const rotY   = -(norm * MAX_ANGLE);        // concave inward
        const tz     = -Math.abs(norm) * 80;       // deeper depth recession
        const isHov  = hoveredRef.current === card;
        const sc     = isHov ? 1.15 : 1;           // hover scale
        card.style.transform = `rotateY(${rotY.toFixed(2)}deg) translateZ(${tz.toFixed(2)}px) scale(${sc})`;
        card.style.zIndex    = isHov ? '50' : 'auto';
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleCardClick = (dest) => {
    pausedRef.current = true;
    setActive(dest);
  };
  const closeActive = () => {
    setActive(null);
    pausedRef.current = false;
  };

  return (
    <section id="destinations" className="py-24 bg-white overflow-hidden">
      {/* Heading */}
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          badge="Explore the World"
          title="Destinations We Love"
          subtitle="A glimpse of the destinations we craft for our clients — in motion, around the world."
        />
      </div>

      {/* ── 3D Perspective Stage ── */}
      <div
        className="relative overflow-hidden"
        style={{
          perspective: '900px',
          perspectiveOrigin: '50% 50%',
          padding: '52px 0 36px',
          maskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
        }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { if (!active) pausedRef.current = false; }}
      >
        {/* Gold radial glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 blur-3xl opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse,#c8973a,transparent 70%)' }}
        />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex gap-3 w-max"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {loopDests.map((dest, i) => (
            <div
              key={`${dest.id}-${i}`}
              className="pluto-card-wrapper"
              style={{ transformStyle: 'preserve-3d', cursor: 'pointer' }}
              onMouseEnter={(e) => { hoveredRef.current = e.currentTarget; pausedRef.current = true; }}
              onMouseLeave={() => { hoveredRef.current = null; if (!active) pausedRef.current = false; }}
              onClick={() => handleCardClick(dest)}
            >
              {/* Card */}
              <div className="pluto-card">
                <img src={dest.image} alt={dest.name} loading="lazy" className="pluto-card-img" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                {dest.tag && (
                  <span
                    className="absolute top-3 left-1/2 -translate-x-1/2 text-white text-[0.58rem] font-extrabold
                               px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md whitespace-nowrap z-10"
                    style={{ background: dest.tagColor }}
                  >
                    {dest.tag}
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center z-10">
                  <div className="flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3 text-amber-300 shrink-0" />
                    <span className="text-white font-bold text-[0.76rem]">{dest.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Destination pill tags */}
      <div className="max-w-[1200px] mx-auto px-6 mt-2">
        <div className="flex flex-wrap justify-center gap-2">
          {destinations.map((dest) => (
            <span
              key={dest.id}
              className="text-[0.72rem] font-semibold text-gray-500 border border-gray-200 px-3 py-1 rounded-full
                         hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 cursor-default"
            >
              {dest.name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Click Modal – zoomed card ── */}
      {active && (
        <div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={closeActive}
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl cursor-default"
            style={{ width: 'clamp(260px,40vw,420px)', aspectRatio: '3/4' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Zoomed image */}
            <img
              src={active.image}
              alt={active.name}
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* Tag */}
            {active.tag && (
              <span
                className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-[0.68rem] font-extrabold
                           px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-md"
                style={{ background: active.tagColor }}
              >
                {active.tag}
              </span>
            )}

            {/* Name */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="text-white font-bold text-lg">{active.name}</span>
              </div>
              <p className="text-white/70 text-xs">{active.description}</p>
            </div>

            {/* Close */}
            <button
              onClick={closeActive}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md
                         flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Destinations;
