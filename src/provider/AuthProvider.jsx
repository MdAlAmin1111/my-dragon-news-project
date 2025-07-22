import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    console.log(userInfo);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth).then(() => {
           alert('Successfully Logged Out');
        }).catch((error) => {
           alert(error);
        });;
    }

    const loginUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password );
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUserInfo(currentUser);
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const authData = {
        userInfo,
        setUserInfo,
        createUser,
        logOut,
        loginUser
    };


    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;