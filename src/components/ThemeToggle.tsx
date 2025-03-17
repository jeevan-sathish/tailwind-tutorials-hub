
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from './ui/toggle';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for system preference or stored preference on initial load
  useEffect(() => {
    // Check for dark mode preference in localStorage
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldSetDark = 
      storedTheme === 'dark' || 
      (!storedTheme && prefersDark);
    
    setIsDarkMode(shouldSetDark);
    
    if (shouldSetDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      
      return newMode;
    });
  };

  return (
    <Toggle 
      pressed={isDarkMode}
      onPressedChange={toggleTheme}
      className="w-10 h-10 rounded-full bg-transparent hover:bg-muted transition-all duration-300 ease-in-out animate-theme-toggle"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 animate-theme-toggle-icon">
        {isDarkMode ? (
          <Moon className="absolute inset-0 text-yellow-400 animate-fade-in" size={20} />
        ) : (
          <Sun className="absolute inset-0 text-yellow-500 animate-fade-in" size={20} />
        )}
      </div>
    </Toggle>
  );
};

export default ThemeToggle;
