import React from 'react';

export default function Background() {
  return (
    <section className="home-top-background">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <span
              className="text-white"
              style={{ fontSize: 50, fontWeight: '400' }}
            >
              We frame your
            </span>
            <br />
            <span
              className="text-white"
              style={{ fontSize: '100px', fontWeight: '700' }}
            >
              {' '}
              World
            </span>
            <br />
            <span className="text-white" style={{ fontSize: 25 }}>
              CHANGE THE WAY YOU SEE THE LIFE.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
