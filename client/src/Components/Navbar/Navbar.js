import React from 'react'
import { Link} from 'react-router-dom'
import {useLogOut} from '../../Hooks/useLogOut'
import { useAuthContext } from '../../Hooks/useAuthContext'
import './Navbar.css'
const Navbar = () => {
    const{user}=useAuthContext();
    const {logout}=useLogOut();
    const handleClick=()=>{
        logout();

    }

    return (
        <>
            <nav>
                <div className="maindiv">
                <div className="logo">
                    <Link to="/" style={{color:'black'}}><h1>WorkoutBuddy</h1></Link>
                </div>
                <div className="acounts">
                    {!user && (<Link to={'/signup'}>SignUp</Link>)}
                    {!user && (<Link to={'/signin'}>SignIn</Link>)}
                    {/* <Link to={'/logout'}>LogOut</Link> */}
                    {user && <span>{user.email}</span>}
                    {user && <button onClick={handleClick}>LogOut</button>}
                </div>
                <div className="menu">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/service'}>Services</Link>
                    <Link to={'/contact'}>Contact</Link>
                </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar