import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Industries from './sections/Industries';
import CaseStudies from './sections/CaseStudies';
import Portfolio from './sections/Portfolio';
import Resources from './sections/Resources';
import Contact from './sections/Contact';
import { AnimatePresence } from 'framer-motion';
import Ticker from './sections/ticker';
import StatsSection from './sections/achivements';
import TechSolutions from './sections/scrollingservices';
import TechStackSlider from './sections/techstackslider';
import LogoTechStack from './sections/logo-techstack';
import ConsultancyProcess from './sections/consultancyprocess';
import WhyChooseUs from './sections/whychooseus';
import FAQSection from './sections/faq';
import PopupForm from './components/PopupForm';
import GitHubProjects from './components/GitHubProjects';

export default function App(){
  return (
    <div className="app-root">
      <Ticker />
      <Navbar />
      <AnimatePresence mode="wait">
        <main>
          <Hero />
          <LogoTechStack />
          <GitHubProjects />
          <StatsSection />
          <Services />
          <TechStackSlider />
          <CaseStudies />
          <TechSolutions />
          <Portfolio />
          <Industries />
          <Resources />
          <ConsultancyProcess />
          <WhyChooseUs />
          <FAQSection />
          <Contact />
        </main>
      </AnimatePresence>
      <Footer />
      <PopupForm />
    </div>
  );
}
