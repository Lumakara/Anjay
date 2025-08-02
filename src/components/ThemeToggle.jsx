import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.theme = theme;
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
}