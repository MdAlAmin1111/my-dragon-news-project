import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h3 className='font-bold mb-4'>Login With</h3>
            <div className='space-y-3'>
                <button className='btn btn-outline w-full'><FcGoogle size={25}></FcGoogle> Login With Google</button>
                <button className='btn btn-outline w-full'><FaGithub size={25}></FaGithub> Login With Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;