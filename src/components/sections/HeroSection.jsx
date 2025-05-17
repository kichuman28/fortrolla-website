import { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-fortrolla-black via-fortrolla-magenta/10 to-fortrolla-pink/20"></div>
      
      {/* Animated Gradient Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-fortrolla-pink/10 rounded-full filter blur-3xl animate-float opacity-60"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-fortrolla-magenta/10 rounded-full filter blur-3xl animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-72 h-72 bg-fortrolla-gold/10 rounded-full filter blur-3xl animate-float opacity-40" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWOGgydjR6bTAgMThoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wLTQyaC0yVjBoMnY2ek0xMiAzNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAtMTJoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWOGgydjR6bTAtNmgtMlYwaDJ2NnptMTIgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wLTEyaC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptMC02aC0yVjhoMnY0em0wLTZoLTJWMGgydjZ6bTEyIDI0aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMC0xMmgtMnYtNGgydjR6bTAtNmgtMnYtNGgydjR6bTAtNmgtMlY4aDJ2NHptMC02aC0yVjBoMnY2eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo Animation */}
          <div 
            className={`mb-6 animate-float transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <img src={logo} alt="Fortrolla Creative" className="h-28 md:h-32" />
          </div>
          
          {/* Heading */}
          <h1 
            className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-fortrolla-white mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '400ms' }}
          >
            Crafting Digital <span className="text-fortrolla-pink">Magic</span> That <span className="text-fortrolla-gold">Captivates</span>
          </h1>
          
          {/* Subheading */}
          <p 
            className={`text-fortrolla-light/80 text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '600ms' }}
          >
            A premium digital advertising agency creating extraordinary campaigns 
            for movies, plays, and events in Kochi and beyond.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <a 
              href="#projects" 
              className="btn-primary"
            >
              Explore Our Work
            </a>
            <a 
              href="#contact" 
              className="btn-secondary"
            >
              Get In Touch
            </a>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default HeroSection; 