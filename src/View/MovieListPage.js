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
    state = {
        sort: 'vote_average_desc'
    }

    check = (pageNumer) => {
        const MovieSet = this.props.MovieSet;
        const finder = (findItem) => {
            return findItem.pageNumber === pageNumer;
        }
        if( MovieSet.findIndex(finder) >= 0 )
            return true;
        return false;
    }


    setSort = (sort) => {
        this.setState({sort})
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
        const sort = this.state.sort;
        const list = index >=0 ? this.props.MovieSet[index].onePageMovies : []
        const sortedList = list
          .slice(0)
          .sort((a, b) => {
            if (sort === 'title_asc') {
                return a.title > b.title ? 1 : -1;
            } else if (sort === 'title_desc') {
                return a.title > b.title ? -1 : 1;
            } else if (sort === 'vote_count_asc') {
                return a.vote_count - b.vote_count;
            } else if (sort === 'vote_count_desc') {
                return b.vote_count - a.vote_count;
            } else if (sort === 'vote_average_asc') {
                return a.vote_average - b.vote_average;
            } else if (sort === 'vote_average_desc') {
                return b.vote_average - a.vote_average;
            } else if (sort === 'release_date_asc') {
                return new Date(a.release_date) - new Date(b.release_date);
            } else if (sort === 'release_date_desc') {
                return new Date(b.release_date) - new Date(a.release_date);
            }
        })

        const movieList = sortedList.map( movie => 
            <ShowMovies 
                key={movie.id} movieData={movie} BlockedMovies={this.props.BlockedMovies}
                addOneLikedMovie={this.props.addOneLikedMovie}
                addOneBlockedMovie={this.props.addOneBlockedMovie}                
            />
        );
        return (
            <div className="movieListPage">
                <div className="sortArea">
                    <button onClick={this.setSort.bind(this, this.state.sort === 'title_asc' ? 'title_desc' : 'title_asc')}>
                        Title {sort === 'title_asc' ? '⇧' : '⇩'}
                    </button>
                    <button onClick={this.setSort.bind(this, this.state.sort === 'vote_count_asc' ? 'vote_count_desc' : 'vote_count_asc')}>
                        Vote Count {sort === 'vote_count_asc' ? '⇧' : '⇩'}
                    </button>
                    <button onClick={this.setSort.bind(this, this.state.sort === 'vote_average_asc' ? 'vote_average_desc' : 'vote_average_asc')}>
                        Average Score {sort === 'vote_average_asc' ? '⇧' : '⇩'}
                    </button>
                    <button onClick={this.setSort.bind(this, this.state.sort === 'release_date_asc' ? 'release_date_desc' : 'release_date_asc')}>
                        Release Date {sort === 'release_date_asc' ? '⇧' : '⇩'}
                    </button>
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

