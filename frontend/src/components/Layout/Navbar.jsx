import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useTheme from "../../context/Theme";
import { Sun, Moon, Menu, X } from "lucide-react"
import Light_logo from "../../assets/Light_logo.png"
import Dark_logo from "../../assets/Dark_logo.png"

export default function Navbar({ onToggleProfile, showProfile }) {
  const { themeMode, lightTheme, darkTheme } = useTheme()

  const toggleTheme = () => {
    themeMode === "light" ? darkTheme() : lightTheme();
  }

  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => { setIsOpen(!isOpen) }

  const closeMenu = () => { setIsOpen(false) }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[85%] bg-white/80 dark:bg-gray-900/70 backdrop-blur-md shadow-lg dark:shadow-gray-800 rounded-2xl transition-all duration-500 ease-in-out">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          {themeMode === "light" ?
            <img
              className="h-10 w-28 md:h-8 md:w-22"
              src={Light_logo} /> :
            <img
              className="h-10 w-28 md:h-8 md:w-22"
              src={Dark_logo} />}
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
            className="p-2 rounded-3xl border border-gray-300 dark:border-gray-500 dark:bg-gray-800 bg-gray-100 transition ease-in-out duration-600 hover:cursor-pointer"
            onClick={toggleTheme}
          >
            {themeMode === "light" ? <Moon /> : <Sun color="#ffffff" />}
          </button>

          <button className="md:hidden" onClick={toggleNavbar}>
            {isOpen ? (
              themeMode === "light" ? <X /> : <X color="#ffffff" />
            ) : (
              themeMode === "light" ? <Menu /> : <Menu color="#ffffff" />
            )}
          </button>
        </div>
      </div>

      {/* mobile navigation */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-6 mt-5 pb-6 px-6 text-gray-700 dark:text-gray-200 text-base font-semibold bg-white/80 dark:bg-gray-900/70 rounded-b-2xl shadow-md">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
            }
          >
            Contact Us
          </NavLink>
        </nav>
      )}
    </header>
  );

}
