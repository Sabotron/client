import '../css/NavBar.css';
import Cookies from 'universal-cookie'
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const cookies = new Cookies();
const NavBar = (props) => {
    const eraseCookies = () => {
        cookies.remove('id');
        cookies.remove('username');
    }
    return (
        <>
            <div className='nav-container'>
                <p className='p-username'> User: {props.name}</p>
                <nav className='navbar'>
                    <ul>
                    <li className='li-item' onClick={() => eraseCookies()}> <Link to="/" > Logout </Link></li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </>
    )
}
export default NavBar