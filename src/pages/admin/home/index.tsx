import * as React from 'react';
import { Link } from 'react-router-dom';

const adminHome = () => {
    return (
        <div id='admin-home'>
            <h1 className='main-heading'>Welcome admin!</h1>
            <Link to="admin-matches">Matches</Link>
        </div>
    );
};

export default adminHome;