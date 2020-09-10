import React from 'react';
import './styles/ResultsStyle.css';

export function Results({movies,setSortBy}){
    const moviesCounter = movies.length;
    

    const handleSort = (event) =>{
        // event.preventDefault();
        setSortBy(event.target.getAttribute('data-sortby'))
    }

    return(
        <div id="resultsForm">
            <p> {moviesCounter} movies found</p>
            <div id="sort">
                <p>Sort by</p>
                <button className="sortByReleaseDate"
                    onClick={handleSort}
                    data-sortby="release_date"
                    >release date</button>
                <button className="sortByRating"
                    onClick={handleSort}
                    data-sortby="vote_average"
                    >vote average</button>
            </div>
        </div>
    )
}



    // const handleSortByReleaseDate = (event) =>{
    //     event.preventDefault();
    //     // const sortParameter = (event.target.getAttribute('data-sortby'));

    //     const byReleaseDate = movies.movies.slice(0);
    //     byReleaseDate.sort((a,b)=>{
    //         a.release_date.trim("");
    //         b.release_date.trim("");
    //             return a.release_date - b.release_date
    //     })

    // }
    // const handleSortByVoteAverage = (event) =>{
    //     event.preventDefault();

    //         const byRating = movies.movies.slice(0);
    //         byRating.sort((a,b) =>{
    //             return a.vote_average - b.vote_average
    //         })
    //         console.log(byRating);
    // }