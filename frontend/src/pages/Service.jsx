import { useState } from "react";
import { assets } from "./../assets/assets_frontend/assets";

const services = [
  {
    "title": "Company Law and Corporate Secretarial Services",
    "description": "Company law refers to the legal framework governing the formation, operation, and dissolution of companies. It ensures businesses operate in a structured and lawful manner, protecting the interests of shareholders, employees, and other stakeholders. This law establishes the rights, duties, and responsibilities of directors, officers, and shareholders, ensuring transparency and accountability in corporate governance. Additionally, it regulates financial reporting, mergers, acquisitions, and insolvency procedures, promoting ethical business practices.\n\nKey Aspects of Company Law:\n- Company Formation & Registration: Defines the process of incorporating a company, including documentation and legal requirements.\n- Corporate Governance: Establishes rules on board structure, shareholder rights, and ethical decision-making.\n- Director’s Duties & Responsibilities: Ensures directors act in the best interests of the company and stakeholders.\n- Shareholders’ Rights & Obligations: Defines voting rights, dividend entitlements, and responsibilities in company affairs.\n- Financial Reporting & Compliance: Mandates companies to maintain proper accounts and submit annual reports.\n- Mergers, Acquisitions & Restructuring: Regulates business combinations and changes in corporate structure.\n- Insolvency & Liquidation: Provides guidelines for handling financial distress and company closure.\n\nCorporate Secretarial Services:\nCorporate secretarial services ensure that a company complies with all legal and regulatory requirements. These services assist businesses in maintaining statutory records, filing necessary documents, and conducting meetings in accordance with the law. A company secretary plays a crucial role in corporate governance by advising the board on compliance matters, preparing resolutions, and ensuring proper communication with regulatory bodies.\n\nKey Corporate Secretarial Services:\n- Company Incorporation & Registration: Handling the legal process of forming a new company.\n- Statutory Compliance & Filings: Ensuring timely submission of necessary documents with government authorities.\n- Maintenance of Statutory Records: Keeping records like registers of members, directors, and annual returns.\n- Board & Shareholder Meetings: Organizing meetings, preparing agendas, and documenting minutes.\n- Drafting Resolutions & Agreements: Preparing and filing board resolutions, shareholder agreements, and other legal documents.\n- Corporate Governance Advisory: Ensuring compliance with company laws, stock exchange regulations, and governance codes.\n- Regulatory Liaison & Communication: Coordinating with government authorities like company registrars, tax departments, and securities regulators.\n- Risk Management & Legal Compliance: Identifying potential legal risks and ensuring the company meets all regulatory obligations."
},
  {
    title: "Corporate Laws Advisory and Compliance Management Services",
    description: "Expert legal advisory services...",
  },
  {
    title: "Corporate Governance Compliance Audit Services",
    description: "Ensuring governance compliance...",
  },
  {
    title: "Secretarial Audit / Due Diligence Audit Services",
    description: "Conducting in-depth audits...",
  },
  {
    title: "Scrutinizer (E-voting) Management Services",
    description: "Managing e-voting procedures...",
  },
  {
    title: "IPO/Capital Market Advisory Services",
    description: "Guidance on IPOs and market strategies...",
  },
  {
    title: "Corporate Restructuring Mergers and Acquisition Services",
    description: "Helping with restructuring and mergers...",
  },
  {
    title: "Joint Ventures, Valuation and Strategic Advisory Services",
    description: "Valuation and partnership guidance...",
  },
  {
    title: "Project Management & Business Management Services",
    description: "Handling projects efficiently...",
  },
  {
    title: "Private Equity & Venture Capital Advisory Services",
    description: "Investment and funding advice...",
  },
  {
    title: "Foreign Direct Investment/BIDA Advisory Services",
    description: "Helping with FDI and regulations...",
  },
  {
    title: "Finance and Investment Advisory Services",
    description: "Financial planning and investments...",
  },
  {
    title: "Tax and VAT Management Advisory Services",
    description: "Tax compliance and VAT advisory...",
  },
  {
    title: "Human Resources Consulting Services",
    description: "HR solutions and consulting...",
  },
  {
    title: "Head hunting and conducting Training",
    description: "Recruitment and corporate training...",
  },
  {
    title: "Intellectual Property Rights Related Services",
    description: "IP protection and legal support...",
  },
  {
    title: "Arbitration & Conciliation Management Services",
    description: "Dispute resolution and arbitration...",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div>

    <div className="flex justify-center gap-5" >

   

    


      <h1 className="text-4xl font-bold  " >Services</h1>

    </div>
      

      <div className="flex flex-col md:flex-row gap-8 p-6">
        {/* Left Side - Service List */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Services</h2>
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li
                key={index}
                className={`p-3 cursor-pointer   rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-transform ${
                  selectedService === service ? "font-bold" : ""
                }`}
                onClick={() => setSelectedService(service)}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Service Description */}
        <div className="w-full md:w-2/3 bg-white p-8 shadow-lg rounded-lg ">
          {selectedService ? (
            <div>
              <h3 className="text-2xl font-bold mb-6">
                {selectedService.title}
              </h3>
              <p className="text-gray-700">{selectedService.description}</p>
            </div>
          ) : (
            <p className="text-gray-500">Click on a service to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
