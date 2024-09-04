import React from 'react';
import { ImLocation } from "react-icons/im";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

export default function Page() {
  return (
    <main className="max-w-[1260px] mx-auto p-4 height-[100%]">
      <section className="bg-cream text-[#92400e] flex justify-between items-center p-4 rounded-lg">
        <span>Have a question? +9985 254 784</span>
        <span>Visit us: 9am to 10pm (Mon - Fri)</span>
      </section>

      <section
        className="rounded-lg relative bg-cover bg-center h-screen"
        style={{ backgroundImage: 'url(/images/contactbg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-sm md:text-lg text-[#fff] font-bold">Contact Us</h2>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold text-[#3b83f6d6]">Contact Information</h1>
          <p className="mt-4 text-md md:text-lg text-[#fff] font-bold">
            Huge number of properties available here for buy and sell, <br />
            also you can find co-living property
          </p>
        </div>
      </section>

      <section className="mt-7 lg:mt-20 flex items-center justify-center text-center">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h2 className="text-sm md:text-lg text-[#92400e] font-bold">Contact Us</h2>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold text-[#3b83f6d6]">
            Get In Touch<span className="text-[#92400e]">.</span>
          </h1>
          <p className="mt-4 text-md md:text-lg text-gray-600 font-bold">
            Huge number of properties available here for buy and sell, <br />
            also you can find co-living property
          </p>
        </div>
      </section>

      <section className="mt-7 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-3 items-center justify-center">
        <div className="flex items-center justify-center mb-4 hover:bg-[#a2979516] rounded-lg py-10">
          <ImLocation size={50} className="mr-4 text-blue-500" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#3b83f6]">Address</h3>
            <p className="text-gray-700">
              2104 Charmaine Lane <br /> Amarillo, New York
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mb-4 hover:bg-[#a2979516] rounded-lg py-10">
          <FaPhoneVolume size={50} className="mr-4 text-blue-500" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#3b83f6]">Call us.</h3>
            <p className="text-gray-700">
              2104 Charmaine Lane
              <br /> Amarillo, New York
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mb-4 hover:bg-[#a2979516] rounded-lg py-10">
          <MdMarkEmailRead size={50} className="mr-4 text-blue-500" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#3b83f6]">Budget Friendly</h3>
            <p className="text-gray-700">
              dansunday657@gmail.com
              <br /> dansunday656@gmail.com
            </p>
          </div>
        </div>
      </section>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex-1 ">
          <h2 className="text-2xl font-bold mb-4 text-[#3b83f6d6]">Send Message</h2>
          <p className="text-gray-600 mb-6">
            Huge number of properties available here for buy, sell, and rent. Also, you find here co-living property, lots of opportunity.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#3b83f6d6]">First Name</label>
                <input type="text" id="firstName" placeholder="firstName" class="mt-2 h-20  w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[#3b83f6d6]">Last Name</label>
                <input type="text" id="firstName" placeholder="firstName" class="mt-2 h-20  w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#3b83f6d6]">Phone Number</label>
                <input type="text" id="firstName" placeholder="firstName" class="mt-2 h-20  w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#3b83f6d6]">Email Address</label>
                <input type="text" id="firstName" placeholder="firstName" class="mt-2 h-20  w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#3b83f6d6]">Message</label>
              <textarea
                id="message"
                className="mt-2 h-32 w-full border border-[#3b83f6d6] p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#92400e] focus:border-transparent"
                rows="4"
                placeholder="Example Text"
              ></textarea>
            </div>
            <div className="flex justify-end">
            <button class="bg-[#3b83f6d6] text-[#fff] hover:bg-[#92400e] p-5 rounded-[10px]">
            Contact us
           </button>
            </div>
          </form>
        </div>
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622623648!2d-74.30932711162491!3d40.69701928803442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sng!4v1722617960116!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>















      </div>
    </main>
  );
}