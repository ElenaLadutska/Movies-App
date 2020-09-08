import {ADD_MOVIE} from '../constants';

const defaultState = {movies:[]};

export function reducer(state = defaultState, action){
    switch(action.type){
        case ADD_MOVIE:
            return{
                movies: [...state.movies, {...action.payload}]
            }
        // case 'SORT_BY_RELEASE_DATE':
        //     return{
        //         ...state,
        //         movies: state.movies.filter(movie => movie.release_date < action.payload.release_date)
        //     }
        default:
            return state
    }
}