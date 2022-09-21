import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/users'>Users</Link>
            </li>
            <li>
                <Link to='/repos'>Repos</Link>
            </li>
        </div>
    )
}

export default Navbar
