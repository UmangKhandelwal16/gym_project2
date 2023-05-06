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
          src="https://wallpapercave.com/wp/wp7661163.jpg"
          alt="First slide"
        />
          <h3 className='CorouselCaption'>“Take care of your <span className="highlight"> body </span> it's <br/>the only place<br/> you have to <span className="highlight"> Live </span> .”</h3>
          
      </Carousel.Item>

     
    
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp5901457.jpg"
          alt="Second slide"
        />
          <h3 className='CorouselCaption'>“The only <span className="highlight"> bad workout </span> is the one that didn't happen”</h3>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/1245132.jpg"
          alt="Third slide"/>
          <h3 className='CorouselCaption'>“The only <span className="highlight"> bad workout </span> is the one that didn't happen”</h3>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blog.telewellnessmd.com/hs-fs/hubfs/Blog%20Images/buy%20cjc%20ipamorelin%20online.jpg?width=1000&name=buy%20cjc%20ipamorelin%20online.jpg"
          alt="Third slide"/>
          <h3 className='CorouselCaption'>“The only <span className="highlight"><br/> bad workout<br/>  </span> is the one that<br/>  didn't happen”</h3>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://livefitgym.com/wp-content/uploads/2019/12/LFG_Main_Page_Panel2-scaled.jpg"
          alt="Third slide"/>
         <h3 className='CorouselCaption'>“Take care of your <span className="highlight"> body </span> it's <br/> the only place <br/>ou have to <span className="highlight"> Live </span> .”</h3>
          
      </Carousel.Item>

    


    </Carousel>

    </>
  );
}


export default Corousel;



