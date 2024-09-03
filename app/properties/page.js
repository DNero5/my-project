
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { data } from "@/app/_components/data";
import { FaLocationDot } from "react-icons/fa6";
import { LuBadgeDollarSign } from "react-icons/lu";
import { SlSizeActual } from "react-icons/sl";
import { IoHome } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import Image from "next/image";
import Rpartners from "@/app/_components/Rpartners";

export default function Page() {
  // State for filters
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [propertyType, setPropertyType] = useState("Houses");

  // Function to normalize the price for comparison
  const normalizePrice = (price) => {
    if (!price || typeof price !== "string") return 0; // Return 0 or some other default value if price is not a valid string
    return parseInt(price.replace(/[^0-9]/g, ""), 10);
  };

  // Filtered data based on selected filters
  const filteredData = data.filter((house) => {
    return (
      (location === "" ||
        (house.location && house.location.includes(location))) &&
      (priceRange === "" ||
        normalizePrice(house.price) === normalizePrice(priceRange)) &&
      (propertySize === "" || house.size === propertySize) &&
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
          <ul className="text-lg md:text-2xl lg:text-3xl flex flex-wrap justify-center items-center font-bold list-none gap-4 md:gap-8 lg:gap-10 m-4 md:m-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
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

          {/* Price Tag */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <LuBadgeDollarSign className="text-xl mr-2 text-[#3b83f6d6]" />
              <h1 className="block font-semibold text-[#3b83f6d6]">
                Price Tag
              </h1>
            </div>
            <select
              id="price-range"
              className="mt-2 h-10 w-full md:w-32 lg:w-40 border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="$255300"> $255300</option>
              <option value="$155300">$155300</option>
              <option value="$355300">$355300</option>
            </select>
          </div>

          {/* Property Size Input */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <SlSizeActual className="text-xl mr-2 text-[#3b83f6d6]" />
              <h1 className="block font-semibold text-[#3b83f6d6]">
                Property Size
              </h1>
            </div>
            <input
              type="text"
              id="property-size"
              className="mt-2 h-10 w-full md:w-32 lg:w-40 border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
              placeholder="Property Size"
              value={propertySize}
              onChange={(e) => setPropertySize(e.target.value)}
            />
          </div>

          {/* Property Type Input */}
          <div className="flex flex-col items-start">
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
              <option value="All">All</option>
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
          <button className="flex items-center bg-[#3b83f6d6] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#92400e]">
            Tag <HiMiniXMark className="ml-2" />
          </button>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-500 mr-2">
              Showing {filteredData.length} out of {data.length} properties
            </span>
            <button
              className="text-[#92400e] mr-4"
              onClick={() => {
                setLocation("");
                setPriceRange("$255300");
                setPropertySize("");
                setPropertyType("Houses");
              }}
            >
              Reset All
            </button>
            <div className="relative">
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden">
                <button className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200">
                  Sort by Ascending
                </button>
                <button className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-200">
                  Sort by Descending
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Display Section */}
      <section className="mt-7 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {filteredData.map((house) => (
          <div
            key={house.id}
            className="border rounded-lg p-4 shadow-lg text-center relative"
          >
            <Image
              src={house.image}
              alt={house.name}
              width={800}
              height={400}
              className="object-cover mb-2 mx-auto rounded-lg"
            />
            <div
                  className={`absolute top-2 right-2 px-2 py-1 text-sm font-semibold text-white rounded ${
                    house.status === "for sale, for buy"
                      ? "bg-[#3b83f6d6]"
                      : "bg-[#3b83f6d6]"
                  }`}
                >
                  {house.status}
                </div>
            <h3 className="font-semibold mt-5 text-2xl sm:text-3xl text-[#3b83f6d6]">
              {house.name}
            </h3>
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
            <p className="text-gray-500">{house.type}</p> 
            <Link
              href={`properties/${house.name.split(' ').join('') }`}
              className="text-[#3b83f6d6] hover:underline mt-4 block"
            >
              View Details
            </Link>
          </div>
        ))}

     
      </section>

      {/* Recommended Partners Section */}
      <Rpartners />
    </main>
  );
}

