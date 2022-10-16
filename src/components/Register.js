import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-rose-100">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-rose-800">
              Register Now!!
            </h1>
            <p className="py-6">Please Register now for Login.</p>
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-xl">User Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered lg:w-96"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="input input-bordered lg:w-96"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-xl">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/login" className=" link link-hover">
                    Already Have an Accout.{" "}
                    <span className="text-blue-700">Login</span>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent text-normal">
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
