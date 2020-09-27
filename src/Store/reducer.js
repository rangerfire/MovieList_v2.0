import Actions from '../Constants'

const initialState = {
    LikedMovies: [],
    BlockedMovies: [],

    Page: 1,
    MovieSet: [],        //[ { pageNumber: , onePageMovies: }, { pageNumber: , onePageMovies: } ]

    ShowType: 0,

    SortOrder: Actions.ASC_OEDER,
    MovieSet_Title: [],         //type 1
    MovieSet_VoteCount: [],     //type 2
    MovieSet_AverageScore: [],  //type 3
    MovieSet_ReleaseDate: []    //type 4
    /*
        put your states here
    */
};

const reducer = (state=initialState, action={}) => {
    const newLikedMovies = state.LikedMovies.slice();
    const newBlockedMovies = state.BlockedMovies.slice();
    const newMovieSet = state.MovieSet.slice();
    let newMovieData, finder, newSetData;
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

    if( action.type === Actions.FILL_MOVIESET_TITLE ||
        action.type === Actions.FILL_MOVIESET_VOTE_COUNT ||
        action.type === Actions.FILL_MOVIESET_AVERAGE_SCORE ||
        action.type === Actions.FILL_MOVIESET_RELEASEDATE ) 
    {
        newSetData = action.setData;
    }

    switch (action.type) {
        
        case Actions.ADD_ONE_LIKED_MOVIE:   
            const index1 = newLikedMovies.findIndex(finder);  //find >=0, not find <0
            if(index1 >= 0) {
                alert("Like once is enough ^.^");
                return {...state};
            }                
            newLikedMovies.push(newMovieData);
            //should also delete it from blocked list if needed !!!!!
            const index1_1 = newBlockedMovies.findIndex(finder);  //find >=0, not find <0
            if(index1_1 >= 0)
                newBlockedMovies.splice(index1_1, 1);
            return {
                ...state,
                LikedMovies: newLikedMovies,
                BlockedMovies: newBlockedMovies
            };

        case Actions.ADD_ONE_BLOCKED_MOVIE: 
            const index2 = newBlockedMovies.findIndex(finder);  //find >=0, not find <0
            if(index2 >= 0)
                return {...state};
            newBlockedMovies.push(newMovieData);
            //should also delete it from liked list if needed !!!!!
            const index2_1 = newLikedMovies.findIndex(finder);  //find >=0, not find <0
            if(index2_1 >= 0)
                newLikedMovies.splice(index2_1, 1);
            return {
                ...state,
                LikedMovies: newLikedMovies,
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

        case Actions.CHANGE_ORDER:
            if(state.SortOrder === Actions.ASC_OEDER)
                return {
                    ...state,
                    SortOrder: Actions.DESC_ORDER
                };
            else
                return {
                    ...state,
                    SortOrder: Actions.ASC_OEDER
                };
        
        case Actions.FILL_MOVIESET_TITLE: 
            return {
                ...state,
                MovieSet_Title: newSetData
            };

        case Actions.FILL_MOVIESET_VOTE_COUNT: 
            return {
                ...state,
                MovieSet_VoteCount: newSetData
            };

        case Actions.FILL_MOVIESET_AVERAGE_SCORE: 
            return {
                ...state,
                MovieSet_AverageScore: newSetData
            };

        case Actions.FILL_MOVIESET_RELEASEDATE: 
            return {
                ...state,
                MovieSet_ReleaseDate: newSetData
            };

        case Actions.CHANGE_SHOW_TYPE:
            return {
                ...state,
                ShowType: action.showType
            }
        /*

          put your actions handler here

        */    
        
        default: 
            return {...state};

    }
};

export default reducer;