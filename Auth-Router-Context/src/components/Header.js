import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);
    const handleSignOut = () => {
        userSignOut()
            .then(() => {})
            .catch(err => {console.error(err)})
    }
    return (
        <div className='bg-base-300'>
            <div className="navbar flex justify-between container mx-auto">
                <Link to='/' className="normal-case md:text-3xl text-2xl font-semibold">Awesome Auth</Link>
                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/home'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                    {user?.email ? 
                    <Link onClick={handleSignOut} className="btn btn-ghost normal-case text-xl">Sign Out</Link> :
                    <Link className="btn btn-ghost normal-case text-xl" to='/login'>Log In</Link>
                    }
                    {user?.email && <span>{user.email}</span>}
                </div>
            </div>
        </div>
    );
};

export default Header;