import React, { Component } from 'react';
import { useState } from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import { Items } from './CarouselItem.js';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
          {Items.map((item, index) => {
              return(
                <Carousel.Item className="carouselInner" key={index}>
                    <img
                        className={item.img.cName}
                        src={`${item.img.src}`}
                        alt={item.img.alt}
                    />
                    <Carousel.Caption className="carouselCaption">
                        <h1 className={item.title.cName}>{item.title.text}</h1>
                        <p className={item.discount.cName}>{item.discount.text}</p>
                        <a href="#" className={item.button.cName}>{item.button.text}</a>
                    </Carousel.Caption>
                </Carousel.Item>
              )
          })}
      </Carousel>
    );
  }
  
  export default ControlledCarousel;