const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-fortrolla-dark">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-fortrolla-white font-display text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-fortrolla-pink">Fortrolla</span> Creative
          </h2>
          <p className="text-fortrolla-light/80">
            We transform ideas into captivating digital experiences that leave a lasting impression.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-fortrolla-pink/10 to-fortrolla-magenta/20 overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl font-display font-bold text-fortrolla-pink/10">F</div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-90">
                <div className="w-3/4 h-3/4 rounded-lg border-2 border-fortrolla-pink/20 transform rotate-6 transition-transform group-hover:rotate-3"></div>
              </div>
              
              <div className="absolute inset-0 p-6 flex items-center justify-center">
                <div className="space-y-6 text-left">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-fortrolla-pink/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-fortrolla-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-fortrolla-white">Creative Excellence</h3>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-fortrolla-pink/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-fortrolla-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-fortrolla-white">Innovative Solutions</h3>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-fortrolla-pink/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-fortrolla-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-fortrolla-white">Client Partnership</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Content */}
          <div className="space-y-6">
            <p className="text-lg text-fortrolla-light/80 leading-relaxed">
              Founded in Kakkanad, Kochi, Fortrolla Creative is a premium digital advertising agency 
              specializing in creating extraordinary campaigns for movies, plays, events, and more. 
              Our team of creative professionals combines artistic vision with technical expertise 
              to deliver captivating digital experiences.
            </p>
            <p className="text-lg text-fortrolla-light/80 leading-relaxed">
              What sets us apart is our commitment to innovation and our deep understanding 
              of the entertainment industry. From stunning projection mappings to strategic 
              digital campaigns, we help our clients stand out in a crowded marketplace.
            </p>
            
            <div className="grid grid-cols-2 gap-6 my-8">
              {[
                { value: "50+", label: "Happy Clients" },
                { value: "100+", label: "Projects Completed" },
                { value: "5+", label: "Years Experience" },
                { value: "10+", label: "Industry Awards" }
              ].map((stat, index) => (
                <div key={index} className="p-4 bg-fortrolla-black/50 rounded-lg border border-fortrolla-gray/20 text-center">
                  <div className="text-3xl font-bold text-fortrolla-gold mb-1">{stat.value}</div>
                  <div className="text-sm text-fortrolla-light/80">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <a href="#services" className="btn-secondary inline-block">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 