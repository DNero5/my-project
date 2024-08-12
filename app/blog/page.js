import React from 'react';
import Link from "next/link";
import Image from 'next/image'

export default function Page() {
  return (
    <main className="max-w-[1260px] mx-auto p-4 h-full">
      {/* Contact Info Section */}
      <section className="bg-cream text-[#92400e] flex flex-col md:flex-row justify-between items-center p-4 rounded-lg">
        <span className="mb-2 md:mb-0">Have a question? +9985 254 784</span>
        <span>Visit us: 9am to 10pm (Mon - Fri)</span>
      </section>

      {/* Hero Section with Background Image */}
      <section
        className="rounded-lg relative bg-cover bg-center h-[70vh] md:h-screen mt-6"
        style={{ backgroundImage: 'url(/images/ourblog.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-base md:text-lg font-bold">Our Blog Post</h2>
          <h1 className="mt-2 text-3xl md:text-5xl lg:text-6xl font-bold text-[#3b83f6d6]">Latest Blog Post</h1>
          <p className="mt-4 text-sm md:text-lg font-bold">
            Huge number of properties available here for buy and sell, <br />
            also you can find co-living property
          </p>
        </div>
      </section>

     {/* grid section */}
     
     <section className="mt-7 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
  {/* info 1 */}
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
          Properties are budget-friendly, offering you an opportunity to find the best options...
        </div>
      </h1>
    </div>
  </div>




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
          Properties are budget-friendly, offering you an opportunity to find the best options...
        </div>
      </h1>
    </div>
  </div>

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
          Properties are budget-friendly, offering you an opportunity to find the best options...
        </div>
      </h1>
    </div>
  </div>



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
          Properties are budget-friendly, offering you an opportunity to find the best options...
        </div>
      </h1>
    </div>
  </div>


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
          Properties are budget-friendly, offering you an opportunity to find the best options...
        </div>
      </h1>
    </div>
  </div>



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
          Properties are budget-friendly, offering you an opportunity to find the best options...
        </div>
      </h1>
    </div>
  </div>




 </section>






    </main>
  );
}
