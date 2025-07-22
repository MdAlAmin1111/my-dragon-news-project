import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-[750px] shrink-0 shadow-2xl py-15">
                <div className="card-body space-y-10">
                    <h1 className='text-4xl font-semibold text-center text-primary'>Login Your Account</h1>
                    <form className="fieldset px-25 space-y-3">
                        <label className="label font-semibold text-xl">Email Address</label>
                        <input type="email" className="input w-full" placeholder="Enter Your Email Address" />
                        <label className="label font-semibold text-xl">Password</label>
                        <input type="password" className="input w-full" placeholder="Enter Your Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4 bg-primary">Login</button>
                    </form>
                    <p className='text-center font-semibold text-accent'>Don't Have An Account? <Link to={'/auth/register'} className='text-secondary'>Resister</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;