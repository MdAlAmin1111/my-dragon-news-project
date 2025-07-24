import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const [nameError, setNameError] = useState('');
    const { createUser, setUserInfo, updateUser } = use(AuthContext);
    const [error, setError] = useState('');
    const navigateAfterRegistration = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        if (name.length < 3) {
            setNameError('Name should be at least 3 character');
        }
        else {
            setNameError('');
        }

        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;

                setError('');
                navigateAfterRegistration('/');
                alert('Registration Successful');
                updateUser({ displayName: name, photoURL: photoUrl })
                    .then(() => {
                        setUserInfo({ ...user, displayName: name, photoURL: photoUrl });
                    })
                    .catch((error) => {
                        setUserInfo(user);
                    })
            })
            .catch((error) => {

                const errorCode = error.code;
                setError(errorCode)
                // const errorMessage = error.message;
                // alert(errorMessage);

            })
    }

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-[750px] shrink-0 shadow-2xl py-15">
                <div className="card-body space-y-8">
                    <h1 className='text-4xl font-semibold text-center text-primary'>Register Your Account</h1>
                    <form onSubmit={handleRegister} className="fieldset px-25 space-y-2">
                        <label className="label font-semibold text-xl">Your Name</label>
                        <input required name='name' type="text" className="input w-full" placeholder="Enter Your Name" />
                        {
                            nameError && <p className='text-red-500'>${nameError}</p>
                        }
                        <label className="label font-semibold text-xl">Photo URL</label>
                        <input required name='photoUrl' type="text" className="input w-full" placeholder="Enter Photo URL" />
                        <label className="label font-semibold text-xl">Email Address</label>
                        <input required name='email' type="email" className="input w-full" placeholder="Enter Your Email Address" />
                        <label className="label font-semibold text-xl">Password</label>
                        <input required name='password' type="password" className="input w-full" placeholder="Enter Your Password" />
                        <label className="label">
                            <input type="checkbox" defaultChecked className="checkbox" />
                            Accept Terms & Conditions
                        </label>
                        {
                            error && <p className='text-error'>${error}</p>
                        }
                        <button type='submit' className="btn btn-neutral mt-4 bg-primary">Register</button>

                    </form>
                    <p className='text-center font-semibold text-accent'>Already Have An Account? <Link to={'/auth/login'} className='text-secondary'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;