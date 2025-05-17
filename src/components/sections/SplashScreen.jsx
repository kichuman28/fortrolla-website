import { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.png';

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  
  useEffect(() => {
    // Animate progress from 0 to 100
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            // Start fade out animation when progress is complete
            setTimeout(() => {
              setFadeOut(true);
              // Notify parent component when animation is complete
              setTimeout(() => {
                onComplete();
              }, 1000);
            }, 500);
            return 100;
          }
          return prev + 1;
        });
      }, 25);
      
      return () => clearInterval(interval);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-fortrolla-black transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated circles */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-fortrolla-gold/20 animate-ping opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-fortrolla-pink/10 animate-pulse"></div>
        </div>
        
        {/* Logo with animation */}
        <div className="relative mb-12 animate-float">
          <div className="absolute -inset-4 bg-gradient-to-r from-fortrolla-pink/20 via-fortrolla-gold/20 to-fortrolla-magenta/20 rounded-full blur-md animate-spin-slow"></div>
          <div className="relative bg-fortrolla-black/80 p-4 rounded-full">
            <img 
              src={logo} 
              alt="Fortrolla Creative" 
              className="h-32 w-32 object-contain"
            />
          </div>
        </div>
        
        {/* Brand name with animated reveal */}
        <div className="mb-12 text-center overflow-hidden">
          <h1 className="font-display text-4xl font-bold tracking-wider text-fortrolla-white">
            <span className="inline-block animate-reveal">FORTROLLA</span>
          </h1>
          <p className="text-xs tracking-widest font-sans text-fortrolla-gold mt-1">
            <span className="inline-block animate-reveal" style={{ animationDelay: '0.5s' }}>CREATIVE</span>
          </p>
        </div>
        
        {/* Progress bar */}
        <div className="w-64 h-1 bg-fortrolla-gray/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-fortrolla-pink via-fortrolla-gold to-fortrolla-magenta transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Loading text */}
        <p className="text-fortrolla-light/60 text-sm mt-4">
          {progress < 100 ? 'Loading...' : 'Welcome'}
        </p>
      </div>
    </div>
  );
};

export default SplashScreen; 