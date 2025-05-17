import TestimonialsCarousel from './TestimonialsCarousel';

const ClientsSection = () => {
  const clients = [
    {
      name: "Kerala State Film Corporation",
      logo: "https://placehold.co/200x100/111111/FFD700?text=KSFC"
    },
    {
      name: "Malabar Arts Festival",
      logo: "https://placehold.co/200x100/111111/FFD700?text=MAF"
    },
    {
      name: "Kochi International Film Festival",
      logo: "https://placehold.co/200x100/111111/FFD700?text=KIFF"
    },
    {
      name: "Wonderla Entertainment",
      logo: "https://placehold.co/200x100/111111/FFD700?text=Wonderla"
    },
    {
      name: "Cochin Shipyard Limited",
      logo: "https://placehold.co/200x100/111111/FFD700?text=CSL"
    },
    {
      name: "Lulu Mall",
      logo: "https://placehold.co/200x100/111111/FFD700?text=Lulu"
    },
    {
      name: "Kerala Tourism",
      logo: "https://placehold.co/200x100/111111/FFD700?text=KT"
    },
    {
      name: "Crossroads Entertainment",
      logo: "https://placehold.co/200x100/111111/FFD700?text=Crossroads"
    }
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
        
        {/* Testimonials Carousel */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-fortrolla-black/90 to-fortrolla-gray/10 backdrop-blur-sm rounded-xl border border-fortrolla-gray/10 overflow-hidden shadow-lg shadow-fortrolla-black/50">
            <div className="relative py-4">
              <h3 className="text-center text-fortrolla-white font-display text-2xl mb-6">Client Testimonials</h3>
              <TestimonialsCarousel />
            </div>
          </div>
        </div>
        
        {/* Clients Logos */}
        <h3 className="text-center text-fortrolla-white font-display text-2xl mb-10">Trusted By</h3>
        
        {/* Marquee effect for logos */}
        <div className="relative overflow-hidden py-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-fortrolla-black before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-fortrolla-black after:to-transparent">
          {/* First row */}
          <div className="flex animate-marquee space-x-16 py-4">
            {clients.map((client, index) => (
              <div 
                key={`row1-${index}`} 
                className="group relative flex min-w-[200px] items-center justify-center"
              >
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-fortrolla-gold/0 via-fortrolla-gold/10 to-fortrolla-pink/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100"></div>
                <div className="relative flex h-24 w-full items-center justify-center rounded-lg border border-fortrolla-gray/10 bg-fortrolla-black/60 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-fortrolla-gold/30 group-hover:shadow-lg group-hover:shadow-fortrolla-gold/5">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-16 max-w-full object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100" 
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row (reversed) */}
          <div className="flex animate-marquee-reverse space-x-16 py-4 mt-6">
            {[...clients].reverse().map((client, index) => (
              <div 
                key={`row2-${index}`} 
                className="group relative flex min-w-[200px] items-center justify-center"
              >
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-fortrolla-pink/10 via-fortrolla-gold/10 to-fortrolla-gold/0 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100"></div>
                <div className="relative flex h-24 w-full items-center justify-center rounded-lg border border-fortrolla-gray/10 bg-fortrolla-black/60 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-fortrolla-gold/30 group-hover:shadow-lg group-hover:shadow-fortrolla-gold/5">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-16 max-w-full object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection; 