import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

const SanaullahProfile = () => {
  const [showFullText, setShowFullText] = useState(false);

  // Full profile text divided into paragraphs
  const paragraphs = [
    "Mohammad Sanaullah is the CEO and Lead Consultant of Mohammad Sanaullah & Associates, an Independent Professional Firm of Chartered Secretaries and Management Consultants.",
    "Mr. Sanaullah served as Corporate Affairs Director, Head of Human Resources, and Company Secretary of Singer Bangladesh Limited (a reputed MNC), with over 34 years’ exposure in business, corporate management, and governance.",
    "He served three times as President (7 years) at the Institute of Chartered Secretaries of Bangladesh (ICSB), Nominee Director (5 years) at Singer Bangladesh Limited, and Non-Executive Director (6 years) at the Bangladesh Institute of Capital Market (BICM).",
    "As an Executive Member (6 years) at Corporate Secretaries International Association (CSIA) headquartered in Hong Kong, he played a vital role in global corporate governance.",
    "He is a certified trainer on Corporate Governance - Board Leadership of the Global Corporate Governance Forum (GCGF) of the International Finance Corporation (IFC).",
    "Mr. Sanaullah served as an Independent Director and Chairman of the Audit Committee on the boards of Fareast Life Insurance Company Limited, Fu-Wang Foods Limited, and Beacon Pharmaceuticals Limited.",
    "He is a founding Vice President of the Bangladesh Accounting Association (BAA) and has also served as a member of its Advisory Board.",
    "A Fellow Member (FCS) of the Institute of Chartered Secretaries of Bangladesh (ICSB), he holds a Post Graduate Diploma in Personnel Management from BIM.",
    "Mohammad Sanaullah completed his graduation with Honors in Accounting and a Master’s in Accounting from the University of Dhaka in 1980 and 1981, respectively. He also holds an MBA in Marketing.",
    "He has served as an MBA faculty member for more than 20 years in leading universities and professional institutes, teaching subjects such as Human Resource Management, Industrial Relations, Financial Management, Securities Law & Capital Market, Company Secretarial Practice, Corporate Governance, and Business/Corporate Law."
  ];

  return (
    <div className="bg-white shadow-lg rounded-xl max-w-5xl mx-auto mt-10 p-8 transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col md:flex-row gap-6">
      
      {/* Profile Image - Positioned at Top Left */}
      <div className="flex-shrink-0">
        <img 
          src={assets.header_img_4} 
          alt="Mohammad Sanaullah" 
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 object-cover shadow-md"
        />
      </div>

      {/* Profile Information */}
      <div className="text-center md:text-left flex-1">
        <h2 className="text-3xl font-bold text-gray-800">Mohammad Sanaullah</h2>
        <p className="text-lg font-medium text-blue-600">CEO & Lead Consultant</p>
        
        {/* Display paragraphs */}
        <div className="text-gray-700 leading-relaxed text-justify space-y-4 mt-4">
          {paragraphs.slice(0, showFullText ? paragraphs.length : 3).map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

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
