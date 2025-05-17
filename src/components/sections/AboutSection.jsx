import carImage from '../../assets/images/car.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-fortrolla-black via-fortrolla-dark/90 to-fortrolla-magenta/20"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fortrolla-pink to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fortrolla-gold to-transparent opacity-30"></div>
      
      {/* Animated Gradient Circle */}
      <div className="absolute -right-40 top-40 w-96 h-96 bg-fortrolla-pink/5 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute -left-40 bottom-40 w-80 h-80 bg-fortrolla-gold/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-fortrolla-white font-display text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-fortrolla-pink">Fortrolla</span> Creative
          </h2>
          <p className="text-fortrolla-light/80">
            Transforming brands through captivating digital experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Car Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-fortrolla-pink to-fortrolla-gold opacity-50 rounded-xl blur-lg group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src={carImage} 
                  alt="Fortrolla Creative Project" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-fortrolla-black/90 to-transparent p-4">
                <div className="flex items-center">
                  <div className="h-8 w-1 bg-fortrolla-gold rounded-full mr-3"></div>
                  <p className="text-sm text-fortrolla-light/90 font-medium">Featured Project: Projection Mapping</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Content */}
          <div className="space-y-6">
            <p className="text-lg text-fortrolla-light/90 leading-relaxed">
              Fortrolla Creative delivers premium digital advertising solutions for films, events, and theatrical productions. Based in Kochi, we combine artistic vision with technical expertise to create campaigns that captivate and convert.
            </p>
            
            <div className="grid grid-cols-2 gap-4 my-8">
              {[
                { value: "5+", label: "Clients" },
                { value: "100+", label: "Projects" },
                { value: "2+", label: "Years" },
                { value: "10+", label: "Awards" }
              ].map((stat, index) => (
                <div key={index} className="p-4 bg-fortrolla-black/30 backdrop-blur-sm rounded-lg border border-fortrolla-gray/20 text-center group hover:border-fortrolla-pink/30 transition-all duration-300">
                  <div className="text-3xl font-bold text-fortrolla-gold mb-1 group-hover:text-fortrolla-pink transition-colors duration-300">{stat.value}</div>
                  <div className="text-sm text-fortrolla-light/80">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <a href="#services" className="btn-secondary inline-block">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 