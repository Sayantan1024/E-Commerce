import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 mt-12">
      <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
              S
            </div>
            <div>
              <div className="font-semibold text-lg">My E-Store</div>
              <div className="text-sm text-gray-300">
                Quality products, happy customers
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400">
            Bringing you the best products at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-400">📍 123 Market Street, City</p>
          <p className="text-sm text-gray-400">📞 +91 9876543210</p>
          <p className="text-sm text-gray-400">📧 support@mystore.com</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} My E-Store. All rights reserved.
      </div>
    </footer>
  );
}
