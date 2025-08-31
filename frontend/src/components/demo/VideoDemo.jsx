import React from "react";

export default function VideoDemo({ onGetDemo }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:flex md:gap-6">
      <div className="md:w-1/2 flex items-center justify-center px-5 py-2">
        <div className="w-full h-70  bg-gray-100 rounded-lg flex items-center justify-center border-dashed border-2 border-gray-200">
          {/* Replace with real video tag if you add demo-video.mp4 to public/assets */}
          <video
            controls
            className="w-full h-full object-cover rounded-lg"
            src="/assets/demo-video.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="md:w-1/2 mt-4 md:mt-0">
        <h3 className="text-xl font-semibold mb-3">Try a Live Demo</h3>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          volutpat, risus in dapibus sollicitudin, justo odio pretium risus,
          quis fermentum sapien lorem id augue. Sed tempor.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onGetDemo}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Get Demo
          </button>
          <button className="px-4 py-2 border rounded">More Info</button>
        </div>
      </div>
    </div>
  );
}
