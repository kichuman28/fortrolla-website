import { useState, useEffect, useRef } from 'react';

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const autoplayTimerRef = useRef(null);
  
  const testimonials = [
    {
      quote: "Fortrolla Creative transformed our film campaign with their innovative approach. Their digital strategy significantly boosted our opening weekend numbers.",
      name: "Roshan Mathew",
      title: "Actor",
      image: "https://placehold.co/100x100/FF4191/FFFFFF?text=RM",
      rating: 5
    },
    {
      quote: "The projection mapping work they did for our theatre festival was nothing short of spectacular. Audiences were blown away by the visual experience.",
      name: "Maya Menon",
      title: "Festival Director",
      image: "https://placehold.co/100x100/FF4191/FFFFFF?text=MM",
      rating: 5
    },
    {
      quote: "Working with Fortrolla was a game-changer for our brand. Their creative strategy helped us stand out in a crowded marketplace.",
      name: "Arjun Kumar",
      title: "Marketing Head",
      image: "https://placehold.co/100x100/FF4191/FFFFFF?text=AK",
      rating: 4
    },
    {
      quote: "The holographic projection they created for our product launch was the highlight of the event. Everyone was talking about it for weeks.",
      name: "Priya Sharma",
      title: "Event Manager",
      image: "https://placehold.co/100x100/FF4191/FFFFFF?text=PS",
      rating: 5
    },
    {
      quote: "Fortrolla's team understood our vision perfectly and delivered a campaign that exceeded our expectations in every way.",
      name: "Thomas Joseph",
      title: "Creative Director",
      image: "https://placehold.co/100x100/FF4191/FFFFFF?text=TJ",
      rating: 5
    },
  ];
  
  // Autoplay functionality
  useEffect(() => {
    if (autoplayEnabled) {
      autoplayTimerRef.current = setInterval(() => {
        goToNext();
      }, 5000);
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [activeIndex, autoplayEnabled]);
  
  const goToNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };
  
  const goToPrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };
  
  const goToSlide = (index) => {
    if (isTransitioning || index === activeIndex) return;
    
    setIsTransitioning(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
  };
  
  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setAutoplayEnabled(false);
  };
  
  const handleMouseLeave = () => {
    setAutoplayEnabled(true);
  };
  
  // Render star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-fortrolla-gold' : 'text-fortrolla-gray/30'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div 
      className="relative max-w-5xl mx-auto overflow-hidden py-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Large quote icon background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-fortrolla-pink/5 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      {/* Testimonials */}
      <div className="relative h-[400px]">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-700 ease-in-out ${
              activeIndex === index 
                ? 'opacity-100 transform-none' 
                : 'opacity-0 translate-x-20'
            }`}
            style={{ 
              zIndex: activeIndex === index ? 10 : 0,
              transitionDelay: activeIndex === index ? '0.1s' : '0s',
            }}
          >
            <div className="max-w-3xl text-center">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-4 border-fortrolla-pink/30 shadow-lg shadow-fortrolla-pink/20">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
              
              <p className="text-fortrolla-white text-xl md:text-2xl italic font-light leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              
              <div className="flex flex-col items-center">
                <h4 className="text-fortrolla-pink font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-fortrolla-light/80 text-sm mb-2">{testimonial.title}</p>
                <div className="flex space-x-1 mt-2">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-fortrolla-pink scale-125' 
                : 'bg-fortrolla-gray/30 hover:bg-fortrolla-pink/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrev}
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 p-3 rounded-full bg-fortrolla-black/60 backdrop-blur-sm border border-fortrolla-gray/20 hover:border-fortrolla-pink/30 transition-all duration-300 shadow-lg hover:shadow-fortrolla-pink/20 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label="Previous testimonial"
        disabled={isTransitioning}
      >
        <svg className="w-5 h-5 text-fortrolla-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={goToNext}
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 p-3 rounded-full bg-fortrolla-black/60 backdrop-blur-sm border border-fortrolla-gray/20 hover:border-fortrolla-pink/30 transition-all duration-300 shadow-lg hover:shadow-fortrolla-pink/20 ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
        aria-label="Next testimonial"
        disabled={isTransitioning}
      >
        <svg className="w-5 h-5 text-fortrolla-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default TestimonialsCarousel; 