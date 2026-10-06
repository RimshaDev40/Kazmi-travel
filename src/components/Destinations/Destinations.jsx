import React, { useEffect, useRef, useState } from 'react';
import { MapPin, X } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import { destinations } from '../../data/destinations';

/* ── Triple list for seamless infinite loop ── */
const loopDests = [...destinations, ...destinations, ...destinations];

const SPEED     = 1.2;    // px per frame — smooth, elegant motion
const MAX_ANGLE = 50;     // concave inward bend angle

const Destinations = () => {
  const stageRef          = useRef(null);
  const trackRef          = useRef(null);
  const posRef            = useRef(0);
  const isStageHoveredRef = useRef(false);
  const hoveredIndexRef   = useRef(null); // tracks currently hovered card index
  const cardStatesRef     = useRef([]);
  const cardOffsetsRef    = useRef([]);
  const isVisibleRef      = useRef(true);
  const rafRef            = useRef(null);

  /* Active (clicked) card state */
  const [active, setActive] = useState(null); // { image, name, tag, tagColor }
  const activeRef = useRef(active);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    let oneThirdWidth = 0;
    let vw = window.innerWidth;

    const updateDimensions = () => {
      if (!track) return;
      vw = window.innerWidth;
      oneThirdWidth = track.scrollWidth / 3;
      const cards = track.querySelectorAll('.pluto-card-wrapper');
      cardOffsetsRef.current = Array.from(cards).map((card) => card.offsetLeft);
    };

    updateDimensions();

    // Recalculate on window resize or layout shift
    window.addEventListener('resize', updateDimensions);
    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(track);
    }

    // IntersectionObserver to pause animation when section is off-screen
    let io = null;
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      }, { threshold: 0.05 });
      io.observe(stage);
    }

    const animate = () => {
      if (isVisibleRef.current) {
        const isPaused = activeRef.current || isStageHoveredRef.current || hoveredIndexRef.current !== null;

        /* ── Move track ── */
        if (!isPaused) {
          posRef.current += SPEED;
          if (oneThirdWidth > 0 && posRef.current >= oneThirdWidth) {
            posRef.current -= oneThirdWidth;
          }
          track.style.transform = `translate3d(-${posRef.current.toFixed(2)}px, 0, 0)`;
        }

        /* ── PURE MATH calculation (0 DOM layout reads per frame = zero scroll stutter!) ── */
        const stageCenter = vw / 2;
        const stageHalfWidth = vw / 2;

        const cards = track.querySelectorAll('.pluto-card-wrapper');
        cards.forEach((card, i) => {
          const cardLeft = (cardOffsetsRef.current[i] !== undefined) ? cardOffsetsRef.current[i] : (i * 177);
          const cardWidth = 165;
          const cardCenter = cardLeft - posRef.current + cardWidth / 2;

          const norm = (cardCenter - stageCenter) / stageHalfWidth;   // -1 … +1
          const clampedNorm = Math.max(-1.2, Math.min(1.2, norm));

          const isHov = hoveredIndexRef.current === i;

          // Target 3D values: subtle, elegant zoom on hover!
          const targetRotY  = isHov ? 0 : -(clampedNorm * MAX_ANGLE);
          const targetTz    = isHov ? 30 : -Math.abs(clampedNorm) * 70;
          const targetScale = isHov ? 1.10 : 1.0;

          if (!cardStatesRef.current[i]) {
            cardStatesRef.current[i] = {
              rotY: targetRotY,
              tz: targetTz,
              scale: 1.0
            };
          }

          const state = cardStatesRef.current[i];
          // Smooth lerp (0.14) for silky 60fps pop-out animation
          state.rotY  += (targetRotY - state.rotY) * 0.14;
          state.tz    += (targetTz - state.tz) * 0.14;
          state.scale += (targetScale - state.scale) * 0.14;

          card.style.transform = `rotateY(${state.rotY.toFixed(2)}deg) translateZ(${state.tz.toFixed(2)}px) scale(${state.scale.toFixed(3)})`;
          card.style.zIndex = isHov || state.scale > 1.03 ? '100' : Math.max(1, Math.round(10 - Math.abs(clampedNorm) * 5)).toString();
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', updateDimensions);
      if (resizeObserver) resizeObserver.disconnect();
      if (io) io.disconnect();
    };
  }, []);

  const handleMouseMove = (e) => {
    isStageHoveredRef.current = true;
    if (!stageRef.current) return;
    const stageRect = stageRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (mouseY < stageRect.top || mouseY > stageRect.bottom) {
      hoveredIndexRef.current = null;
      return;
    }

    let found = null;
    const offsets = cardOffsetsRef.current;
    for (let i = 0; i < loopDests.length; i++) {
      const cardLeft = (offsets[i] !== undefined) ? offsets[i] : (i * 177);
      const screenLeft = stageRect.left + cardLeft - posRef.current;
      const screenRight = screenLeft + 165;
      if (mouseX >= screenLeft && mouseX <= screenRight) {
        found = i;
        break;
      }
    }
    hoveredIndexRef.current = found;
  };

  const handleMouseLeaveStage = () => {
    isStageHoveredRef.current = false;
    hoveredIndexRef.current = null;
  };

  const handleCardClick = (dest) => {
    setActive(dest);
  };
  const closeActive = () => {
    setActive(null);
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
        ref={stageRef}
        className="relative overflow-hidden select-none"
        style={{
          perspective: '900px',
          perspectiveOrigin: '50% 50%',
          padding: '52px 0 36px',
          maskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeaveStage}
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
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
          {loopDests.map((dest, i) => (
            <div
              key={`${dest.id}-${i}`}
              className="pluto-card-wrapper"
              style={{ transformStyle: 'preserve-3d', cursor: 'pointer', willChange: 'transform' }}
              onClick={() => handleCardClick(dest)}
            >
              {/* Card */}
              <div className="pluto-card">
                <img src={dest.image} alt={dest.name} loading="lazy" className="pluto-card-img" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                {dest.tag && (
                  <span
                    className="absolute top-3 left-1/2 -translate-x-1/2 text-white text-[0.58rem] font-extrabold
                               px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md whitespace-nowrap z-10 pointer-events-none"
                    style={{ background: dest.tagColor }}
                  >
                    {dest.tag}
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center z-10 pointer-events-none">
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
