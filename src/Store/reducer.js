import Actions from '../Constants'

const initialState = {
    LikedMovies: [],
    BlockedMovies: [],
    movieList: []
    /*
        put your states here
    */
};

const reducer = (state=initialState, action={}) => {
    switch (action.type) {
        
        case Actions.ADD_ONE_LIKED_MOVIE:   
            const newMovieData1 = action.movieData;
            const newLikedMovies1 = state.LikedMovies.slice();
            //check if this movie already exists
            const finder1 = (finditem) => {
                return finditem.id === newMovieData1.id;
            };
            const index1 = newLikedMovies1.findIndex(finder1);  //find >=0, not find <0
            if(index1 >= 0) {
                alert("Like once is enough ^.^");
                return {...state};
            }                
            else
                newLikedMovies1.push(newMovieData1);
            //should also delete it from blocked list if needed !!!!!            
            const newBlockedMovies1_1 = state.BlockedMovies.slice();
            const finder1_1 = (finditem) => {
                return finditem.id === newMovieData1.id;
            };
            const index1_1 = newBlockedMovies1_1.findIndex(finder1_1);  //find >=0, not find <0
            if(index1_1 >= 0)
                newBlockedMovies1_1.splice(index1_1, 1);

            return {
                ...state,
                LikedMovies: newLikedMovies1,
                BlockedMovies: newBlockedMovies1_1
            };

        case Actions.ADD_ONE_BLOCKED_MOVIE: 
            const newMovieData2 = action.movieData;
            const newBlockedMovies1 = state.BlockedMovies.slice();
            //check if this movie already exists
            const finder2 = (finditem) => {
                return finditem.id === newMovieData2.id;
            };
            const index2 = newBlockedMovies1.findIndex(finder2);  //find >=0, not find <0
            if(index2 >= 0)
                return {...state};
            else
                newBlockedMovies1.push(newMovieData2);
            //should also delete it from liked list if needed !!!!!
            const newLikedMovies1_1 = state.LikedMovies.slice();
            const finder2_1 = (finditem) => {
                return finditem.id === newMovieData2.id;
            };
            const index2_1 = newLikedMovies1_1.findIndex(finder2_1);  //find >=0, not find <0
            if(index2_1 >= 0)
                newLikedMovies1_1.splice(index2_1, 1);

            return {
                ...state,
                LikedMovies: newLikedMovies1_1,
                BlockedMovies: newBlockedMovies1
            };  
            
        case Actions.DELETE_ONE_LIKED_MOVIE:
            const newMovieData3 = action.movieData;
            const newLikedMovies2 = state.LikedMovies.slice();
            //find the index of the movie you want to delete from liked movies
            const finder3 = (finditem) => {
                return finditem.id === newMovieData3.id;
            };
            const index3 = newLikedMovies2.findIndex(finder3);
            if(index3 >= 0)
                newLikedMovies2.splice(index3, 1);
            else
                alert("no this liked movie");
            return {
                ...state,
                LikedMovies: newLikedMovies2
            };

        case Actions.DELETE_ONE_BLOCKED_MOVIE:
            const newMovieData4 = action.movieData;
            const newBlockedMovies2 = state.BlockedMovies.slice();
            //find the index of the movie you want to delete from blocked movies
            const finder4 = (finditem) => {
                return finditem.id === newMovieData4.id;
            };
            const index4 = newBlockedMovies2.findIndex(finder4);
            if(index4 >= 0)
                newBlockedMovies2.splice(index4, 1);
            else
                alert("no this blocked movie");
            return {
                ...state,
                BlockedMovies: newBlockedMovies2
            };

        case Actions.ADD_ONE_MOVIE:   
            const newMovieData5 = action.movieData;
            const newListedMovie1 = state.movieList.slice();
            //check if this movie already exists
            const finder5 = (finditem) => {
                return finditem.id === newMovieData5.id;
            };
            const index5 = newListedMovie1.findIndex(finder5);  //find >=0, not find <0
            const index5_1 = state.BlockedMovies.findIndex(finder5);
            if(index5 < 0 && index5_1 < 0)
                newListedMovie1.push(newMovieData5);
            else
                return {...state};
            return {
                ...state,
                movieList: newListedMovie1
            };

        case Actions.DELETE_ONE_LISTED_MOVIE:
            const newMovieData6 = action.movieData;
            const newListedMovie2 = state.movieList.slice();
            //find the index of the movie you want to delete from listed movies
            const finder6 = (finditem) => {
                return finditem.id === newMovieData6.id;
            };
            const index6 = newListedMovie2.findIndex(finder6);
            if(index6 >= 0)
                newListedMovie2.splice(index6, 1);
            else
                alert("no this movie");
            return {
                ...state,
                movieList: newListedMovie2
            };

        /*

          put your actions handler here

        */    
        
        default: 
            return {...state};

    }
};

export default reducer;