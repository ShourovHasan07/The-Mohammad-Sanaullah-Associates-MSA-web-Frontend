import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white text-gray-800 py-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <img className="mb-4 w-36 " src={assets.logo} alt="Logo" />
          <p className="text-gray-600 text-sm leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard since the 1500s.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">COMPANY</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-black cursor-pointer transition">Home</li>
            <li className="hover:text-black cursor-pointer transition">About Us</li>
            <li className="hover:text-black cursor-pointer transition">Contact Us</li>
            <li className="hover:text-black cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">GET IN TOUCH</h3>
          <ul className="space-y-2 text-gray-600">
            <li>📞 01728619254</li>
            <li>📧 shourovhasan001@gmail.com</li>
          </ul>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700 transition">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-300 text-center pt-5">
        <p className="text-gray-600 text-sm">
          Copyright &copy; {currentYear} <span className="font-semibold text-gray-900">SHOUROV HASAN</span> - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
