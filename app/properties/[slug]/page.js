"use client";
import React from "react";
import { data } from "@/app/_components/data";
import Rpartners from "@/app/_components/Rpartners";

export default function Page({ params }) {
  const property = data.find(
    (property) => property.name.split(" ").join("") === params.slug
  );

  return (
    <main className="max-w-[1260px] mx-auto p-4 height-[100%]">
      {/* Contact Information Section */}
      <section className="bg-cream text-[#92400e] flex justify-between items-center p-4 rounded-lg">
        <span>Have a question? +9985 254 784</span>
        <span>Visit us: 9am to 10pm (Mon - Fri)</span>
      </section>

      {/* Hero Section */}
      <section
        className="rounded-lg relative bg-cover bg-center h-screen md:h-screen text-center"
        style={{ backgroundImage: "url(/images/allproperty.jpg)" }} // Corrected background image style
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-2xl">{property.status}</h1>
          <p className="text-4xl mt-2 font-bold">{property.name}</p>
          <p className="text-xl mt-2">
            Huge number of properties available here for buy and sell,
            <br /> also you can find co-living properties here.
          </p>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="mt-7 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Property Image and Details */}
          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={property.image}
                alt="Property Image"
                className="w-full h-auto"
              />
              <div className="mt-7">
                <h2 className="text-4xl font-bold text-[#3b83f6d6] mt-2">
                  {property.name}
                </h2>
                <h2 className="text-2xl font-bold">
                  <span className="text-[#3b83f6d6]">Location:</span>{" "}
                  {property.location}
                </h2>
                <h2 className="text-2xl font-bold">
                  <span className="text-[#3b83f6d6]">Date:</span>{" "}
                  {property.date}
                </h2>
                <h2 className="text-2xl font-bold">
                  <span className="text-[#3b83f6d6]">Price:</span>{" "}
                  {property.price}
                </h2>
                <h2 className="text-2xl font-bold">
                  <span className="text-[#3b83f6d6]">Status:</span>{" "}
                  {property.status}
                </h2>
                <h2 className="text-2xl font-bold">
                  <span className="text-[#3b83f6d6]">Size:</span>{" "}
                  {property.size} Sq.ft
                </h2>
                <h2 className="text-2xl font-bold">
                  <span className="text-[#3b83f6d6]">Amenities:</span>{" "}
                  {property.amenities}
                </h2>
                <p className="text-gray-600 mt-4 font-semibold">
                  Huge number of properties available here for buy, sell, and
                  rent. Also, you find co-living properties here, lots of
                  opportunities to choose from, and enjoy huge discounts. You
                  can get these cases perfectly simple and easy to distinguish.
                  In a free hour, when our power of choice is untrammeled, and
                  when nothing prevents us from being able to do what we like
                  best, every pleasure is welcomed, and every pain avoided are
                  matters of choice.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar with Property Search */}
          <div className="w-full md:w-1/3 p-6 rounded-lg shadow-md">
            <h3 className="text-[#3b83f6d6] text-xl font-bold mb-4">
              Property Search.
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-sm text-[#3b83f6d6] mb-2"
                  htmlFor="location"
                >
                  <i className="fas fa-map-marker-alt text-[#3b83f6d6] mr-2"></i>
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full border border-[#3b83f6d6] px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
                  placeholder="Location"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-sm text-[#3b83f6d6] mb-2"
                  htmlFor="category"
                >
                  <i className="fas fa-th-large text-[#3b83f6d6] mr-2"></i>
                  Property Category
                </label>
                <select
                  id="category"
                  className="w-full border border-[#3b83f6d6] px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
                >
                  <option>Choose Category</option>
                  <option>Property Type A</option>
                  <option>Property Type B</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm text-[#3b83f6d6] mb-2"
                  htmlFor="category"
                >
                  <i className="fas fa-list text-[#3b83f6d6] mr-2"></i>
                  Property Type
                </label>
                <select
                  id="category"
                  className="w-full border border-[#3b83f6d6] px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
                >
                  <option>Property Type</option>
                  <option>Category</option>
                  <option>Property</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-sm text-[#3b83f6d6] mb-2"
                  htmlFor="category"
                >
                  <i className="fas fa-sliders-h text-[#3b83f6d6] mr-2"></i>
                  Property Size Range
                </label>
                <select
                  id="category"
                  className="w-full border border-[#3b83f6d6] px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
                >
                  <option>Property Size</option>
                  <option>1200 sqft</option>
                  <option>1500 sqft</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-sm text-[#3b83f6d6] mb-2"
                  htmlFor="category"
                >
                  <i className="fas fa-ruler-combined text-[#3b83f6d6] mr-2"></i>
                  Property Size
                </label>
                <select
                  id="category"
                  className="w-full border border-[#3b83f6d6] px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
                >
                  <option>Property Size</option>
                  <option>1200 sqft</option>
                  <option>1500 sqft</option>
                </select>
              </div>

              {/* Other Form Fields */}
              <button
                type="submit"
                className="bg-[#3b83f6d6] text-[#fff] hover:bg-[#92400e] p-5 rounded-[10px]"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="mt-10 sm:mt-20 lg:mt-25 mb-8 bg-cream p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl underline underline-offset-1">Our Partners</h2>
        <h3 className="mt-4 sm:mt-7 text-3xl sm:text-4xl font-bold text-[#3b83f6d6]">
          Reliable Partners<span className="text-[#92400e]">.</span>
        </h3>
      </section>

      <Rpartners />
    </main>
  );
}
