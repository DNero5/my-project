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

     
      <section class=" mt-7 container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row gap-8">
          {/* <!-- Property Image and Details --> */}
          <div class="w-full md:w-2/3">
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={property.image}
                alt="Property Image"
                class="w-full h-auto"
              />
              <div class="mt-7">
              <h2 class="text-4xl font-bold text-[#3b83f6d6] mt-2">
                {property.name}
                </h2>
                <h2 class="text-2xl font-bold">
                <span className="text-[#3b83f6d6]">Location;</span> {property.location}
                </h2>
                <h2 class="text-2xl font-bold">
                <span className="text-[#3b83f6d6]">Date;</span> {property.date}
                </h2>
                <h2 class="text-2xl font-bold">
                <span className="text-[#3b83f6d6]">Price;</span> {property.price}
                </h2>
                <h2 class="text-2xl font-bold">
                <span className="text-[#3b83f6d6]">Status;</span> {property.status}
                </h2>
                <h2 class="text-2xl font-bold">
                <span className="text-[#3b83f6d6]">Size;</span> {property.size}Sq.fit
                </h2>
                <h2 class="text-2xl font-bold">
                <span className="text-[#3b83f6d6]">Amenities;</span> {property.amenities}
                </h2>
                <p class="text-gray-600 mt-4 font-semibold">
                  Huge number of properties available here for buy, sell and
                  Rent. Also you find here co-living property, lots of
                  opportunities you have to choose here and enjoy huge discounts
                  you can get. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice is
                  untrammeled and when nothing prevents our being able to do
                  what we like best, every pleasure is welcomed and every pain
                  avoided are matters of choice.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Sidebar with Property Search --> */}
          <div class="w-full md:w-1/3  p-6 rounded-lg shadow-md">
            <h3 class="text-[#3b83f6d6] text-xl font-bold mb-4">
              Property Search.
            </h3>
            <form class="space-y-4">
              <div>
                <label class="block text-sm text-[#3b83f6d6] mb-2" for="location">
                  <i class="fas fa-map-marker-alt text-[#3b83f6d6] mr-2"></i>
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  class="w-full border border-[#3b83f6d6]  px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
                  placeholder="Location"
                  required
                />
              </div>
              <div>
                <label class="block text-sm text-[#3b83f6d6] mb-2" for="category">
                  <i class="fas fa-th-large text-[#3b83f6d6] mr-2"></i>Property
                  Category
                </label>
                <select
                  id="category"
                  class="w-full border border-[#3b83f6d6]  px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
                >
                  <option>Choose Category</option>
                  <option>Property Type A</option>
                  <option>Property Type B</option>
                </select>
              </div>
              <div>
                <label class="block text-sm text-[#3b83f6d6] mb-2" for="type">
                  <i class="fas fa-home text-[#3b83f6d6] mr-2"></i>Property Type
                </label>
                <select
                  id="type"
                  class="w-full border border-[#3b83f6d6]  px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
                >
                  <option>Choose Type</option>
                  <option>Property</option>
                  <option>Category</option>
                </select>
              </div>
              <div>
                <label
                  class="block text-sm text-[#3b83f6d6] mb-2"
                  for="price-range"
                >
                  <i class="fas fa-dollar-sign text-[#3b83f6d6] mr-2"></i>Price
                  Range
                </label>
                <select
                  id="price-range"
                  class="w-full border border-[#3b83f6d6]  px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
                  >
                  <option>Choose Range</option>
                  <option>$100000</option>
                  <option>$200000</option>
                </select>
              </div>
              <div>
                <label
                  class="block text-sm text-gray-700 mb-2"
                  for="property-size"
                >
                  <i class="fas fa-ruler-combined text-[#3b83f6d6] mr-2"></i>
                  Property Size
                </label>
                <select
                  id="property-size"
                  class="w-full border border-[#3b83f6d6]  px-4 py-2 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
                  >
                  <option>Choose Size</option>
                  <option>1200 sqft</option>
                  <option>1500 sqft</option>
                </select>
              </div>
              <button
                type="submit"
                class="bg-[#3b83f6d6] text-[#fff] hover:bg-[#92400e] p-5 rounded-[10px]"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>

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
