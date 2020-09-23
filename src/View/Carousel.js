import React, { useEffect } from "react"
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel'
import "../Styles/Carousel.css"
const pageBaseURL = 'https://api.themoviedb.org/3/';
const action = 'movie/popular?api_key=';
const JacksonApiKey = '9d3badb0c8d83a0bce6bf3cf96e3cc60';
const lang = '&language=en-US';
const page = '&page=1';
const url = ''.concat(pageBaseURL,action,JacksonApiKey,lang,page);
console.log(url)
const imgBaseUrl = 'https://image.tmdb.org/t/p/'
const imgSize = 'w300'

const imgurl =''.concat(imgBaseUrl,imgSize);

const Caro = () =>{
    const [index, setIndex] = React.useState(0);
    const [planets,setPlanets]= React.useState({});
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);};

    async function fetchData() {
      const res=axios.get(url)
        .then(res => res.data.results)
        .then(res=>res.slice(19))
        .then(res => setPlanets(res))
    }
    console.log(planets[0])
    //console.log(planets[0].poster_path)
    useEffect(() => {
      fetchData();
    });

    return (
      <React.Fragment>
      <div>{JSON.stringify(planets)}</div>
      <div></div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            img
            src="./logo512.png"
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
      </React.Fragment>
    );
}

export default Caro