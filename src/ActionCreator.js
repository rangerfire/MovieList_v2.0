import Actions from './Constants';

const addOneLikedMovie = (movieData) => ({
    type: Actions.ADD_ONE_LIKED_MOVIE,
    movieData: movieData
});


export const actions = {
    addOneLikedMovie
};