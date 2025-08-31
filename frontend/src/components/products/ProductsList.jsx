import React from "react";
import ProductCard from "./ProductCard";

/**
 * ProductsList
 * props:
 *  - products: array of products (optional) each {id, title, desc, price, image}
 *  - onWishlist: function(product)
 */
export default function ProductsList({ products, onWishlist }) {
  const sample = [
    {
      id: 1,
      title: "Classic Headphones",
      desc: "Comfortable, noise reducing",
      price: 1299,
      image: "/assets/product-photo.jpg",
    },
    {
      id: 2,
      title: "Wireless Charger",
      desc: "Fast charging pad",
      price: 699,
      image: "/assets/product-photo.jpg",
    },
    {
      id: 3,
      title: "Portable Speaker",
      desc: "Compact and loud",
      price: 1599,
      image: "/assets/product-photo.jpg",
    },
    {
      id: 4,
      title: "Smart Band",
      desc: "Activity tracking",
      price: 1999,
      image: "/assets/product-photo.jpg",
    },
  ];

  const list = products && products.length ? products : sample;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {list.map((p) => (
        <ProductCard key={p.id} product={p} onWishlist={onWishlist} />
      ))}
    </div>
  );
}
