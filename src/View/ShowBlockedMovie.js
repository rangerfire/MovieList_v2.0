import React from 'react';

const imgBaseUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w300';

const ShowBlockedMovie = (props) => {
    const movieData = props.movieData;

    const handleDelete = () => {
        props.deleteOneBlockedMovie(movieData);
    }

    const handleLike = () => {
        // props.deleteOneBlockedMovie(movieData);
        props.addOneLikedMovie(movieData);   
    }


    const imgUrl = ''.concat(imgBaseUrl, imgSize, movieData.poster_path);
    return (
        <div className="singleBlockedMovie">
            <img src={imgUrl} alt={movieData.id} />
            <div className="LBoperator">
                <img src="./img/delete_icon.png" alt="delete icon" onClick={handleDelete}/>
                <img src="./img/like_icon.png" alt="like icon" onClick={handleLike}/>
                <img src="./img/ellipsis_icon.png" alt="ellipsis icon"/>
            </div>
            
        </div>
    );
}

export default ShowBlockedMovie;