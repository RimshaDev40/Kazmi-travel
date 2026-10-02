import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutUs from '../components/AboutUs/AboutUs';
import VisionMission from '../components/VisionMission/VisionMission';
import Services from '../components/Services/Services';
import Statistics from '../components/Statistics/Statistics';
import Destinations from '../components/Destinations/Destinations';
import TravelPackages from '../components/TravelPackages/TravelPackages';
import CorporateB2BSection from '../components/CorporateB2B/CorporateB2BSection';
import JourneyTimeline from '../components/JourneyTimeline/JourneyTimeline';
import AwardsSection from '../components/Awards/AwardsSection';
import TeamSection from '../components/Team/TeamSection';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Portals from '../components/Portals/Portals';
import ReviewsSlider from '../components/ReviewsSlider/ReviewsSlider';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQSection from '../components/FAQ/FAQSection';
import CTASection from '../components/CTASection/CTASection';
import ContactSection from '../components/ContactSection/ContactSection';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Kazmi Paradise Travel & Tours — Your Trusted Travel Partner';
  }, []);

  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSection />
      {/* 2. 3D Destinations Carousel */}
      <Destinations />

      {/* 3. About Us */}
      <AboutUs />

      {/* 4. Vision & Mission */}
      <VisionMission />

{/* 13. B2B & Customer Portals */}
      <Portals />
      

      {/* 6. Live Key Statistics */}
      <Statistics />

    
      {/* 7. Travel & Umrah Packages */}
      <TravelPackages />

       {/* 8. Pluto-Style Animated Curved Connecting Line Timeline */}
      {/* <JourneyTimeline /> */}

      {/* 9. Corporate Travel & B2B Solutions */}
      {/* <CorporateB2BSection /> */}

     

      {/* 10. Awards '25 Perspective Floating Arc Cards (Pluto Reference) */}
      <AwardsSection />

      {/* 11. Leadership & Travel Experts Team */}
      <TeamSection />

      {/* 12. Why Choose Kazmi Paradise */}
      <WhyChooseUs />

      
{/* 5. Our Core Travel Services */}
      <Services />

      
      {/* 14. Pluto-Style Google Reviews & Ratings Slider */}
      <ReviewsSlider />

      {/* 15. Verified Client Feedback */}
      <Testimonials />

      {/* 16. Interactive FAQ Accordion */}
      <FAQSection />

      {/* 17. CTA Banner */}
      <CTASection />

      {/* 18. Contact Section */}
      <ContactSection />
    </main>
  );
};

export default HomePage;
