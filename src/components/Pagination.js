import React from 'react';
import './styles/PaginationStyle.css'

export function Pagination(){
    return(
        <div id="pagination">
            <button id="leftBtn">&#8592;</button>
            <button className="count"></button>
            <button id="rightBtn">&#8594;</button>
        </div>

    )
}