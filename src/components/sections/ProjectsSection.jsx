import { useState } from 'react';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Empuraan Movie Promo",
      category: "film",
      image: "https://placehold.co/600x400/1A1A1A/8A2BE2?text=Empuraan+Promo",
      description: "Digital campaign for the blockbuster Malayalam movie starring Mohanlal."
    },
    {
      title: "National Theatre Festival",
      category: "event",
      image: "https://placehold.co/600x400/1A1A1A/8A2BE2?text=Theatre+Festival",
      description: "Projection mapping and digital promotion for Kerala's biggest theatre festival."
    },
    {
      title: "Roshan Mathew Brand Campaign",
      category: "branding",
      image: "https://placehold.co/600x400/1A1A1A/8A2BE2?text=Roshan+Mathew",
      description: "Personal branding campaign for the acclaimed Malayalam actor."
    },
    {
      title: "Kochi Music Festival",
      category: "event",
      image: "https://placehold.co/600x400/1A1A1A/8A2BE2?text=Music+Festival",
      description: "Complete digital marketing solution for the annual music festival in Kochi."
    },
    {
      title: "Kerala Tourism Campaign",
      category: "advertising",
      image: "https://placehold.co/600x400/1A1A1A/8A2BE2?text=Kerala+Tourism",
      description: "Innovative advertising campaign showcasing Kerala's natural beauty."
    },
    {
      title: "Corporate Brand Identity",
      category: "branding",
      image: "https://placehold.co/600x400/1A1A1A/8A2BE2?text=Corporate+Identity",
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
    <section id="projects" className="py-24 bg-fortrolla-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-fortrolla-white font-display text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-fortrolla-accent">Projects</span>
          </h2>
          <p className="text-fortrolla-silver">
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
                  ? 'bg-fortrolla-accent text-white shadow-lg shadow-fortrolla-accent/30' 
                  : 'bg-fortrolla-gray/20 text-fortrolla-silver hover:bg-fortrolla-gray/30'}`}
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
              className="group bg-fortrolla-black rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-fortrolla-gray/10 hover:border-fortrolla-accent/30"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fortrolla-black to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-fortrolla-accent/30 backdrop-blur-sm">
                  <button className="bg-fortrolla-black px-4 py-2 rounded-full text-fortrolla-white text-sm font-medium hover:bg-fortrolla-dark transition-colors duration-300">
                    View Project
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-fortrolla-white group-hover:text-fortrolla-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wider bg-fortrolla-accent/10 text-fortrolla-accent px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-fortrolla-silver text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-secondary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 