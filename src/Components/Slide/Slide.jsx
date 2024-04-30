import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import './Slide.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import maduro1 from '../../assets/maduro1.jpg'
import maduro2 from '../../assets/maduro2.jpg'
import maduro3 from '../../assets/maduro3.jpg'
import { MDBTypography } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:'90vh'}}
          className="d-block w-100"
          src={maduro1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1 className='text-white'>Bem vindo a Maduro Empreedimentos</h1>
          <p className='text-white'>Alguns Reis e Rainhas nao vestem Coroas, mas sim a Maduro</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'90vh'}}
          className="d-block w-100"
          src={maduro2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1 className='text-white'>Teu estilo deve ser com a Maduro</h1>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'90vh'}}
          className="d-block w-100"
          src={maduro3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1 className='text-white'>A sua coroa esta na Maduro</h1>
          <p className='text-white'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  );
}