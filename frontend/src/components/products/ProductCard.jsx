import React from "react";
import Button from "../ui/Button";

export default function ProductCard({ product, onWishlist }) {
  // product: { id, title, desc, price, image }
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
      <div className="h-44 w-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image || "/assets/product-photo.jpg"}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h4 className="font-semibold text-lg mb-1">{product.title}</h4>
        {product.desc && <p className="text-sm text-gray-600 mb-3">{product.desc}</p>}
        <div className="flex items-center justify-between">
          <div>
            {product.price ? (
              <div className="text-green-600 font-bold">₹{product.price}</div>
            ) : (
              <div className="text-gray-600 text-sm">Free</div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" onClick={() => console.log("View", product.id)}>
              View
            </Button>
            <Button variant="primary" size="sm" onClick={() => onWishlist && onWishlist(product)}>
              Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
