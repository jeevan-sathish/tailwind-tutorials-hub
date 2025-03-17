
import { Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tailwind-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/tailwind-logo.svg" alt="Tailwind CSS Logo" className="h-6 w-auto" />
              <h3 className="text-xl font-semibold">Tailwind Tutorials</h3>
            </div>
            <p className="text-gray-400 max-w-xs">
              Learn Tailwind CSS with our comprehensive tutorials and documentation. Master utility-first CSS quickly and efficiently.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Documentation', 'Tutorials', 'Quiz', 'Resources'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Tailwind Resources</h4>
            <ul className="space-y-2">
              {[
                { name: 'Official Documentation', url: 'https://tailwindcss.com/docs' },
                { name: 'GitHub Repository', url: 'https://github.com/tailwindlabs/tailwindcss' },
                { name: 'Tailwind UI', url: 'https://tailwindui.com/' },
                { name: 'Tailwind Play', url: 'https://play.tailwindcss.com/' }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="flex items-start space-x-3 mb-4">
              <Mail size={20} className="text-tailwind-blue mt-1 flex-shrink-0" />
              <a href="mailto:sathishjeevan2004@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                sathishjeevan2004@gmail.com
              </a>
            </div>
            <div className="pt-4">
              <a 
                href="#"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-tailwind-blue to-tailwind-indigo text-white font-medium hover:shadow-lg hover:shadow-tailwind-blue/20 transition-all duration-300"
              >
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Tailwind Tutorials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
