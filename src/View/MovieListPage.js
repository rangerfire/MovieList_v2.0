import React from 'react';
import axios from 'axios';
import ShowMovies from './ShowMovies';
import SortArea from '../Components/SortArea';
import "../Styles/MovieListPage.css";

import { connect } from 'react-redux';
import Selector from '../Selector';
import { actions } from '../ActionCreator';
import Pagination from '../Components/Pagination';
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
        // this.props.changeShowType(0);
    } 

    render() {
        let movieList = [];
        const Page = this.props.Page;
        const finder = (findItem) => {
            return findItem.pageNumber === Page;
        }
        // type 0 => show origin data
        if( this.props.ShowType === 0 ) {
            const index = this.props.MovieSet.findIndex(finder);
            movieList = index >=0 && this.props.MovieSet[index].onePageMovies.map( movie => 
                <ShowMovies 
                    key={movie.id} movieData={movie} BlockedMovies={this.props.BlockedMovies}
                    addOneLikedMovie={this.props.addOneLikedMovie}
                    addOneBlockedMovie={this.props.addOneBlockedMovie}                
                />
            );
        }
        // type 1 => sort by title
        else if( this.props.ShowType === 1 ) {
            let MovieSet = this.props.MovieSet_Title;
            if( this.props.SortOrder === Constants.ASC_OEDER ) {
                const index = MovieSet.findIndex(finder);
                movieList = index >=0 && MovieSet[index].onePageMovies.map( movie => 
                    <ShowMovies 
                        key={movie.id} movieData={movie} BlockedMovies={this.props.BlockedMovies}
                        addOneLikedMovie={this.props.addOneLikedMovie}
                        addOneBlockedMovie={this.props.addOneBlockedMovie}                
                    />
                );
            }
            else {
                const index = MovieSet.findIndex(finder);
                const realPage = Constants.TOTAL_PAGE - index - 1;

                movieList = index >=0 && MovieSet[realPage].onePageMovies.slice().reverse().map( movie => 
                    <ShowMovies 
                        key={movie.id} movieData={movie} BlockedMovies={this.props.BlockedMovies}
                        addOneLikedMovie={this.props.addOneLikedMovie}
                        addOneBlockedMovie={this.props.addOneBlockedMovie}                
                    />
                );
            } 
        }
        // type 2 => sort by vote count
        else if( this.props.ShowType === 2 ) {
            let MovieSet = this.props.MovieSet_VoteCount;
            if( this.props.SortOrder === Constants.ASC_OEDER ) {
                const index = MovieSet.findIndex(finder);
                movieList = index >=0 && MovieSet[index].onePageMovies.map( movie => 
                    <ShowMovies 
                        key={movie.id} movieData={movie} BlockedMovies={this.props.BlockedMovies}
                        addOneLikedMovie={this.props.addOneLikedMovie}
                        addOneBlockedMovie={this.props.addOneBlockedMovie}                
                    />
                );
            }
            else {
                const index = MovieSet.findIndex(finder);
                const realPage = Constants.TOTAL_PAGE - index - 1;

                movieList = index >=0 && MovieSet[realPage].onePageMovies.slice().reverse().map( movie => 
                    <ShowMovies 
                        key={movie.id} movieData={movie} BlockedMovies={this.props.BlockedMovies}
                        addOneLikedMovie={this.props.addOneLikedMovie}
                        addOneBlockedMovie={this.props.addOneBlockedMovie}                
                    />
                );
            }
        } 
        // type 3 => sort by vote average
        else if( this.props.ShowType === 3 ) {
            let MovieSet = this.props.MovieSet_AverageScore;
            if( this.props.SortOrder === Constants.ASC_OEDER ) {
                const index = MovieSet.findIndex(finder);
                movieList = index >=0 && MovieSet[index].onePageMovies.map( movie => 
                    <ShowMovies 
                        key={movie.id} movieData={movie} BlockedMovies={this.props.BlockedMovies}
                        addOneLikedMovie={this.props.addOneLikedMovie}
                        addOneBlockedMovie={this.props.addOneBlockedMovie}                
                    />
                );
            }
            else {
                const index = MovieSet.findIndex(finder);
                const realPage = Constants.TOTAL_PAGE - index - 1;

                movieList = index >=0 && MovieSet[realPage].onePageMovies.slice().reverse().map( movie => 
                    <ShowMovies 
                        key={movie.id} movieData={movie} BlockedMovies={this.props.BlockedMovies}
                        addOneLikedMovie={this.props.addOneLikedMovie}
                        addOneBlockedMovie={this.props.addOneBlockedMovie}                
                    />
                );
            }
        } 
        // type 4 => sort by release date
        else if( this.props.ShowType === 4 ) {
            let MovieSet = this.props.MovieSet_ReleaseDate;
            if( this.props.SortOrder === Constants.ASC_OEDER ) {
                const index = MovieSet.findIndex(finder);
                movieList = index >=0 && MovieSet[index].onePageMovies.map( movie => 
                    <ShowMovies 
                        key={movie.id} movieData={movie} BlockedMovies={this.props.BlockedMovies}
                        addOneLikedMovie={this.props.addOneLikedMovie}
                        addOneBlockedMovie={this.props.addOneBlockedMovie}                
                    />
                );
            }
            else {
                const index = MovieSet.findIndex(finder);
                const realPage = Constants.TOTAL_PAGE - index - 1;

                movieList = index >=0 && MovieSet[realPage].onePageMovies.slice().reverse().map( movie => 
                    <ShowMovies 
                        key={movie.id} movieData={movie} BlockedMovies={this.props.BlockedMovies}
                        addOneLikedMovie={this.props.addOneLikedMovie}
                        addOneBlockedMovie={this.props.addOneBlockedMovie}                
                    />
                );
            }
        }  
        
        return (
            <div className="movieListPage">
                <SortArea 
                    SortOrder={this.props.SortOrder} ShowType={this.props.ShowType} MovieSet_ReleaseDate={this.props.MovieSet_ReleaseDate}
                    changeOrder={this.props.changeOrder} changeShowType={this.props.changeShowType}
                    fillMovieSetTitle={this.props.fillMovieSetTitle}
                    fillMovieSetVoteCount={this.props.fillMovieSetVoteCount}
                    fillMovieSetAverageScore={this.props.fillMovieSetAverageScore}
                    fillMovieSetReleaseDate={this.props.fillMovieSetReleaseDate}
                />
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
    MovieSet: Selector.MovieSetSelector(state),

    ShowType: Selector.ShowTypeSelector(state),
    SortOrder: Selector.SortOrderSelector(state),
    MovieSet_Title: Selector.MovieSetTitleSelector(state),
    MovieSet_VoteCount: Selector.MovieSetVoteCountSelector(state),
    MovieSet_AverageScore: Selector.MovieSetAverageScoreSelector(state),
    MovieSet_ReleaseDate: Selector.MovieSetReleaseDateSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    addOneLikedMovie: (movieData) => dispatch( actions.addOneLikedMovie(movieData) ),
    addOneBlockedMovie: (movieData) => dispatch ( actions.addOneBlockedMovie(movieData) ),
    deleteOneLikedMovie: (movieData) => dispatch( actions.deleteOneLikedMovie(movieData) ),
    deleteOneBlockedMovie: (movieData) => dispatch( actions.deleteOneBlockedMovie(movieData) ),
    changePage: (page) => dispatch( actions.changePage(page) ),
    addOnePageMovies: (pageNumber, onePageMovies) => dispatch(actions.addOnePageMovies(pageNumber, onePageMovies) ),
    
    changeShowType: (showType) => dispatch( actions.changeShowType(showType) ),
    changeOrder: () => dispatch( actions.changeOrder() ),
    fillMovieSetTitle: (setData) => dispatch( actions.fillMovieSetTitle(setData) ),
    fillMovieSetVoteCount: (setData) => dispatch( actions.fillMovieSetVoteCount(setData) ),
    fillMovieSetAverageScore: (setData) => dispatch( actions.fillMovieSetAverageScore(setData) ),
    fillMovieSetReleaseDate: (setData) => dispatch( actions.fillMovieSetReleaseDate(setData) )
    
});

export default connect(mapStateToProps, mapDispatchToProps)(movieListPage);

