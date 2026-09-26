import React, { useRef, useEffect, useState } from 'react';

const statData = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Happy Customers' },
  { value: 50, suffix: '+',  label: 'Travel Services' },
  { value: 100, suffix: '+', label: 'Business Partners' },
];

const useCountUp = (target, started) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1800, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, started]);
  return count;
};

const StatItem = ({ stat, started, index }) => {
  const n = useCountUp(stat.value, started);
  return (
    <div
      className={`flex flex-col items-center text-center py-6 px-3 
        ${index % 2 === 0 ? 'border-r sm:border-r' : 'border-r-0 sm:border-r'} 
        ${index === 3 ? 'sm:border-r-0' : ''} 
        ${index < 2 ? 'border-b sm:border-b-0' : ''} 
        border-white/10`}
    >
      <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-accent-light leading-none mb-2">
        {n}{stat.suffix}
      </span>
      <span className="text-white/70 text-[0.68rem] sm:text-[0.72rem] uppercase tracking-widest font-medium">
        {stat.label}
      </span>
    </div>
  );
};

const Statistics = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-0"
      style={{ background: 'linear-gradient(135deg,#071420 0%,#1a3c5e 60%,#0f2438 100%)' }}
    >
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        <p className="text-center text-white/40 text-[0.68rem] italic py-3">
          * Representative indicators — actual numbers may vary
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {statData.map((s, idx) => (
            <StatItem key={s.label} stat={s} started={started} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
