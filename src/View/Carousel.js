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
const imgBaseUrl = 'https://image.tmdb.org/t/p/'
const imgSize = 'w500'
const imgurl =''.concat(imgBaseUrl,imgSize);


const Caro = () =>{
    const [index, setIndex] = React.useState(0);
    const [planets,setPlanets]= React.useState({});
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);};

    async function fetchData() {
      const res=axios.get(url)
        .then(res => res.data.results)
        .then(res=>res.slice(15))
        .then(res => setPlanets(res))
    }
    //const test1 =''.concat(imgurl, planets[0]!==undefined && planets[0].poster_path)
    //const test2 =''.concat(imgurl, planets[1]!==undefined && planets[1].poster_path)
    useEffect(() => {
      fetchData();
    });

    return (
      <React.Fragment>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
           <img
             className="d-block w-100"
             src={''.concat(imgurl, planets[0]!==undefined && planets[0].poster_path)}
             alt="first slide"
           />
           <Carousel.Caption>
             <h3>{planets[0]!==undefined&&planets[0].title}</h3>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={''.concat(imgurl, planets[1]!==undefined && planets[1].poster_path)}
             alt="Second slide"
           />
  
           <Carousel.Caption>
             <h3>{planets[1]!==undefined&&planets[1].title}</h3>

           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={''.concat(imgurl, planets[2]!==undefined && planets[2].poster_path)}
             alt="first slide"
           />
           <Carousel.Caption>
             <h3>{planets[2]!==undefined&&planets[2].title}</h3>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={''.concat(imgurl, planets[3]!==undefined && planets[3].poster_path)}
             alt="first slide"
           />
           <Carousel.Caption>
             <h3>{planets[3]!==undefined&&planets[3].title}</h3>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img
             className="d-block w-100"
             src={''.concat(imgurl, planets[4]!==undefined && planets[4].poster_path)}
             alt="first slide"
           />
           <Carousel.Caption>
             <h3>{planets[4]!==undefined&&planets[4].title}</h3>
           </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
      </React.Fragment>
    );
}

export default Caro