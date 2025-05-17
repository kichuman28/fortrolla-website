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
            
            {/* Premium Features Section */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-fortrolla-pink to-fortrolla-gold p-0.5">
                  <div className="w-full h-full rounded-full bg-fortrolla-black flex items-center justify-center">
                    <svg className="w-6 h-6 text-fortrolla-gold group-hover:text-fortrolla-pink transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-fortrolla-white text-lg font-medium mb-1">Creative Excellence</h3>
                  <p className="text-fortrolla-light/70 text-sm">Blending artistic vision with technical precision to create memorable experiences</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-fortrolla-pink to-fortrolla-gold p-0.5">
                  <div className="w-full h-full rounded-full bg-fortrolla-black flex items-center justify-center">
                    <svg className="w-6 h-6 text-fortrolla-gold group-hover:text-fortrolla-pink transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-fortrolla-white text-lg font-medium mb-1">Innovative Approach</h3>
                  <p className="text-fortrolla-light/70 text-sm">Cutting-edge technologies and fresh ideas to make your brand stand out</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-fortrolla-pink to-fortrolla-gold p-0.5">
                  <div className="w-full h-full rounded-full bg-fortrolla-black flex items-center justify-center">
                    <svg className="w-6 h-6 text-fortrolla-gold group-hover:text-fortrolla-pink transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-fortrolla-white text-lg font-medium mb-1">Personal Touch</h3>
                  <p className="text-fortrolla-light/70 text-sm">Dedicated attention to every client with tailored solutions for your unique needs</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <a href="#services" className="btn-secondary inline-flex items-center group">
                <span>Explore Services</span>
                <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 