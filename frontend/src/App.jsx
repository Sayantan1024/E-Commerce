import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfileProvider } from "./context/ProfileContext";

// Pages
import Landing from "./pages/Landing";
import Products from "./pages/Products";

// Layout
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

export default function App() {
  return (
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
            </Routes>
          </main>

          {/* Footer at bottom */}
          <Footer />
        </div>
      </Router>
    </ProfileProvider>
  );
}

