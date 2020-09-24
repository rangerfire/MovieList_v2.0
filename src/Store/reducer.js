import Actions from '../Constants'

const initialState = {
    LikedMovies: [],
    BlockedMovies: []
    /*
        put your states here
    */
};

const reducer = (state=initialState, action={}) => {
    switch (action.type) {
        
        case Actions.ADD_ONE_LIKED_MOVIE:   
            const newMovieData = action.movieData;
            const newLikedMovies1 = state.LikedMovies.slice();
            //check if this movie already exists
            const finder1 = (finditem) => {
                return finditem.id === newMovieData.id;
            };
            const index1 = newLikedMovies1.findIndex(finder1);  //find >=0, not find <0
            if(index1 >= 0)
                return {...state};
            else
                newLikedMovies1.push(newMovieData);
            return {
                ...state,
                LikedMovies: newLikedMovies1
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
            return {
                ...state,
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
        /*

          put your actions handler here

        */    
        
        default: 
            return {...state};

    }
};

export default reducer;