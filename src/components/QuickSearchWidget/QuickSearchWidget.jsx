import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Users, MapPin, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const WHATSAPP = '923001234567';

const QuickSearchWidget = () => {
  const [serviceType, setServiceType] = useState('Umrah Packages');
  const [destination, setDestination] = useState('Makkah & Madinah');
  const [travelers, setTravelers] = useState('2 Persons');
  const [travelMonth, setTravelMonth] = useState('Next Month');

  const handleSearch = (e) => {
    e.preventDefault();
    const queryMessage = `Hi Kazmi Paradise! I want an instant quote for:\n• Service: ${serviceType}\n• Destination: ${destination}\n• Travelers: ${travelers}\n• Travel Time: ${travelMonth}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(queryMessage)}`, '_blank');
  };

  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-[1240px] mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#071420]/95 backdrop-blur-2xl border border-accent/40 rounded-3xl p-5 sm:p-7 shadow-[0_25px_70px_rgba(0,0,0,0.7)] text-white"
      >
        {/* Header Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent-light animate-pulse" />
            <span className="font-heading text-base font-bold text-white tracking-tight">
              Instant Travel Finder &amp; Quote Calculator
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {['Umrah Packages', 'Group Flights', 'B2B Visa', 'Hotel Allotment'].map((type) => (
              <button
                key={type}
                onClick={() => setServiceType(type)}
                className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  serviceType === type
                    ? 'bg-accent text-primary-darker shadow-glow-gold'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          {/* Destination */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.7rem] uppercase tracking-wider font-bold text-accent-light flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Destination / Portal
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#12283c] border border-white/15 text-white text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-accent transition-all"
            >
              <option value="Makkah & Madinah">Saudi Arabia (Umrah / Visa)</option>
              <option value="Dubai, UAE">Dubai (Tourist & B2B Visa)</option>
              <option value="Turkey & Europe">Turkey & International Tours</option>
              <option value="Group Flight Seats">Worldwide Group Flights</option>
              <option value="Hotel Allotment CRM">Makkah/Madinah Hotels</option>
            </select>
          </div>

          {/* Travelers */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.7rem] uppercase tracking-wider font-bold text-accent-light flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> Travelers / Seats
            </label>
            <select
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="bg-[#12283c] border border-white/15 text-white text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-accent transition-all"
            >
              <option value="1 Person">Solo Traveler (1 Person)</option>
              <option value="2 Persons">Couples / Family (2 Persons)</option>
              <option value="4-6 Persons">Family Group (4-6 Persons)</option>
              <option value="10+ B2B Group">B2B Agent Group (10+ Seats)</option>
            </select>
          </div>

          {/* Travel Month */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[0.7rem] uppercase tracking-wider font-bold text-accent-light flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> Travel Timeline
            </label>
            <select
              value={travelMonth}
              onChange={(e) => setTravelMonth(e.target.value)}
              className="bg-[#12283c] border border-white/15 text-white text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:border-accent transition-all"
            >
              <option value="Immediate / This Week">Immediate (This Week)</option>
              <option value="Next Month">Next Month</option>
              <option value="Ramadan 2026">Ramadan Special Packages</option>
              <option value="Custom Dates">Custom Dates Inquiry</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn-primary py-3 justify-center shadow-glow-gold hover:scale-[1.02] active:scale-95 transition-all duration-300 font-bold text-sm"
          >
            <Search className="w-4 h-4" />
            Calculate Instant Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Feature Highlights Footer */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/70">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Instant WhatsApp Verification</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Best Price Guarantee for B2B Agents</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>24/7 Dedicated Support Hotline</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default QuickSearchWidget;
