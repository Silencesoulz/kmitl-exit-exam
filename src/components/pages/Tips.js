import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import SecondTips from './SecondTips'

function Tips() {
  return (    
<Carousel variant='dark'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/Page1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5></h5>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/Page2.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5></h5>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/Page3.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5></h5>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* //waiting for nextpage */}
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/Page4.png"
      alt="Fourth slide"
    />
    <Carousel.Caption>
      <h5></h5>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/Page5.png"
      alt="Fifth slide"
    />
    <Carousel.Caption>
      <h5></h5>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/Page6.png"
      alt="Sixth slide"
    />
    <Carousel.Caption>
      <h5></h5>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/Page7.png"
      alt="Seventh slide"
    />
    <Carousel.Caption>
      <h5></h5>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/Page8.png"
      alt="Eighth slide"
    />
    <Carousel.Caption>
      <h5></h5>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  )
 
}

export default Tips
