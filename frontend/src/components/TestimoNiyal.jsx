import { useState, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const testimonialList = [
  {
    author: {
      fullName: "Akshay Kumar",
      picture: "https://cdn.easyfrontend.com/pictures/users/user20.jpg",
      designation: "Founder / CEO",
    },
    rating: 3.5,
    description:
      "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
  },
  {
    author: {
      fullName: "Raima Sen",
      picture: "https://cdn.easyfrontend.com/pictures/users/user15.jpg",
      designation: "Content Marketing",
    },
    rating: 4,
    description:
      "Made darkness life. Fifth him there own grass divided you you're beast. Tree subdue a open cattle. Unto spirit winged.",
  },
  {
    author: {
      fullName: "Arjun Kapur",
      picture: "https://cdn.easyfrontend.com/pictures/users/user22.jpg",
      designation: "Digital Strategy",
    },
    rating: 5,
    description:
      "Gathered let winged be above upon. The to sea shall man, tree female said fish of sixth night subdue said.",
  },
  {
    author: {
      fullName: "Deepika Padukone",
      picture: "https://cdn.easyfrontend.com/pictures/users/user1.jpg",
      designation: "Digital Strategy",
    },
    rating: 5,
    description:
      "His make fly said divided yielding creeping years his. Have over. Also you'll after great image subdue forth likeness.",
  },
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
  <p className={classNames("mb-3", className)} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating))
          content = <FontAwesomeIcon icon={faStar} className="me-1 text-yellow-400" />;
        else if (rating > i && rating < index + 1)
          content = <FontAwesomeIcon icon={faStarHalfAlt} className="me-1 text-yellow-400" />;
        else if (index > rating)
          content = <FontAwesomeIcon icon={faStar} className="me-1 text-gray-300" />;

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span className="ml-2 text-gray-700">{rating.toFixed(1)}</span>}
  </p>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

const TestimonialItem = ({ testimonial }) => (
  <Card className="shadow-lg rounded-lg overflow-hidden mb-6">
    <Card.Body className="flex items-center p-6">
      <div className="mr-4">
        <img
          src={testimonial.author.picture}
          alt={testimonial.author.fullName}
          className="w-16 h-16 rounded-full border-4 border-red-500"
        />
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          {testimonial.author.fullName}
        </h4>
        <p className="text-gray-500 text-sm mb-2">{testimonial.author.designation}</p>
        <Rating rating={testimonial.rating} showLabel={false} />
        <p className="text-gray-700">{testimonial.description}</p>
      </div>
    </Card.Body>
  </Card>
);

TestimonialItem.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

const Testimonial10_J14LOD3v = () => {
  return (
    <section className="py-12 mt-7 bg-gray-50">
      <Container>
        <Row className="mb-6">
          <Col lg={6}>
            <h2 className="text-3xl font-bold text-gray-800 text-center uppercase  mb-9"> testimonial
            </h2>
            
            
          </Col>
        </Row>
        <Row className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialList.map((testimonial, i) => (
            <Col key={i}>
              <TestimonialItem testimonial={testimonial} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial10_J14LOD3v;
