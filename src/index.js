import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './style.css';
import {MoviesApp} from './components/MoviesApp'

ReactDOM.render(
    <BrowserRouter>
        <MoviesApp/>
    </BrowserRouter>,
    document.getElementById(
        'root'
    )
)