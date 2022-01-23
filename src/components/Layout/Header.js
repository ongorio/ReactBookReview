import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Header.module.css'
import logoImage from '../../assets/book.png'

const Header = props =>{
    return (
        <header>
            <div className={classes['mainheader']}>
                <nav className={`${classes['navbar']} container`}>
                    <NavLink to="/home">
                        <img src={logoImage} alt="logo" height={50} width={80}/>
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink className={navData=>{
                                return navData.isActive ? `${classes['navitem']} ${classes['active']}`: classes['navitem']
                            }} to="/books" >
                                Books
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={navData=>{
                                return navData.isActive ? `${classes['navitem']} ${classes['active']}` : classes['navitem']
                            }} to="/reviews">
                                Reviews
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        
        </header>
    )
};

export default Header