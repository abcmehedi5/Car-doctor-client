import React from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:gap-24 lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="max-w-xs" src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 md:w-full max-w-lg border-2 bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered rounded-lg"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                required
                name="password"
                className="input input-bordered rounded-lg"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary rounded-lg bg-red-700 text-white border-none"
                type="submit"
                value="LOGIN"
              />
            </div>
          </form>

          <div className="mx-auto text-center">
            <p>Or Sign In with</p>
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
              Have an account?
              <Link className="link-error font-bold" to={"/singup"}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
