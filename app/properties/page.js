import React from "react";
import Link from "next/link";
import { data } from "@/app/_components/data";
import { FaLocationDot } from "react-icons/fa6";
import { LuBadgeDollarSign } from "react-icons/lu";
import { SlSizeActual } from "react-icons/sl";
import { IoHome } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import Image from "next/image";

export default function Page() {
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
          <h2 className="text-sm md:text-lg text-[#fff] font-bold">
            Our Properties
          </h2>
          <h1 className="mt-2 text-3xl md:text-5xl lg:text-6xl font-bold text-[#3b83f6d6]">
            All Properties
          </h1>
          <p className="mt-4 text-md md:text-lg text-[#fff] font-bold">
            Huge number of properties available here for buy and sell,{" "}
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
              <Link href="/For Sale">For Sale</Link>
            </li>
            <li className="text-[#92400e] hover:text-[#3b83f6d6]">
              <Link href="/For Rent">For Rent</Link>
            </li>
            <li className="text-[#92400e] hover:text-[#3b83f6d6]">
              <Link href="/For Co-Living">For Co-Living</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Filters Section */}
      <section className="p-4 border rounded-lg ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          {/* Location Input */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <FaLocationDot className="text-xl mr-2 text-[#3b83f6d6] size-10" />
              <h1 className="block font-semibold text-[#3b83f6d6]">Location</h1>
            </div>
            <input
              type="text"
              id="location"
              className="mt-2 h-10 w-full md:w-32 lg:w-40 border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
              placeholder="choose location..."
            />
          </div>

          {/* Price Range Input */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <LuBadgeDollarSign className="text-xl mr-2 text-[#3b83f6d6] size-10" />
              <h1 className="block font-semibold text-[#3b83f6d6]">
                Price Range
              </h1>
            </div>
            <select
              id="price-range"
              className="mt-2 h-10 w-full md:w-32 lg:w-40 border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
            >
              <option value="$10">$10</option>
              <option value="$15">$15</option>
              <option value="$20">$20</option>
              to
            </select>
          </div>

          {/* Property Size Input */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <SlSizeActual className="text-xl mr-2 text-[#3b83f6d6] size-10" />
              <h1 className="block font-semibold text-[#3b83f6d6]">
                Property Size
              </h1>
            </div>
            <input
              type="text"
              id="property-size"
              className="mt-2 h-10 w-full md:w-32 lg:w-40 border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
              placeholder="Property Size"
            />
          </div>

          {/* Property Type Input */}
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <IoHome className="text-xl mr-2 text-[#3b83f6d6] size-10" />
              <h1 className="block font-semibold text-[#3b83f6d6]">
                Property Type
              </h1>
            </div>
            <input
              type="text"
              id="property-type"
              className="mt-2 h-10 w-full md:w-32 lg:w-40 border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
              placeholder="Property Type"
            />
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
              Showing 0 out of 0 properties
            </span>
            <button className="text-[#92400e] mr-4">Reset All</button>
            <div className="relative">
              <button className="text-gray-500">Sort by</button>
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md hidden">
                {/* Sort options */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-7 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {data.map((house) => {
          return(

            <div className="border rounded-lg p-4 shadow-lg text-center relative">
  <Image
    src="/images/pic2.jpeg"
    alt="Property Thumbnail"
    width={700}
    height={900}
    className="object-cover mb-2 mx-auto rounded-lg"      
  />
  <div className={` inset-0 flex  justify-center px-2 py-1 text-sm font-semibold text-white rounded ${house.status === 'for sale' ? 'bg-[green]' : 'bg-red-600'}`}>
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
    <span className="text-[#3b83f6d6]">$</span>{house.price}
    <span className="bg-[#3b83f6d6]">-----</span>
  </p>
  <p className="mt-3">{house.size}Sq.ft</p>
  <p className="mt-3">{house.amenities}</p>
</div>














          )
          ;
        })}

        {/* Property 1 */}
        {/* <div className="border rounded-lg p-4 shadow-lg text-center">
          <Image
            src="/images/pic2.jpeg"
            alt="Property Thumbnail"
            width={700}
            height={900}
            className="object-cover mb-2 mx-auto rounded-lg"
          />
          <h4 className="font-semibold mt-5 text-2xl sm:text-3xl text-[#3b83f6d6]">
            {data.name}
          </h4>
          <p className="text-gray-600 mt-3 font-bold underline underline-offset-1">
            253 Montril Street, New York
          </p>
          <p className="mt-3">Added: March 8, 2022</p>
          <p className="font-bold mt-3 text-xl">
            <span className="bg-[#3b83f6d6]">-----</span>
            Price: <span className="text-[#3b83f6d6]">$</span>155200
            <span className="bg-[#3b83f6d6]">-----</span>
          </p>
          <p className="mt-3">Size: 1450 Sq.ft</p>
          <p className="mt-3">3 Bed - 2 Bath - 1 Garage</p>
        </div>

        <div className="border rounded-lg p-4 shadow-lg text-center">
          <Image
            src="/images/house11.jpg"
            alt="Property Thumbnail"
            width={700}
            height={900}
            className="object-cover mb-2 mx-auto rounded-lg"
          />
          <h4 className="font-semibold mt-5 text-2xl sm:text-3xl text-[#3b83f6d6]">
            Sinomen Plant Palace.
          </h4>
          <p className="text-gray-600 mt-3 font-bold underline underline-offset-1">
            253 Montril Street, New York
          </p>
          <p className="mt-3">Added: March 8, 2022</p>
          <p className="font-bold mt-3 text-xl">
            <span className="bg-[#3b83f6d6]">-----</span>
            Price: <span className="text-[#3b83f6d6]">$</span>155200
            <span className="bg-[#3b83f6d6]">-----</span>
          </p>
          <p className="mt-3">Size: 1450 Sq.ft</p>
          <p className="mt-3">3 Bed - 2 Bath - 1 Garage</p>
        </div> */}

        {/* <div className="border rounded-lg p-4 shadow-lg text-center">
          <Image
            src="/images/house11.jpg"
            alt="Property Thumbnail"
            width={700}
            height={900}
            className="object-cover mb-2 mx-auto rounded-lg"
          />
          <h4 className="font-semibold mt-5 text-2xl sm:text-3xl text-[#3b83f6d6]">
            Sinomen Plant Palace.
          </h4>
          <p className="text-gray-600 mt-3 font-bold underline underline-offset-1">
            253 Montril Street, New York
          </p>
          <p className="mt-3">Added: March 8, 2022</p>
          <p className="font-bold mt-3 text-xl">
            <span className="bg-[#3b83f6d6]">-----</span>
            Price: <span className="text-[#3b83f6d6]">$</span>155200
            <span className="bg-[#3b83f6d6]">-----</span>
          </p>
          <p className="mt-3">Size: 1450 Sq.ft</p>
          <p className="mt-3">3 Bed - 2 Bath - 1 Garage</p>
        </div> */}
      </section>
    </main>
  );
}
