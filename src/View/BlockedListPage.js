import React, { Fragment } from 'react';
import ShowBlockedMovie from '../Components/ShowBlockedMovie';
//redux
import { connect } from 'react-redux';
import Selector from '../Selector';
import { actions } from '../ActionCreator';

class LikedListPage extends React.Component {
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
                <header>Movie List of Blocked</header>
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