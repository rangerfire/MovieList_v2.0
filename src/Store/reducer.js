import { actions } from '../ActionCreator';
import Actions from '../Constants'

const initialState = {
    LikedMovies: [],
    BlockedMovies: [],

    Page: 1,
    MovieSet: []        //[ { pageNumer: , onePageMovies: }, { pageNumer: , onePageMovies: } ]
    // movieList: [],
    // pageList: []
    /*
        put your states here
    */
};

const reducer = (state=initialState, action={}) => {
    const newLikedMovies = state.LikedMovies.slice();
    const newBlockedMovies = state.BlockedMovies.slice();
    const newMovieSet = state.MovieSet.slice();
    let newMovieData, finder;
    if( action.type === Actions.ADD_ONE_LIKED_MOVIE ||
            action.type === Actions.ADD_ONE_BLOCKED_MOVIE ||
            action.type === Actions.DELETE_ONE_LIKED_MOVIE ||
            action.type === Actions.DELETE_ONE_BLOCKED_MOVIE ) 
    {
        newMovieData = action.movieData;
        finder = (finditem) => {
            return finditem.id === newMovieData.id;
        };
    }    

    switch (action.type) {
        
        case Actions.ADD_ONE_LIKED_MOVIE:   
            // const newLikedMovies = state.LikedMovies.slice();
            const index1 = newLikedMovies.findIndex(finder);  //find >=0, not find <0
            if(index1 >= 0)
                return {...state};
            else
                newLikedMovies.push(newMovieData);
            return {
                ...state,
                LikedMovies: newLikedMovies
            };

        case Actions.ADD_ONE_BLOCKED_MOVIE: 
            const index2 = newBlockedMovies.findIndex(finder);  //find >=0, not find <0
            if(index2 >= 0)
                return {...state};
            else
                newBlockedMovies.push(newMovieData);
            return {
                ...state,
                BlockedMovies: newBlockedMovies
            };  
            
        case Actions.DELETE_ONE_LIKED_MOVIE:
            const index3 = newLikedMovies.findIndex(finder);
            if(index3 >= 0)
                newLikedMovies.splice(index3, 1);
            else
                alert("no this liked movie");
            return {
                ...state,
                LikedMovies: newLikedMovies
            };

        case Actions.DELETE_ONE_BLOCKED_MOVIE:            
            const index4 = newBlockedMovies.findIndex(finder);
            if(index4 >= 0)
                newBlockedMovies.splice(index4, 1);
            else
                alert("no this blocked movie");
            return {
                ...state,
                BlockedMovies: newBlockedMovies
            };

        case Actions.CHANGE_PAGE: 
            const newPage = action.Page;
            return {
                ...state,
                Page: newPage
            };

        case Actions.ADD_ONE_PAGE_MOVIES:
            //check before, so new page data must be "brand new", add directly
            const newPageNumber = action.pageNumber;
            const newOnePageMovies = action.onePageMovies;
            const newMovieSetObj = {
                pageNumber: newPageNumber,
                onePageMovies: newOnePageMovies
            };
            newMovieSet.push(newMovieSetObj);
            return {
                ...state,
                MovieSet: newMovieSet
            };    

        // case Actions.ADD_ONE_MOVIE:   
        //     const newMovieData5 = action.movieData;
        //     const newListedMovie1 = state.movieList.slice();
        //     //check if this movie already exists
        //     const finder5 = (finditem) => {
        //         return finditem.id === newMovieData5.id;
        //     };
        //     const index5 = newListedMovie1.findIndex(finder5);  //find >=0, not find <0
        //     const index5_1 = state.BlockedMovies.findIndex(finder5);
        //     if(index5 < 0 && index5_1 < 0)
        //         newListedMovie1.push(newMovieData5);
        //     else
        //         return {...state};
        //     return {
        //         ...state,
        //         movieList: newListedMovie1
        //     };

        // case Actions.DELETE_ONE_LISTED_MOVIE:
        //     const newMovieData6 = action.movieData;
        //     const newListedMovie2 = state.movieList.slice();
        //     //find the index of the movie you want to delete from listed movies
        //     const finder6 = (finditem) => {
        //         return finditem.id === newMovieData6.id;
        //     };
        //     const index6 = newListedMovie2.findIndex(finder6);
        //     if(index6 >= 0)
        //         newListedMovie2.splice(index6, 1);
        //     else
        //         alert("no this movie");
        //     return {
        //         ...state,
        //         movieList: newListedMovie2
        //     };




        /*

          put your actions handler here

        */    
        
        default: 
            return {...state};

    }
};

export default reducer;