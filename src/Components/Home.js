import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mt-36'>
            <h1 className='text-4xl mb-10'>Please LogIn or Register.</h1>
            <Link to='/login'><button className='btn btn-primary mr-5'>Log In</button></Link>
            <Link to='/register'><button className='btn btn-secondary'>Register</button></Link>
        </div>
    );
};

export default Home;