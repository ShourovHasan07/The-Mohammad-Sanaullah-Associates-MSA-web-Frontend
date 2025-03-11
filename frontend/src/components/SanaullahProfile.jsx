import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

const SanaullahProfile = () => {
  const [showFullText, setShowFullText] = useState(false);

  // Full profile text
  const fullText = `Mohammad Sanaullah is the CEO and Lead Consultant of Mohammad Sanaullah & Associates, 
  an independent professional firm specializing in Chartered Secretarial and Management 
  consultancy services. With over 34 years of experience in corporate management, he has 
  held key leadership roles in reputed multinational corporations and governance bodies. 
  He has also contributed extensively to professional education as an MBA faculty member 
  for over two decades.

  Sanaullah has served as Corporate Affairs Director, Head of Human Resources, and Company 
  Secretary at Singer Bangladesh Limited. He has been a board member at various organizations, 
  including Bangladesh Institute of Capital Market (BICM) and Corporate Secretaries International 
  Association (CSIA). He is also a certified trainer on Corporate Governance for the International 
  Finance Corporation (IFC).`;

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white shadow-lg rounded-xl max-w-5xl mx-auto mt-10 transition-transform transform hover:scale-105 hover:shadow-2xl">
      
      {/* Profile Image */}
      <img 
        src={assets.header_img_4} 
        alt="Mohammad Sanaullah" 
        className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover shadow-md"
      />

      {/* Profile Information */}
      <div className="text-center md:text-left space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Mohammad Sanaullah</h2>
        <p className="text-lg font-medium text-blue-600">CEO & Lead Consultant</p>
        
        <p className="text-gray-700 leading-relaxed text-justify">
          {showFullText ? fullText : fullText.slice(0, 250) + "..."}
        </p>

        {/* Read More / Read Less Button */}
        <button 
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition-all hover:bg-blue-600"
          onClick={() => setShowFullText(!showFullText)}
        >
          {showFullText ? "Read Less" : "Read More"}
        </button>
      </div>

    </div>
  );
};

export default SanaullahProfile;
