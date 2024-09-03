
"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi"; // Import the cart icon
import Link from "next/link";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [cart, setCart] = useState([]); // State to track items in the cart

  // Function to add items to the cart
  const addToCart = () => {
    setCart([...cart, { id: cart.length + 1, name: "Property" }]);
  };

  return (
    <nav className="flex md:flex-row flex-col justify-between py-5 relative z-[1] bg-white items-center p-4 lg:px-0 lg:py-5 lg:justify-between lg:items-center bg-[rgb(14, 14, 14)]">
      <div className="flex justify-around space-x-6 items-center">
        <div>
          <Link href='/'>
            <Image src="/images/logo.png" alt="Logo" width={200} height={250} />
          </Link>
        </div>

        <div>
          {mobile ? (
            <IoClose className="text-[45px] lg:hidden" onClick={() => setMobile(!mobile)} />
          ) : (
            <HiOutlineMenu className="text-[45px] lg:hidden" onClick={() => setMobile(!mobile)} />
          )}
        </div>
      </div>

      <ul
        className={`cursor-pointer items-center text-2xl md:fixed h-screen top-[100px] right-0 font-semibold flex-col gap-12 w-screen bg-[#ff6500] text-white py-24 ${
          mobile ? "flex" : "hidden"
        } lg:flex lg:flex-row lg:gap-10 lg:relative lg:py-0 lg:text-white lg:bg-inherit lg:h-full lg:top-0 lg:w-fit lg:font-bold lg:text-[20px]`}
      >
        <li className='text-[#92400e] hover:text-blue-500'>
          <Link href='/'>Home</Link>
        </li>
        <li className='text-[#92400e] hover:text-blue-500'>
          <Link href='/properties'>Properties</Link>
        </li>
        <li className='text-[#92400e] hover:text-blue-500'>
          <Link href='/blog'>Blog</Link>
        </li>
        <li className='text-[#92400e] hover:text-blue-500'>
          <Link href='/contact'>Contact</Link>
        </li>

        {/* Add Property Button */}
        <div className="flex items-center gap-4">
          <Link href="/addprop">
            <Button />
          </Link>

          {/* Cart Icon and Add to Cart Functionality */}
          <button onClick={addToCart} className="flex items-center text-[#92400e] hover:text-blue-500">
            <FiShoppingCart size={24} />
          </button>
        </div>
      </ul>
    </nav>
  );
}
