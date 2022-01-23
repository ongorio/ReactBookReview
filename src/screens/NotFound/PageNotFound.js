import React from 'react';

import { Link } from 'react-router-dom';

const PageNotFound = props =>{

    return (
        <div className='container'>
            <h1 style={{textAlign:'center'}}>Page Not Found</h1>
            <p style={{textAlign:'center'}}>Sorry the page you were looking for was not found. Return Home, <Link to="/home">Here</Link></p>
        </div>
    )
}

export default PageNotFound