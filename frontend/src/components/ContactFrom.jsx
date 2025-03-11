import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText, faPhoneAlt, faHdd } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useState } from 'react';

const contactInfoList = [
	{
		icon: faEnvelopeOpenText,
		label: "sanaullahfcs@gmail.com",
		href: "sanaullahfcs@gmail.com",
	},
	{
		icon: faPhoneAlt,
		label: "0 1713 380038",
		href: "callto:+880 1742-0****0",
	},
	
];

const ContactForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<form noValidate validated={validated} onSubmit={handleSubmit} className="space-y-4">
			<div className="mb-3">
				<input
					type="text"
					placeholder="Enter Name"
					className="w-full p-3 border border-gray-300 rounded-md"
				/>
			</div>
			<div className="mb-3">
				<input
					type="email"
					placeholder="Enter Email"
					className="w-full p-3 border border-gray-300 rounded-md"
				/>
			</div>
			<div className="mb-3">
				<textarea
					rows="3"
					placeholder="Enter Message"
					className="w-full p-3 border border-gray-300 rounded-md"
				/>
			</div>
			<div className="text-right">
				<button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
					Submit
				</button>
			</div>
		</form>
	);
};

const ContactFormCard = () => (
	<div className="bg-white shadow-lg rounded-lg p-5">
		<h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
		<p className="text-gray-600 mb-5">
			We list your menu online, help you process orders.
		</p>

		<ContactForm />
	</div>
);

const ContactInfo = ({ contactInfoList }) => (
	<div className="mt-5">
		{contactInfoList.map((info, i) => (
			<div className="bg-white shadow-lg rounded-lg mb-4 p-4" key={i}>
				<div className="flex items-center">
					<div className="text-3xl text-blue-600">
						<FontAwesomeIcon icon={info.icon} />
					</div>
					<a
						className="ml-4 text-lg text-blue-600 hover:text-blue-800"
						href={info.href || "#!"}
					>
						{info.label}
					</a>
				</div>
			</div>
		))}
	</div>
);

ContactInfo.propTypes = {
	contactInfoList: PropTypes.array.isRequired,
};

const ContactUs = () => {
	return (
		<section className="bg-gray-100 py-12">
			<div className="max-w-6xl mx-auto px-4">
				<div className="lg:flex justify-between">
					<div className="lg:w-5/12 mb-8 lg:mb-0">
						<h2 className="text-3xl font-semibold mb-4">How can we help you?</h2>
						<p className="text-gray-600 mb-0">
							It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!
						</p>

						<ContactInfo contactInfoList={contactInfoList} />
					</div>
					<div className="lg:w-5/12">
						<ContactFormCard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
