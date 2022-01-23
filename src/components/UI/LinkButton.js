import React from 'react';

import { Link } from 'react-router-dom';

import classes from './LinkButton.module.css';


const LinkButton = props =>{

    const buttonClasses = `${classes['button']} ${props.className}`;

    const styleobject = (props.center && {textAlign: 'center'});

    return (
        <div style={styleobject}>
            <Link to={props.to} className={buttonClasses}>
                {props.children}
            </Link>
        </div>
    ) 
};

export default LinkButton;