import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <header className='header-one'>
      <nav className='one'>
        <span className='ecocalc'>Ecocalc</span>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard </Link>
          </li>
          {/* <li>
            <Link to="/services">Chatbot </Link>
          </li> */}
          {/* <li>
            <Link to="/contact">Login </Link>
          </li>
          <li>
            <Link to="/contact">Sign up </Link>
          </li> */}
        </ul>
      </nav>
      <hr></hr>
    </header>
  );
}


export default Header