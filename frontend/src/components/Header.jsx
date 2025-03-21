import React from "react";
import { assets } from "./../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg px-6 md:px-10 lg:px-20">
        {/* Left side */}
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
          <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
            well-known Practicing Chartered Secretaries and Management
            Consultancy firm
          </p>

          <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
            <img className="w-28" src={assets.group_profiles} alt="" />

            <p>
              Simply browse through our extensive list of trusted Firm, <br />
              schedule your appointment hassle-free.
            </p>
          </div>

          <a
            href="#speciality"
            className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
          >
            Contact Us
            <img className="w-3" src={assets.arrow_icon} alt="arrow icon" />
          </a>
        </div>

        {/* Right side */}
        <div className="md:w-1/2 relative">
          {/* Ensuring the image is at the bottom-right */}
          <img
            className="absolute bottom-0 right-0 w-full md:w-xl h-auto rounded-lg"
            src={assets.header_img_4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
