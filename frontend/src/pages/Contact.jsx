import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div className="px-4 md:px-10 py-16">
      {/* Heading */}
      <div className="text-center text-3xl font-semibold text-gray-800 mb-10">
        <p>
          CONTACT <span className="text-blue-500">US</span>
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center md:items-start mb-28">
        {/* Image */}
        <div className="w-full md:max-w-[400px]">
          <img
            className="w-full rounded-lg shadow-lg"
            src={assets.contact_image}
            alt="Contact Us"
          />
        </div>

        {/* Contact Details */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Office Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">OUR OFFICE</h3>
            <div className="text-gray-600 space-y-2">
              <p><strong>Mohammad Sanaullah & Associates (MSA)</strong></p>
              <p>Chartered Secretaries & Management Consultants (MSA)</p>
              <p>WINS COURT (Ground Floor)</p>
              <p>House No. 8, Road No. 14</p>
              <p>Dhanmondi, Dhaka -1209</p>
              <p>Phones: 880 1715 330030; 880 1713 380038</p>
              <p>Email: <a href="mailto:sanaullahfcs@gmail.com" className="text-blue-500 hover:underline">sanaullahfcs@gmail.com</a></p>
            </div>
          </div>

          {/* Careers Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Careers atMohammad Sanaullah & Associates (MSA)</h3>
            <p className="text-gray-600">Learn more about our teams and job openings.</p>
            <button className="mt-6 py-3 px-6 border border-gray-400 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
