import React from 'react';
import Image1 from '../../Images/identifletters.jpg';
// import Image2 from '../../Images/sunglasses.svg';

export default function Item() {
  return (
    <>
      <section>
        <div className="container-fluid mt-4">
          <div className="row justify-content-center">
            <div className="col-5">
              <div>
                <img src={Image1} className="w-100" alt="item" />
              </div>
            </div>
            <div className="col-5 d-flex align-items-center justify-content-center">
              <h1 className="text-secondary" style={{ fontSize: 50 }}>
                Optical
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="me-2 me-md-5 mt-2">
            <div className="dropdown">
              <button
                className="btn border dropdown-toggle"
                type="button"
                id="genderDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gender
              </button>
              <ul className="dropdown-menu px-2" aria-labelledby="genderDropdown">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="male"
                  />
                  <label className="form-check-label" htmlhtmlFor="male">
                    Male
                  </label>
                </div>
              </ul>
            </div>
          </div>

          <div className="me-2 me-md-5 mt-2">
            <div className="dropdown">
              <button
                className="btn border dropdown-toggle"
                type="button"
                id="genderDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Frame Type
              </button>
              <ul className="dropdown-menu px-2" aria-labelledby="genderDropdown">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="male"
                  />
                  <label className="form-check-label" htmlhtmlFor="male">
                    Male
                  </label>
                </div>
              </ul>
            </div>
          </div>

          <div className="me-2 me-md-5 mt-2">
            <div className="dropdown">
              <button
                className="btn border dropdown-toggle"
                type="button"
                id="genderDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shape
              </button>
              <ul className="dropdown-menu px-2" aria-labelledby="genderDropdown">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="male"
                  />
                  <label className="form-check-label" htmlhtmlFor="male">
                    Male
                  </label>
                </div>
              </ul>
            </div>
          </div>

          <div className="me-2 me-md-5 mt-2">
            <div className="dropdown">
              <button
                className="btn border dropdown-toggle"
                type="button"
                id="genderDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Frame Color
              </button>
              <ul className="dropdown-menu px-2" aria-labelledby="genderDropdown">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="male"
                  />
                  <label className="form-check-label" htmlhtmlFor="male">
                    Male
                  </label>
                </div>
              </ul>
            </div>
          </div>

          <div className="me-2 me-md-5 mt-2">
            <div className="dropdown">
              <button
                className="btn border dropdown-toggle"
                type="button"
                id="genderDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Frame Material
              </button>
              <ul className="dropdown-menu px-2" aria-labelledby="genderDropdown">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="male"
                  />
                  <label className="form-check-label" htmlhtmlFor="male">
                    Male
                  </label>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="row">
          <div className="mx-2 col-2 home-best-items py-2">
            <img
              src="https://mhsoptics.be/img/products/product-undefined-1649092183266-1.jpeg"
              className="m-0 p-3 col-12 border item-image"
              alt=""
            />
            <p className="text-center p-0 m-0">test</p>
            <p className="text-success text-center fw-bold p-0 m-0">32.99$</p>
          </div>
        </div>
      </section>

    </>
  );
}
