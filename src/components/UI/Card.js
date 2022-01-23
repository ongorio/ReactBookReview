import React from 'react';

import classes from './Card.module.css';

const Card = props =>{
    const CardClass = `${classes['Card']} ${props.className}`
    return (
        <div className={CardClass}>
            {props.children}
        </div>
    )
};

export default Card;