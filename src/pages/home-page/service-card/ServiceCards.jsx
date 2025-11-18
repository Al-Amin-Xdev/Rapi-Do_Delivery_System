import { Package, PhoneCall, MapPin } from "lucide-react";

const serviceCards = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey with precise status updates.",
    icon: <MapPin className="w-10 h-10 text-blue-600" />,
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    desc: "Your valuable parcels are handled with the utmost care and delivered safely to their destination. Our reliable process ensures maximum protection.",
    icon: <Package className="w-10 h-10 text-blue-600" />,
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery information.",
    icon: <PhoneCall className="w-10 h-10 text-blue-600" />,
  },
];

export default function ServiceCards() {
  return (
    <div className="w-full max-w-full px-4 py-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {serviceCards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 border border-black hover:shadow-xl transition-all duration-300"
        >
          <div>{card.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}
