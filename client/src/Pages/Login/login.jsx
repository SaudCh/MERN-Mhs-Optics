import React from 'react';
import { Link } from 'react-router-dom';
import LoginImage from '../../Images/login.svg';

export default function Login() {
  return (
    <section className="container-fluid my-5">
      <div className="row justify-content-center align-items-center">
        <form className="col-11 border py-5 col-md-4">
          <span className="text-center">
            <h5>Login</h5>
            <p>Please fill in this form to get your account.</p>
          </span>
          <figure className="text-center">
            <img
              src={LoginImage}
              className="align-self-center col-9"
              style={{ height: 'auto' }}
              alt=""
            />
          </figure>

          <div className="my-3">
            <label htmlhtmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
            />
          </div>

          <div className="mb-3">
            <label htmlhtmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary col-12 py-2 mb-3"
            style={{ backgroundColor: '#00aef9', border: 'none' }}
          >
            Login
          </button>
          <span className="text-center">
            <p className="m-0 p-0">
              <Link className="link-blue" to="/forgotpassword">
                Forget Password
              </Link>
              .{' '}
            </p>
            <p className="m-0 p-0 mt-2">
              don't have an account?{' '}
              <Link className="link-blue" to="/register">
                Signup
              </Link>
              .
            </p>
          </span>
        </form>
      </div>
    </section>
  );
}
