import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../style/Tips.css'

function Tips() {



  return (
    
    <div className="Tips">
      <div>
        <br/><br/>
        <h1 className="tipsHeader">เทคนิคพิชิต EXIT EXAM</h1>
        <br/>
      </div>
    <Carousel 
    variant="dark"
    nextLabel=""
    prevLabel=""
    >
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Page1.png"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Page2.png"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Page3.png"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Page4.png"
          alt="Fourth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Page5.png"
          alt="Fifth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Page6.png"
          alt="Sixth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Page7.png"
          alt="Seventh slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Page8.png"
          alt="Eighth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Page9.png"
          alt="Nineth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Page10.png"
          alt="Tenth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  
  )

}

export default Tips
