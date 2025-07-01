
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = "About Coach Abhiram - Best Online Fitness Coach India";
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* First Row - Image Left, Content Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative transform hover:scale-105 transition-transform duration-500">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/f4895f09-a8e6-40b3-9cf2-a450e373330d.png"
                alt="Abhiram Nair - Online fitness transformation coach India"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-orange-600 text-white p-8 rounded-3xl shadow-2xl animate-bounce">
              <div className="text-3xl font-bold">#1</div>
              <div className="text-sm font-medium">COACH</div>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Coach{' '}
                <span className="text-orange-600">
                  Abhiram
                </span>
              </h2>
              <div className="h-2 w-24 bg-orange-600 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p className="font-semibold text-2xl">
                Lost 30kg. Built lean muscle. Now I help others achieve their best physique.
              </p>
              
              <p>
                <strong className="text-gray-900">No shortcuts. Just proven results.</strong> My holistic fitness and mindset approach has transformed 500+ lives across India.
              </p>
            </div>
          </div>
        </div>

        {/* Second Row - Content Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="lg:order-2 relative transform hover:scale-105 transition-transform duration-500">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/eb03bd06-be35-426e-bca4-a6717a907409.png"
                alt="Abhiram Nair fitness coach transformation journey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:order-1 space-y-8 animate-fade-in">
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                Ready to start your <strong className="text-orange-600">transformation journey?</strong>
              </p>
              
              <p>
                With personalized workout and nutrition plans, I've helped hundreds achieve their dream physique through sustainable, science-based methods.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-orange-600 mb-3">5+</div>
                <div className="text-gray-600 font-medium">YEARS EXPERIENCE</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-red-500 mb-3">500+</div>
                <div className="text-gray-600 font-medium">TRANSFORMED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
