import React from 'react'
// import { Link } from 'react-router-dom'
import Header from './Header'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
      <Header/>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src="https://img.freepik.com/premium-vector/bio-healthy-food-banner_23-2148995200.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src="https://img.freepik.com/premium-vector/bio-healthy-food-banner_23-2148995200.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src="https://img.freepik.com/premium-vector/bio-healthy-food-banner_23-2148995200.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
        <h1>Popular Products</h1>
        
      </div>

    </div>
  )
}

export default Home
