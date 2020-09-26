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

const changePage = (Page) => ({
    type: Actions.CHANGE_PAGE,
    Page: Page    
});

//add 20 movies into redux
const addOnePageMovies = (pageNumber, onePageMovies) => ({
    type: Actions.ADD_ONE_PAGE_MOVIES,
    pageNumber: pageNumber,
    onePageMovies: onePageMovies
});

/*
    put your action creators here, don't forget to add them into export
*/


export const actions = {
    addOneLikedMovie, 
    addOneBlockedMovie,
    // addOneMovie,
    deleteOneLikedMovie,
    deleteOneBlockedMovie,
    // deleteOneListedMovie,
    changePage,
    addOnePageMovies
};