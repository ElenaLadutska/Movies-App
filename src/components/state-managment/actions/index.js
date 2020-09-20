import {ADD_MOVIE} from '../constants';

let idCounter = 0;
let release_date = ''

export const addMovie = (title) =>{
    return{ 
        type: ADD_MOVIE,
        payload:{
            title,
            release_date:release_date,
            id: idCounter++
}}
}