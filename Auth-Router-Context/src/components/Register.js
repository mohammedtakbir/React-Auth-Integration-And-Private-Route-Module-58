import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Register = () => {
    const {createUser, signInWithGoogle} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password) //? createUserWithInEmailAndPassword jehetu promise return kore, tai createUserWithInEmailAndPassword ke jodi kono function theke return kora hoy, tahole promise handle korte .then & .catch dite hobe. 
        .then(res => {
            const user = res.user;
            console.log(user)
        })
        .catch(err => {
            console.error(err);
        })

    };
    //* sign in with google
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(res => {
            const user = res.user;
            console.log(user);
        })
        .catch(err => {
            console.error(err);
        })
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-5">Please Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover">Already have an Account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Register</button>
                            </div>
                        </form>
                        <button onClick={handleSignInWithGoogle} className="btn btn-primary w-6/12 mx-auto mb-5 text-white">SignIn With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;