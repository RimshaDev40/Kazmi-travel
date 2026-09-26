import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutUs from '../components/AboutUs/AboutUs';
import VisionMission from '../components/VisionMission/VisionMission';
import Services from '../components/Services/Services';
import Destinations from '../components/Destinations/Destinations';
import TravelPackages from '../components/TravelPackages/TravelPackages';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Statistics from '../components/Statistics/Statistics';
import Portals from '../components/Portals/Portals';
import Testimonials from '../components/Testimonials/Testimonials';
import CTASection from '../components/CTASection/CTASection';
import ContactSection from '../components/ContactSection/ContactSection';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Kazmi Paradise Travel & Tours — Your Trusted Travel Partner';
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutUs />
      <VisionMission />
      <Services />
      <Statistics />
      <Destinations />
      <TravelPackages />
      <WhyChooseUs />
      <Portals />
      <Testimonials />
      <CTASection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
