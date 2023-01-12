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
        

        }
        return state;
    }