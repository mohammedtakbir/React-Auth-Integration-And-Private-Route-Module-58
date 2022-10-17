import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'takbir' });
    //* loader
    const [loading, setLoading] = useState(true);

    //* create an user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //* Sign in an user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    //* get current user info from firebase
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        //? why are we use this shit?
        //! ???????????????????????????
        return () =>{
            unsubscribe();
        }
    }, []);

    //* user sign out
    const userSignOut = () => {
        return signOut(auth)
    };

    //* Sign in with Google
    const googleProvider = new GoogleAuthProvider();  
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    };

    const authInfo = { user, createUser, signInUser, userSignOut, signInWithGoogle, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;