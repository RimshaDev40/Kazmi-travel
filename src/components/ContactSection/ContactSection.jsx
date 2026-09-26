import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
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
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          badge="Get In Touch"
          title="Contact Kazmi Paradise Travel"
          subtitle="Have a question or need assistance with your booking? Reach out to our team — we are here to help."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* INFO SIDEBAR */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">Reach Out Directly</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Our travel specialists are available to answer your enquiries, provide package details, and assist with portal access.
            </p>

            {contactInfo.map((info) => {
              const IconComp = info.icon;
              return (
                <div
                  key={info.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-accent/30 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent-dark shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">{info.title}</span>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-900 hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-gray-900">{info.value}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* FORM */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-gray-100">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Received!</h3>
                <p className="text-sm text-gray-500 max-w-md mx-auto mb-6">
                  Thank you for reaching out. A representative from Kazmi Paradise Travel &amp; Tours will get back to you shortly.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }} className="btn-primary btn-sm">
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Send Us a Message</h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Ali Khan"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 transition-all ${
                        errors.name ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-accent/50 focus:border-accent'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      placeholder="e.g. ali@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 transition-all ${
                        errors.email ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-accent/50 focus:border-accent'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Phone Number</label>
                    <input
                      type="text"
                      placeholder="+92 300 0000000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Umrah Package Query"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your travel needs or questions here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 transition-all ${
                      errors.message ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-accent/50 focus:border-accent'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-3.5 text-base">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
