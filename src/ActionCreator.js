import Actions from './Constants';

const addOneLikedMovie = (movieData) => ({
    type: Actions.ADD_ONE_LIKED_MOVIE,
    movieData: movieData
});

const addOneBlockedMovie = (movieData) => ({
    type: Actions.ADD_ONE_BLOCKED_MOVIE,
    movieData: movieData
});

const deleteOneLikedMovie = (movieData) => ({
    type: Actions.DELETE_ONE_LIKED_MOVIE,
    movieData: movieData
});

const deleteOneBlockedMovie = (movieData) => ({
    type: Actions.DELETE_ONE_BLOCKED_MOVIE,
    movieData: movieData
});

const deleteOneListedMovie = (movieData) => ({
    type: Actions.DELETE_ONE_LISTED_MOVIE,
    movieData: movieData
});
/*
    put your action creators here, don't forget to add them into export
*/


export const actions = {
    addOneLikedMovie, 
    addOneBlockedMovie,
    deleteOneLikedMovie,
    deleteOneBlockedMovie,
    deleteOneListedMovie
};