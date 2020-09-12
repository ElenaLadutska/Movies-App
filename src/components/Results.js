import React from 'react';
import './styles/ResultsStyle.css';

export function Results({movies, setSortBy}) {
    const moviesCounter = movies.length + ' ';

    const handleSort = (event) => {
        setSortBy(event.target.getAttribute('data-sortby'))
    }

    return (
        <div id="resultsForm">
            <p>
                {moviesCounter}
                movies found</p>
            <div id="sort">
                <p>Sort by</p>
                <button
                    className="sortByReleaseDate"
                    onClick={handleSort}
                    data-sortby="release_date">release date</button>
                <button
                    className="sortByRating"
                    onClick={handleSort}
                    data-sortby="vote_average">vote average</button>
            </div>
        </div>
    )
}
