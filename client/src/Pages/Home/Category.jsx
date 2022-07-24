import React from 'react';

export default function Category() {
  return (
    <section className="container-fluid mt-2">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 text-center">
          <h1 style={{ fontSize: 30, fontWeight: 'bold' }}>
            Buy glasses at MSH Optics
          </h1>
          <p className="">
            Rich in style and well-crafted, zeelool optical has helped 500,000
            families to see
            <br /> clearly, and claim their fashion statement at the same time.
          </p>
        </div>

        <div className="col-5 col-md-2 p-1 m-0">
          <img
            src="https://statinfer.com/wp-content/uploads/dummy-user.png"
            className="m-0 p-0 col-12 border category-image"
            alt=""
          />
          <p className="text-center">Men</p>
        </div>
      </div>
    </section>
  );
}
