import { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past threshold
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Calculate scroll progress percentage
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 px-4 py-3 flex justify-center">
      <div 
        className={`transition-all duration-300 w-[95%] max-w-7xl rounded-xl border border-transparent ${
          isScrolled 
            ? 'bg-fortrolla-black/80 backdrop-blur-md shadow-lg border-fortrolla-gold/20 translate-y-0' 
            : 'bg-fortrolla-black/40 backdrop-blur-sm translate-y-2'
        }`}
        style={{
          boxShadow: isScrolled ? `0 10px 30px -10px rgba(255, 184, 108, 0.15)` : 'none',
        }}
      >
        {/* Progress bar */}
        <div 
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-fortrolla-gold via-fortrolla-pink to-fortrolla-magenta rounded-t-xl transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2">
              <img src={logo} alt="Fortrolla Creative" className="h-12" />
              <span className="font-display text-fortrolla-white text-xl font-semibold tracking-wider">
                <span>FORTROLLA</span>
                <span className="block text-xs tracking-widest font-sans text-fortrolla-gold">CREATIVE</span>
              </span>
            </a>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Projects', 'Clients', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className={`font-sans hover:text-fortrolla-pink font-medium transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-fortrolla-pink after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                    isScrolled ? 'text-fortrolla-white/90' : 'text-fortrolla-light/80'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <a 
                href="#contact" 
                className={`btn-primary ${isScrolled ? 'shadow-lg' : ''}`}
              >
                Get In Touch
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-fortrolla-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-2 mb-2 bg-fortrolla-gray/90 backdrop-blur-md rounded-lg p-4">
              <nav className="flex flex-col space-y-4">
                {['Home', 'About', 'Services', 'Projects', 'Clients', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="font-sans text-fortrolla-light/80 hover:text-fortrolla-pink font-medium transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a 
                  href="#contact" 
                  className="btn-primary-mobile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get In Touch
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar; 