import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
import SplashScreen from './components/sections/SplashScreen';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ClientsSection from './components/sections/ClientsSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [loading, setLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSplashComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <SplashScreen onComplete={handleSplashComplete} />}
      
      <div className={`transition-opacity duration-1000 ${contentLoaded && !loading ? 'opacity-100' : 'opacity-0'}`}>
        <Layout>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <ClientsSection />
          <ContactSection />
        </Layout>
      </div>
    </>
  );
}

export default App;
