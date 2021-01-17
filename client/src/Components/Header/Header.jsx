import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (

        <div className='header'>
            {/* <Link to='/'>
                <div className="image">
                    <img src="https://www.flaticon.com/svg/static/icons/s onclick="window.location.href='/'" />
                </div>
            </Link> */}
            <div className='header__contents'>
            <Link to='/' style={{ textDecoration: "none" }}><h4 className='header__taps'> Home </h4></Link>
                <Link to='/educ' style={{ textDecoration: "none" }}><h4 className='header__taps'> Education </h4></Link>
                <Link to='/experience' style={{ textDecoration: "none" }}><h4 className='header__taps'> Experience</h4></Link>
                <Link to='/project' style={{ textDecoration: "none" }}><h4 className='header__taps'> Project </h4></Link>
                <Link to='/skills' style={{ textDecoration: "none" }}><h4 className='header__taps'> Skills</h4></Link>
                <Link to='/contact' style={{ textDecoration: "none" }}><h4 className='header__taps'> Contact</h4></Link>

            </div>
        </div>
    )
}

export default Header;