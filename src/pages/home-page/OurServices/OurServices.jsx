import React from "react";
import { FaTruck, FaGlobe, FaBoxOpen, FaMoneyBillAlt, FaHandshake, FaUndoAlt } from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      icon: <FaTruck className="text-4xl mb-4" />,
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in major cities. Express delivery available within 4–6 hours.",
      highlight: false,
    },
    {
      icon: <FaGlobe className="text-4xl mb-4" />,
      title: "Nationwide Delivery",
      desc: "Home delivery in every district, ensuring products reach customers within 48–72 hours.",
      highlight: true,
    },
    {
      icon: <FaBoxOpen className="text-4xl mb-4" />,
      title: "Fulfillment Solution",
      desc: "Inventory management, order processing, packaging, and after-sales support tailored for businesses.",
      highlight: false,
    },
    {
      icon: <FaMoneyBillAlt className="text-4xl mb-4" />,
      title: "Cash on Home Delivery",
      desc: "100% secure COD service across Bangladesh with guaranteed product safety.",
      highlight: false,
    },
    {
      icon: <FaHandshake className="text-4xl mb-4" />,
      title: "Corporate Service / Contract Logistics",
      desc: "Customized warehousing, inventory management, and corporate delivery solutions.",
      highlight: false,
    },
    {
      icon: <FaUndoAlt className="text-4xl mb-4" />,
      title: "Parcel Return",
      desc: "Reverse logistics service allowing customers to return products with ease.",
      highlight: false,
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-14">
      <div className="bg-[#043B36] text-white rounded-3xl p-8 lg:p-14 shadow-xl">
        <h2 className="text-3xl font-semibold text-center mb-3">Our Services</h2>
        <p className="text-center text-gray-200 max-w-2xl mx-auto mb-8">
          Enjoy fast, reliable parcel delivery with real-time tracking. From personal packages to business shipments — we deliver on time, every time.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((srv, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 transition-all duration-300 bg-white text-gray-800 shadow-md hover:shadow-xl ${
                srv.highlight ? "bg-[#dff48a] shadow-lg hover:shadow-2xl" : ""
              }`}
            >
              <div className="flex justify-center text-[#043B36]">{srv.icon}</div>
              <h3 className="text-lg font-semibold text-center mt-2">{srv.title}</h3>
              <p className="text-sm text-gray-600 text-center mt-2 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
