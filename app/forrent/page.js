"use client";
import React, { useState, useEffect } from "react";
import { data } from "@/app/_components/data";
import Image from "next/image";
import Link from "next/link";
import Rpartners from "@/app/_components/Rpartners";
import { useCart } from "@/app/_components/CartContext";

export default function Page() {
  // Access cart context using useCart hook
  const { cart, addToCart, removeFromCart } = useCart();

  // State for button text
  const [addedToCart, setAddedToCart] = useState({});

  // Function to handle adding to cart and updating button text
  const handleAddToCart = (house) => {
    addToCart({ ...house, id: house.id }); // Ensure `house` has an `id`
    setAddedToCart((prevState) => ({ ...prevState, [house.id]: true }));
  };

  // Function to handle removing from cart and resetting button text
  const handleRemoveFromCart = (house) => {
    removeFromCart(house.id); // Remove the item from cart using its id
    setAddedToCart((prevState) => ({ ...prevState, [house.id]: false }));
  };

  // Effect to reset addedToCart state when an item is removed from the cart
  useEffect(() => {
    const updatedAddedToCart = {};
    cart.forEach((item) => {
      updatedAddedToCart[item.id] = true;
    });

    setAddedToCart(updatedAddedToCart);
  }, [cart]);

  return (
    <main className="max-w-[1260px] mx-auto p-4 height-[100%]">
      <section className="bg-cream text-[#92400e] flex justify-between items-center p-4 rounded-lg">
        <span>Have a question? +9985 254 784</span>
        <span>Visit us: 9am to 10pm (Mon - Fri)</span>
      </section>

      <section
        className="rounded-lg relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url(/images/bgrent.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-sm md:text-lg text-[#fff] font-bold">For rent</h2>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold text-[#3b83f6d6]">
            Property Information
          </h1>
          <p className="mt-4 text-md md:text-lg text-[#fff] font-bold">
            Huge number of properties available here for buy and sell, <br />
            also you can find co-living property
          </p>
        </div>
      </section>

      <section className="mt-7 lg:mt-20 flex items-center justify-center text-center">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-sm md:text-lg text-[#92400e] font-bold">
            For rent
          </h2>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold text-[#3b83f6d6]">
            property Information<span className="text-[#92400e]">.</span>
          </h1>
          <p className="mt-4 text-md md:text-lg text-gray-600 font-bold">
            Huge number of properties available here for buy and sell, <br />
            also you can find co-living property
          </p>
        </div>
      </section>

      <section className="mt-7 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {data
          .filter((house) => house.status == "For rent")
          .map((house) => {
            return (
              <div
                key={house.id}
                className="border rounded-lg p-4 shadow-lg text-center relative"
              >
                <Image
                  src={house.image}
                  alt={house.name}
                  width={700}
                  height={900}
                  className="object-cover mb-2 mx-auto rounded-lg"
                />
                <div
                  className={`absolute top-2 right-2 px-2 py-1 text-sm font-semibold text-white rounded ${
                    house.status === "for sale, for buy"
                      ? "bg-[#3b83f6d6]"
                      : "bg-[#92400e]"
                  }`}
                >
                  {house.status}
                </div>
                <h4 className="font-semibold mt-5 text-2xl sm:text-3xl text-[#3b83f6d6]">
                  {house.name}
                </h4>
                <p className="text-gray-600 mt-3 font-bold underline underline-offset-1">
                  {house.location}
                </p>
                <p className="mt-3">{house.date}</p>
                <p className="font-bold mt-3 text-xl">
                  <span className="bg-[#3b83f6d6]">-----</span>
                  <span className="text-[#3b83f6d6]">$</span>
                  {house.price}
                  <span className="bg-[#3b83f6d6]">-----</span>
                </p>
                <p className="mt-3">{house.size}Sq.ft</p>
                <p className="mt-3">{house.amenities}</p>
                {/* View Details Link */}
                {house.name && (
                  <Link
                    href={`properties/${house.name.split(" ").join("")}`}
                    className="text-[#3b83f6d6] hover:underline mt-4 block"
                  >
                    View Details
                  </Link>
                )}
                {/* Add or Remove from Cart Button */}
                {addedToCart[house.id] ? (
                  <button
                    className="bg-[#92400e] text-white hover:bg-[#92400e] p-5 rounded-[10px]"
                    onClick={() => handleRemoveFromCart(house)}
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="bg-[#3b83f6d6] text-white hover:bg-[#92400e] p-5 rounded-[10px]"
                    onClick={() => handleAddToCart(house)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })}
      </section>
      {/* Recommended Partners Section */}
      <Rpartners />
    </main>
  );
}
