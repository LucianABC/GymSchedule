import React from 'react';
import './Title.scss';


const Title = ({day}) => {
    return(
        <div className="day-title-container">
            <h1 className="day-title">
                {day}
            </h1>
        </div>
    );
}


export default Title;