import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "./../assets/assets_frontend/assets";

const Team = () => {
  const navigate = useNavigate(); 

  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50">
      {/* Heading */}
      <div className="text-center text-4xl font-bold text-gray-800 mb-12">
        <p>
          Meet Our Expert <span className="text-blue-600">Team</span>
        </p>
      </div>

      {/* Firm Overview */}
      <div className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-12 leading-relaxed">
        <p>
          Our firm is powered by a team of **qualified company secretaries** and expert professionals, including **corporate legal managers**, **chartered accountants**, and **consultants** from various industries.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Member 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white shadow-xl rounded-xl transition-transform transform hover:scale-105">
          {/* Image */}
          <img
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            src={assets.header_img_4}
            alt="MD Sanaullah"
          />
          
          {/* Details */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-semibold text-gray-800">MD Sanaullah</h4>
            <p className="text-gray-600 text-lg">CEO & Lead Consultant</p>
            <p className="text-sm text-gray-500">Mohammad Sanaullah & Associates</p>
            <button
              className="mt-4 px-4 py-2 text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
              onClick={() => navigate("/ms-profile")}
            >
              View Profile
            </button>
          </div>
        </div>

        {/* Member 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white shadow-xl rounded-xl transition-transform transform hover:scale-105">
          {/* Image */}
          <img
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            src={assets.shourov}
            alt="MD Maksudur Hasan Shourov"
          />
          
          {/* Details */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-semibold text-gray-800">MD Maksudur Hasan Shourov</h4>
            <p className="text-gray-600 text-lg">Software Engineer</p>
            <button
              className="mt-4 px-4 py-2 text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
              onClick={() => navigate("/skb-profile")}
            >
              View Profile
            </button>
          </div>
        </div>
        {/* Member 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white shadow-xl rounded-xl transition-transform transform hover:scale-105">
          {/* Image */}
          <img
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            src={assets.shourov}
            alt="MD Maksudur Hasan Shourov"
          />
          
          {/* Details */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-semibold text-gray-800">MD Maksudur Hasan Shourov</h4>
            <p className="text-gray-600 text-lg">Software Engineer</p>
            <button
              className="mt-4 px-4 py-2 text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
              onClick={() => navigate("/skb-profile")}
            >
              View Profile
            </button>
          </div>
        </div>
        {/* Member 2 */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white shadow-xl rounded-xl transition-transform transform hover:scale-105">
          {/* Image */}
          <img
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover"
            src={assets.shourov}
            alt="MD Maksudur Hasan Shourov"
          />
          
          {/* Details */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-semibold text-gray-800">MD Maksudur Hasan Shourov</h4>
            <p className="text-gray-600 text-lg">Software Engineer</p>
            <button
              className="mt-4 px-4 py-2 text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
              onClick={() => navigate("/skb-profile")}
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
