import React from "react";
import { Quote } from "lucide-react";

const Review = ({ card }) => {

  return (
    <div>
      <div className="w-full max-w-full p-4 sm:p-6 flex justify-center">
        <div
          className="relative bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-xl border border-transparent"
          style={{
            background: "white",
            borderImage: "linear-gradient(90deg, #38bdf8, #3b82f6, #a855f7) 1",
          }}
        >
          {/* Quote Icon */}
          <Quote className="w-10 h-10 text-teal-300 mb-4" />

          {/* Review Text */}
          <p className="text-gray-700 leading-relaxed mb-4">
            {card.review}
          </p>

          {/* Divider */}
          <div className="border-t border-dashed border-teal-300 my-5"></div>

          {/* Reviewer Section */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-900">
              <img className="rounded-[50%]" src={card.user_photoURL} alt="" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-teal-900">
                {card.userName}
              </h4>
              <p className="text-gray-600 text-sm">Senior Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
