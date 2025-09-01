// src/pages/Home.jsx
import React, { useState } from "react";
import PopularProduct from "../components/popular/PopularProduct";
import VideoDemo from "../components/demo/VideoDemo";
import ReviewsCarousel from "../components/reviews/ReviewsCarousel";
import WishlistModal from "../components/profile/WishlistModal";
import ProfileInfo from "../components/profile/ProfileInfo";
import ProductsList from "../components/products/ProductsList";
import { useProfile } from "../context/ProfileContext";

export default function Home() {
  const { userInfo, setUserInfo } = useProfile();
  const [openModal, setOpenModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Called when hero "Get Product" or demo "Get Demo" are clicked
  const requireInfoThen = (actionName) => {
    if (!userInfo) {
      setOpenModal(true);
    } else {
      alert(`${actionName} accepted for ${userInfo.name}`);
    }
  };

  // Called when a product's "Wishlist" button is clicked
  const handleProductWishlist = (product) => {
    if (!userInfo) {
      // open modal to collect info
      setOpenModal(true);
    } else {
      // replace with real wishlist logic later
      alert(`Added "${product.title}" to wishlist for ${userInfo.name}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 ">

      <main className="container mx-auto  py-8 flex-1 px-6 md:px-16 lg:px-37">
        {/* Popular product (hero) */}
        <section className="mb-10">
          <PopularProduct onGetProduct={() => requireInfoThen("Get Product")} />
        </section>

        {/* Products list (below the hero) */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4">Products</h3>
          <ProductsList onWishlist={handleProductWishlist} />
        </section>

        {/* Video + demo */}
        <section className="mb-10">
          <VideoDemo onGetDemo={() => requireInfoThen("Get Demo")} />
        </section>

        {/* Reviews carousel */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4">User Reviews</h3>
          <ReviewsCarousel />
        </section>

        {/* Profile (toggled) */}
        {showProfile && (
          <section className="mb-10">
            <ProfileInfo />
          </section>
        )}
      </main>

      {openModal && (
        <WishlistModal
          close={() => setOpenModal(false)}
          onSave={(info) => {
            setUserInfo(info);
            setOpenModal(false);
          }}
        />
      )}
    </div>
  );
}
