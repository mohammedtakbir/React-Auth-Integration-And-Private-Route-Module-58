import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'takbir' });
    const [loading, setLoading] = useState(true);
    //* create an user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    //* sign in an user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //* get currently sign in user info from firebase
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        //! ?????????????????????????
        return () => {
            unsubscribe();
        }
    }, []);

    //* sign out an user
    const userSignOut = () => {
        return signOut(auth)
    };
    //* sign in with google
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    };

    const authInfo = { user, createUser, signIn, userSignOut, signInWithGoogle, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;