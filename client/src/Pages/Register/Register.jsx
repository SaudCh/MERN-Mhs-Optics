import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterImage from '../../Images/register.svg';

export default function Register() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, password, confirmPassword);
  };

  return (
    <section className="container-fluid my-5">
      <div className="row justify-content-center align-items-center">
        <form className="col-11 border py-5 col-md-4" onSubmit={handleSubmit}>
          <span className="text-center">
            <h5>Signup</h5>
            <p>Please fill in this form to create an account.</p>
          </span>
          <figure className="text-center">
            <img
              src={RegisterImage}
              className="align-self-center col-9"
              style={{ height: 'auto' }}
              alt=""
            />
          </figure>

          <div className="my-3">
            <label htmlhtmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="Enter First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="my-3">
            <label htmlhtmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Enter Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="my-3">
            <label htmlhtmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlhtmlFor="confirmpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmpassword"
              placeholder="Enter Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="mb-3 form-check m-0 p-0 text-center">
            <label className="form-check-label fw-bold m-0 p-0" htmlFor="exampleCheck1">
              By creating an account you agree to our{' '}
              <Link className="link-blue" to="/">
                Terms & Condition
              </Link>
              .
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary col-12 py-2 mb-3"
            style={{ backgroundColor: '#00aef9', border: 'none' }}
          >
            Register
          </button>
          <span className="text-center">
            <p className="m-0 p-0 mt-2">
              Already have an account?{' '}
              <Link className="link-blue" to="/login">
                Login
              </Link>
              .
            </p>
          </span>
        </form>
      </div>
    </section>
  );
}
