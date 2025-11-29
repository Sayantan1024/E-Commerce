// src/pages/Products.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { X } from "lucide-react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products.js"
import "../index.css"
import useTheme from "../context/Theme";
import axios from "axios"
import {toast} from "react-hot-toast"

const categories = [
  { id: "splicing-machines", name: "Splicing Machines" },
  { id: "otdr-device", name: "OTDR Device" },
  { id: "power-meters", name: "Power Meter & VFL" },
  { id: "cleaving-tool", name: "Cleaver" },
];

export default function Products({ isLoggedIn }) {
  const [modal, setModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("")
  const { register, handleSubmit } = useForm()
  const { themeMode } = useTheme()

  const navigate = useNavigate();

  const handleEnquirySubmit = async (data) => {
    try {
      const enquiryData = {
        customerName: data.name,
        customerPhone: data.phone,
        productName: selectedProduct,
      };

      //console.log("Enquiry Submitted:", enquiryData);
      const response = await axios.post(`${import.meta.env.VITE_API_URL}enquiry`, enquiryData)
      console.log(response.data)

      toast.success("Enquiry sent! Client will get back to you soon")

      setModal(false);

    } catch (error) {
      toast.error(error?.response?.data?.message || "Cannot submit enquiry with same details")
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
      <main className="flex-grow p-6 xl:px-20 lg:px-0 mt-20">
        <section className="relative py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-600 to-emerald-500 bg-clip-text text-transparent mb-6">
              Precision Instruments
            </h1>
            <p className="text-gray-600 text-xl text-muted-foreground max-w-2xl mx-auto mb-10 dark:text-gray-300">
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
                  <h2 className="relative text-5xl font-bold pt-6 text-center after:content-[''] after:block after:w-24 after:h-1 after:bg-gradient-to-r after:from-blue-300 after:via-cyan-400 after:to-green-500 after:mx-auto after:mt-4 dark:text-white">
                    {category.name}
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
                </div>

                <div className="space-y-30 md:space-y-8">
                  {products[category.id]?.map((product) => (
                    <div
                      key={product.id}
                      className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-15"
                    >
                      {/* Left - Image */}
                      <div className="flex flex-col items-center">
                        <div className="relative w-full max-w-md mx-auto">
                          <Slider {...settings}>
                            {product.images.map((imgSrc, index) => (
                              <div key={index} className="outline-none mt-lg-xl">
                                <div className="aspect-square rounded-2xl overflow-hidden">
                                  <img
                                    src={imgSrc}
                                    alt={`${product.name} ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                  />
                                </div>
                              </div>
                            ))}
                          </Slider>
                        </div>
                        {/* Price Section */}
                        <p className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent text-center mt-6">
                          {product.price}
                        </p>
                      </div>
                      {/* Right - Button */}
                      <div className="md:col-span-2 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 border border-gray-200 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black rounded-xl p-6 md:p-13 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-80 dark:border-gray-600 dark:hover:shadow-blue-300">
                        <div className="flex-1 space-y-4">
                          <div>
                            <h3 className="text-3xl font-bold text-foreground mb-2 dark:text-white">
                              {product.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed dark:text-gray-400/85">
                              {product.description}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 dark:text-white">
                              Key Features:
                            </h4>
                            <ul className="space-y-2">
                              {product.features.map((feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-center text-muted-foreground dark:text-gray-300"
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
                            onClick={() => {
                              setSelectedProduct(product.name);
                              setModal(!modal)
                            }}
                            className="bg-gradient-to-r from-green-600 to-green-400 border dark:border-blue-500 dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] dark:text-slate-200 p-5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:-translate-y-1 dark:hover:shadow-cyan-900 rounded-2xl text-white font-semibold cursor-pointer"
                          >
                            I'm Interested
                          </button>
                          <div className="text-center text-sm text-gray-500">
                            Contact required to show interest
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

        {/* Modal for interest */}
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">

            {/* Modal Box */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-[90%] max-w-md p-8 border border-gray-300">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {selectedProduct === undefined ? "Interested ?" : `Interested in ${selectedProduct}?`}
                </h2>
                <button onClick={() => setModal(!modal)} className="hover:cursor-pointer">
                  {themeMode === "light" ? <X /> : <X color="#ffffff" />}
                </button>
              </div>

              {/* Subtext */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-8">
                Enter your details and we will get back to you shortly.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit(handleEnquirySubmit)} className="space-y-3 md:space-y-6">

                {/* Name */}
                <div>
                  <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-xl p-3 
                       focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Enter your name"
                    {...register("name", {
                      required: true
                    })}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-xl p-3 focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Enter your phone number"
                    {...register("phone", {
                      required: true,
                      maxLength: 10
                    })}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white rounded-xl p-3 font-semibold hover:scale-[1.02] transition-all dark:from-gray-700 dark:to-gray-600 dark:text-white mt-4"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Need Help */}
        <section className="py-20 px-6 text-center mt-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4 dark:text-white">
              Need Help Choosing?
            </h2>
            <p className="text-gray-600 text-muted-foreground mb-8 dark:text-gray-300">
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
