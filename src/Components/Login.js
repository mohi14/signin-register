import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Login = () => {
    const [userEmail, setUserEmail] = useState('')
    const navigate = useNavigate()
    const { SignIn, ForgetPassword } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        SignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');

                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);

            })
    }
    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
    }

    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('Please enter your email address.')
            return;
        }
        ForgetPassword(userEmail)
            .then(() => {
                alert('Password Reset email sent. Please check your email inbox or spam.')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-6">
                    <h1 className="text-5xl font-bold">Please Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter your email" className="input input-bordered input-primary w-full max-w-xs" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered input-primary w-full max-w-xs" required />
                            <label className="label font-semibold">
                                <Link href="#" className="label-text-alt">Forgot password?</Link><Link className="label-text-alt link link-hover" onClick={handleForgetPassword}>Reset</Link>
                            </label>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary" type='submit'>Login</button>

                            <small className='mt-3 font-semibold'>Don't have an account? <Link to='/register'><span className='text-primary'>Register.</span></Link></small>

                            <div className='mt-3 text-error'>
                                <p>{error}</p>
                            </div>
                        </div>
                    </form>

                </div>
            </div >
        </div >
    );
};

export default Login;