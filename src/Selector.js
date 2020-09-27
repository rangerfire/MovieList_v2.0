const LikedMoviesSelector = (state) => state.LikedMovies;
const BlockedMoviesSelector = (state) => state.BlockedMovies;
const PageSelector = (state) => state.Page;
const MovieSetSelector = (state) => state.MovieSet;

/*
    put your selectors here, don't forget to add them into export
*/

export default {
    LikedMoviesSelector,
    BlockedMoviesSelector,
    PageSelector,
    MovieSetSelector
}