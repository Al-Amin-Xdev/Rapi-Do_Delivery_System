import { FaTruckFast, FaMoneyBillWave, FaWarehouse, FaBuilding } from "react-icons/fa6";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaTruckFast className="text-4xl mb-4" />,
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver fast."
    },
    {
      icon: <FaMoneyBillWave className="text-4xl mb-4" />,
      title: "Cash On Delivery",
      desc: "Deliver products to customers with secure COD service."
    },
    {
      icon: <FaWarehouse className="text-4xl mb-4" />,
      title: "Delivery Hub",
      desc: "Quick sorting, handling, and dispatch for faster delivery."
    },
    {
      icon: <FaBuilding className="text-4xl mb-4" />,
      title: "SME & Corporate",
      desc: "Reliable delivery solutions for business and enterprise clients."
    },
  ];

  return (
    <div className="w-full] mx-auto px-5 py-10">
      <h2 className="text-3xl text-center font-bold my-5 "><span className="text-primary">Explore</span> How We Provide Our <span className="text-primary">Services</span></h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center border border-black"
          >
            <div className="flex justify-center text-primary">{step.icon}</div>
            <h3 className="text-lg font-semibold mt-2">{step.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
