import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';

const WHATSAPP = '923001234567';

const contactInfo = [
  { icon: Phone, title: 'Call Us', value: '+92 300 1234567', href: 'tel:+923001234567' },
  { icon: MessageCircle, title: 'WhatsApp', value: '+92 300 1234567', href: `https://wa.me/${WHATSAPP}` },
  { icon: Mail, title: 'Email Us', value: 'info@kazmiparadisetravel.com', href: 'mailto:info@kazmiparadisetravel.com' },
  { icon: MapPin, title: 'Visit Us', value: 'Kazmi Tower, Main Boulevard, Lahore, Pakistan', href: null },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email is required.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-amber-500/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <SectionHeading
          badge="Get In Touch"
          title="Contact Kazmi Paradise Travel"
          subtitle="Have a question or need assistance with your booking? Reach out to our team — we are here to help."
          light={false}
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* INFO SIDEBAR */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">Reach Out Directly</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
              Our travel specialists are available to answer your enquiries, provide package details, and assist with portal access.
            </p>

            {contactInfo.map((info, idx) => {
              const IconComp = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, scale: 0.85, y: 25 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 140, damping: 14, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-amber-600 group-hover:text-slate-950 transition-all duration-500 shadow-sm">
                    <IconComp className="w-5 h-5 group-hover:rotate-[360deg] transition-transform duration-700" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{info.title}</span>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-sm font-extrabold text-slate-900 hover:text-amber-700 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm font-extrabold text-slate-900">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* FORM CONTAINER (NO GRADIENT BAR, SOLID CLEAN GOLD TOP BORDER) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 130, damping: 14, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-t-4 border-t-amber-400 border-x border-b border-slate-200/90 relative overflow-hidden"
          >
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received!</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                  Thank you for reaching out. A representative from Kazmi Paradise Travel &amp; Tours will get back to you shortly.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }} className="btn-primary">
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-extrabold text-slate-900">Send Us a Message</h3>
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Ali Khan"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                        errors.name ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-amber-500/50 focus:border-amber-400'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      placeholder="e.g. ali@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                        errors.email ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-amber-500/50 focus:border-amber-400'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="text"
                      placeholder="+92 300 0000000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Umrah Package Query"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your travel needs or questions here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                      errors.message ? 'border-red-400 focus:ring-red-300' : 'border-slate-200 focus:ring-amber-500/50 focus:border-amber-400'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1 font-semibold">{errors.message}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full justify-center py-4 text-sm font-extrabold shadow-lg flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
