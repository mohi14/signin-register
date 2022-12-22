import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const MainHome = () => {
    const { LogOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        LogOut()
            .then(() => {
                navigate('/')
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='mt-36'>
            <h1 className='text-4xl mb-10'>Welcome to our website. You have successfully logged in.</h1>
            <button className='btn btn-accent' onClick={handleLogOut}>Log Out</button>
        </div>
    );
};

export default MainHome;