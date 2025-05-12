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
      title: "Film & Theatre Marketing",
      description: "Specialized promotion strategies for movies and theatrical productions that captivate audiences."
    },
    {
      icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
      title: "Brand Identity",
      description: "Crafting distinctive visual identities that make your brand memorable and meaningful to your audience."
    },
  ];

  return (
    <section id="services" className="py-24 bg-fortrolla-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-fortrolla-white font-display text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-fortrolla-accent">Services</span>
          </h2>
          <p className="text-fortrolla-silver">
            We offer a comprehensive range of digital advertising services to help your brand shine.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-fortrolla-dark to-fortrolla-gray/30 p-8 rounded-lg border border-fortrolla-gray/10 group hover:border-fortrolla-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-fortrolla-accent/5"
            >
              <div className="w-16 h-16 rounded-lg bg-fortrolla-accent/10 flex items-center justify-center mb-6 group-hover:bg-fortrolla-accent/20 transition-all duration-300">
                <svg 
                  className="w-8 h-8 text-fortrolla-accent" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon} />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-fortrolla-white mb-4 group-hover:text-fortrolla-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-fortrolla-silver leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 