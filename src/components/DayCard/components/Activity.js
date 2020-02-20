import React from 'react';

const Activity = (props) => {
    return(
        <div>
            <span> edit</span>
            <span>{props.name}</span>
            <span> {props.quantity}</span>
            <input checked={props.done} type="checkbox" />
        </div>
    );
}


export default Activity;