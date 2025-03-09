import React from 'react';
import { TbWorld } from "react-icons/tb";
import { FaRegCheckCircle } from 'react-icons/fa'; // Importing React icon

const Experience = () => {
  return (
    <div className="bg-gray-50 py-12 mt-8 px-4">

    <div  className='flex gap-9' >


    <div className="max-w-6xl mx-auto text-center">
        {/* Logo Section */}
        <div className="mb-8">
          <img 
            src="https://cdn.easyfrontend.com/pictures/logos/color-logo-1.png" // replace with your logo URL
            
            className="mx-auto h-20 object-contain"
          />
        </div>

        {/* Header Section */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">20+ Years of Experience in Corporate Law and FEMA
        </h2>
        <p className="text-lg text-gray-600 mb-8">
        MOHAMMAD SANAULLAH  and Associates is a Practicing Company Secretaries Firm with a team of seasoned, competent, and professional individuals who put the clients’ interests at the forefront.
        </p>

       
      </div>



         {/* Card Layout */}
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FaRegCheckCircle className="text-green-500 text-xl" />
              <h3 className="text-xl font-semibold text-gray-800">More About Us</h3>
            </div>
            <p className="text-gray-600">We are committed to putting our clients’ interests first with professional integrity.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FaRegCheckCircle className="text-green-500 text-xl" />
              <h3 className="text-xl font-semibold text-gray-800">Ethical and Professional</h3>
            </div>
            <p className="text-gray-600">Expect only the most diligent and sophisticated conduct from our team.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FaRegCheckCircle className="text-green-500 text-xl" />
              <h3 className="text-xl font-semibold text-gray-800">Seasoned Team</h3>
            </div>
            <p className="text-gray-600">Our team delivers quality and prompt services, backed by years of expertise.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <FaRegCheckCircle className="text-green-500 text-xl" />
              <h3 className="text-xl font-semibold text-gray-800">Formidable Track Record</h3>
            </div>
            <p className="text-gray-600">Our team of professionals has enabled us to maintain a formidable track record over the years.</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 col-span-2">
            <div className="flex items-center space-x-3 mb-4">
            <TbWorld className="text-green-500 text-6xl" />

              <h3 className="text-xl font-semibold text-gray-800">Global Clients</h3>
            </div>

            

            <p className="text-gray-600">We proudly serve clients from a variety of industries and scales around the world.</p>
          </div>
        </div>
    </div>
      
    </div>
  );
};

export default Experience;
