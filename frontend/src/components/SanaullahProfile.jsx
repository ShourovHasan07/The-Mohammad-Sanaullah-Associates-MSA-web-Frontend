import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

const SanaullahProfile = () => {
  const [showFullText, setShowFullText] = useState(false);

  // Full profile text
  const fullText = `Mohammad Sanaullah is the CEO and Lead Consultant of Mohammad Sanaullah & Associates. An 
  Independent Professional Firm of Chartered Secretaries and Management Consultants. 
  Mr. Sanaullah served as Corporate Affairs Director, Head of Human Resources and Company 
  Secretary of Singer Bangladesh Limited (a reputed MNC), with over 34 years’ exposures in 
  business, corporate management and governance.   
  Mohammad Sanaullah served three times President (7 years) at the Institute of Chartered 
  Secretaries of Bangladesh (ICSB), Nominee Director (5years) at Singer Bangladesh Limited and 
  Non- Executive Director (6years) at Bangladesh Institute of Capital Market (BICM), Executive 
  Member (6years) at Corporate Secretaries International Association (CSIA) Headquarter in Hong 
  Kong - A Global Voice of Governance. He is a certified trainer on Corporate Governance - Board 
  Leadership of the Global Corporate Governance Forum (GCGF) of International Finance Corporation 
  (IFC). 
  Mr. Sanaullah served as an Independent Director (appointed by the BSEC) and Chairman Audit 
  Committee   on the Board of Fareast Life Insurance Company Limited and Fu-Wang Foods Limited. 
  Mr. Sanaullah also served as an Independent Director and Chairman Audit Committee at Beacon 
  Pharmaceuticals Limited. 
  He is one of the founding Vice President of the Bangladesh Accounting Association (BAA).  He also 
  served as Member of the Advisory Board of Bangladesh Accounting Association (BAA). 
  A Fellow Member (FCS) of the Institute of Chartered Secretaries of Bangladesh (ICSB), He also did 
  Post Graduate Diploma in Personnel Management from BMDC now Bangladesh Institute of 
  Management (BIM). 
  Mohammad Sanaullah completed his graduation with Honors in Accounting and Masters in 
  Accounting from University of Dhaka in 1980 and 1981 respectively. He also did MBA in Marketing. 
  He has served as MBA faculty for more than 20 years in the leading Universities of the country and 
  professional Institutes on Human Resource Management, Industrial Relations, Financial 
  Management, Securities Law & Capital Market, Company Secretarial Practice, Corporate 
  Governance and Business/Corporate laws.  
  
  `;

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
