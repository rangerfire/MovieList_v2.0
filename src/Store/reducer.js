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
        /*

          put your actions handler here

        */    
        
        default: 
            return {...state};

    }
};

export default reducer;