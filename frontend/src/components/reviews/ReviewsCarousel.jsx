import React from "react";

const reviews = [
  { name: "Alice", text: "Great service and fast delivery!" },
  { name: "Bob", text: "The products are top-notch. Highly recommend." },
  { name: "Charlie", text: "Excellent customer support and quality." },
  { name: "David", text: "Affordable prices and great value!" },
  { name: "Eva", text: "My go-to store for everything I need." },
];

export default function ReviewSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">
        What Our Customers Say
      </h2>

      <div className="overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 mx-4 w-80 flex-shrink-0"
            >
              <p className="text-gray-700 text-sm mb-3">"{review.text}"</p>
              <p className="text-green-600 font-semibold">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
