import React,{useState} from 'react';
import {Movie} from './Movie';
import {Results} from './Results'
import './styles/MoviesStyle.css';

export function SearchMovies(){

    const [movies,setMovies] = useState([]);
    const [searchParameter,setSearchParameter ] = useState('');
    const [searchBy,setSearchBy ] = useState('');
    const [sortBy,setSortBy] = useState('');

    const handleSearchParameter = (event) =>{
        event.preventDefault();
        setSearchBy(event.target.getAttribute('data-searchby'))
    }

    const handleSort = (event) =>{
        setSortBy(event.target.getAttribute('data-sortby'));
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=${sortBy}&sortOrder=desc&search=${searchParameter}&searchBy=${searchBy}&limit=24`)
            .then(res =>res.json())
            .then(res =>{
                console.log(res)
                setMovies(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
    }

    return(
        <form id="searchForm" onSubmit={handleSubmit}>
            <h1>FIND YOUR MOVIE</h1>
            <input id="searchInput"
                placeholder="Enter the title of the movie..." 
                value={searchParameter} 
                onChange={e => setSearchParameter(e.target.value)} />

            <div className="searchOptions">  

                <p>SEARCH BY</p>
                <button id="searchByTitleBtn"
                    type="radio"
                    data-searchby="title"
                    onClick={handleSearchParameter}
                    >title</button>
                <button id="searchByGenreBtn"
                    type="radio"
                    data-searchby="genres"
                    onClick={handleSearchParameter}
                    >genre</button>

                <button 
                id="searchBtn"
                type="submit">SEARCH</button>

            </div>

        <Results movies={movies} />
        <Movie movie={movies}/>

        </form>
    )
}
