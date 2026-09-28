import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Users2, ShieldCheck, Zap,
  CheckCircle2, ArrowRight, Award
} from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const WHATSAPP = '923001234567';

const b2bTabs = [
  {
    id: 'corporate',
    label: 'Corporate Travel',
    icon: Building2,
    badge: 'Enterprise Solutions',
    title: 'Streamlined Corporate Travel Management',
    description: 'We handle complete end-to-end corporate travel arrangements for companies, MNCs, and executive delegations with dedicated account management and transparent invoicing.',
    points: [
      'Dedicated 24/7 Corporate Account Manager',
      'Flexible Credit & Automated Billing Systems',
      'Priority Flight & VIP Airport Lounge Access',
      'Customized Itineraries for Business Executives'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    stats: { label: 'Active Corporate Clients', value: '150+' }
  },
  {
    id: 'mice',
    label: 'MICE & Group Events',
    icon: Users2,
    badge: 'Large Groups',
    title: 'MICE, Conferences & Group Flight Seats',
    description: 'Specialized management for large-scale group tours, international conferences, incentive travel, and bulk airline seat allotments at guaranteed wholesale fares.',
    points: [
      'Guaranteed Group Air Seat Allotments',
      'Exclusive Venue & Hotel Block Bookings',
      'On-Ground Transport & Event Logistics',
      'Custom Branded Travel Collateral & Badges'
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    stats: { label: 'Successful MICE Events', value: '50+' }
  },
  {
    id: 'b2b-portal',
    label: 'Sub-Agent Portal',
    icon: Zap,
    badge: 'Travel Sub-Agents',
    title: 'Fastest B2B Sub-Agent Ticketing Engine',
    description: 'Equip your agency with our proprietary B2B booking portal featuring real-time hotel inventories in Makkah/Madinah, instant E-Visa generation, and wallet loading.',
    points: [
      'Instant Saudi E-Visa & BRN Generation',
      'Real-Time Hotel Room Inventory Access',
      'Zero Hidden Markup Sub-Agent Rates',
      'Instant Wallet Credit & Refund Processing'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    stats: { label: 'Live Travel Sub-Agents', value: '500+' }
  },
  {
    id: 'visa-allotments',
    label: 'Direct Allotments',
    icon: ShieldCheck,
    badge: 'Direct Inventory',
    title: 'Direct Airline & Hotel Seat Allotments',
    description: 'Eliminate middleman costs with Kazmi Paradise direct airline seat blocks with major carriers and long-term Makkah/Madinah hotel room commitments.',
    points: [
      'Direct Umrah Seat Allotments (PIA, Saudia, Airblue)',
      'Guaranteed Hotel Room Blocks in Peak Ramadan',
      'Direct Ground Transport Fleet Access in Saudi',
      'Official Ministry Authorized Documentation'
    ],
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80',
    stats: { label: 'Annual Group Seat Allotments', value: '25,000+' }
  }
];

const CorporateB2BSection = () => {
  const [activeTab, setActiveTab] = useState('corporate');
  const currentData = b2bTabs.find((t) => t.id === activeTab) || b2bTabs[0];

  return (
    <section id="b2b-corporate" className="py-24 bg-gradient-to-b from-[#071420] via-[#0b1f33] to-[#071420] text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <SectionHeading
          badge="B2B &amp; Corporate Excellence"
          title="Corporate Travel &amp; Agent Solutions"
          subtitle="Designed to outperform standard travel agencies with direct portal access, guaranteed allotments, and corporate-grade service quality."
          light={true}
        />

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {b2bTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 shadow-md ${
                  isActive
                    ? 'bg-gradient-to-r from-accent to-gold-light text-slate-950 shadow-glow-gold scale-105'
                    : 'bg-[#0c1e2e] text-white/70 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Tab Content Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentData.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-[#0c1e2e]/90 border border-white/15 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl flex flex-col lg:flex-row items-center gap-10"
          >
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <span className="text-[0.7rem] font-bold uppercase tracking-widest text-accent-light bg-accent/15 border border-accent/30 px-3.5 py-1 rounded-full mb-4">
                {currentData.badge}
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                {currentData.title}
              </h3>

              <p className="text-white/80 text-sm leading-relaxed mb-6 font-medium">
                {currentData.description}
              </p>

              {/* Bullet Points */}
              <div className="flex flex-col gap-3 w-full mb-8">
                {currentData.points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full">
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp shadow-lg justify-center text-xs px-6 py-3"
                >
                  Inquire Corporate Rates
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Image Banner */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl group">
                <img
                  src={currentData.image}
                  alt={currentData.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Floating Stat Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-md border border-white/15 rounded-xl px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent-light" />
                    <span className="text-xs text-white/90 font-medium">{currentData.stats.label}</span>
                  </div>
                  <span className="font-heading text-lg font-black text-amber-400">{currentData.stats.value}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CorporateB2BSection;
