import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
    const [accepted, setAccepted] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { createUser, updateUser, verifyEmail } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.pass.value;
        const name = form.name.value;
        const phone = form.phone.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                updateUser(name, phone)
                setError('');
                emailCheck();
                setSuccess('Registration Successful')
            })
            .catch(error => {
                console.error(error)
                setSuccess('')
                setError(error.message);
            })
    }
    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }

    const emailCheck = () => {
        verifyEmail()
            .then(() => {
                alert('Please check your email spam box and verify your email.')
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-6">
                    <h1 className="text-5xl font-bold">Please Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Full Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your full name" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Phone Number</span>
                            </label>
                            <input type="number" name="phone" placeholder="Enter your Phone Number" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered input-primary w-full max-w-xs" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name='pass' placeholder="Enter your password" className="input input-bordered input-primary w-full max-w-xs" required />
                        </div>

                        <div className="form-control">
                            <div className="flex flex-start">
                                <input type="checkbox" className="checkbox checkbox-primary" onClick={handleAccepted} />
                                <small className=" ml-2 font-semibold">Accept
                                    <Link to="/terms"> <span className='text-primary'>Terms and Conditions</span></Link></small>
                            </div>

                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary" type='submit' disabled={!accepted}>Register</button>
                            <small className='mt-3 font-semibold'>Already have an account? <Link to='/login'><span className='text-primary'>Login.</span></Link></small>
                        </div>
                        <div className='mt-3 text-success'>
                            <p>{success}</p>
                        </div>
                        <div className='mt-3 text-error'>
                            <p>{error}</p>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Register;