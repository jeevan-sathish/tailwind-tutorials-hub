
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white z-0"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-2">
              <div className="inline-block py-1 px-3 rounded-full bg-tailwind-blue/10 text-tailwind-blue text-sm font-medium">
                Utility-First CSS Framework
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Master <span className="gradient-text">Tailwind CSS</span> with our comprehensive tutorials
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Learn how to build beautiful, responsive interfaces with Tailwind CSS's utility-first approach. From basic concepts to advanced techniques.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection('tutorials')}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-tailwind-blue to-tailwind-indigo text-white font-medium hover-scale button-glow"
              >
                Start Learning
              </button>
              <button 
                onClick={() => scrollToSection('documentation')}
                className="px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
              >
                Read Documentation
              </button>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-1">
              <div className="absolute top-0 left-0 right-0 h-10 bg-gray-800 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="pt-10 p-4 bg-gray-900 rounded-lg overflow-hidden">
                <pre className="text-sm md:text-base overflow-x-auto text-gray-200 font-mono">
                  <code>{`
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" 
           src="/img/building.jpg" alt="Modern building architecture">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
        Incredible accommodation for your team
      </a>
      <p class="mt-2 text-slate-500">
        Looking to take your team away on a retreat? We have the perfect location!
      </p>
    </div>
  </div>
</div>
                  `}</code>
                </pre>
              </div>
            </div>
            
            <div className="absolute -z-10 top-1/4 right-0 w-72 h-72 bg-tailwind-indigo/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 left-0 w-60 h-60 bg-tailwind-blue/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <button 
            onClick={() => scrollToSection('documentation')}
            className="flex flex-col items-center text-gray-500 hover:text-tailwind-blue transition-colors duration-300"
          >
            <span className="text-sm mb-2">Scroll to learn more</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
