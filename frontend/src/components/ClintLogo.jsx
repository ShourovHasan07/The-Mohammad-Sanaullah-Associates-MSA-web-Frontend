import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Clint1 from "../assets/assets_frontend/doc1.png"
import Clint2 from "../assets/assets_frontend/doc2.png"

const clientLogos = [
  {
    logo: Clint1,
    alt: "Client 1",
  },
  {
    logo:  Clint2,
    alt: "Client 2",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
    alt: "Client 3",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
    alt: "Client 4",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
    alt: "Client 5",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
    alt: "Client 6",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
    alt: "Client 7",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
    alt: "Client 8",
  },
];

const ClientLogoCard = () => {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <Row className="justify-center mb-10">
          <Col lg={8} xl={7} xxl={6} className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Our Clients & Partners
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Display your client or partner logos in stylish cards.
            </p>
          </Col>
        </Row>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {clientLogos.map((client, i) => (
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/5 xl:w-1/6 p-4" key={i}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img 
                  src={client.logo}
                  alt={client.alt}
                  className="w-full h-64 object-contain p-4 hover:bg-blue-300 "
                />
                <div className="p-4">
                  <p className="text-center text-lg font-semibold text-gray-800">{client.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ClientLogoCard;
