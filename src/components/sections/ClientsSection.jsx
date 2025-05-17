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
    <section id="clients" className="relative py-24 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-fortrolla-black via-fortrolla-dark/80 to-fortrolla-gold/5"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fortrolla-gold to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fortrolla-pink to-transparent opacity-30"></div>
      
      {/* Animated Gradient Circles */}
      <div className="absolute -left-40 top-40 w-96 h-96 bg-fortrolla-gold/5 rounded-full filter blur-3xl animate-float opacity-30"></div>
      <div className="absolute -right-40 bottom-40 w-80 h-80 bg-fortrolla-pink/5 rounded-full filter blur-3xl animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWOGgydjR6bTAgMThoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wLTQyaC0yVjBoMnY2ek0xMiAzNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAtMTJoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWOGgydjR6bTAtNmgtMlYwaDJ2NnptMTIgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wLTEyaC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptMC02aC0yVjhoMnY0em0wLTZoLTJWMGgydjZ6bTEyIDI0aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMC0xMmgtMnYtNGgydjR6bTAtNmgtMnYtNGgydjR6bTAtNmgtMlY4aDJ2NHptMC02aC0yVjBoMnY2eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
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
              className="group bg-gradient-to-br from-fortrolla-black/80 to-fortrolla-gray/10 backdrop-blur-sm rounded-lg p-8 relative border border-fortrolla-gray/10 hover:border-fortrolla-pink/20 transition-all duration-500 hover:shadow-lg hover:shadow-fortrolla-pink/5"
            >
              {/* Card background accent */}
              <div className="absolute -inset-1 bg-gradient-to-r from-fortrolla-pink/0 via-fortrolla-gold/5 to-fortrolla-pink/5 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="absolute top-0 left-10 transform -translate-y-1/2 text-fortrolla-pink z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-50">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="pt-4 relative z-10">
                <p className="text-fortrolla-light/80 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-fortrolla-pink/30 group-hover:border-fortrolla-pink/50 transition-all duration-300">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h4 className="text-fortrolla-white font-semibold group-hover:text-fortrolla-pink transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-fortrolla-light/80 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-tl from-fortrolla-gold/20 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Clients Logos */}
        <h3 className="text-center text-fortrolla-white font-display text-2xl mb-10">Trusted By</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-fortrolla-black/70 to-fortrolla-gray/10 backdrop-blur-sm rounded-lg p-6 border border-fortrolla-gray/10 flex items-center justify-center h-32 hover:border-fortrolla-gold/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-fortrolla-gold/0 via-fortrolla-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-fortrolla-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <span className="text-lg font-display text-fortrolla-gold opacity-70 text-center group-hover:opacity-100 transition-all duration-300 relative z-10">
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