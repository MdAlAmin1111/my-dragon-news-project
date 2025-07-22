import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { loginUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                alert(`successfully logged in using ${userCredential.user.email}`);
                // Signed in 
                // const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
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
                        <input name='email' type="email" className="input w-full" placeholder="Enter Your Email Address" />
                        {/* password  */}
                        <label className="label font-semibold text-xl">Password</label>
                        <input name='password' type="password" className="input w-full" placeholder="Enter Your Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
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