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

const changeOrder = () => ({
    type: Actions.CHANGE_ORDER
}); 

const fillMovieSetTitle = (setData) => ({
    type: Actions.FILL_MOVIESET_TITLE,
    setData: setData
});

const fillMovieSetVoteCount = (setData) => ({
    type: Actions.FILL_MOVIESET_VOTE_COUNT,
    setData: setData
});

const fillMovieSetAverageScore = (setData) => ({
    type: Actions.FILL_MOVIESET_AVERAGE_SCORE,
    setData: setData
});

const fillMovieSetReleaseDate = (setData) => ({
    type: Actions.FILL_MOVIESET_RELEASEDATE,
    setData: setData
});

const changeShowType = (showType) => ({
    type: Actions.CHANGE_SHOW_TYPE,
    showType: showType
});


/*
    put your action creators here, don't forget to add them into export
*/


export const actions = {
    addOneLikedMovie, 
    addOneBlockedMovie,
    deleteOneLikedMovie,
    deleteOneBlockedMovie,
    changePage,
    addOnePageMovies,
    
    changeOrder,
    fillMovieSetTitle,
    fillMovieSetVoteCount,
    fillMovieSetAverageScore,
    fillMovieSetReleaseDate,

    changeShowType
};