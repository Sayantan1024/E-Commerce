import React from "react";
import DVP_765_1 from "../../assets/DVP_765_1.jpeg"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { CardContainer, CardBody, CardItem } from "../ui/3d-card";

export default function PopularProduct({ onGetProduct }) {

  const navigate = useNavigate();
  return (
    <section id="about" className="relative py-10 px-6 overflow-hidden">
      {/* <div className="absolute inset-0 " /> */}
      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Us */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-600 to-emerald-500 bg-clip-text text-transparent">
                About Advance Telecom
              </span>
            </h1>
            <p className="text-gray-700 text-lg text-muted-foreground leading-relaxed dark:text-white">
              We are the leading provider of professional fiber optic testing and splicing equipment.
              With over a decade of experience, we deliver precision-engineered solutions trusted by
              professionals worldwide for critical infrastructure projects.
            </p>
            <p className="text-gray-700 text-lg text-muted-foreground leading-relaxed dark:text-white">
              Our commitment to quality, reliability, and innovation has made us the preferred choice
              for telecommunications companies, data centers, and network engineers across the globe.
            </p>
            <button
              onClick={() => navigate("/products")}
              className="flex rounded-r-3xl text-white text-lg px-6 py-4 bg-green-600 transition-all duration-300 shadow-xl hover:scale-105 hover:cursor-pointer"
            >
              Get Products
              <ArrowRight className="ml-4 mt-0.5 w-6" />
            </button>
          </div>

          {/* Right Side - Product Image */}
          <CardContainer className="inter-var">
            <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-100 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={DVP_765_1}
                  height="1000"
                  width="1000"
                  className="w-full h-auto  object-cover rounded-xl border border-gray-300 group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-semibold dark:text-black text-white"
                >
                  Check it out now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white dark:bg-black dark:text-white text-black text-xs font-bold tracking-wider"
                >
                  BestSeller
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
}
