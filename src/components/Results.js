import React from 'react';
import './styles/ResultsStyle.css';

export function Results(movies){
const moviesCounter = movies.movies.length;


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
