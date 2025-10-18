import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ onToggleProfile, showProfile }) {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-20 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
            S
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700">
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

          {/* <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "hover:text-green-600"
            }
          >
            About Us
          </NavLink> */}
        </nav>

        {/* Right Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={onToggleProfile}
            className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
          >
            {showProfile ? "Hide Profile" : "Show Profile"}
          </button>
        </div>
      </div>
    </header>
  );
}
