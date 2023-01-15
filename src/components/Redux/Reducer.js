const INITIAL_STATE = {
     movies: [],
     favorites: []
}
export default function Reducer(state=INITIAL_STATE,action) {
    switch (action.type) {
        case "SEARCH_MOVIE":
            return {
                ...state,
                movies: action.payload.movies
            };
            case "ADD_TO_FAVORITE":
                const choosedMovie = state.movies.find(movie => movie.imdbID === action.payload.imdbID)
                if (!state.favorites.includes(choosedMovie)) {
                const favoriteList = [...state.favorites,choosedMovie]
                count ++
                return {
                    ...state,
                    favorites:favoriteList,
                    countMovies:count
                }
            };
            case "DELETE_MOVIE":
                const afterDelete = state.favorites.filter(movie => movie.imdbID !== action.payload.imdbID)
                count --
                return {
                    ...state,
                    favorites:afterDelete,
                    countMovies:count
                }        

        }
        return state;
    }