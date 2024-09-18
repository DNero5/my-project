"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";


export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
              <div className="flex-shrink-0">
                <Image
                  src="/images/person.2.png"
                  alt="Person"
                  className="w-24 h-24 md:w-48 md:h-48 rounded-full"
                  width={192}
                  height={192}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-600">
                  Testimonial
                </h3>
                <p className="text-2xl md:text-4xl italic font-bold text-[#3b83f6d6]">
                  Reviews from our happy Clients.
                </p>
                <p className="text-lg md:text-2xl text-gray-600 mt-4">
                  Huge number of properties available here for buy, sell and
                  rent. Also you find here co-living property so lots
                  opportunity you have to choose here and enjoy.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center md:text-left">
              <p className="text-xl md:text-3xl italic font-medium text-gray-900">
              &lsquo; Bary do a great job to find the perfect home. It's very easy
                for everyone to buy, sell, or rent property. We believe they
                continue their great service. &rsquo;
              </p>
              <p className="text-lg md:text-3xl mt-4 text-[#92400e] font-semibold">
                Michael Richard
              </p>
              <div className="text-blue-600 mt-2">{"⭐".repeat(5)}</div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
              <div className="flex-shrink-0">
                <Image
                  src="/images/person1.png"
                  alt="Person"
                  className="w-24 h-24 md:w-48 md:h-48 rounded-full"
                  width={192}
                  height={192}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-600">
                  Testimonial
                </h3>
                <p className="text-2xl md:text-4xl italic font-bold text-[#3b83f6d6]">
                  Reviews from our happy Clients.
                </p>
                <p className="text-lg md:text-2xl text-gray-600 mt-4">
                  Huge number of properties available here for buy, sell and
                  rent. Also you find here co-living property so lots
                  opportunity you have to choose here and enjoy.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center md:text-left">
            <p className="text-xl md:text-3xl italic font-medium text-gray-900">
              &lsquo; Bary do a great job to find the perfect home. It's very easy
                for everyone to buy, sell, or rent property. We believe they
                continue their great service. &rsquo;
              </p>
              <p className="text-lg md:text-3xl mt-4 text-[#92400e] font-semibold">
                Daniel Sunday
              </p>
              <div className="text-blue-600 mt-2">{"⭐".repeat(5)}</div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0">
              <div className="flex-shrink-0">
                <Image
                  src="/images/person4.jpg"
                  alt="Person"
                  className="w-24 h-24 md:w-48 md:h-48 rounded-full"
                  width={192}
                  height={192}
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-600">
                  Testimonial
                </h3>
                <p className="text-2xl md:text-4xl italic font-bold text-[#3b83f6d6]">
                  Reviews from our happy Clients.
                </p>
                <p className="text-lg md:text-2xl text-gray-600 mt-4">
                  Huge number of properties available here for buy, sell and
                  rent. Also you find here co-living property so lots
                  opportunity you have to choose here and enjoy.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center md:text-left">
              <p className="text-xl md:text-3xl italic font-medium text-gray-900">
              &lsquo; Bary do a great job to find the perfect home. It's very easy
                for everyone to buy, sell, or rent property. We believe they
                continue their great service. &rsquo;
              </p>
              <p className="text-lg md:text-3xl mt-4 text-[#92400e] font-semibold">
                Lionel Messi
              </p>
              <div className="text-blue-600 mt-2">{"⭐".repeat(5)}</div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

// Custom Next Arrow
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{
        ...style,
        display: "block",
        background: "black",
      }}
      onClick={onClick}
    ></div>
  );
}

// Custom Prev Arrow
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{
        ...style,
        display: "block",
        background: "black",
      }}
      onClick={onClick}
    ></div>
  );
}
