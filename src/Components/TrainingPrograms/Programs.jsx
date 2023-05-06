

import React, { useRef, useEffect } from 'react';
import './Programs.css'
let Products = [
    {
        url : "https://images.pexels.com/photos/6551174/pexels-photo-6551174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Roping'
    }, 
    {
        url : "https://images.pexels.com/photos/13106586/pexels-photo-13106586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Cycling'
    }, 
    {
        url : "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Muscle Exercise'
    },
    
    {
        url : "https://images.pexels.com/photos/4662349/pexels-photo-4662349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Leg Workout'
    }, 
    {
        url : "https://images.pexels.com/photos/13106633/pexels-photo-13106633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Weight Lifting'
    }, 

    {
        url : "https://images.pexels.com/photos/4162442/pexels-photo-4162442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Body Building'
    }, 

    {
        url : "https://images.pexels.com/photos/6454070/pexels-photo-6454070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Aerobics'
    }, 
    ]
    function Programs() {
        const box = useRef(null);
      

      
        const handleScroll = () => {
          const scrollPosition = box.current.scrollLeft;
          const containerWidth = box.current.clientWidth;
          const totalWidth = box.current.scrollWidth;
      
          const newScrollPosition =
            scrollPosition + containerWidth >= totalWidth ? 0 : scrollPosition;
      
          box.current.scrollLeft = newScrollPosition;
        };
      
        useEffect(() => {
          const intervalId = setInterval(handleScroll, 3000);
      
          return () => clearInterval(intervalId);
        }, []);
      
        return (
          <>
            <div className="Scroller">
              <h2 className="header2">Our Training Facilities</h2>
      
              <div className="Product-container" ref={box}>
                {Products.map((data) => (
                  <div key={data.id} className="product-cards">
                    <div className="product-images">
                      <img src={data.url} alt={data.caption} className="products" />
                    </div>
                    <div>
                      <h3 className="caption">{data.caption}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
           
          </>
        );
      }
      
      export default Programs;