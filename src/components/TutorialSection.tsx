
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import CodeBlock from './CodeBlock';
import { tutorialSections } from '../data/tutorialData';

const TutorialSection = () => {
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [activeConcept, setActiveConcept] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleSection = (sectionId: string) => {
    setVisibleSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleConceptClick = (conceptId: string) => {
    setActiveConcept((prev) => (prev === conceptId ? null : conceptId));
  };

  return (
    <section id="tutorials" ref={sectionRef} className="py-20 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute -z-10 top-1/4 right-0 w-96 h-96 bg-tailwind-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 left-0 w-80 h-80 bg-tailwind-indigo/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block py-1 px-3 rounded-full bg-tailwind-blue/10 text-tailwind-blue text-sm font-medium mb-4">
            Tutorials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailwind CSS Concepts</h2>
          <p className="text-gray-600">
            Explore comprehensive tutorials on Tailwind CSS with detailed explanations and code examples.
          </p>
        </div>

        <div className={`mt-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar navigation */}
            <div className="lg:col-span-3">
              <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Tutorial Sections</h3>
                </div>
                <nav className="p-2">
                  <ul className="space-y-1">
                    {tutorialSections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left hover:bg-gray-100 transition-colors"
                        >
                          <span className="font-medium text-gray-700">{section.title}</span>
                          {visibleSections[section.id] ? (
                            <ChevronDown size={16} className="text-gray-500" />
                          ) : (
                            <ChevronRight size={16} className="text-gray-500" />
                          )}
                        </button>
                        
                        {visibleSections[section.id] && (
                          <ul className="pl-4 mt-1 space-y-1">
                            {section.concepts.map((concept) => (
                              <li key={concept.id}>
                                <button
                                  onClick={() => handleConceptClick(concept.id)}
                                  className={`w-full text-left flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                                    activeConcept === concept.id
                                      ? 'bg-tailwind-blue/10 text-tailwind-blue font-medium'
                                      : 'text-gray-600 hover:bg-gray-100'
                                  }`}
                                >
                                  {concept.title}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-9">
              {activeConcept ? (
                // Show selected concept
                (() => {
                  // Find the selected concept
                  for (const section of tutorialSections) {
                    const concept = section.concepts.find((c) => c.id === activeConcept);
                    if (concept) {
                      return (
                        <div className="animate-fade-in">
                          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
                            <h3 className="text-2xl font-bold mb-4">{concept.title}</h3>
                            <p className="text-gray-700 mb-6">{concept.description}</p>
                            <CodeBlock code={concept.code} language="html" title="Example" />
                          </div>
                        </div>
                      );
                    }
                  }
                  return null;
                })()
              ) : (
                // Show tutorial overview
                <div className="space-y-8 animate-fade-in">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h3 className="text-2xl font-bold mb-4">Getting Started with Tailwind CSS</h3>
                    <p className="text-gray-700 mb-6">
                      Welcome to our Tailwind CSS tutorial section. Select a concept from the sidebar to view detailed explanations and examples. Each tutorial includes code snippets that you can use in your own projects.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {tutorialSections.map((section) => (
                        <div 
                          key={section.id}
                          className="bg-gray-50 rounded-lg p-5 border border-gray-200 hover-scale"
                        >
                          <h4 className="font-semibold text-lg mb-2">{section.title}</h4>
                          <p className="text-gray-600 text-sm mb-3">{section.description}</p>
                          <button
                            onClick={() => toggleSection(section.id)}
                            className="flex items-center text-tailwind-blue font-medium text-sm"
                          >
                            Explore concepts
                            <ArrowRight size={14} className="ml-1" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-tailwind-blue/10 to-tailwind-indigo/10 rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4">Pro Tips</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="bg-white rounded-full p-1 mr-3 mt-0.5">
                          <ChevronRight size={14} className="text-tailwind-blue" />
                        </div>
                        <p>Use the <code className="text-sm bg-white/50 px-1.5 py-0.5 rounded font-mono">@apply</code> directive to extract repeated utility patterns into custom CSS classes.</p>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-white rounded-full p-1 mr-3 mt-0.5">
                          <ChevronRight size={14} className="text-tailwind-blue" />
                        </div>
                        <p>Tailwind's JIT (Just-in-Time) mode generates styles on-demand, resulting in smaller CSS files and faster build times.</p>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-white rounded-full p-1 mr-3 mt-0.5">
                          <ChevronRight size={14} className="text-tailwind-blue" />
                        </div>
                        <p>Use the <code className="text-sm bg-white/50 px-1.5 py-0.5 rounded font-mono">group</code> and <code className="text-sm bg-white/50 px-1.5 py-0.5 rounded font-mono">peer</code> utilities for advanced state management of related elements.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialSection;
