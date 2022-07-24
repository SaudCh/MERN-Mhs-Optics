import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import ViewMoreCard from '../../Components/Home/ViewMoreCard';
import useWindowDimensions from '../../Components/Hooks/useWindowDimensions';
import { ChevronLeftIcon, ChevronRightIcon } from '../../Components/icons';

function Items() {
  const item = 5;
  const { width } = useWindowDimensions();
  const visibleSlides = width > 992 ? 4 : width > 768 ? 3 : width > 576 ? 2 : 1;
  return (
    <section className="container-fluid mt-2">
      <div className="row justify-content-center position-relative">
        <div className="col-12 text-center">
          <h1 style={{ fontSize: 30, fontWeight: 'bold' }}>Our Best Items</h1>
        </div>
        <CarouselProvider
          className="relative mt-8"
          isIntrinsicHeight={true}
          naturalSlideWidth={250}
          totalSlides={item}
          visibleSlides={visibleSlides}
        >
          {visibleSlides < item && (
            <ButtonBack className="home-item-chevron home-item-chevron-left">
              <ChevronLeftIcon color="black" />
            </ButtonBack>
          )}
          <Slider>
            {Array.from({ length: item }).map((_, index) => (
              <Slide key={index}>
                <div className="mx-2 home-best-items py-2">
                  <img
                    src="https://mhsoptics.be/img/products/product-undefined-1649092183266-1.jpeg"
                    className="m-0 p-3 col-12 border item-image"
                    alt=""
                  />
                  <p className="text-center p-0 m-0">test</p>
                  <p className="text-success text-center fw-bold p-0 m-0">32.99$</p>
                </div>
              </Slide>
            ))}
            <Slide className=" px-4" index={item}>
              <ViewMoreCard subCategory={item._id} />
            </Slide>
          </Slider>
          {visibleSlides < item && (
            <ButtonNext className="home-item-chevron home-item-chevron-right">
              <ChevronRightIcon color="black" />
            </ButtonNext>
          )}
        </CarouselProvider>
      </div>
    </section>
  );
}

export default Items;
