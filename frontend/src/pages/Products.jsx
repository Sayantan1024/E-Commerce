// src/pages/Products.jsx
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import SAT_17T_1 from "../assets/SAT_17T_1.jpeg"
import SAT_17T_2 from "../assets/SAT_17T_2.jpeg"
import DVP_765_1 from "../assets/DVP_765_1.jpeg"
import DVP_765_2 from "../assets/DVP_765_2.jpeg"
import "../index.css"

const categories = [
  { id: "splicing-machines", name: "Splicing Machines" },
  { id: "otdr-devices", name: "OTDR Devices" },
  { id: "power-meters", name: "Power Meters" },
  { id: "cleaving-tools", name: "Cleaving Tools" },
];

const products = {
  "splicing-machines": [
    {
      id: 1,
      name: "SAT-17T",
      description: 
        "A high-precision fusion splicer designed for fast and reliable fiber optic splicing. It features an intuitive touch interface, quick splice time, and excellent alignment accuracy for field or lab use.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      price: "₹1,40,000",
      images: [`${SAT_17T_1}`, `${SAT_17T_2}`]

    },
    {
      id: 2,
      name: "DVP-765",
      description: 
        "Delivers stable and efficient core alignment splicing with a compact and rugged design. Ensures consistent splice quality with fast heating and user-friendly operation for professionals.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      price: "₹1,15,000",
      images: [`${DVP_765_1}`, `${DVP_765_2}`]
    },
    {
      id: 3,
      name: "DVP-704D",
      description: 
        "A durable and cost-effective splicing solution, this offers precise alignment and quick splice cycles. Ideal for maintenance and installation projects requiring dependable performance",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      price: "₹80,000",
      images: [`${SAT_17T_1}`, `${SAT_17T_2}`]
    },
    {
      id: 4,
      name: "Aitelong-17K",
      description: 
        "The Aitelong-17K combines portability with advanced splicing technology, perfect for technicians who need accuracy and endurance in the field.",
      features: ["Splice time 11s", "Battery 7800mAh (approx 250 splice with single charge)", "Magnification 360"],
      price: "Core-to-Core ₹1,00,000",
      images: [`${SAT_17T_1}`, `${SAT_17T_2}`]
    }
  ],
  "otdr-devices": [
    {
      id: 5,
      name: "TT4500",
      description:
        "Compact and reliable optical testing device designed for accurate fiber link analysis, offering high-resolution trace results, fast measurement speeds, and an easy-to-use interface—ideal.",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      price: "₹25,000",
      images: [`${SAT_17T_1}`, `${SAT_17T_2}`]
    }
  ],
  "power-meters": [
    {
      id: 6,
      name: "Optical Power Meter",
      description:
        "Compact and accurate device for measuring optical signal strength across multiple wavelengths. Ideal for fiber network installation, maintenance, and troubleshooting with reliable performance.",
      features: ["Power Range -50 to +26dbm", "Pencil Battery Operated"],
      price: "₹1,200",
      images: [`${SAT_17T_1}`, `${SAT_17T_2}`]
    },
    {
      id: 7,
      name: "Visual Fault Locator",
      description:
        "A handy pen-style tool to pinpoint fiber breaks, bends, or faults. Perfect for quick visual inspection and on-the-spot fiber testing in the field.",
      features: [ "Power Range -50 to +26dbm", "Range 10km", "Pencil Battery Operated"],
      price: "₹500",
      images: [`${SAT_17T_1}`, `${SAT_17T_2}`]
    },
    {
      id: 8,
      name: "OPM with built-in VFL",
      description:
        "A versatile 2-in-1 tool combining an Optical Power Meter and Visual Fault Locator for comprehensive fiber testing, ensures efficient measurement and fault detection in a single compact unit.",
      features: ["Power Range -50 to +26dbm", "VFL Range 6km"],
      price: "₹1,600",
      images: [`${SAT_17T_1}`, `${SAT_17T_2}`]
    }
  ],
  "cleaving-tools": [
    {
      id: 9,
      name: "Siti-62",
      description:
        "High-precision fiber optic cleaver designed for effortless and accurate fiber preparation.",
      features: ["Auto Return", "Auto Rotating Blade", "Blade life 48000 cutting"],
      price: "₹10,000",
      images: [`${SAT_17T_1}`, `${SAT_17T_2}`]
    }
  ]
}

export default function Products({ isLoggedIn }) {
  const navigate = useNavigate();

  const handleInterest = (productId) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      alert(`You showed interest in product ID: ${productId}`);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-6 lg:px-20">
        <section className="relative py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-600 to-emerald-500 bg-clip-text text-transparent mb-6">
              Precision Instruments
            </h1>
            <p className="text-gray-600 text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Discover our comprehensive range of fiber optic testing and splicing equipment designed for professionals who demand excellence.
            </p>
          </div>
        </section>

        <div className="space-y-12">
          {categories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              className="px-6 lg:px-12 relative"
            >
              <div className="container mx-auto">
                <div className="text-center mb-12">
                  <h2 className="relative text-5xl font-bold pt-6 text-center after:content-[''] after:block after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-300 after:via-cyan-400 after:to-green-500 after:mx-auto after:mt-4">
                    {category.name}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
                </div>

                <div className="space-y-8">
                  {products[category.id]?.map((product) => (
                    <div
                      key={product.id}
                      className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                      {/* Left - Image */}
                      <div className="flex flex-col items-center">
                        <Slider {...settings} className="w-full max-w-[500px] h-[300px] mx-auto">
                          {product.images.map((imgSrc, index) => (
                            <div key={index} className="flex justify-center items-center h-[300px] w-full">
                              <img
                                src={imgSrc}
                                alt={`${product.name} ${index + 1}`}
                                className="transition-all duration-400 ease-in-out hover:scale-110 h-full w-full object-contain"
                              />
                            </div>
                          ))}
                        </Slider>
                        {/* Price Section */}
                        <p className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent text-center mt-6">
                          {product.price}
                        </p>
                      </div>
                      {/* Right - Button */}
                      <div className="xl:col-span-2 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 border border-gray-200 bg-gradient-to-br from-white to-gray-50 rounded-xl p-7 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-80">
                        <div className="flex-1 space-y-4">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                              {product.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {product.description}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">
                              Key Features:
                            </h4>
                            <ul className="space-y-2">
                              {product.features.map((feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-center text-muted-foreground"
                                >
                                  <div className="w-2 h-2 rounded-full bg-green-400 mr-3 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {/* Actions */}
                        <div className="flex flex-col gap-4 lg:min-w-[200px]">
                          <button
                            onClick={() => handleInterest(product.id)}
                            className="bg-gradient-to-r from-green-600 to-green-400 p-5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:-translate-y-1 rounded-2xl text-white font-semibold cursor-pointer"
                          >
                            I'm Interested
                          </button>
                          <div className="text-center text-sm text-gray-500">
                            {!isLoggedIn && "Login required to show interest"}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className="py-20 px-6 text-center mt-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-gray-500 text-muted-foreground mb-8">
              Our experts are here to help you select the right equipment for your specific needs.
            </p>
            <button 
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-green-500 to-green-400 p-5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:-translate-y-1 rounded-2xl text-white font-semibold cursor-pointer">
              Contact Our Experts
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
