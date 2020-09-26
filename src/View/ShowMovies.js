import React from 'react';
import "../Styles/MovieListPage.css";

const imgBaseUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w300';

const ShowMovies = (props) => {
    const movieData = props.movieData;
    const imgUrl = ''.concat(imgBaseUrl, imgSize, movieData.poster_path);
    const title = ''.concat(movieData.title);
    const vote_count = ''.concat(movieData.vote_count);
    const vote_average = ''.concat(movieData.vote_average);
    const release_date = ''.concat(movieData.release_date);
    const overview = ''.concat(movieData.overview);

    const handleLike = () => {
        props.addOneLikedMovie(movieData);   
    }

    const handleBlock = () => {
        props.deleteOneListedMovie(movieData);
        props.addOneBlockedMovie(movieData);   
    }

    return (
        <div className="showSingleMovie">
            <img src={imgUrl} alt={movieData.id} />
            <div className="operator">
                <img src="./img/like_icon.png" alt="like icon" onClick={handleLike} />
                <img src="./img/block_icon.png" alt="block icon" onClick={handleBlock} />
            </div>
            <div className="movieInfo">
                <p className="title">{title}</p>
                <p className="release_date">Release Date: {release_date}</p>
                <div className="count_ave">
                    <p className="vote_count">Vote Count: {vote_count}</p>
                    <p className="vote_average">Vore Average: {vote_average}</p>
                </div>
                <p className="overview">{overview}</p>
            </div>
        </div>
    );
}

export default ShowMovies;