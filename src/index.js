import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import {MoviesApp} from './components/MoviesApp'


// const render = () =>{
//     ReactDOM.render(
//     <React.StrictMode>
//         <MoviesApp store={store}/>
//     </React.StrictMode>,
// document.getElementById('root')
// );
// }
// render();

// store.subscribe(() =>{
//     render();
// })

ReactDOM.render(
    <React.StrictMode>
        <MoviesApp />
    </React.StrictMode>,
    document.getElementById('root')
) 