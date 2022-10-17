import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const handleSignOut = () =>{
        userSignOut()
        .then(() => {})
        .catch(err => console.error(err))
    }
    return (
        <nav className='bg-base-300 '>
            <div className="navbar flex justify-between container mx-auto">
                <Link className="normal-case text-3xl font-semibold" to='/'>Firebase Auth</Link>
                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>

                    {user?.email ? <Link onClick={handleSignOut} className="btn btn-ghost normal-case text-xl" to='/login'>Sign Out</Link> : <Link className="btn btn-ghost normal-case text-xl" to='/login'>LogIn</Link>}

                    <span>{user?.email}</span>
                </div>
            </div>
        </nav>
    );
};

export default Header;