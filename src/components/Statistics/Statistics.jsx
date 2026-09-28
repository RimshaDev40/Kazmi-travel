import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
    const duration = 8500; // Ultra-smooth & slow 8.5 second count-up animation

    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // Gentle ease-out quadratic curve for continuous visible progress
      const easedProgress = 1 - Math.pow(1 - progress, 2);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [target, started]);

  return count;
};

const StatItem = ({ stat, started, index }) => {
  const n = useCountUp(stat.value, started);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={{ scale: 1.05 }}
      className={`flex flex-col items-center text-center py-7 px-4 cursor-pointer transition-all duration-300
        ${index % 2 === 0 ? 'border-r sm:border-r' : 'border-r-0 sm:border-r'} 
        ${index === 3 ? 'sm:border-r-0' : ''} 
        ${index < 2 ? 'border-b sm:border-b-0' : ''} 
        border-amber-400/20`}
    >
      <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-400 leading-none mb-2 drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)]">
        {n}{stat.suffix}
      </span>
      <span className="text-white/80 text-[0.68rem] sm:text-[0.75rem] uppercase tracking-widest font-extrabold">
        {stat.label}
      </span>
    </motion.div>
  );
};

const Statistics = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.25 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-2"
      style={{ background: 'linear-gradient(135deg,#071420 0%,#1a3c5e 60%,#0f2438 100%)' }}
    >
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
        <p className="text-center text-white/40 text-[0.68rem] italic py-2">
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
