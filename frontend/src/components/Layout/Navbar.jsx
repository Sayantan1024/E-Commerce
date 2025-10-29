import React from "react";
import { NavLink } from "react-router-dom";
import useTheme from "../../context/Theme";
import { Sun, Moon } from "lucide-react"

export default function Navbar({ onToggleProfile, showProfile }) {
  const { themeMode, lightTheme, darkTheme } = useTheme()

  const toggleTheme = () => {
    themeMode === "light" ? darkTheme() : lightTheme();
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[85%] bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-lg dark:shadow-gray-800 rounded-2xl transition-all duration-500 ease-in-out">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
            S
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 dark:text-gray-200 text-lg font-semibold font-sans">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Right Button */}
        <div className="flex items-center gap-4">
          <button
            className="p-2 rounded-3xl border border-gray-300 dark:border-gray-500 dark:bg-gray-800 bg-gray-100 transition ease-in-out duration-700 hover:cursor-pointer"
            onClick={toggleTheme}
          >
            {themeMode === "light" ? <Moon /> : <Sun color="#ffffff" />}
          </button>
        </div>
      </div>
    </header>
  );

}
