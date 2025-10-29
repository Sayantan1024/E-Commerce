import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfileProvider } from "./context/ProfileContext";

// Pages
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";

// Layout
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { ThemeProvider } from "./context/Theme";

export default function App() {
  const [themeMode, setThemeMode] = useState(localStorage.getItem("themeMode") || "light")

  const lightTheme = () => {
    setThemeMode("light")
    localStorage.setItem("theme", "light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
    localStorage.setItem("theme", "dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
    localStorage.setItem("themeMode", themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <ProfileProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            {/* Navbar on top */}
            <Navbar />

            {/* Main content */}
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contact" element={<ContactUs />} />
              </Routes>
            </main>

            {/* Footer at bottom */}
            <Footer />
          </div>
        </Router>
      </ProfileProvider>
    </ThemeProvider>

  );
}

