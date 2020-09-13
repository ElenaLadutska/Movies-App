import React, {useState} from 'react';
import Modal from 'react-modal';
import './styles/Modal.css'

const customStyles = {
    content: {
        width: '45%',
        height: 'auto',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

export function Movie({movies}) {

    var subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [numberId, setNumberId] = useState(Number);
    const clickedMovieData = movies.filter(movie => movie.id == numberId);


    function openModal() {
        setIsOpen(true);
    }

    function clickedMovie() {
        let target = event
            .target
            .closest('li');
        setNumberId(target.id)
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
        clickedMovie()
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <ul className="allFoundMovies">
                {
                    movies.map(
                        movie => <li key={movie.id} id={movie.id} className="foundMovie" onClick={openModal}>
                            <img
                                className="moviesImg"
                                src={movie.poster_path}
                                alt={`${movie.title}`}
                                width="200"
                                height='400'></img>
                            <h3>{movie.title}</h3>
                            <div className="release_date">Release date:{movie.release_date}</div>
                            <div className="genre">Genre: {movie.genres}</div>
                            <div className="vote_average">Vote average: {movie.vote_average}</div>
                        </li>
                    )
                }
                <div>

                    <Modal
                        movies={movies}
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal">

                        <h2 ref={_subtitle => (subtitle = _subtitle)}></h2>
                        <div id="clickedMovie">
                            {
                                clickedMovieData.map(
                                    movie => 
                                    <div key={movie.id} id={movie.id} className="clickedMovie">
                                        <img
                                            className="clickedMoviesImg"
                                            src={movie.poster_path}
                                            alt={`${movie.title}`}
                                            width="200"
                                            height='400'></img>
                                        <div className="mainInfoOfClickedMovie">
                                            <h2 className="clickedMovieTitle">{movie.title}</h2>
                                            <p className="clickedMovieTagline">{movie.tagline}</p>
                                            <p className="clickedMovieGenre">
                                                {movie.genres}</p>
                                            <p className="clickedMovieOverview">{movie.overview}</p>
                                            <p className="clickedMovieReleaseDate">Release date:{movie.release_date}</p>
                                            <p className="clickedMovieBudget">Budget:${movie.budget}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </Modal>
                </div>
            </ul>

        </div>
    )
}