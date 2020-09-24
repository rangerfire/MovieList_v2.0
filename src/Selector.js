const LikedMoviesSelector = (state) => state.LikedMovies;
const BlockedMoviesSelector = (state) => state.BlockedMovies;
const ListedMoviesSelector = (state) => state.ListedMovies;
/*
    put your selectors here, don't forget to add them into export
*/

export default {
    LikedMoviesSelector,
    BlockedMoviesSelector,
    ListedMoviesSelector
}