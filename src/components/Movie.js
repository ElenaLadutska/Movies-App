import React from 'react';

export function Movie({movie}){

    return(
        <div>
                <ul className="allFoundMovies">
                {
                    movie.map(movie =>
                     <li key={movie.id}
                        className="foundMovie">
                            <img className="moviesImg" 
                                src={movie.poster_path} 
                                alt={`${movie.title}`}
                                width="200" height='400' 
                                >
                            </img>
                            <h2>{movie.title}</h2>
                            <div className="release_date"
                                >Release date:{movie.release_date}</div>
                            <div className="genre"
                                >Genre: {movie.genres}</div>
                            <div className="vote_average"
                                >vote average: {movie.vote_average}</div>
                    </li>)
                }
                </ul>
        </div>
    )
}