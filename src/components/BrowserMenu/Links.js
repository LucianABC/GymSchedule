import React from 'react';
import {Link} from 'react-router-dom';
import './Links.scss';

const Links = ({days})=>{
    return(
        <div className="day-menu">
            {
                days.map(day=>{
                   return <Link to= {day.route}> {day.name}</Link>
                })
            }
                        
        </div>
    );
}

export default Links