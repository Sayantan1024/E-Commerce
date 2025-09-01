// src/pages/Products.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Prod 1",
    brand: "Comp 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus ex sed sodales elementum. Maecenas nec egestas libero. In in sapien velit. Phasellus sed pellentesque odio.",
    features: ["Feature 1", "Feature 2","Feature 3"],
    image: ""
  },
  {
    id: 2,
    name: "Prod 2",
    brand: "Comp 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus ex sed sodales elementum. Maecenas nec egestas libero. In in sapien velit. Phasellus sed pellentesque odio.",
    features: ["Feature 1", "Feature 2","Feature 3"],
    image: ""
  },
  {
    id: 3,
    name: "Prod 3",
    brand: "Comp 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus ex sed sodales elementum. Maecenas nec egestas libero. In in sapien velit. Phasellus sed pellentesque odio.",
    features: ["Feature 1", "Feature 2","Feature 3"],
    image: ""
  },
  {
    id: 4,
    name: "Prod 4",
    brand: "Comp 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus ex sed sodales elementum. Maecenas nec egestas libero. In in sapien velit. Phasellus sed pellentesque odio.",
    features: ["Feature 1", "Feature 2","Feature 3"],
    image: ""
  },
  {
    id: 5,
    name: "Prod 5",
    brand: "Comp 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus ex sed sodales elementum. Maecenas nec egestas libero. In in sapien velit. Phasellus sed pellentesque odio.",
    features: ["Feature 1", "Feature 2","Feature 3"],
    image: ""
  }
];

export default function Products({ isLoggedIn }) {
  const navigate = useNavigate();

  const handleInterest = (productId) => {
    if (!isLoggedIn) {
      navigate("/login"); // Redirect if user not logged in
    } else {
      alert(`You showed interest in product ID: ${productId}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 bg-gray-100 lg:px-37">
        <h1 className="text-2xl font-bold mb-6 text-center">Our Products</h1>

        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-2xl flex items-center p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 rounded-xl object-cover mr-6"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">Brand: {product.brand}</p>
                <p className="text-gray-600 font-semibold">Details: {product.description}</p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  {product.features.map((f, index) => (
                    <li key={index}>{f}</li>
                  ))}
                </ul>
                <button
                  onClick={() => handleInterest(product.id)}
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
                >
                  I am Interested
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
