import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

// Custom hook to use the theme context
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  // Set initial theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) return localTheme;

    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Effect to update the <html> tag and localStorage
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove old class and add new one
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Save preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
