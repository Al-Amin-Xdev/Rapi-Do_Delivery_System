// Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-16 h-16">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 border-b-purple-500 animate-spin"></div>
        {/* Inner glowing orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      <span className="ml-4 text-gray-700 text-lg font-semibold animate-pulse">
        Loading...
      </span>
    </div>
  );
};

export default Loader;
