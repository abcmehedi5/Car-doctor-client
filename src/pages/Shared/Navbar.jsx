import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { sweetError, sweetSuccess } from "./SweetAlert";

const Navbar = () => {
  const { user, singout, loading } = useContext(AuthContext);
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/">Services</Link>
      </li>
     {
      !user &&  <li>
        <Link to="/login">Login</Link>
      </li>
     }
      <li>
        <Link to="/">Contact</Link>
      </li>
    </>
  );
  // if (loading) {
  //   return <progress className="progress w-full"></progress>;
  // }
  const handleLogout = () => {
    singout()
      .then((result) => {
        sweetSuccess("logout successfull");
      })
      .catch((error) => {
        sweetError(error.message);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 mt-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost font-bold normal-case text-xl"
          >
            CAR DOCTOR
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <button
              onClick={() => handleLogout()}
              className="btn btn-primary mr-10"
            >
              logout
            </button>
          )}
          {loading && <progress className="progress w-full"></progress>}
          <button className="btn btn-outline btn-primary border-red-700  rounded-lg w-2/4">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
