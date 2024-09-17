"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PiCoinsFill } from "react-icons/pi";
import { RiUserLocationFill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { data } from "@/app/_components/data";
import Carousel from "./_components/Carousel";
import Rpartners from "./_components/Rpartners";
import { useCart } from "@/app/_components/CartContext";

export default function Home() {
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
    //  hero section
    <main className="max-w-[1260px] mx-auto p-4 height-[100%]">
      <section className="flex flex-col md:flex-row items-center my-5 bg-cream p-4 rounded-lg shadow-lg lg:mt-35">
        <div className="flex-1 text-left md:pr-4">
          <h1 className="mt-6 text-2xl md:text-3xl lg:text-4xl text-[#92400e] font-bold">
            A New Way To Find Properties
          </h1>
          <h2 className="mt-4 md:mt-8 text-4xl md:text-5xl lg:text-6xl text-[#3b83f6d6] font-bold">
            Find your Most Suitable Property
          </h2>
          <p className="mt-6 mb-5 text-lg md:text-xl text-[#92400e]">
            Huge number of properties available here for buy, sell, and also{" "}
            <br /> you can find co-living properties, so you have lots of
            opportunities.
          </p>
          <Link href="/contact">
            <button className="bg-[#3b83f6d6] text-white hover:bg-[#92400e] py-3 px-6 md:py-4 md:px-8 rounded-lg">
              Contact Us
            </button>
          </Link>
          <p className="mt-10 text-xl md:text-2xl lg:text-3xl text-[#92400e] font-bold">
            Have a question?{" "}
            <span className="text-[#3b83f6d6]">+0123 456 789</span>
          </p>
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <Image
            src="/images/hero.png"
            alt="Spinning Image"
            width={900}
            height={800}
            className="mx-auto w-full h-auto"
          />
        </div>
      </section>

      {/* end of hero section  */}

      {/* properties SECTION */}
      <section className="mt-10 sm:mt-20 lg:mt-40 mb-8 bg-cream p-4 rounded-lg shadow relative">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl underline underline-offset-4">
          Best Choice
        </h2>
        <h3 className="mt-4 sm:mt-7 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3b83f6d6]">
          Popular Properties<span className="text-[#92400e]">.</span>
        </h3>

        {/* Adjusting Flex Direction for Mobile Screens */}
        <div className="absolute right-4 bottom-4 flex flex-col sm:flex-row items-center font-bold hover:text-[#3b83f6d6]">
          <Link href="/properties">
            <h1 className="text-sm sm:text-base lg:text-lg mr-1 text-[#3b83f6d6] hover:text-[#92400e] cursor-pointer">
              Explore all
            </h1>
          </Link>
          <CgArrowLongRight
            size={24}
            className="hover:text-[#92400e] cursor-pointer"
          />
        </div>
      </section>

      <section className="mt-7 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {data
          .filter((house) => house.add === "explore")
          .map((house) => {
            return (
              <div
                key={house.id}
                className="border rounded-lg p-4 shadow-lg text-center relative"
              >
                {/* Property Image */}
                <Image
                  src={house.image}
                  alt="Property Thumbnail"
                  width={700}
                  height={900}
                  className="object-cover mb-2 mx-auto rounded-lg"
                />
                {/* Status Overlay */}
                <div
                  className={`absolute top-2 right-2 px-2 py-1 text-sm font-semibold text-white rounded ${
                    house.status === "for sale"
                      ? "bg-[#3b83f6d6]"
                      : "bg-[#3b83f6d6]"
                  }`}
                >
                  {house.status}
                </div>
                {/* Property Details */}
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
            );
          })}
      </section>

      {/* END OF PROPERTIES SECTION */}

      {/* choose SECTION */}
      <section className="mt-10 md:mt-40 flex flex-col md:flex-row items-center p-4 rounded-lg shadow-lg">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/images/chooseus.jpg"
            alt="Spinning Image"
            width={700}
            height={400}
            className="rounded-lg w-full"
          />
        </div>

        <div className="md:w-1/2 md:pl-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#92400e] font-bold mb-3">
            Why choose us
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#3b83f6] font-bold mb-6">
            We Provide the Right Choice of Properties that You Need
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#92400e] mb-6">
            Huge number of properties available here for buy, sell, and rent.
            Also, you can find co-living properties, so there are lots of
            opportunities for you to choose from and enjoy huge discounts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <PiCoinsFill size={50} className="text-[#3b83f6]" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-center text-[#3b83f6]">
                Budget Friendly
              </h3>
              <p className="text-gray-700 text-center font-bold text-1xl">
                Properties are most budget friendly so you have opportunity to
                find the best one
              </p>
            </div>

            {/* Item 2 */}
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <div className="flex items-center justify-center mb-4">
                <RiUserLocationFill size={50} className="text-[#3b83f6]" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-center text-[#3b83f6]">
                Prime Location
              </h3>
              <p className="text-gray-700 font-bold text-1xl">
                Properties are in prime locations, providing you with the best
                options in the market.
              </p>
            </div>

            {/* Item 3 */}
            <div className="p-6 bg-white shadow-md rounded-lg">
              <div className="flex items-center justify-center mb-4">
                <VscWorkspaceTrusted size={50} className="text-[#3b83f6]" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-center text-[#3b83f6]">
                Trusted
              </h3>
              <p className="text-gray-700 text-center font-bold text-1xl">
                Our services are trusted by thousands of satisfied clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* END OF CHOOSE SECTION */}

      {/* PLENTY Grid Section */}

      <section className="mt-10 md:mt-30 lg:mt-40 my-8 bg-cream p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl underline underline-offset-1 mb-4">
          Best Choice
        </h2>
        <h3 className="mt-4 md:mt-7 text-3xl md:text-4xl font-bold text-[#3b83f6d6]">
          Featured Properties<span className="text-[#92400e]">.</span>
        </h3>

        <div className="mt-6 md:mt-10 flex flex-col md:flex-row justify-center md:justify-end text-center">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-10">
            <li className="text-[#3b83f6d6] hover:text-[#92400e] text-xl md:text-2xl">
              <Link href="/forbuy">For Buy</Link>
            </li>
            <li className="text-[#3b83f6d6] hover:text-[#92400e] text-xl md:text-2xl">
              <Link href="/forsale">For Sale</Link>
            </li>
            <li className="text-[#3b83f6d6] hover:text-[#92400e] text-xl md:text-2xl">
              <Link href="/forrent">For Rent</Link>
            </li>
            <li className="text-[#3b83f6d6] hover:text-[#92400e] text-xl md:text-2xl">
              <Link href="/forcoliving">Co-Living</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* end PLENTY Grid Section */}

      {/* sixproperties */}
      <section className="mt-7 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {/* Property 1 */}
        {data
          .filter((house) => house.feature == "three")
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
                    house.status === "for sale"
                      ? "bg-[#3b83f6d6]"
                      : "bg-[#3b83f6d6]"
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
            );
          })}
      </section>

      {/* end of sixproperties */}

      {/* YOUTUBE SECTION */}

      <section className="mt-7 flex flex-col md:flex-row items-center my-8 bg-cream p-4 rounded-lg shadow lg:mt-40">
        {/* Text Content */}
        <div className="flex-1 text-left md:pr-4">
          <h1 className="mt-5 text-[#92400e] font-bold text-xl md:text-2xl">
            Take a video tour
          </h1>
          <h1 className="mt-5 text-2xl md:text-3xl text-[#3b83f6d6] font-bold">
            Watch the video to make your decision easier.
          </h1>
          <p className="mt-6 mb-5 text-lg md:text-xl text-[#92400e]">
            A huge number of properties are available here for buying, selling,
            and renting. You'll also find co-living properties, giving you lots
            of opportunities to choose and enjoy huge discounts.
          </p>
          <div className="text-[#3b83f6d6] hover:text-[#92400e]">
            <Link href="/properties" className="flex items-center gap-3 ">
              View all <CgArrowLongRight size={22} />
            </Link>
          </div>
        </div>

        {/* Video Content */}
        <div className="flex-1 max-w-full lg:max-w-2xl w-full bg-white shadow-lg rounded-lg overflow-hidden mt-10 md:mt-0">
          <iframe
            className="w-full h-48 sm:h-56 md:h-72 lg:h-[700px]"
            src="https://www.youtube.com/embed/d_yzP4qnZwQ?start=10"
            title="House Tour Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      {/* END OF YOUTUBE SECTION */}

      <section className="mt-10 sm:mt-20 lg:mt-40 mb-8 bg-cream p-4 rounded-lg shadow relative">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl underline underline-offset-1">
          Explore Cities
        </h2>
        <h3 className="mt-4 sm:mt-7 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3b83f6d6]">
          Find Your Neighborhood<span className="text-[#92400e]">.</span>
        </h3>

        {/* Adjusting Flex Direction for Mobile Screens */}
        <div className="absolute  top-4 right-1 sm:right-6 bottom-1 flex flex-col sm:flex-row items-center font-bold hover:text-[#3b83f6d6]">
          <Link href="/properties">
            <span className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-0 sm:mr-1 text-[#3b83f6d6] hover:text-[#92400e] cursor-pointer">
              Explore all
            </span>
          </Link>
          <CgArrowLongRight
            size={22}
            className="text-[#3b83f6d6] hover:text-[#92400e] cursor-pointer"
          />
        </div>
      </section>

      {/* EXPLORE SECTION */}

      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 my-8">
        {/* Card 1 */}
        <div className="border rounded-lg p-4 shadow-lg text-center">
          <Image
            src="/images/house1.jpg"
            alt="Property Thumbnail"
            width={800}
            height={1000}
            className="object-cover mx-auto rounded-lg"
          />
          <Link href="/newyork">
            <h4 className="font-semibold mt-5 text-2xl sm:text-3xl text-[#3b83f6d6] hover:text-[#92400e]">
              New York
            </h4>
          </Link>
          <p className="text-gray-600 mt-2 font-bold underline underline-offset-1 hover:text-[#92400e]">
            3 Properties
          </p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg p-4 shadow-lg text-center">
          <Image
            src="/images/house2.jpg"
            alt="Property Thumbnail"
            width={800}
            height={1000}
            className="object-cover mx-auto rounded-lg"
          />
           <Link href="/fransico">
          <h4 className="font-semibold mt-5 text-2xl sm:text-3xl text-[#3b83f6d6] hover:text-[#92400e]">
            San Francisco
          </h4>
          </Link>
          <p className="text-gray-600 mt-2 font-bold underline underline-offset-1 hover:text-[#92400e]">
            4 Properties
          </p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg p-4 shadow-lg text-center">
          <Image
            src="/images/house3.jpg"
            alt="Property Thumbnail"
            width={800}
            height={1000}
            className="object-cover mx-auto rounded-lg"
          />
          <Link href="/washington">
          <h4 className="font-semibold mt-5 text-2xl sm:text-3xl text-[#3b83f6d6] hover:text-[#92400e]">
            Washington D.C.
          </h4>
          </Link>
          <p className="text-gray-600 mt-2 font-bold underline underline-offset-1 hover:text-[#92400e]">
            2 Properties
          </p>
        </div>

        {/* Card 4 */}
        <div className="border rounded-lg p-4 shadow-lg text-center">
          <Image
            src="/images/house1.jpg"
            alt="Property Thumbnail"
            width={800}
            height={1000}
            className="object-cover mx-auto rounded-lg"
          />
          <Link href="/chicago">
            <h4 className="font-semibold mt-5 text-2xl sm:text-3xl text-[#3b83f6d6] hover:text-[#92400e]">
              Chicago
            </h4>
          </Link>
          <p className="text-gray-600 mt-2 font-bold underline underline-offset-1 hover:text-[#92400e]">
            2 Properties
          </p>
        </div>
      </section>

      {/* END OF EXPLORE SECTIION */}

      {/* testimonial Section */}

      <Carousel />

      {/* end of testimonial section */}

      {/* Reliable Partners */}

      <section className="mt-10 sm:mt-20 lg:mt-25 mb-8 bg-cream p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl underline underline-offset-1">Our Partners</h2>
        <h3 className="mt-4 sm:mt-7 text-3xl sm:text-4xl font-bold text-[#3b83f6d6]">
          Reliable Partners<span className="text-[#92400e]">.</span>
        </h3>
      </section>

      <Rpartners />

      {/* END OF Reliable Partners */}

      {/* AGENT SECTION */}

      <section className="mt-10 sm:mt-20 lg:mt-40 mb-8 bg-cream p-4 rounded-lg shadow relative">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl underline underline-offset-4">
          Our Agents
        </h2>
        <h3 className="mt-4 sm:mt-7 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3b83f6d6]">
          Here is our Experts Agents<span className="text-[#92400e]">.</span>
        </h3>
        <div className=" absolute right-4 bottom-0 flex items-center font-bold hover:text-[#3b83f6d6]">
          <span className="text-sm sm:text-base lg:text-lg mr-1 text-[#3b83f6d6] hover:text-[#92400e] cursor-pointer">
            Explore all
          </span>
          <CgArrowLongRight
            size={24}
            className="hover:text-[#92400e] cursor-pointer"
          />
        </div>
      </section>

      <section className="mt-7 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        {/* Card 1 */}
        <div className="border rounded-lg p-4 shadow-lg text-center hover:bg-[#92400e] hover:text-white transition-all duration-300">
          <Image
            src="/images/agent-1.png"
            alt="Agent 1"
            width={1000}
            height={1000}
            className="object-cover mb-2 mx-auto rounded-lg"
          />
          <h4 className="font-semibold mt-5 text-2xl sm:text-3xl text-blue-600 hover:text-white">
            Asley Prince
          </h4>
          <p className="hover:text-white">Real Estate Agent</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.facebook.com" className="text-[#3b83f6d6]">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://wa.me/message/LSVKAA5EF6J6L1"
              className="text-[#3b83f6d6] "
            >
              <i className="fab fa-whatsapp fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/d_nero1?igsh=MW1xYWg5d2lvaG0zbQ%3D%3D&utm_source=qr "
              className="text-[#3b83f6d6] "
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="border rounded-lg p-4 shadow-lg text-center hover:bg-[#92400e] hover:text-white transition-all duration-300">
          <Image
            src="/images/agent-2.png"
            alt="Agent 2"
            width={1000}
            height={1000}
            className="object-cover mb-2 mx-auto rounded-lg"
          />
          <h4 className="font-semibold mt-5 text-2xl sm:text-3xl text-blue-600 hover:text-white">
            Albert S. Smith
          </h4>
          <p className="hover:text-white">Real Estate Agent</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.facebook.com" className="text-[#3b83f6d6]">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.whatsapp.com" className="text-[#3b83f6d6] ">
              <i className="fab fa-whatsapp fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/d_nero1?igsh=MW1xYWg5d2lvaG0zbQ%3D%3D&utm_source=qr "
              className="text-[#3b83f6d6] "
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="border rounded-lg p-4 shadow-lg text-center hover:bg-[#92400e] hover:text-white transition-all duration-300">
          <Image
            src="/images/agent-3.png"
            alt="Agent 3"
            width={1000}
            height={1000}
            className="object-cover mb-2 mx-auto rounded-lg"
          />
          <h4 className="font-semibold mt-5 text-2xl sm:text-3xl text-blue-600 hover:text-white">
            Amelia Margaret
          </h4>
          <p className="hover:text-white">Real Estate Agent</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.facebook.com" className="text-[#3b83f6d6]">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="https://wa.me/message/LSVKAA5EF6J6L1"
              className="text-[#3b83f6d6] "
            >
              <i className="fab fa-whatsapp fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/d_nero1?igsh=MW1xYWg5d2lvaG0zbQ%3D%3D&utm_source=qr "
              className="text-[#3b83f6d6] "
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="border rounded-lg p-4 shadow-lg text-center hover:bg-[#92400e] hover:text-white transition-all duration-300">
          <Image
            src="/images/agent-4.png"
            alt="Agent 4"
            width={1000}
            height={1000}
            className="object-cover mb-2 mx-auto rounded-lg"
          />
          <h4 className="font-semibold mt-5 text-2xl sm:text-3xl text-blue-600 hover:text-white">
            Stephen Kelvin
          </h4>
          <p className="hover:text-white">Real Estate Agent</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.facebook.com" className="text-[#3b83f6d6]">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.whatsapp.com" className="text-[#3b83f6d6] ">
              <i className="fab fa-whatsapp fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/d_nero1?igsh=MW1xYWg5d2lvaG0zbQ%3D%3D&utm_source=qr "
              className="text-[#3b83f6d6] "
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </section>

      {/* END OF AGENT SECTION */}

      {/* BLOG SECTION */}

      <section className="mt-10 sm:mt-20 lg:mt-40 flex flex-col gap-6 md:flex-row items-center my-8 bg-cream p-4 rounded-lg shadow">
        {/* Blog Text Section */}
        <div className="flex-1 text-left pr-0 md:pr-4">
          <h1 className="mt-5 text-[#92400e] font-bold text-2xl sm:text-3xl">
            Our Blog
          </h1>
          <h1 className="mt-5 text-2xl sm:text-3xl lg:text-4xl text-[#3b83f6d6] font-bold">
            Always Check Our Latest Blog Post.
          </h1>
          <p className="mt-6 mb-5 text-lg sm:text-xl text-[#92400e]">
            Huge number of properties available here for buy, sell, and rent.
            You also find co-living properties, providing you with plenty of
            opportunities to choose from and enjoy huge discounts.
          </p>
          <div>
            <Link
              href="/blog"
              className="flex items-center gap-3 hover:text-[#3b83f6d6]"
            >
              View all <CgArrowLongRight size={22} />
            </Link>
          </div>
        </div>

        {/* Blog Post 1 */}
        <div className="border rounded-lg shadow-lg w-full max-w-xs sm:max-w-md h-auto overflow-hidden">
          <Image
            src="/images/blog1.webp"
            alt="Blog Thumbnail 1"
            width={400}
            height={400}
            className="object-cover w-full h-48 sm:h-64"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-[#3b83f6d6]">
              <div className="text-black text-sm sm:text-base">
                MD Momen HT &bull; March 9, 2022
              </div>
              Importance of Build Quality in Modern Real Estate.
              <div className="text-black mt-2 text-sm sm:text-base">
                Properties are budget-friendly, offering you an opportunity to
                find the best options...
              </div>
            </h1>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="border rounded-lg shadow-lg w-full max-w-xs sm:max-w-md h-auto overflow-hidden">
          <Image
            src="/images/blog2.webp"
            alt="Blog Thumbnail 2"
            width={400}
            height={400}
            className="object-cover w-full h-48 sm:h-64"
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-[#3b83f6d6]">
              <div className="text-black text-sm sm:text-base">
                KB Arif HT &bull; March 10, 2022
              </div>
              Tips About Recent Real Estate Conditions from an Agent.
              <div className="text-black mt-2 text-sm sm:text-base">
                Properties are budget-friendly, offering you an opportunity to
                find the best options...
              </div>
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
