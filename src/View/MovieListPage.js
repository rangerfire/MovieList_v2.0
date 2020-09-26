import React from 'react';
import axios from 'axios';
import ShowMovies from './ShowMovies';
import "../Styles/MovieListPage.css";

import { connect } from 'react-redux';
import Selector from '../Selector';
import { actions } from '../ActionCreator';
import Pagination from '../Components/Pagination';
import { act } from 'react-dom/test-utils';
import Constants from '../Constants';

// const pageBaseURL = 'https://api.themoviedb.org/3/';
// const action = 'movie/popular?api_key=';
// const ApiKey = '43d2c15376ca311ed501203d6c7cf47f';
// const lang = '&language=en-US';
// const page = '&page=1';
// const url = ''.concat(pageBaseURL,action,ApiKey,lang,page);;
// const preURL = 'https://api.themoviedb.org/3/movie/popular?api_key=43d2c15376ca311ed501203d6c7cf47f&language=en-US&page=';
const preURL = Constants.PREURL;

class movieListPage extends React.Component {

    check = (pageNumer) => {
        const MovieSet = this.props.MovieSet;
        const finder = (findItem) => {
            return findItem.pageNumber === pageNumer;
        }
        if( MovieSet.findIndex(finder) >= 0 )
            return true;
        return false;
    }

    componentDidMount = () => {
        //only if this page not exist, send ajax call
        if( !this.check(this.props.Page) ) {
            const url = ''.concat(preURL, this.props.Page);
            axios.get(url)
            .then( res => {
                const resPage = res.data.page;
                const resResults = res.data.results;
                console.log(resPage);               //number
                console.log(resResults);            //array
                // console.log( this.check(resPage) );
                this.props.addOnePageMovies(resPage, resResults);
                // console.log( this.check(resPage) );            
            });
        }
    } 

    render() {
        const Page = this.props.Page;
        const finder = (findItem) => {
            return findItem.pageNumber === Page;
        }
        const index = this.props.MovieSet.findIndex(finder);
        // console.log(index, ", ", this.props.MovieSet);
        const movieList = index >=0 && this.props.MovieSet[index].onePageMovies.map( movie => 
            <ShowMovies 
                key={movie.id} movieData={movie}
                addOneLikedMovie={this.props.addOneLikedMovie}
                addOneBlockedMovie={this.props.addOneBlockedMovie}                
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
                <Pagination 
                    check={this.check} 
                    Page={this.props.Page}  
                    MovieSet={this.props.MovieSet}
                    changePage={this.props.changePage}
                    addOnePageMovies={this.props.addOnePageMovies}
                />
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
    Page: Selector.PageSelector(state),
    MovieSet: Selector.MovieSetSelector(state)
    
});

const mapDispatchToProps = (dispatch) => ({
    addOneLikedMovie: (movieData) => dispatch( actions.addOneLikedMovie(movieData) ),
    addOneBlockedMovie: (movieData) => dispatch ( actions.addOneBlockedMovie(movieData) ),
    // addOneMovie: (movieData) => dispatch( actions.addOneMovie(movieData) ),
    deleteOneLikedMovie: (movieData) => dispatch( actions.deleteOneLikedMovie(movieData) ),
    deleteOneBlockedMovie: (movieData) => dispatch( actions.deleteOneBlockedMovie(movieData) ),
    // deleteOneListedMovie: (movieData) => dispatch( actions.deleteOneListedMovie(movieData) ),
    changePage: (page) => dispatch( actions.changePage(page) ),
    addOnePageMovies: (pageNumber, onePageMovies) => dispatch(actions.addOnePageMovies(pageNumber, onePageMovies) )
});

export default connect(mapStateToProps, mapDispatchToProps)(movieListPage);

