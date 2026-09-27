import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './components/ServiceDetailPage/ServiceDetailPage';
import { services } from './data/services';
import './index.css';

import WhatsAppIcon from './components/common/WhatsAppIcon';
import ScrollToTop from './components/common/ScrollToTop';

// Floating WhatsApp button
const WhatsAppFloat = () => (
  <a
    href="https://wa.me/923001234567"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float group"
    aria-label="Chat on WhatsApp"
    title="Chat with us on WhatsApp"
  >
    <WhatsAppIcon colored className="w-14 h-14" />
  </a>
);


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Service Detail Pages — one per service using reusable component */}
        {services.map((service) => (
          <Route
            key={service.id}
            path={service.route}
            element={<ServiceDetailPage service={service} />}
          />
        ))}
      </Routes>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </Router>
  );
}

export default App;
