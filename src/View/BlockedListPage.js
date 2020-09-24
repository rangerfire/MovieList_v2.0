import React, { Fragment } from 'react';
import axios from 'axios';
import ShowBlockedMovie from './ShowBlockedMovie';
//redux
import { connect } from 'react-redux';
import Selector from '../Selector';
import { actions } from '../ActionCreator';

//just for test-------------------------------
const pageBaseURL = 'https://api.themoviedb.org/3/';
const action = 'movie/popular?api_key=';
const JacksonApiKey = '9d3badb0c8d83a0bce6bf3cf96e3cc60';
const lang = '&language=en-US';
const page = '&page=2';

const url = ''.concat(pageBaseURL,action,JacksonApiKey,lang,page);;
//just for test-------------------------------

class LikedListPage extends React.Component {

    componentDidMount = () => {
        //just for test-------------------------------
        axios.get(url)
        .then( res => {
            const response = res.data.results.slice(10);      //choose first 10 movies as "liked movies"
            // console.log(this.state.data);
            for(let i=0;i<10;i++) 
                this.props.addOneBlockedMovie(response[i]);
        });
        //just for test-------------------------------
    }    

    render() {
        const BlockedMovies = this.props.BlockedMovies.map( movie => 
            <ShowBlockedMovie 
                key={movie.id} movieData={movie}
                deleteOneBlockedMovie={this.props.deleteOneBlockedMovie}
                addOneLikedMovie={this.props.addOneLikedMovie}    
            />
        );

        return (
            <Fragment>
                <h1>Movie List of Blocked</h1>
                <div className="ShowBlockedMovie">
                    {BlockedMovies}
                </div>
            </Fragment>
        );       
    }
}

const mapStateToProps = (state) => ({
    LikedMovies: Selector.LikedMoviesSelector(state),
    BlockedMovies: Selector.BlockedMoviesSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    addOneLikedMovie: (movieData) => dispatch( actions.addOneLikedMovie(movieData) ),
    addOneBlockedMovie: (movieData) => dispatch ( actions.addOneBlockedMovie(movieData) ),
    deleteOneLikedMovie: (movieData) => dispatch( actions.deleteOneLikedMovie(movieData) ),
    deleteOneBlockedMovie: (movieData) => dispatch( actions.deleteOneBlockedMovie(movieData) )
});

export default connect(mapStateToProps, mapDispatchToProps)(LikedListPage);