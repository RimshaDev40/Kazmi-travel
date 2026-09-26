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

const StatItem = ({ stat, started }) => {
  const n = useCountUp(stat.value, started);
  return (
    <div className="flex flex-col items-center text-center py-8 px-4 border-r border-white/10 last:border-r-0">
      <span className="font-heading text-5xl font-extrabold text-accent-light leading-none mb-2">
        {n}{stat.suffix}
      </span>
      <span className="text-white/55 text-[0.72rem] uppercase tracking-widest font-medium">{stat.label}</span>
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
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <p className="text-center text-white/30 text-[0.7rem] italic py-4">
          * Representative indicators — actual numbers may vary
        </p>
        <div className="grid grid-cols-4 md:grid-cols-4">
          {statData.map((s) => (
            <StatItem key={s.label} stat={s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
