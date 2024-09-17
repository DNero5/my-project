"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { data } from "@/app/_components/data";
import { FaLocationDot } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import Image from "next/image";
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

  // State for filters
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("Houses");

    // Function to clear filters
    const clearFilters = () => {
      setLocation("");
      setPropertyType("Houses");
    };

  // Filtered data based on selected filters
  const filteredData = data.filter((house) => {
    return (
      // Check if location is empty or house.location includes the input location (case insensitive)
      (location === "" ||
        (house.location &&
          house.location.toLowerCase().includes(location.toLowerCase()))) &&
      // Check if propertyType is empty or house.type matches the selected propertyType
      (propertyType === "" || house.type === propertyType)
    );
  });

  return (
    <main className="max-w-[1260px] mx-auto p-4 h-full">
      {/* Contact Information Section */}
      <section className="bg-cream text-[#92400e] flex flex-col md:flex-row justify-between items-center p-4 rounded-lg text-center md:text-left">
        <span>Have a question? +9985 254 784</span>
        <span>Visit us: 9am to 10pm (Mon - Fri)</span>
      </section>

      {/* Hero Section */}
      <section
        className="rounded-lg relative bg-cover bg-center h-[50vh] md:h-screen"
        style={{ backgroundImage: "url(/images/allproperty.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-sm md:text-lg text-white font-bold">
            Our Properties
          </h2>
          <h1 className="mt-2 text-3xl md:text-5xl lg:text-6xl font-bold text-[#3b83f6d6]">
            All Properties
          </h1>
          <p className="mt-4 text-md md:text-lg text-white font-bold">
            Huge number of properties available here for buy and sell,
            <br className="hidden md:block" />
            also you can find co-living property
          </p>
        </div>
      </section>

      {/* Navigation Section */}
      <section>
        <div className="flex justify-center mt-7 lg:mt-20">
          <ul className="text-lg md:text-2xl lg:text-2xl flex flex-wrap justify-center items-center font-bold list-none gap-4 md:gap-8 lg:gap-10 m-4 md:m-8">
            <li className="text-[#92400e] hover:text-[#3b83f6d6]">
              <Link href="/forbuy">For Buy</Link>
            </li>
            <li className="text-[#92400e] hover:text-[#3b83f6d6]">
              <Link href="/forsale">For Sale</Link>
            </li>
            <li className="text-[#92400e] hover:text-[#3b83f6d6]">
              <Link href="/forrent">For Rent</Link>
            </li>
            <li className="text-[#92400e] hover:text-[#3b83f6d6]">
              <Link href="/forcoliving">For Co-Living</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Filters Section */}
      <section className="p-4 border rounded-lg">
        <div className="flex justify-between items-start gap-4">
          {/* Location Input */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <FaLocationDot className="text-xl mr-2 text-[#3b83f6d6]" />
              <h1 className="block font-semibold text-[#3b83f6d6]">Location</h1>
            </div>
            <input
              type="text"
              id="location"
              className="mt-2 h-10 w-full md:w-32 lg:w-40 border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
              placeholder="Choose location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          {/* Property Type Input */}
          <div className="flex flex-col items-start ml-auto">
            <div className="flex items-center">
              <IoHome className="text-xl mr-2 text-[#3b83f6d6]" />
              <h1 className="block font-semibold text-[#3b83f6d6]">
                Property Type
              </h1>
            </div>
            <select
              id="property-type"
              className="mt-2 h-10 w-full md:w-32 lg:w-40 border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="Houses">Houses</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
            </select>
          </div>
        </div>
      </section>

      {/* Additional Options Section */}
      <section className="p-4 mt-4 rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Clear Filters Button with onClick handler */}
          <button
            className="flex items-center bg-[#3b83f6d6] hover:bg-[#92400e] text-white px-4 py-2 rounded-md transition duration-300"
            onClick={clearFilters} // Added onClick event handler
          >
            <HiMiniXMark className="mr-2" /> Clear Filters
          </button>
          <p className="mt-2 md:mt-0 text-[#92400e] font-semibold">
            Total Properties: {filteredData.length}
          </p>
        </div>
      </section>

      {/* Properties Listing Section */}
      <section className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredData.map((house) => (
          <div
            key={house.id}
            className="bg-white text-center hover:scale-123 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-transform duration-300 relative "
          >
            {/* Property Image */}

            <Image
              src={house.image}
              alt={house.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />

            {/* Status */}
            <div
              className={`absolute top-4  left-4 bg-[${
                house.status === "Buy"
                  ? "#3b83f6d6"
                  : house.status === "Rent"
                  ? "#92400e"
                  : "#3b83f6d6"
              }] text-white px-2 py-1 rounded-full`}
            >
              {house.status}
            </div>
            {/* Property Details */}
            <div className="p-4">
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
              <p className="mt-3">{house.size} Sq.ft</p>
              <p className="mt-3">{house.amenities}</p>

              {/* View Details Link */}
              <Link
                href={`properties/${house.name.split(" ").join("")}`}
                className="text-[#3b83f6d6] hover:underline mt-4 block"
              >
                View Details
              </Link>

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
          </div>
        ))}
      </section>

      {/* Rpartners Component */}
      <Rpartners />
    </main>
  );
}
