import React, {useState} from 'react';
import Modal from 'react-modal';
import './styles/Modal.css'

const customStyles = {
    content: {
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

    function openModal(event) {
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
                            <div className="vote_average">vote average: {movie.vote_average}</div>
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
                                    movie => <div key={movie.id} id={movie.id}>
                                        <img
                                            className="moviesImg"
                                            src={movie.poster_path}
                                            alt={`${movie.title}`}
                                            width="200"
                                            height='400'></img>
                                        <h3>{movie.title}</h3>
                                        <div>{movie.overview}</div>
                                        <div>Budget:${movie.budget}</div>
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