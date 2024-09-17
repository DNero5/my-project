"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useCart } from "./CartContext"; // Import useCart hook

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [cartVisible, setCartVisible] = useState(false); // State to toggle cart visibility
  const { cart, removeFromCart } = useCart(); // Use useCart hook to access cart state

  return (
    <main className="max-w-[1260px] mx-auto p-4 height-[100%]">
      <nav className="flex md:flex-row flex-col space-between py-5 relative z-[1] bg-white items-center p-4 lg:px-0 lg:py-5 lg:justify-between lg:items-center bg-[rgb(14, 14, 14)]">
        <div className="flex justify-around space-x-6 items-center">
          <div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={200}
                height={250}
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div>
            {mobile ? (
              <IoClose
                className="text-[45px] lg:hidden"
                onClick={() => setMobile(!mobile)}
              />
            ) : (
              <HiOutlineMenu
                className="text-[45px] lg:hidden"
                onClick={() => setMobile(!mobile)}
              />
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <ul
          className={`cursor-pointer items-center text-2xl md:fixed h-screen top-[100px] right-0 font-semibold flex-col gap-12 w-screen bg-[#ff6500] text-white py-24 ${
            mobile ? "flex" : "hidden"
          } lg:flex lg:flex-row lg:gap-10 lg:relative lg:py-0 lg:text-white lg:bg-inherit lg:h-full lg:top-0 lg:w-fit lg:font-bold lg:text-[20px]`}
        >
          <li className="text-[#92400e] hover:text-blue-500">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[#92400e] hover:text-blue-500">
            <Link href="/properties">Properties</Link>
          </li>
          <li className="text-[#92400e] hover:text-blue-500">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-[#92400e] hover:text-blue-500">
            <Link href="/contact">Contact</Link>
          </li>

          {/* Add Property Button */}
          <div className="flex items-center gap-4">
            <Link href="/addprop">
              <Button />
            </Link>

            {/* Cart Icon and Count */}
            <button
              className="flex items-center text-[#92400e] hover:text-blue-500 relative"
              onClick={() => setCartVisible(!cartVisible)} // Toggle cart visibility
            >
              <FiShoppingCart size={24} />
              <span className="ml-2">Cart ({cart.length})</span>
            </button>

            {/* Cart Dropdown */}
            {cartVisible && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg p-4 rounded-lg">
                {/* Close Icon */}
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 z-10"
                  onClick={() => setCartVisible(false)} // Close cart when clicked
                >
                  <IoClose size={24} />
                </button>

                {/* Cart Items Container */}
                <div className="mt-8 max-h-[200px] overflow-y-auto">
                  {cart.length > 0 ? (
                    <ul>
                      {cart.map((item, index) => (
                        <li key={index} className="flex justify-between mb-2 items-center">
                          <div>
                            <span className="text-gray-500">{item.name}</span>
                            <span className="text-gray-500">${item.price}</span>
                          </div>
                          {/* Remove Button */}
                          <button
                            className="bg-[#3b83f6d6] text-[#fff] hover:bg-[#92400e] rounded-[4px]"
                            onClick={() => removeFromCart(item.id)} // Remove item when clicked
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">Your cart is empty.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </main>
  );
}
