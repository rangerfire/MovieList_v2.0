const LikedMoviesSelector = (state) => state.LikedMovies;
const BlockedMoviesSelector = (state) => state.BlockedMovies;
// const ListedMoviesSelector = (state) => state.movieList;
// const PageListSelector = (state) => state.pageList;
const PageSelector = (state) => state.Page;
const MovieSetSelector = (state) => state.MovieSet;

/*
    put your selectors here, don't forget to add them into export
*/

export default {
    LikedMoviesSelector,
    BlockedMoviesSelector,
    // ListedMoviesSelector,
    // PageListSelector
    PageSelector,
    MovieSetSelector
}