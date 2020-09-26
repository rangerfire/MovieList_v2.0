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
                this.props.addOnePageMovies(resPage, resResults);
            });
        }
    } 

    render() {
        const Page = this.props.Page;
        const finder = (findItem) => {
            return findItem.pageNumber === Page;
        }
        const index = this.props.MovieSet.findIndex(finder);
        const movieList = index >=0 && this.props.MovieSet[index].onePageMovies.map( movie => 
            <ShowMovies 
                key={movie.id} movieData={movie} BlockedMovies={this.props.BlockedMovies}
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
                <hr />
                <Pagination 
                    check={this.check} 
                    Page={this.props.Page}  
                    MovieSet={this.props.MovieSet}
                    changePage={this.props.changePage}
                    addOnePageMovies={this.props.addOnePageMovies}
                />
                <hr />
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
    Page: Selector.PageSelector(state),
    MovieSet: Selector.MovieSetSelector(state)
    
});

const mapDispatchToProps = (dispatch) => ({
    addOneLikedMovie: (movieData) => dispatch( actions.addOneLikedMovie(movieData) ),
    addOneBlockedMovie: (movieData) => dispatch ( actions.addOneBlockedMovie(movieData) ),
    deleteOneLikedMovie: (movieData) => dispatch( actions.deleteOneLikedMovie(movieData) ),
    deleteOneBlockedMovie: (movieData) => dispatch( actions.deleteOneBlockedMovie(movieData) ),
    changePage: (page) => dispatch( actions.changePage(page) ),
    addOnePageMovies: (pageNumber, onePageMovies) => dispatch(actions.addOnePageMovies(pageNumber, onePageMovies) )
});

export default connect(mapStateToProps, mapDispatchToProps)(movieListPage);

