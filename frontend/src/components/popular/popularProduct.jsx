import React from "react";

export default function PopularProduct({ onGetProduct }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
      <div className="md:flex md:items-center md:gap-8">
        <div className="md:flex-1">
          <h2 className="text-2xl font-bold mb-3 text-gray-800">Most Popular Product</h2>
          <p className="text-gray-600 mb-4">
            This is our most-loved product. Designed for performance and comfort,
            customers keep returning to buy it again and again. Features:
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-4">
            <li>High quality materials</li>
            <li>Eco-friendly packaging</li>
            <li>1-year warranty</li>
          </ul>

          <div className="flex gap-3">
            <button
              onClick={onGetProduct}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Get Product
            </button>
            <button className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-56 md:h-56 mt-6 md:mt-0 flex items-center justify-center">
          <div className="w-56 h-56 bg-gradient-to-tr from-green-200 to-green-400 rounded-lg flex items-center justify-center text-white text-lg font-semibold">
            <img src="/assets/product-photo.jpg" alt="Product" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
