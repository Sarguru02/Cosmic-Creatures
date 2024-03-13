import "./Header.css"
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (

        <header className='header-one'>
            <nav className='one'>
                <span className='ecocalc'><span style={{ color: "green" }}>Eco</span>Calc</span>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/calc">Calculator</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard </Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}


export default Header
