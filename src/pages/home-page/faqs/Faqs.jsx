import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "How does this posture corrector work?",
      a: `A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.`,
    },
    {
      q: "Is it suitable for all ages and body types?",
      a: "Yes, the device is adjustable and designed to fit a wide range of users.",
    },
    {
      q: "Does it really help with back pain and posture improvement?",
      a: "Consistent use can help improve posture and reduce mild back discomfort.",
    },
    {
      q: "Does it have smart features like vibration alerts?",
      a: "Some models include vibration alerts when poor posture is detected.",
    },
    {
      q: "How will I be notified when the product is back in stock?",
      a: "You can sign up for email alerts to get notified instantly.",
    },
  ];

  return (
    <div>
      <section className="w-full max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex items-center justify-between text-left p-5 text-lg font-semibold text-gray-800"
              >
                {item.q}
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {openIndex === i && (
                <div className="px-5 pb-4 text-left text-gray-600 leading-relaxed border-t border-gray-100">
                  <p className="py-2">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="mt-10 px-8 py-3 rounded-full bg-lime-500 text-gray-900 font-semibold text-lg shadow-md hover:bg-lime-600 hover:shadow-lg active:scale-95 transition-all flex items-center gap-2 mx-auto">
          See More FAQ’s <ChevronDown className="w-5 h-5 rotate-270" />
        </button>
      </section>
    </div>
  );
};

export default Faqs;
