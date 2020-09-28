import React, { useEffect } from "react"
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel'
import "../Styles/Carousel.css"
import Constants from '../Constants';

// preURL => 'https://api.themoviedb.org/3/movie/popular?api_key=43d2c15376ca311ed501203d6c7cf47f&language=en-US&page='
const preURL = Constants.PREURL;
const url = ''.concat(preURL, 1);
const imgBaseUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w500'
const imgurl =''.concat(imgBaseUrl,imgSize);

const Caro = () =>{
    const [index, setIndex] = React.useState(0);
    // const [planets,setPlanets]= React.useState([]);
    const [CaroItem, setCaroItem] = React.useState([]);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);};

    const fetchData = () => {
      axios.get(url)
        .then(res => {
          const Item = res.data.results.slice(15).map( mapItem => 
            <Carousel.Item key={mapItem.id}>
              <img
                className="slidePicture"
                src={''.concat(imgurl, mapItem.poster_path)}
                alt="slide pic"
              />
            </Carousel.Item>
          );
          setCaroItem(Item);
        });
    }

    useEffect( () => {
      fetchData();
    }, [] );


    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {CaroItem}
      </Carousel>
    );
}

export default Caro;
