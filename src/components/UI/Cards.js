import './Cards.css';
import React from 'react';
function Card(props){
    // Have to put an space next to the card word so that other classes can also be added.
    const classes = 'card ' + props.className;
    // props.childer takes all the inside elements
    return <div className={classes}>{props.children}</div>;
    
}

export default Card;