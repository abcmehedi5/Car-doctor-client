import React from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { sweetError } from "../Shared/SweetAlert";
const SingUp = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // validate
    if (password != confirmPassword) {
      sweetError("Password & Confirm Password do not match.");
      return;
    } else if (password.length < 6) {
      sweetError("Please add at least 6 characters in your password");
      return;
    }
    // const singup = { name, email, password };
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:gap-24 lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="max-w-xs" src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 md:w-full max-w-lg border-2 bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="full name"
                name="name"
                required
                className="input input-bordered rounded-lg"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered rounded-lg"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered rounded-lg"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                required
                name="confirmPassword"
                placeholder="confirm password"
                className="input input-bordered rounded-lg"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary rounded-lg bg-red-700 text-white border-none"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>

          <div className="mx-auto text-center">
            <p className="text-gray-700">Or Sign Up with</p>
            <div className="flex justify-center gap-4 mt-5">
              <button className="btn btn-outline btn-sm">
                <FaGoogle />
              </button>
              <button className="btn btn-outline btn-sm">
                <FaLinkedinIn />
              </button>
              <button className="btn btn-outline btn-sm ">
                <FaFacebook />
              </button>
            </div>

            <p className="mb-8 mt-5">
              Already have an account?
              <Link className="link-error font-bold" to={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
