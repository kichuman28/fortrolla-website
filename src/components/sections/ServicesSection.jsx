import { useState, useEffect, useRef } from 'react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const slideshowRef = useRef(null);
  const slideshowInterval = 5000; // 5 seconds per slide
  
  // Automatic slideshow
  useEffect(() => {
    slideshowRef.current = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, slideshowInterval);
    
    return () => {
      if (slideshowRef.current) {
        clearInterval(slideshowRef.current);
      }
    };
  }, []);
  
  // Reset interval when manually changing slides
  const handleServiceChange = (index) => {
    setActiveService(index);
    
    if (slideshowRef.current) {
      clearInterval(slideshowRef.current);
      slideshowRef.current = setInterval(() => {
        setActiveService((prev) => (prev + 1) % services.length);
      }, slideshowInterval);
    }
  };
  
  const services = [
    {
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      title: "Digital Advertising",
      description: "Strategic digital ad campaigns that reach your target audience across multiple platforms and drive engagement.",
      color: "from-pink-500 to-rose-500",
      details: [
        "Social media campaign strategy",
        "Targeted digital advertising",
        "Performance analytics & optimization"
      ]
    },
    {
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      title: "Creative Campaigns",
      description: "Innovative marketing campaigns that tell your story and connect with your audience in meaningful ways.",
      color: "from-amber-500 to-orange-500",
      details: [
        "Brand storytelling & narrative design",
        "Multi-channel creative direction",
        "Audience engagement strategies"
      ]
    },
    {
      icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10",
      title: "Projection Mapping",
      description: "Stunning visual experiences that transform ordinary surfaces into extraordinary canvases for your message.",
      color: "from-violet-500 to-purple-600",
      details: [
        "3D architectural mapping",
        "Interactive projection installations",
        "Event-specific visual storytelling"
      ]
    },
    {
      icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
      title: "Event Promotion",
      description: "Comprehensive event marketing that builds excitement and drives attendance for your special occasion.",
      color: "from-emerald-500 to-teal-600",
      details: [
        "Pre-event buzz generation",
        "On-site experiential marketing",
        "Post-event engagement & follow-up"
      ]
    },
    {
      icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Holographic Projection",
      description: "Specialized promotion strategies for movies and theatrical productions that captivate audiences.",
      color: "from-blue-500 to-indigo-600",
      details: [
        "3D holographic displays",
        "Interactive hologram experiences",
        "Floating visual presentations"
      ]
    },
    {
      icon: "M15 2a3 3 0 013 3v12a3 3 0 01-3 3H9a3 3 0 01-3-3V5a3 3 0 013-3h6zM9 17h6a1 1 0 001-1V8a1 1 0 00-1-1H9a1 1 0 00-1 1v8a1 1 0 001 1zm12-14a1 1 0 011 1v5a1 1 0 01-1 1h-2V4a1 1 0 011-1h1zM3 4a1 1 0 011-1h1a1 1 0 011 1v5H3V4z",
      title: "VFX and Animation",
      description: "Stunning visual effects and animations that bring your ideas to life and create immersive experiences for your audience.",
      color: "from-red-500 to-rose-600",
      details: [
        "Motion graphics & animation",
        "Visual effects for video content",
        "3D modeling & animation"
      ]
    },
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-fortrolla-black via-fortrolla-dark/90 to-fortrolla-pink/10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fortrolla-gold to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fortrolla-pink to-transparent opacity-30"></div>
      
      {/* Animated Gradient Circles */}
      <div className="absolute top-40 -left-40 w-96 h-96 bg-fortrolla-pink/10 rounded-full filter blur-3xl animate-float opacity-40"></div>
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-fortrolla-gold/10 rounded-full filter blur-3xl animate-float opacity-30" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-fortrolla-white font-display text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-fortrolla-pink">Services</span>
          </h2>
          <p className="text-fortrolla-light/80 mb-8">
            We offer a comprehensive range of digital advertising services to help your brand shine.
          </p>
          
          {/* Service title display */}
          <div className="text-2xl font-display font-medium text-fortrolla-white">
            <span className="relative">
              <span className={`inline-block transition-all duration-500 ${activeService === services.findIndex(s => s.title === services[activeService].title) ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}>
                {services[activeService].title}
              </span>
            </span>
          </div>
        </div>
        
        {/* Navigation Arrows - Outside Container */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20">
          <button 
            onClick={() => handleServiceChange((activeService - 1 + services.length) % services.length)}
            className="p-3 rounded-full bg-fortrolla-black/60 backdrop-blur-sm border border-fortrolla-gray/20 hover:border-fortrolla-pink/30 transition-all duration-300 shadow-lg hover:shadow-fortrolla-pink/20"
            aria-label="Previous service"
          >
            <svg className="w-6 h-6 text-fortrolla-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20">
          <button 
            onClick={() => handleServiceChange((activeService + 1) % services.length)}
            className="p-3 rounded-full bg-fortrolla-black/60 backdrop-blur-sm border border-fortrolla-gray/20 hover:border-fortrolla-pink/30 transition-all duration-300 shadow-lg hover:shadow-fortrolla-pink/20"
            aria-label="Next service"
          >
            <svg className="w-6 h-6 text-fortrolla-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Featured Service Display */}
        <div className="relative max-w-6xl mx-auto">
          {/* Service Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-fortrolla-black/80 to-fortrolla-gray/20 backdrop-blur-sm rounded-2xl border border-fortrolla-gray/10 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className={`absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl ${services[activeService].color} rounded-full filter blur-3xl opacity-10 animate-pulse`}></div>
              <div className={`absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr ${services[activeService].color} rounded-full filter blur-3xl opacity-5 animate-pulse`} style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
          <div className="relative grid md:grid-cols-5 gap-6 p-8">
            {/* Service Icon Column */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start justify-center">
              <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${services[activeService].color} p-0.5 mb-6 shadow-lg shadow-fortrolla-pink/20`}>
                <div className="w-full h-full rounded-full bg-fortrolla-black/80 flex items-center justify-center">
                  <svg 
                    className="w-16 h-16 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={services[activeService].icon} />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-fortrolla-white mb-4 text-center md:text-left">
                {services[activeService].title}
              </h3>
              
              <p className="text-fortrolla-light/80 leading-relaxed text-center md:text-left mb-6">
                {services[activeService].description}
              </p>
              
              <a 
                href="#contact" 
                className="btn-primary inline-flex items-center group"
              >
                <span>Get Started</span>
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            
            {/* Service Details Column */}
            <div className="md:col-span-3 flex flex-col">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service Details */}
                <div className="bg-fortrolla-black/40 backdrop-blur-md rounded-xl p-6 border border-fortrolla-gray/10">
                  <h4 className="text-fortrolla-white text-lg font-medium mb-4">What We Offer</h4>
                  <ul className="space-y-3">
                    {services[activeService].details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${services[activeService].color} flex items-center justify-center mr-3 mt-0.5`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-fortrolla-light/90">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Service Process */}
                <div className="bg-fortrolla-black/40 backdrop-blur-md rounded-xl p-6 border border-fortrolla-gray/10">
                  <h4 className="text-fortrolla-white text-lg font-medium mb-4">Our Process</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${services[activeService].color} flex items-center justify-center mr-3`}>
                        <span className="text-white text-sm font-medium">01</span>
                      </div>
                      <span className="text-fortrolla-light/90">Discovery & Strategy</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${services[activeService].color} flex items-center justify-center mr-3`}>
                        <span className="text-white text-sm font-medium">02</span>
                      </div>
                      <span className="text-fortrolla-light/90">Creative Development</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${services[activeService].color} flex items-center justify-center mr-3`}>
                        <span className="text-white text-sm font-medium">03</span>
                      </div>
                      <span className="text-fortrolla-light/90">Implementation</span>
                    </div>
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${services[activeService].color} flex items-center justify-center mr-3`}>
                        <span className="text-white text-sm font-medium">04</span>
                      </div>
                      <span className="text-fortrolla-light/90">Analysis & Optimization</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Indicators */}
        <div className="mt-8 flex justify-center space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => handleServiceChange(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeService === index 
                  ? 'bg-fortrolla-pink w-6' 
                  : 'bg-fortrolla-gray/30 hover:bg-fortrolla-gray/50'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-secondary backdrop-blur-sm">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 