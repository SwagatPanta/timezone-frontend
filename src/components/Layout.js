import React, { useState, useEffect } from "react";
import Header from "./Header";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Check system preference for dark mode on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""} bg-gray-50 dark:bg-gray-900`}>
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
      <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          &copy; 2025 Kathmandu Blog. All rights reserved.
        </p>
        <button
          onClick={toggleDarkMode}
          className="mt-2 text-sm text-blue-600 dark:text-blue-400"
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </footer>
    </div>
  );
}
