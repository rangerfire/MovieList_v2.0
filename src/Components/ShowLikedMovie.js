import { useState, useRef } from "react";
import React from 'react';

const imgBaseUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w300';

const ShowLikedMovie = (props) => {
    const movieData = props.movieData;
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imgLoaded = () => {
        counter.current ++;
        if(counter.current >= 1)
            setLoading(false);
    }

    const handleDelete = () => {
        props.deleteOneLikedMovie(movieData);
    }

    const handleBlock = () => {
        props.addOneBlockedMovie(movieData);   
    }

    const imgUrl = ''.concat(imgBaseUrl, imgSize, movieData.poster_path);
    return (
        <div className="singleLikedMovie">
            <img src='./img/loading.gif' alt="loading img" style={{display : loading ? "inline" : "none"}} />
            <img src={imgUrl} alt={movieData.id} onLoad={imgLoaded} style={{display : loading ? "none" : "inline"}} />
            <div className="LBoperator">
                <img src="./img/delete_icon.png" alt="delete icon" onClick={handleDelete}/>
                <img src="./img/block_icon.png" alt="block icon" onClick={handleBlock}/>
                <img src="./img/ellipsis_icon.png" alt="ellipsis icon"/>
            </div>
        </div>
    );
}

export default ShowLikedMovie;