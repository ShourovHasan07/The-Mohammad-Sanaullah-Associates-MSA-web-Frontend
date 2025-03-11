import React from 'react';

const About = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-8 py-16">
            <h1 className="text-4xl text-center text-gray-800 font-bold mb-12">Advising. Guiding. Servicing.</h1>
            <div className="space-y-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                <b>Mohammad Sanaullah & Associates </b> (‘MSA’) is a well-known Practicing Chartered Secretaries and Management Consultancy firm located in Dhaka, Bangladesh, founded by Mr. Mohammad Sanaullah FCS.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                 <b>Mohammad Sanaullah </b> is the CEO and Lead Consultant of Mohammad Sanaullah & Associates. He was the Corporate Affairs Director, Company Secretary and Head of Human Resources of Singer Bangladesh Limited which is a leading (Multinational) public listed Company. He has over 34 years’ experiences and retired in late 2020. He has been practicing since January 2021. Enriched with experience of over three decades, the firm expanded its practice with the name & style of Mohammad Sanaullah & Associates by introducing dynamic and experienced resources. 
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                Combining the experience of senior professionals from a variety of backgrounds, the firm 
                delivers high quality Consulting, Governance and Company Secretarial support to address the 
                needs of the Clients.             
                   </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                We follow a proactive approach to our work so that our clients get the desired result.             
                   </p>
                <div className="flex gap-8">
                    <div className="flex-1 p-6 border border-gray-300 rounded-lg bg-white shadow-lg transform transition duration-300 hover:rotate-x-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                        To provide advisory services of the highest quality with the flexibility that modern businesses demand.
                        </p>
                    </div>
                    <div className="flex-1 p-6 border border-gray-300 rounded-lg bg-white shadow-lg transform transition duration-300 hover:rotate-x-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                        <p className="text-gray-600">
                        We are committed to developing a long-term professional relationship with our Clients based on mutual trust and respect.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
