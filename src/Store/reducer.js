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

        /*

          put your actions handler here

        */    
        
        default: 
            return {...state};

    }
};

export default reducer;