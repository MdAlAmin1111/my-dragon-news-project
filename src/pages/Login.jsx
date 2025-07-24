import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                navigate(`${location.state ? location.state : '/'}`);
                alert(`successfully logged in using ${userCredential.user.email}`);
                // Signed in 
                // const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;

                // const errorMessage = error.message;
                setError(errorCode);

                // alert(errorMessage)
            });;
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-[750px] shrink-0 shadow-2xl py-15">
                <div className="card-body space-y-10">
                    <h1 className='text-4xl font-semibold text-center text-primary'>Login Your Account</h1>
                    <form onSubmit={handleLogin} className="fieldset px-25 space-y-3">
                        {/* email  */}
                        <label className="label font-semibold text-xl">Email Address</label>
                        <input required name='email' type="email" className="input w-full" placeholder="Enter Your Email Address" />
                        {/* password  */}
                        <label className="label font-semibold text-xl">Password</label>
                        <input required name='password' type="password" className="input w-full" placeholder="Enter Your Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        {/* error message  */}

                        {error && <p className="text-error">${error}</p>}

                        {/* submit button  */}
                        <button type='submit' className="btn btn-neutral mt-4 bg-primary">Login</button>
                    </form>
                    <p className='text-center font-semibold text-accent'>Don't Have An Account? <Link to={'/auth/register'} className='text-secondary'>Resister</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;