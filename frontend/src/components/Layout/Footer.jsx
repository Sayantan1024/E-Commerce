import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" text-gray-100 pb-10 ">
      <hr className="mb-15 border-t border-gray-300 dark:border-gray-600 "></hr>
      <div className="container mx-auto px-10 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            {/* <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
              S
            </div> */}
            <div>
              <div className="font-semibold text-lg text-black dark:text-white">Advance Telecom</div>
              <div className="text-sm text-gray-400">
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
          <h3 className="font-semibold mb-3 text-black dark:text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link
                className="hover:text-black dark:hover:text-white"
                to='/'
              >
                Home
              </Link>
            </li>
            <li> 
              <Link
                className="hover:text-black dark:hover:text-white"
                to='/products'
              >
                Products
              </Link>
            </li>
            <li> 
              <Link
                className="hover:text-black dark:hover:text-white"
                to='/contact'
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-semibold mb-3 text-black dark:text-white">Customer Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-black dark:hover:text-white">FAQs</a></li>
            {/* <li><a href="#" className="hover:text-black dark:hover:text-white">Shipping & Returns</a></li> */}
            <li><a href="#" className="hover:text-black dark:hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-black dark:hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3  text-black dark:text-white">Get in Touch</h3>
          <p className="text-sm text-gray-400">📍 Anita Apartment, AB-57, Prafulla Kanan(W), Kolkata-700101</p>
          <p className="text-sm text-gray-400">📞 +91 9830581917</p>
          <p className="text-sm text-gray-400">📧 advancetelecom57@gmail.com</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className=" border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Advance Telecom. All rights reserved.
      </div>
    </footer>
  );
}
