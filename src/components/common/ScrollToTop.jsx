import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-7 right-7 z-[9998] w-12 h-12 rounded-2xl bg-[#071420]/90 backdrop-blur-xl border border-accent/40 text-accent-light shadow-[0_8px_25px_rgba(0,0,0,0.5)] hover:bg-accent hover:text-primary-darker hover:border-accent hover:shadow-glow-gold hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center group"
          aria-label="Scroll back to top"
          title="Scroll back to top"
        >
          <ChevronUp className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
