const ServicesSection = () => {
  const services = [
    {
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      title: "Digital Advertising",
      description: "Strategic digital ad campaigns that reach your target audience across multiple platforms and drive engagement."
    },
    {
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      title: "Creative Campaigns",
      description: "Innovative marketing campaigns that tell your story and connect with your audience in meaningful ways."
    },
    {
      icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10",
      title: "Projection Mapping",
      description: "Stunning visual experiences that transform ordinary surfaces into extraordinary canvases for your message."
    },
    {
      icon: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z",
      title: "Event Promotion",
      description: "Comprehensive event marketing that builds excitement and drives attendance for your special occasion."
    },
    {
      icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Holographic Projection",
      description: "Specialized promotion strategies for movies and theatrical productions that captivate audiences."
    },
    {
      icon: "M15 2a3 3 0 013 3v12a3 3 0 01-3 3H9a3 3 0 01-3-3V5a3 3 0 013-3h6zM9 17h6a1 1 0 001-1V8a1 1 0 00-1-1H9a1 1 0 00-1 1v8a1 1 0 001 1zm12-14a1 1 0 011 1v5a1 1 0 01-1 1h-2V4a1 1 0 011-1h1zM3 4a1 1 0 011-1h1a1 1 0 011 1v5H3V4z",
      title: "VFX and Animation",
      description: "Stunning visual effects and animations that bring your ideas to life and create immersive experiences for your audience."
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl mx-auto">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-fortrolla-magenta/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWOGgydjR6bTAgMThoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wLTQyaC0yVjBoMnY2ek0xMiAzNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAtMTJoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWOGgydjR6bTAtNmgtMlYwaDJ2NnptMTIgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wLTEyaC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptMC02aC0yVjhoMnY0em0wLTZoLTJWMGgydjZ6bTEyIDI0aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMC0xMmgtMnYtNGgydjR6bTAtNmgtMnYtNGgydjR6bTAtNmgtMlY4aDJ2NHptMC02aC0yVjBoMnY2eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-fortrolla-white font-display text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-fortrolla-pink">Services</span>
          </h2>
          <p className="text-fortrolla-light/80">
            We offer a comprehensive range of digital advertising services to help your brand shine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden bg-gradient-to-br from-fortrolla-black/80 to-fortrolla-gray/20 backdrop-blur-sm p-8 rounded-lg border border-fortrolla-gray/10 group hover:border-fortrolla-pink/30 transition-all duration-500 hover:shadow-lg hover:shadow-fortrolla-pink/10"
            >
              {/* Card background accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-fortrolla-pink/0 via-fortrolla-pink/5 to-fortrolla-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-fortrolla-pink/20 to-fortrolla-magenta/5 flex items-center justify-center mb-6 group-hover:from-fortrolla-pink/30 group-hover:to-fortrolla-magenta/10 transition-all duration-300">
                  <svg 
                    className="w-8 h-8 text-fortrolla-pink" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon} />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-fortrolla-white mb-4 group-hover:text-fortrolla-pink transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-fortrolla-light/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-tl from-fortrolla-pink/20 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary backdrop-blur-sm">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 