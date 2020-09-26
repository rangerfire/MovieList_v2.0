//action type
const ADD_ONE_LIKED_MOVIE = "ADD_ONE_LIKED_MOVIE";
const ADD_ONE_BLOCKED_MOVIE = "ADD_ONE_BLOCKED_MOVIE";
const DELETE_ONE_LIKED_MOVIE = "DELETE_ONE_LIKED_MOVIE";
const DELETE_ONE_BLOCKED_MOVIE = "DELETE_ONE_BLOCKED_MOVIE";

const CHANGE_PAGE = "CHANGE_PAGE";
const ADD_ONE_PAGE_MOVIES = "ADD_ONE_PAGE_MOVIES";

/*
    put your action.type constants here, don't forget to add them into export
*/


//other constant
const API_KEY = "9d3badb0c8d83a0bce6bf3cf96e3cc60";
const PREURL = 'https://api.themoviedb.org/3/movie/popular?api_key=43d2c15376ca311ed501203d6c7cf47f&language=en-US&page=';

/*
    put your other constants here, don't forget to add them into export
*/



export default {
    ADD_ONE_LIKED_MOVIE,
    ADD_ONE_BLOCKED_MOVIE,
    DELETE_ONE_LIKED_MOVIE,
    DELETE_ONE_BLOCKED_MOVIE,

    API_KEY,
    PREURL,
    
    CHANGE_PAGE,
    ADD_ONE_PAGE_MOVIES
};