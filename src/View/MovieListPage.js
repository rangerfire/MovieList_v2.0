import React from 'react';
import axios from 'axios';
import ShowMovies from './ShowMovies';
import "../Styles/MovieListPage.css";

import { connect } from 'react-redux';
import Selector from '../Selector';
import { actions } from '../ActionCreator';

// const pageBaseURL = 'https://api.themoviedb.org/3/';
// const action = 'movie/popular?api_key=';
// const ApiKey = '43d2c15376ca311ed501203d6c7cf47f';
// const lang = '&language=en-US';
// const page = '&page=1';
// const url = ''.concat(pageBaseURL,action,ApiKey,lang,page);;
const preURL = 'https://api.themoviedb.org/3/movie/popular?api_key=43d2c15376ca311ed501203d6c7cf47f&language=en-US&page=';

class movieListPage extends React.Component {

    componentDidMount = () => {
        
        axios.get(url)
        .then( res => {
            const response = res.data.results.slice();
            for(let i=0;i<20;i++) 
                this.props.addOneMovie(response[i]);
        });
    } 

    prevPageHandeler = () => {
        if(page_1 > 0) {
            page_1 -= 1;
       
        }
    

    }

    nextPageHandeler = () => {
        page_1 += 1;
        axios.get(url_1)
        .then(res => {
            const response_1 = res.data.results.slice();
            for(let i=0;i<20;i++) 
                this.props.addOneMovie(response_1[i]);
               
        });
    }


    render() {
        const movieList = this.props.movieList.map( movie => 
            <ShowMovies 
                key={movie.id} movieData={movie}
                deleteOneListedMovie={this.props.deleteOneListedMovie}
                addOneLikedMovie={this.props.addOneLikedMovie}
                addOneBlockedMovie={this.props.addOneBlockedMovie}
                addOnePage={this.props.addOnePage}
            />
        );
        return (
            <div className="movieListPage">
                <div className="sortArea">
                    <button>Title</button>
                    <button>Vote Count</button>
                    <button>Average Score</button>
                    <button>Release Date</button>
                </div>
                <p></p>
                <div className="line"></div>
                <div className="paginationArea">
                    <button onClick={prevPageHandeler}>Prev</button>
                    <p className="pageText">1/300</p>
                    <button onClick={nextPageHandeler}>Next</button>
                </div>
                <div className="line"></div>
                <div className="ShowMovies">
                    {movieList}
                </div>
            </div>
        );       
    }
}

const mapStateToProps = (state) => ({
    LikedMovies: Selector.LikedMoviesSelector(state),
    BlockedMovies: Selector.BlockedMoviesSelector(state),
    // movieList: Selector.ListedMoviesSelector(state),
    // pageList: Selector.PageListSelector(state)
    Page: Selector.PageSelector(state)
    
});

const mapDispatchToProps = (dispatch) => ({
    addOneLikedMovie: (movieData) => dispatch( actions.addOneLikedMovie(movieData) ),
    addOneBlockedMovie: (movieData) => dispatch ( actions.addOneBlockedMovie(movieData) ),
    addOneMovie: (movieData) => dispatch( actions.addOneMovie(movieData) ),
    deleteOneLikedMovie: (movieData) => dispatch( actions.deleteOneLikedMovie(movieData) ),
    deleteOneBlockedMovie: (movieData) => dispatch( actions.deleteOneBlockedMovie(movieData) ),
    deleteOneListedMovie: (movieData) => dispatch( actions.deleteOneListedMovie(movieData) ),
    addOnePage: (moviePage) => dispatch(actions.addOnePage(moviePage) )
});

export default connect(mapStateToProps, mapDispatchToProps)(movieListPage);

