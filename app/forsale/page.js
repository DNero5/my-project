import React from "react";
import { data } from "@/app/_components/data";
import Image from "next/image";

export default function Page() {
  return (
    <main className="max-w-[1260px] mx-auto p-4 height-[100%]">
      <section className="bg-cream text-[#92400e] flex justify-between items-center p-4 rounded-lg">
        <span>Have a question? +9985 254 784</span>
        <span>Visit us: 9am to 10pm (Mon - Fri)</span>
      </section>

      <section
        className="rounded-lg relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url(/images/bgsale.jpg" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-sm md:text-lg text-[#fff] font-bold">For sale</h2>
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
            For sale
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
        {data.filter((house)=> house.status == 'For sale').map((house)=>{
            return(
                <div key={house.id} className="border rounded-lg p-4 shadow-lg text-center relative">
              <Image
                src={house.image}
                alt={house.name}
                width={700}
                height={900}
                className="object-cover mb-2 mx-auto rounded-lg"
              />
              <div
                className={` inset-0 flex  justify-center px-2 py-1 text-sm font-semibold text-white rounded ${
                  house.status === "for sale" ? "bg-[#3b83f6d6]" : "bg-[#92400e]"
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
            </div>
            )
        })}
      </section>
    </main>
  );
}
