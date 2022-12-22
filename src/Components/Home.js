import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mt-36'>
            <Link to='/login'><button className='btn btn-primary mr-5'>Log In</button></Link>
            <Link to='/register'><button className='btn btn-secondary'>Register</button></Link>
        </div>
    );
};

export default Home;