import { useState } from 'react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Empuraan Movie Promo",
      category: "film",
      image: "https://placehold.co/600x400/1A1A1A/FF4191?text=Empuraan+Promo",
      description: "Digital campaign for the blockbuster Malayalam movie starring Mohanlal."
    },
    {
      title: "National Theatre Festival",
      category: "event",
      image: "https://placehold.co/600x400/1A1A1A/FF4191?text=Theatre+Festival",
      description: "Projection mapping and digital promotion for Kerala's biggest theatre festival."
    },
    {
      title: "Roshan Mathew Brand Campaign",
      category: "branding",
      image: "https://placehold.co/600x400/1A1A1A/FF4191?text=Roshan+Mathew",
      description: "Personal branding campaign for the acclaimed Malayalam actor."
    },
    {
      title: "Kochi Music Festival",
      category: "event",
      image: "https://placehold.co/600x400/1A1A1A/FF4191?text=Music+Festival",
      description: "Complete digital marketing solution for the annual music festival in Kochi."
    },
    {
      title: "Kerala Tourism Campaign",
      category: "advertising",
      image: "https://placehold.co/600x400/1A1A1A/FF4191?text=Kerala+Tourism",
      description: "Innovative advertising campaign showcasing Kerala's natural beauty."
    },
    {
      title: "Corporate Brand Identity",
      category: "branding",
      image: "https://placehold.co/600x400/1A1A1A/FF4191?text=Corporate+Identity",
      description: "Complete brand identity design for a leading tech company in Kochi."
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'film', name: 'Film' },
    { id: 'event', name: 'Events' },
    { id: 'branding', name: 'Branding' },
    { id: 'advertising', name: 'Advertising' },
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
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${filter === category.id 
                  ? 'bg-gradient-to-r from-fortrolla-pink to-fortrolla-magenta text-white shadow-lg shadow-fortrolla-pink/30' 
                  : 'bg-fortrolla-gray/20 backdrop-blur-sm text-fortrolla-light/80 hover:bg-fortrolla-gray/30'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-fortrolla-black/90 to-fortrolla-gray/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-fortrolla-gray/10 hover:border-fortrolla-pink/30"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fortrolla-black to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-fortrolla-pink/40 to-fortrolla-magenta/30 backdrop-blur-sm">
                  <button className="bg-fortrolla-black/70 backdrop-blur-sm px-5 py-2.5 rounded-full text-fortrolla-white text-sm font-medium hover:bg-fortrolla-black transition-colors duration-300 border border-fortrolla-pink/30">
                    View Project
                  </button>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-fortrolla-pink/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-fortrolla-white group-hover:text-fortrolla-pink transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wider bg-gradient-to-r from-fortrolla-pink/20 to-fortrolla-magenta/10 text-fortrolla-pink px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-fortrolla-light/80 text-sm">
                  {project.description}
                </p>
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
    </section>
  );
};

export default ProjectsSection; 