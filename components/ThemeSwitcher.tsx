'use client'

interface ThemeSwitcherProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 z-[60] w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-800 dark:text-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <i className="uil uil-moon text-2xl"></i>
      ) : (
        <i className="uil uil-sun text-2xl"></i>
      )}
    </button>
  );
};

export default ThemeSwitcher;
