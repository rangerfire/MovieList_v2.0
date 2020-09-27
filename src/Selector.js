const LikedMoviesSelector = (state) => state.LikedMovies;
const BlockedMoviesSelector = (state) => state.BlockedMovies;
const PageSelector = (state) => state.Page;
const MovieSetSelector = (state) => state.MovieSet;

const ShowTypeSelector = (state) => state.ShowType;

const SortOrderSelector = (state) => state.SortOrder;
const MovieSetTitleSelector = (state) => state.MovieSet_Title;
const MovieSetVoteCountSelector = (state) => state.MovieSet_VoteCount;
const MovieSetAverageScoreSelector = (state) => state.MovieSet_AverageScore;
const MovieSetReleaseDateSelector = (state) => state.MovieSet_ReleaseDate;

/*
    put your selectors here, don't forget to add them into export
*/

export default {
    LikedMoviesSelector,
    BlockedMoviesSelector,
    PageSelector,
    MovieSetSelector,

    ShowTypeSelector,

    SortOrderSelector,
    MovieSetTitleSelector,
    MovieSetVoteCountSelector,
    MovieSetAverageScoreSelector,
    MovieSetReleaseDateSelector
}