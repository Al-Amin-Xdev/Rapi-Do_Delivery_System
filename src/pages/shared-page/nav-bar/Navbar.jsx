import React from "react";
import { NavLink } from "react-router";
import useAuth from "../../../Custom-Hooks/useAuth";

const Navbar = () => {
  const { user, logOutUser, setLoading } = useAuth();

  // Log-out a user
  const LogOut = () => {
    logOutUser()
      .then((result) => {
        setLoading(false);
        console.log(result);
        alert("Log-out is successfull ✅");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Log-out was not successfull");
      });
  };

  /// NavBar Links

  const links = (
    <>
      <li className="font-bold  py-3 text-[16px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded-lg" : ""
          }
        >
          Home
        </NavLink>
      </li>

      <li className="font-bold py-3 text-[16px]">
        <NavLink
          to="/coverage"
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded-lg" : ""
          }
        >
          Coverage
        </NavLink>
      </li>

      <li className="font-bold py-3 text-[16px]">
        <NavLink
          to="/rider"
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded-lg" : ""
          }
        >
          Be a Rider
        </NavLink>
      </li>

      <li className="font-bold py-3 text-[16px]">
        <NavLink
          to="/send-parcel"
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded-lg" : ""
          }
        >
          Send A Parcel
        </NavLink>
      </li>

      <li className="font-bold py-3 text-[16px]">
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded-lg" : ""
          }
        >
          Register
        </NavLink>
      </li>

       <li className="font-bold py-3 text-[16px]">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "bg-primary text-white rounded-lg" : ""
          }
        >
          Log-In
        </NavLink>
      </li>

    </>
  );


  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold">Rapi-Do</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-4">{links}</ul>
        </div>

        <div className="navbar-end">
          {/* {user && (
            <div className="w-12 h-12 mx-2">
              <img
                className="w-full h-full rounded-full border-2 border-black-500 object-cover"
                src={user.photoURL}
                alt={user.displayName || "User Photo"}
              />
            </div>
          )} */}
          {user ? (
            <button
              onClick={LogOut}
              className="font-bold px-4 py-2 bg-blue-600 text-white rounded shadow-md transition-transform duration-200 ease-in-out hover:shadow-xl hover:bg-blue-700"
            >
              {" "}
              {/* {user.displayName} */}
              Log Out
            </button>
          ) : (
            <NavLink
              to="/login"
              className="font-bold px-4 py-2 bg-green-600 text-white rounded shadow-md transition-transform duration-200 ease-in-out hover:shadow-xl hover:bg-green-700"
            >
              Log In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
