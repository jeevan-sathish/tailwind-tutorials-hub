
import { useState, useEffect } from 'react';
import { Terminal, Package, Cloud, FileCode } from 'lucide-react';
import CodeBlock from './CodeBlock';

const DocumentSection = () => {
  const [activeTab, setActiveTab] = useState<string>('history');
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('documentation');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="documentation" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block py-1 px-3 rounded-full bg-tailwind-indigo/10 text-tailwind-indigo text-sm font-medium mb-4">
            Documentation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding Tailwind CSS</h2>
          <p className="text-gray-600">
            Learn about the history, importance, and installation of Tailwind CSS for different frameworks.
          </p>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-6 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="flex overflow-x-auto scrollbar-hide">
              {[
                { id: 'history', label: 'History & Importance', icon: FileCode },
                { id: 'react', label: 'React Installation', icon: Package },
                { id: 'nextjs', label: 'Next.js Installation', icon: Terminal },
                { id: 'cdn', label: 'CDN Link', icon: Cloud }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'text-tailwind-blue border-b-2 border-tailwind-blue'
                      : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
                  }`}
                >
                  <tab.icon size={16} className="mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            {activeTab === 'history' && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-semibold mb-4">The History of Tailwind CSS</h3>
                <p className="text-gray-700">
                  Tailwind CSS was created by Adam Wathan, Jonathan Reinink, David Hemphill, and Steve Schoger. It was first released in November 2017 as a utility-first CSS framework, challenging the conventional component-based CSS frameworks like Bootstrap and Foundation.
                </p>
                <h3 className="text-xl font-semibold mt-8 mb-4">Why Tailwind CSS Matters</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-lg border border-gray-200 bg-gray-50">
                    <h4 className="font-semibold text-lg mb-2">Utility-First Approach</h4>
                    <p className="text-gray-700">
                      Instead of predefined components, Tailwind provides low-level utility classes that let you build completely custom designs without leaving your HTML.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg border border-gray-200 bg-gray-50">
                    <h4 className="font-semibold text-lg mb-2">Highly Customizable</h4>
                    <p className="text-gray-700">
                      Tailwind is designed to be customized to your project's needs. The framework can be configured to output only the CSS you need.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg border border-gray-200 bg-gray-50">
                    <h4 className="font-semibold text-lg mb-2">Developer Experience</h4>
                    <p className="text-gray-700">
                      With IntelliSense support and consistent naming, Tailwind provides an excellent developer experience, making styling faster and more intuitive.
                    </p>
                  </div>
                  <div className="p-5 rounded-lg border border-gray-200 bg-gray-50">
                    <h4 className="font-semibold text-lg mb-2">Performance Focused</h4>
                    <p className="text-gray-700">
                      Tailwind uses PurgeCSS to remove unused styles, resulting in very small CSS files in production, which leads to better performance.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'react' && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-semibold mb-4">Installing Tailwind CSS with React</h3>
                <p className="text-gray-700 mb-6">
                  Follow these steps to install and configure Tailwind CSS in your React project.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">1. Install Tailwind CSS and its dependencies</h4>
                    <CodeBlock
                      language="bash"
                      code="npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p"
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">2. Configure your tailwind.config.js file</h4>
                    <CodeBlock
                      language="javascript"
                      code={`module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">3. Add the Tailwind directives to your CSS</h4>
                    <CodeBlock
                      language="css"
                      code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">4. Start using Tailwind in your components</h4>
                    <CodeBlock
                      language="jsx"
                      code={`function App() {
  return (
    <div className="text-center mx-auto max-w-md p-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Hello Tailwind CSS in React!
      </h1>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click me
      </button>
    </div>
  )
}`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'nextjs' && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-semibold mb-4">Installing Tailwind CSS with Next.js</h3>
                <p className="text-gray-700 mb-6">
                  Next.js has built-in support for Tailwind CSS. Here's how to set it up.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">1. Install Tailwind CSS and its dependencies</h4>
                    <CodeBlock
                      language="bash"
                      code="npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p"
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">2. Configure your tailwind.config.js file</h4>
                    <CodeBlock
                      language="javascript"
                      code={`module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">3. Add the Tailwind directives to your CSS</h4>
                    <p className="text-gray-600 mb-2">Create a globals.css file in your styles directory and add the following:</p>
                    <CodeBlock
                      language="css"
                      code={`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                    />
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">4. Import the CSS file in your app</h4>
                    <p className="text-gray-600 mb-2">In your _app.js or _app.tsx file:</p>
                    <CodeBlock
                      language="jsx"
                      code={`import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp`}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cdn' && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-semibold mb-4">Using Tailwind CSS via CDN</h3>
                <p className="text-gray-700 mb-2">
                  While it's not recommended for production, you can use Tailwind CSS directly from a CDN for development or small projects.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-yellow-700">
                        The CDN build is not optimized for production. It includes all of Tailwind's CSS and doesn't support customization.
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="font-medium text-gray-900 mb-2">Add the CDN link to your HTML</h4>
                <CodeBlock
                  language="html"
                  code={`<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">`}
                />
                
                <h4 className="font-medium text-gray-900 mt-6 mb-2">Basic HTML template with Tailwind CSS CDN</h4>
                <CodeBlock
                  language="html"
                  code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tailwind CSS CDN Example</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 font-sans">
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-blue-600 mb-4">
      Hello Tailwind CSS with CDN!
    </h1>
    <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      Click me
    </button>
  </div>
</body>
</html>`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentSection;
