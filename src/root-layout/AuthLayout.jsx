import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="w-max-7xl mx-auto my-3">
      <div className="main-container flex justify-center gap-2 flex-col-reverse md:flex-row">

        
        <div className="outlet w-full md:w-1/2 max-w-xl mx-auto flex justify-center">
          <Outlet />
        </div>

        {/* Image Section */}
        <div className="authImage w-full md:w-1/2 flex justify-center">
          <img
            src="../../assets/authImage.png"
            alt="Authentication"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
<h1>AuthLayout page</h1>;
