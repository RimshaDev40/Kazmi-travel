import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const WHATSAPP = '923001234567';

const faqs = [
  {
    q: 'How fast is Umrah E-Visa and Dubai Tourist Visa processing?',
    a: 'Umrah E-visas and Dubai Tourist Visas are processed within 24 to 48 working hours through our direct B2B portal integrations. Expedited express processing is also available for urgent departures.'
  },
  {
    q: 'What is included in your customized Umrah Packages?',
    a: 'Our Umrah packages include return air tickets, Saudi E-visa, luxury star hotel accommodation in Makkah & Madinah (close to Haram), VIP transport, and 24/7 on-ground Ziyarat guidance.'
  },
  {
    q: 'How can travel agents get access to the Kazmi B2B Agent Portal?',
    a: 'Travel agents can register by clicking "Request B2B Access" or contacting us directly via WhatsApp. Once verified, agents receive direct credentials with wallet access, live flight seat availability, and wholesale rates.'
  },
  {
    q: 'Do you offer group air seat allotments for corporate groups & agencies?',
    a: 'Yes! We hold direct group seat allotments with leading airlines (PIA, Saudi Arabian Airlines, Flynas, Flydubai, Emirates, Airblue) for Makkah/Madinah, Dubai, and European routes.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfers, online credit/debit card payments, B2B agency wallet balances, and cheque payments with instant receipt confirmation.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 bg-slate-50 border-t border-b border-slate-200/80 relative overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know"
          subtitle="Got questions about visa processing, Umrah packages, or B2B agent access? Here are answers to the most common queries."
          light={false}
        />

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 mb-14">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.88, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 140,
                  damping: 14,
                  delay: idx * 0.07
                }}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md ${
                  isOpen
                    ? 'bg-white border-amber-400 shadow-xl'
                    : 'bg-white border-slate-200/90 hover:border-amber-300'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full text-left px-7 py-6 flex items-center justify-between gap-4 font-heading font-bold text-slate-900 text-base sm:text-lg transition-colors group cursor-pointer"
                >
                  <span className="flex items-center gap-3.5">
                    <motion.div
                      animate={{ scale: isOpen ? [1, 1.25, 1] : 1, rotate: isOpen ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-amber-500/10 text-amber-600 group-hover:bg-amber-500/20'
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </motion.div>
                    <span className="group-hover:text-amber-700 transition-colors">{faq.q}</span>
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.15 : 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      isOpen ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 180, damping: 20 }}
                      className="px-7 pb-7 pt-2 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 font-medium"
                    >
                      <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-100 flex items-start gap-3">
                        <Sparkles className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Cute Support Banner with Pop-up Spring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 130, damping: 14 }}
          className="bg-[#071420] rounded-3xl p-8 sm:p-10 text-white flex flex-wrap items-center justify-between gap-6 shadow-2xl border border-white/10 relative overflow-hidden"
        >
          {/* Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-lg">
            <h4 className="font-heading text-xl sm:text-2xl font-extrabold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-amber-400 inline" />
              Have More Questions? Speak to Our Travel Experts 24/7
            </h4>
            <p className="text-white/75 text-xs sm:text-sm font-medium">
              Our travel counselors and B2B support desk are ready to assist you right away.
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href={`https://wa.me/${WHATSAPP}?text=Hi%20Kazmi%20Paradise!%20I%20have%20a%20question%20regarding%20travel%20packages.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp shrink-0 shadow-xl text-xs sm:text-sm px-7 py-3.5 relative z-10"
          >
            Ask Us on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
