import React from 'react';
import { useState, useEffect, useMemo } from 'react'
import ajj from '../FrontEnd/img/cropped-banner11.jpeg'
import ajjj from '../FrontEnd/img/ajjj.jpg'
import ajjjj from '../FrontEnd/img/ajjjj.jpg'
import chemical from '../FrontEnd/img/pngegg.png'
import tool from '../FrontEnd/img/mie.png'
import cq5dam from '../FrontEnd/img/cq5dam.web.1280.1280.png'
import '../FrontEnd/css/home.css'
import { Modal, Button, Form, Card, Carousel, CarouselItem, CarouselProps } from 'react-bootstrap'

const Home = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/*  <div className='container'>
        <div className='row mb-3'>
          <div className='sild-home'>
            <img
              className=" w-100 "
              src={ajj}
              alt="First slide"
            />
          </div>
          <div className='col-9 col-md-9  mb-3 sild-home'>
            <div className='slide-page'>
              <Carousel className='' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className=" d-block w-100"
                    src={ajj}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ajjj}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={ajjjj}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>  */}
      <div className='container'>
        <div className='row  mb-3'>
          <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end'  >
            <div className='card cradhome'>
              <div className="card-body">

                <img
                  className="d-block w-100"
                  src={chemical}
                />
                <h5>เบิกสารเคมี</h5>
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <div className='card cradhome'>
              <div className="card-body">
                <img
                  className="d-block w-100"
                  src={tool}
                />
                <h5 >ยืมอุปกรณ์</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-3'>
            <div className='card '>
              <div className="card-body">
                <img
                  className="d-block w-100"
                  src={cq5dam}
                />

              </div>
            </div>
          </div>
          <div className='col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-3'>
            <div className='card '>
              <div className="card-body">
                <img
                  className="d-block w-100"
                  src={cq5dam}
                />

              </div>
            </div>
          </div>
          <div className='col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-3'>
            <div className='card '>
              <div className="card-body">
                <img
                  className="d-block w-100"
                  src={cq5dam}
                />

              </div>
            </div>
          </div>
          <div className='col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-3'>
            <div className='card '>
              <div className="card-body">
                <img
                  className="d-block w-100"
                  src={cq5dam}
                />

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-3'>
            <div className='card '>
              <div className="card-body">
                <img
                  className="d-block w-100"
                  src={cq5dam}
                />

              </div>
            </div>
          </div>
          <div className='col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-3'>
            <div className='card '>
              <div className="card-body">
                <img
                  className="d-block w-100"
                  src={cq5dam}
                />

              </div>
            </div>
          </div>
          <div className='col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-3'>
            <div className='card '>
              <div className="card-body">
                <img
                  className="d-block w-100"
                  src={cq5dam}
                />

              </div>
            </div>
          </div>
          <div className='col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-3'>
            <div className='card '>
              <div className="card-body">
                <img
                  className="d-block w-100"
                  src={cq5dam}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );

};

export default Home;
