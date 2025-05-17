import { useState, useEffect } from 'react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);
  
  // Close modal with escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, []);
  
  // Handle modal opening
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsModalAnimating(true);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Handle modal closing
  const closeModal = () => {
    setIsModalAnimating(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsModalAnimating(false);
      setSelectedProject(null);
      // Restore body scrolling
      document.body.style.overflow = '';
    }, 300);
  };
  
  // Navigate through project images
  const navigateImages = (direction) => {
    if (!selectedProject) return;
    
    const totalImages = selectedProject.images.length;
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };
  
  // Project data with multiple images per project
  const projects = [
    {
      title: "Empuraan Movie Promo",
      category: "film",
      images: [
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Empuraan+Promo+1",
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Empuraan+Promo+2",
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Empuraan+Promo+3"
      ],
      thumbnail: "https://placehold.co/600x400/1A1A1A/FF4191?text=Empuraan+Promo",
      description: "Digital campaign for the blockbuster Malayalam movie starring Mohanlal. Our team developed a comprehensive digital strategy that included social media campaigns, projection mapping at premiere events, and interactive digital experiences.",
      client: "Aashirvad Cinemas",
      year: "2023"
    },
    {
      title: "National Theatre Festival",
      category: "event",
      images: [
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Theatre+Festival+1",
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Theatre+Festival+2",
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Theatre+Festival+3"
      ],
      thumbnail: "https://placehold.co/600x400/1A1A1A/FF4191?text=Theatre+Festival",
      description: "Projection mapping and digital promotion for Kerala's biggest theatre festival. We created immersive visual experiences that transformed the venue facades into dynamic canvases, telling the story of Kerala's rich theatrical heritage.",
      client: "Kerala Sangeetha Nataka Akademi",
      year: "2023"
    },
    {
      title: "Roshan Mathew Brand Campaign",
      category: "branding",
      images: [
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Roshan+Mathew+1",
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Roshan+Mathew+2",
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Roshan+Mathew+3"
      ],
      thumbnail: "https://placehold.co/600x400/1A1A1A/FF4191?text=Roshan+Mathew",
      description: "Personal branding campaign for the acclaimed Malayalam actor. Our team developed a cohesive brand identity that highlighted his versatility as an actor while maintaining an authentic connection with his audience.",
      client: "Roshan Mathew",
      year: "2022"
    },
    {
      title: "Kochi Music Festival",
      category: "event",
      images: [
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Music+Festival+1",
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Music+Festival+2",
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Music+Festival+3"
      ],
      thumbnail: "https://placehold.co/600x400/1A1A1A/FF4191?text=Music+Festival",
      description: "Complete digital marketing solution for the annual music festival in Kochi. We created an integrated campaign that included holographic projections, interactive installations, and a comprehensive social media strategy that increased attendance by 40%.",
      client: "Kochi Music Foundation",
      year: "2023"
    },
    {
      title: "Kerala Tourism Campaign",
      category: "advertising",
      images: [
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Kerala+Tourism+1",
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Kerala+Tourism+2",
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Kerala+Tourism+3"
      ],
      thumbnail: "https://placehold.co/600x400/1A1A1A/FF4191?text=Kerala+Tourism",
      description: "Innovative advertising campaign showcasing Kerala's natural beauty. Our team developed a series of immersive digital experiences that transported viewers to Kerala's most stunning locations through projection mapping and interactive installations.",
      client: "Kerala Tourism Department",
      year: "2022"
    },
    {
      title: "Corporate Brand Identity",
      category: "branding",
      images: [
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Corporate+Identity+1",
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Corporate+Identity+2",
        "https://placehold.co/1200x800/1A1A1A/FF4191?text=Corporate+Identity+3"
      ],
      thumbnail: "https://placehold.co/600x400/1A1A1A/FF4191?text=Corporate+Identity",
      description: "Complete brand identity design for a leading tech company in Kochi. We developed a comprehensive visual language that reflected the company's innovative approach while maintaining a connection to their Kerala roots.",
      client: "TechInnovate Solutions",
      year: "2023"
    },
  ];

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-fortrolla-black via-fortrolla-dark/95 to-fortrolla-magenta/10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fortrolla-pink to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fortrolla-gold to-transparent opacity-30"></div>
      
      {/* Animated Gradient Circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-fortrolla-gold/5 rounded-full filter blur-3xl animate-float opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fortrolla-pink/5 rounded-full filter blur-3xl animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWOGgydjR6bTAgMThoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wLTQyaC0yVjBoMnY2ek0xMiAzNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAtMTJoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWOGgydjR6bTAtNmgtMlYwaDJ2NnptMTIgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wLTEyaC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptMC02aC0yVjhoMnY0em0wLTZoLTJWMGgydjZ6bTEyIDI0aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMC0xMmgtMnYtNGgydjR6bTAtNmgtMnYtNGgydjR6bTAtNmgtMlY4aDJ2NHptMC02aC0yVjBoMnY2eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-fortrolla-white font-display text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-fortrolla-pink">Projects</span>
          </h2>
          <p className="text-fortrolla-light/80">
            Explore our portfolio of creative work for industry-leading clients.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-fortrolla-black/90 to-fortrolla-gray/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-fortrolla-gray/10 hover:border-fortrolla-pink/30"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fortrolla-black to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-fortrolla-pink/40 to-fortrolla-magenta/30 backdrop-blur-sm">
                  <button 
                    className="bg-fortrolla-black/70 backdrop-blur-sm px-5 py-2.5 rounded-full text-fortrolla-white text-sm font-medium hover:bg-fortrolla-black transition-colors duration-300 border border-fortrolla-pink/30"
                    onClick={() => openProjectModal(project)}
                  >
                    View Project
                  </button>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-3 right-3">
                  <span className="text-xs uppercase tracking-wider bg-fortrolla-black/60 backdrop-blur-sm text-fortrolla-pink px-2 py-1 rounded border border-fortrolla-pink/20">
                    {project.category}
                  </span>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-fortrolla-pink/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-fortrolla-white group-hover:text-fortrolla-pink transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-fortrolla-light/80 text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-fortrolla-light/60">{project.client}</span>
                  <span className="text-xs text-fortrolla-gold">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-secondary backdrop-blur-sm">
            Start Your Project
          </a>
        </div>
      </div>
      
      {/* Project Modal */}
      {isModalOpen && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            isModalAnimating ? 'bg-fortrolla-black/80 backdrop-blur-sm' : 'bg-transparent'
          }`}
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div 
            className={`bg-gradient-to-br from-fortrolla-black/95 to-fortrolla-gray/20 backdrop-blur-md rounded-2xl overflow-hidden max-w-6xl w-full max-h-[90vh] shadow-2xl border border-fortrolla-gray/20 transition-all duration-300 flex flex-col ${
              isModalAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject && (
              <>
                {/* Image Showcase - Takes most of the space */}
                <div className="relative flex-grow h-[75vh]">
                  {/* Close button */}
                  <button 
                    className="absolute top-4 right-4 z-20 bg-fortrolla-black/60 backdrop-blur-sm p-2 rounded-full text-fortrolla-light hover:text-fortrolla-pink transition-colors duration-300 border border-fortrolla-gray/20"
                    onClick={closeModal}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  {/* Current Image */}
                  <div className="absolute inset-0 bg-fortrolla-black/50">
                    <img 
                      src={selectedProject.images[currentImageIndex]} 
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Project Info Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-fortrolla-black/90 to-transparent p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-2xl font-bold text-fortrolla-white mb-1">
                          {selectedProject.title}
                        </h3>
                        <div className="flex items-center space-x-3 text-sm">
                          <span className="text-fortrolla-light/70">{selectedProject.client}</span>
                          <span className="text-fortrolla-light/30">•</span>
                          <span className="text-fortrolla-gold">{selectedProject.year}</span>
                          <span className="text-fortrolla-light/30">•</span>
                          <span className="text-xs uppercase tracking-wider text-fortrolla-pink">
                            {selectedProject.category}
                          </span>
                        </div>
                        <p className="text-fortrolla-light/80 text-sm mt-2 max-w-3xl line-clamp-2">
                          {selectedProject.description}
                        </p>
                      </div>
                      
                      {/* Image Counter */}
                      <div className="bg-fortrolla-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-fortrolla-light border border-fortrolla-gray/20 flex items-center space-x-1">
                        <span>{currentImageIndex + 1}</span>
                        <span>/</span>
                        <span>{selectedProject.images.length}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-fortrolla-black/60 backdrop-blur-sm p-3 rounded-full text-fortrolla-light hover:text-fortrolla-pink transition-colors duration-300 border border-fortrolla-gray/20 hover:border-fortrolla-pink/30"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateImages('prev');
                        }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      <button 
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-fortrolla-black/60 backdrop-blur-sm p-3 rounded-full text-fortrolla-light hover:text-fortrolla-pink transition-colors duration-300 border border-fortrolla-gray/20 hover:border-fortrolla-pink/30"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateImages('next');
                        }}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection; 