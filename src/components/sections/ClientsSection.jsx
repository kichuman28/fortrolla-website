const ClientsSection = () => {
  const testimonials = [
    {
      quote: "Fortrolla Creative transformed our film campaign with their innovative approach. Their digital strategy significantly boosted our opening weekend numbers.",
      name: "Roshan Mathew",
      title: "Actor",
      image: "https://placehold.co/100x100/FF4191/FFFFFF?text=RM"
    },
    {
      quote: "The projection mapping work they did for our theatre festival was nothing short of spectacular. Audiences were blown away by the visual experience.",
      name: "Maya Menon",
      title: "Festival Director",
      image: "https://placehold.co/100x100/FF4191/FFFFFF?text=MM"
    },
    {
      quote: "Working with Fortrolla was a game-changer for our brand. Their creative strategy helped us stand out in a crowded marketplace.",
      name: "Arjun Kumar",
      title: "Marketing Head",
      image: "https://placehold.co/100x100/FF4191/FFFFFF?text=AK"
    },
  ];

  const clients = [
    "Kerala State Film Corporation",
    "Malabar Arts Festival",
    "Kochi International Film Festival",
    "Wonderla Entertainment",
    "Cochin Shipyard Limited",
    "Lulu Mall",
    "Kerala Tourism",
    "Crossroads Entertainment"
  ];

  return (
    <section id="clients" className="py-24 bg-fortrolla-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-fortrolla-white font-display text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-fortrolla-pink">Clients</span>
          </h2>
          <p className="text-fortrolla-light/80">
            We've had the privilege of working with incredible brands and talents.
          </p>
        </div>
        
        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-fortrolla-gray/20 to-fortrolla-dark rounded-lg p-8 relative"
            >
              <div className="absolute top-0 left-10 transform -translate-y-1/2 text-fortrolla-pink">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-50">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="pt-4">
                <p className="text-fortrolla-light/80 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-fortrolla-pink/30">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="text-fortrolla-white font-semibold">{testimonial.name}</h4>
                    <p className="text-fortrolla-light/80 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Clients Logos */}
        <h3 className="text-center text-fortrolla-white font-display text-2xl mb-10">Trusted By</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-fortrolla-dark/50 rounded-lg p-6 border border-fortrolla-gray/10 flex items-center justify-center h-32 hover:border-fortrolla-pink/30 transition-all duration-300"
            >
              <span className="text-lg font-display text-fortrolla-gold opacity-70 text-center">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection; 