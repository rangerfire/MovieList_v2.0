import React from 'react';
import "../Styles/MovieListPage.css";

const imgBaseUrl = 'https://image.tmdb.org/t/p/';
const imgSize = 'w300';

const ShowMovies = (props) => {
    const movieData = props.movieData;
    const imgUrl = ''.concat(imgBaseUrl, imgSize, movieData.poster_path);
    const title = ''.concat(movieData.original_title);
    const vote_count = ''.concat(movieData.vote_count);
    const vote_average = ''.concat(movieData.vote_average);
    const release_date = ''.concat(movieData.release_date);
    const overview = ''.concat(movieData.overview);

    return (
        <div className="showSingleMovie">
            <img src={imgUrl} alt={movieData.id} />
            <div className="operator">
                <img src="./like.png" alt="like icon" />
                <img src="./block.png" alt="block icon" />
            </div>
            <div>
                <p className="title">{title}</p>
                <p className="release_date">{release_date}</p>
                <div className="count_ave">
                    <p className="vote_count">{vote_count}</p>
                    <p className="vote_average">{vote_average}</p>
                </div>
                <p className="overview">{overview}</p>
            </div>
        </div>
    );
}

export default ShowMovies;