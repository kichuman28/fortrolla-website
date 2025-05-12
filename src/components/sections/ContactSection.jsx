import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // This is where you would normally send the form data to a server
    // For this demo, we'll simulate a successful submission after a delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-fortrolla-dark to-fortrolla-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-fortrolla-white font-display text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="text-fortrolla-accent">Touch</span>
          </h2>
          <p className="text-fortrolla-silver">
            Ready to make your creative vision a reality? Contact us today to discuss your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Form */}
          <div className="bg-fortrolla-gray/10 rounded-xl p-8 backdrop-blur-sm border border-fortrolla-gray/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-fortrolla-white text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-fortrolla-black/80 border border-fortrolla-gray/30 rounded-lg text-fortrolla-white focus:outline-none focus:ring-2 focus:ring-fortrolla-accent/50 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-fortrolla-white text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-fortrolla-black/80 border border-fortrolla-gray/30 rounded-lg text-fortrolla-white focus:outline-none focus:ring-2 focus:ring-fortrolla-accent/50 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-fortrolla-white text-sm font-medium mb-2">
                    Phone Number (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-fortrolla-black/80 border border-fortrolla-gray/30 rounded-lg text-fortrolla-white focus:outline-none focus:ring-2 focus:ring-fortrolla-accent/50 focus:border-transparent transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-fortrolla-white text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-fortrolla-black/80 border border-fortrolla-gray/30 rounded-lg text-fortrolla-white focus:outline-none focus:ring-2 focus:ring-fortrolla-accent/50 focus:border-transparent transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-fortrolla-white text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-fortrolla-black/80 border border-fortrolla-gray/30 rounded-lg text-fortrolla-white focus:outline-none focus:ring-2 focus:ring-fortrolla-accent/50 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm text-center">
                    Your message has been sent successfully! We'll get back to you soon.
                  </div>
                )}
              </div>
            </form>
          </div>
          
          {/* Right Column: Contact Info & Map */}
          <div>
            <div className="bg-fortrolla-gray/10 rounded-xl p-8 backdrop-blur-sm border border-fortrolla-gray/20 mb-8">
              <h3 className="text-fortrolla-white font-display text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-fortrolla-accent/10 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-fortrolla-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-fortrolla-white font-medium">Office Address</h4>
                    <p className="text-fortrolla-silver mt-1">
                      Civil Line Road, Kakkanad<br />
                      Kochi, Kerala 682030<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-fortrolla-accent/10 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-fortrolla-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-fortrolla-white font-medium">Phone</h4>
                    <p className="text-fortrolla-silver mt-1">
                      <a href="tel:+919876543210" className="hover:text-fortrolla-white transition-colors duration-300">
                        +91 98765 43210
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-fortrolla-accent/10 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-fortrolla-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-fortrolla-white font-medium">Email</h4>
                    <p className="text-fortrolla-silver mt-1">
                      <a href="mailto:info@fortrolla.com" className="hover:text-fortrolla-white transition-colors duration-300">
                        info@fortrolla.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-fortrolla-accent/10 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-fortrolla-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-fortrolla-white font-medium">Business Hours</h4>
                    <p className="text-fortrolla-silver mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map or Image Placeholder */}
            <div className="rounded-xl overflow-hidden h-64 bg-fortrolla-dark border border-fortrolla-gray/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.90269381318!2d76.32970424678736!3d10.012356071855045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080cd952dbfa89%3A0x66c2a8858ff0d1b2!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1679842387133!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Fortrolla Creative Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 