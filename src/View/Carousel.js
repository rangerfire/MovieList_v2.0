import React from "react"
import Carousel from 'react-bootstrap/Carousel'
import "../Styles/Carousel.css"
export default function(){
    const [index, setIndex] = React.useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            img
            src="./logo192.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./logo512.png"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}