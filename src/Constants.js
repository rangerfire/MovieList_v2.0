//action type
const ADD_ONE_LIKED_MOVIE = "ADD_ONE_LIKED_MOVIE";
const ADD_ONE_BLOCKED_MOVIE = "ADD_ONE_BLOCKED_MOVIE";
const DELETE_ONE_LIKED_MOVIE = "DELETE_ONE_LIKED_MOVIE";
const DELETE_ONE_BLOCKED_MOVIE = "DELETE_ONE_BLOCKED_MOVIE";
const CHANGE_PAGE = "CHANGE_PAGE";
const ADD_ONE_PAGE_MOVIES = "ADD_ONE_PAGE_MOVIES";

const CHANGE_ORDER = "CHANGE_ORDER";
const FILL_MOVIESET_TITLE = "FILL_MOVIESET_TITLE";
const FILL_MOVIESET_VOTE_COUNT = "FILL_MOVIESET_VOTE_COUNT";
const FILL_MOVIESET_AVERAGE_SCORE = "FILL_MOVIESET_AVERAGE_SCORE";
const FILL_MOVIESET_RELEASEDATE = "FILL_MOVIESET_RELEASEDATE";

const CHANGE_SHOW_TYPE = "CHANGE_SHOW_TYPE";


//other constant
const API_KEY = "9d3badb0c8d83a0bce6bf3cf96e3cc60";
const PREURL = 'https://api.themoviedb.org/3/movie/popular?api_key=43d2c15376ca311ed501203d6c7cf47f&language=en-US&page=';
const TOTAL_PAGE = 500;

const ASC_OEDER = "↑";
const DESC_ORDER = "↓";
const SORT_BY_TITLE = "SORT_BY_TITLE";
const SORT_BY_VOTE_COUNT = "SORT_BY_VOTE_COUNT";
const SORT_BY_AVERAGE_SCORE = "SORT_BY_AVERAGE_SCORE";
const SORT_BY_RELEASEDATE = "SORT_BY_RELEASEDATE";



export default {
    ADD_ONE_LIKED_MOVIE,
    ADD_ONE_BLOCKED_MOVIE,
    DELETE_ONE_LIKED_MOVIE,
    DELETE_ONE_BLOCKED_MOVIE,
    CHANGE_PAGE,
    ADD_ONE_PAGE_MOVIES,
    CHANGE_ORDER,

    FILL_MOVIESET_TITLE,
    FILL_MOVIESET_VOTE_COUNT,
    FILL_MOVIESET_AVERAGE_SCORE,
    FILL_MOVIESET_RELEASEDATE,

    API_KEY,
    PREURL,
    TOTAL_PAGE,

    ASC_OEDER,
    DESC_ORDER,
    SORT_BY_TITLE,
    SORT_BY_VOTE_COUNT,
    SORT_BY_AVERAGE_SCORE,
    SORT_BY_RELEASEDATE,

    CHANGE_SHOW_TYPE
};