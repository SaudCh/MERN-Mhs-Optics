import React from 'react';
import { Link } from 'react-router-dom';
import { EarthIcon, SearchIcon, ShoppingCartIcon, UserIcon } from './icons';
import './css/header.css';

export default function Header({ background }) {
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        background ? 'navbar-light bg-light' : 'navbar-dark home-header-style'
      }`}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Logo
        </Link>
        <div>
          <span className="d-md-none">
            <ShoppingCartIcon color="white" style={{ marginRight: 15 }} />
            <SearchIcon color="white" style={{ marginRight: 15 }} />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Sunglasses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Prescription Glasses
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Wishlist
              </Link>
            </li>
          </ul>
          <ShoppingCartIcon
            color={background ? 'black' : 'white'}
            style={{ marginRight: 15 }}
          />
          <SearchIcon
            color={background ? 'black' : 'white'}
            style={{ marginRight: 15 }}
          />

          <div className="btn-group" style={{ marginRight: 10 }}>
            <button
              type="button"
              className={
                background
                  ? 'text-dark btn btn-sm m-0 p-0 dropdown-toggle'
                  : 'text-white btn btn-sm m-0 p-0 dropdown-toggle'
              }
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <EarthIcon color={background ? 'black' : 'white'} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button className="dropdown-item" type="button">
                  Action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Another action
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Something else here
                </button>
              </li>
            </ul>
          </div>
          <UserIcon
            color={background ? 'black' : 'white'}
            style={{ marginRight: 10 }}
          />
        </div>
      </div>
    </nav>
  );
}
