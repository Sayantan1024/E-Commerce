import React from "react";

export default function VideoDemo({ onGetDemo }) {
  return (
    <section id="demo" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="block text-gray-900 dark:text-white">See our Product</span>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300'>in Action</span>
          </h2>
          <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12'>
            Watch how our precision equipment delivers professional results
          </p>
        </div>

        <div className="overflow-hidden max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg flex items-center justify-center">
            <video
              controls
              className="w-full h-full object-cover rounded-3xl"
              src=""
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
