import React from 'react';

const imgBaseUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w300';

const ShowLikedMovie = (props) => {
    const movieData = props.movieData;
    
    const handleDelete = () => {
        props.deleteOneLikedMovie(movieData);
    }

    const handleBlock = () => {
        // props.deleteOneLikedMovie(movieData);
        props.addOneBlockedMovie(movieData);   
    }

    const imgUrl = ''.concat(imgBaseUrl, imgSize, movieData.poster_path);
    return (
        <div className="singleLikedMovie">
            <img src={imgUrl} alt={movieData.id} />
            <div className="LBoperator">
                <img src="./img/delete_icon.png" alt="delete icon" onClick={handleDelete}/>
                <img src="./img/block_icon.png" alt="block icon" onClick={handleBlock}/>
                <img src="./img/ellipsis_icon.png" alt="ellipsis icon"/>
            </div>
        </div>
    );
}

export default ShowLikedMovie;