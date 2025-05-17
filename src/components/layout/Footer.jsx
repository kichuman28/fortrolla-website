import { useState } from 'react';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    
    // Simulate subscription
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubscribeStatus(null);
      }, 5000);
    }, 1000);
  };
  
  return (
    <footer className="relative bg-gradient-to-b from-fortrolla-dark to-fortrolla-black overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-fortrolla-gold to-transparent opacity-30"></div>
      
      {/* Animated Gradient Circles */}
      <div className="absolute -left-40 top-40 w-96 h-96 bg-fortrolla-pink/5 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute -right-40 bottom-40 w-80 h-80 bg-fortrolla-gold/5 rounded-full filter blur-3xl opacity-20"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWOGgydjR6bTAgMThoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wLTQyaC0yVjBoMnY2ek0xMiAzNGgtMnYtNGgydjR6bTAgNmgtMnYtNGgydjR6bTAtMTJoLTJ2LTRoMnY0em0wLTZoLTJ2LTRoMnY0em0wLTZoLTJWOGgydjR6bTAtNmgtMlYwaDJ2NnptMTIgMjRoLTJ2LTRoMnY0em0wIDZoLTJ2LTRoMnY0em0wLTEyaC0ydi00aDJ2NHptMC02aC0ydi00aDJ2NHptMC02aC0yVjhoMnY0em0wLTZoLTJWMGgydjZ6bTEyIDI0aC0ydi00aDJ2NHptMCA2aC0ydi00aDJ2NHptMC0xMmgtMnYtNGgydjR6bTAtNmgtMnYtNGgydjR6bTAtNmgtMlY4aDJ2NHptMC02aC0yVjBoMnY2eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>
      
      {/* Newsletter Section */}
      <div className="relative z-10 border-b border-fortrolla-gray/20">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-fortrolla-white mb-4">
                Stay Updated with <span className="text-fortrolla-pink">Fortrolla</span>
              </h3>
              <p className="text-fortrolla-light/80 max-w-lg">
                Subscribe to our newsletter to receive updates on our latest projects, industry insights, and exclusive offers.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow relative">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-3 bg-fortrolla-black/60 backdrop-blur-sm border border-fortrolla-gray/30 rounded-lg text-fortrolla-white focus:outline-none focus:ring-2 focus:ring-fortrolla-pink/50 focus:border-transparent transition-all duration-300"
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-fortrolla-gray/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              
              {subscribeStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm backdrop-blur-sm">
                  Thank you for subscribing! We'll keep you updated.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo & About */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-fortrolla-pink/30 to-fortrolla-gold/30 rounded-full blur-md opacity-70"></div>
                  <div className="relative bg-fortrolla-black rounded-full p-1">
                    <img src={logo} alt="Fortrolla Creative" className="h-10" />
                  </div>
                </div>
                <span className="font-display text-fortrolla-white text-lg">
                  <span>FORTROLLA</span>
                  <span className="block text-xs font-sans text-fortrolla-gold">CREATIVE</span>
                </span>
              </div>
              <p className="text-fortrolla-light/80 text-sm leading-relaxed">
                Creating innovative digital advertising solutions for movies, 
                events, and plays. Based in Kakkanad, Kochi.
              </p>
              <div className="flex space-x-4">
                {/* Social Media Icons */}
                {[
                  { name: 'Facebook', icon: 'M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z' },
                  { name: 'Instagram', icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm3.85-11.5a1.35 1.35 0 1 1-1.35-1.35 1.35 1.35 0 0 1 1.35 1.35zM12 8.8a3.2 3.2 0 1 0 3.2 3.2 3.2 3.2 0 0 0-3.2-3.2zm0 5.2a2 2 0 1 1 2-2 2 2 0 0 1-2 2z' },
                  { name: 'Twitter', icon: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' },
                  { name: 'LinkedIn', icon: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z' },
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    aria-label={social.name}
                    className="group"
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-fortrolla-pink/0 to-fortrolla-gold/0 rounded-full blur-md opacity-0 group-hover:opacity-70 group-hover:from-fortrolla-pink/30 group-hover:to-fortrolla-gold/30 transition-all duration-300"></div>
                      <div className="relative w-10 h-10 bg-fortrolla-black/60 rounded-full flex items-center justify-center border border-fortrolla-gray/20 group-hover:border-fortrolla-pink/30 transition-all duration-300">
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          className="w-5 h-5 text-fortrolla-light/80 group-hover:text-fortrolla-pink transition-colors duration-300"
                        >
                          <path d={social.icon} />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-fortrolla-white font-display text-lg mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-fortrolla-pink to-transparent"></span>
              </h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Services', 'Projects', 'Clients', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="text-fortrolla-light/80 hover:text-fortrolla-pink transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-fortrolla-pink mr-0 opacity-0 group-hover:w-2 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-fortrolla-white font-display text-lg mb-6 relative inline-block">
                Our Services
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-fortrolla-pink to-transparent"></span>
              </h3>
              <ul className="space-y-3">
                {[
                  'Digital Advertising', 
                  'Creative Campaigns', 
                  'Projection Mapping', 
                  'Event Promotion', 
                  'Film & Theatre Marketing', 
                  'Brand Identity'
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href="#services" 
                      className="text-fortrolla-light/80 hover:text-fortrolla-pink transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-fortrolla-pink mr-0 opacity-0 group-hover:w-2 group-hover:mr-2 group-hover:opacity-100 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-fortrolla-white font-display text-lg mb-6 relative inline-block">
                Get In Touch
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-fortrolla-pink to-transparent"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fortrolla-black/60 border border-fortrolla-gray/20 flex items-center justify-center group-hover:border-fortrolla-pink/30 transition-all duration-300">
                    <svg className="w-5 h-5 text-fortrolla-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-fortrolla-light/80 text-sm pt-2">
                    Civil Line Road, Kakkanad<br />
                    Kochi, Kerala 682030<br />
                    India
                  </span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fortrolla-black/60 border border-fortrolla-gray/20 flex items-center justify-center group-hover:border-fortrolla-pink/30 transition-all duration-300">
                    <svg className="w-5 h-5 text-fortrolla-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:info@fortrolla.com" className="text-fortrolla-light/80 hover:text-fortrolla-pink transition-colors duration-300 text-sm">
                    info@fortrolla.com
                  </a>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-fortrolla-black/60 border border-fortrolla-gray/20 flex items-center justify-center group-hover:border-fortrolla-pink/30 transition-all duration-300">
                    <svg className="w-5 h-5 text-fortrolla-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+919876543210" className="text-fortrolla-light/80 hover:text-fortrolla-pink transition-colors duration-300 text-sm">
                    +91 98765 43210
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="relative z-10 border-t border-fortrolla-gray/10 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-fortrolla-light/60 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Fortrolla Creative. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-fortrolla-light/60 hover:text-fortrolla-pink text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-fortrolla-light/60 hover:text-fortrolla-pink text-sm transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-fortrolla-light/60 hover:text-fortrolla-pink text-sm transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 