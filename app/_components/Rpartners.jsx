"use client";
import Image from "next/image";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
        <div> {/* Added div to wrap the sections */}
            

            <section className="mt-10 lg:mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10 my-8">
                <div className="border rounded-lg p-4 shadow-lg text-center">
                  <Image
                    src="/images/brand1.png"
                    alt="Property Thumbnail"
                    width={100}
                    height={100} // Smaller size for mobile
                    className="object-contain mx-auto max-w-full h-auto lg:w-[100px] lg:h-[75px]" // Smaller size for desktop
                  />
                </div>

                <div className="border rounded-lg p-4 shadow-lg text-center">
                  <Image
                    src="/images/brand2.png"
                    alt="Property Thumbnail"
                    width={100}
                    height={100}
                    className="object-contain mx-auto max-w-full h-auto lg:w-[100px] lg:h-[75px]" // Smaller size for desktop
                  />
                </div>

                <div className="border rounded-lg p-4 shadow-lg text-center">
                  <Image
                    src="/images/brand3.png"
                    alt="Property Thumbnail"
                    width={100}
                    height={100}
                    className="object-contain mx-auto max-w-full h-auto lg:w-[100px] lg:h-[75px]" // Smaller size for desktop
                  />
                </div>

                <div className="border rounded-lg p-4 shadow-lg text-center">
                  <Image
                    src="/images/brand4.png"
                    alt="Property Thumbnail"
                    width={100}
                    height={100}
                    className="object-contain mx-auto max-w-full h-auto lg:w-[100px] lg:h-[75px]" // Smaller size for desktop
                  />
                </div>

                <div className="border rounded-lg p-4 shadow-lg text-center">
                  <Image
                    src="/images/brand5.png"
                    alt="Property Thumbnail"
                    width={100}
                    height={100}
                    className="object-contain mx-auto max-w-full h-auto lg:w-[100px] lg:h-[75px]" // Smaller size for desktop
                  />
                </div>
            </section>
        </div>
    );
}
