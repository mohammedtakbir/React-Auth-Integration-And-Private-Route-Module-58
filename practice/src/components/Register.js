import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext)
    // console.log(createUser('takbir3@gamil.com', 123654).then(res => {}).catch(err => console.error(err)))

    //* handler for create an user
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        //* create an user
        createUser(email, password)
            .then(res => {
                const user = res.user;
                form.reset();
                console.log(user);
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
        .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
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
                                <label className="">
                                    <small>Already have an Account?</small>
                                    <Link to='/login' className="label-text-alt link link-hover ml-3 text-blue-600">Log in</Link>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button className="btn btn-primary text-white">Register</button>
                            </div>
                        </form>
                        <div onClick={handleSignInWithGoogle} className="form-control mb-6 w-6/12 mx-auto">
                            <button className="btn btn-primary text-white">Sign in With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;