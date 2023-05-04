import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Corousel.css'


function Corousel() {
  return (
    <>

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3076514/pexels-photo-3076514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
          <h3 className='CorouselCaption'>“If you want something you've <span className="highlight"> never </span> had, you must be willing to do something you've <span className="highlight"> never </span> done.”</h3>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

          <h3 className='CorouselCaption'>“When I <span className="highlight"> feel tired </span>, I just think about how great I will feel once I finally reach my goal.”</h3>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1092883/pexels-photo-1092883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

          <h3 className='CorouselCaption'>“The only <span className="highlight"> bad workout </span> is the one that didn't happen”</h3>

      </Carousel.Item>
    </Carousel>

    </>
  );
}


export default Corousel;