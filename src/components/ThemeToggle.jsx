import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialMode = savedTheme ? savedTheme === 'dark' : systemDark;
    
    setIsDarkMode(initialMode);
    document.documentElement.classList.toggle('dark', initialMode);
    document.documentElement.classList.toggle('light', !initialMode);
    
    // Force CSS variable update
    document.documentElement.style.setProperty(
      'color-scheme', 
      initialMode ? 'dark' : 'light'
    );
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    document.documentElement.classList.toggle('light', !newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    
    // Force CSS variable update
    document.documentElement.style.setProperty(
      'color-scheme', 
      newMode ? 'dark' : 'light'
    );
    
    // Force repaint
    document.body.offsetHeight;
  };

return (
  <button 
    onClick={toggleTheme}
    className={cn(
      "z-[9999] p-2 rounded-full",
      "bg-gray-200 dark:bg-gray-800",
      "transition-colors duration-300",
      "focus:outline-none focus:ring-2 focus:ring-primary",
      "max-sm:hidden"
    )}
    aria-label="Toggle dark mode"
    style={{
      position: 'fixed',
      right: '1.25rem',
      top: '1.25rem',
    }}
  >
    {isDarkMode ? (
      <Sun className="h-6 w-6 text-yellow-300" />
    ) : (
      <Moon className="h-6 w-6 text-blue-900" />
    )}
  </button>
)
}