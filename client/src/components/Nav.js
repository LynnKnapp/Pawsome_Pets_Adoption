import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <h1>PAWSOME PETS</h1>
            <Link to="/">About</Link>
            <Link to="/available">Available</Link>
            <Link to="/adopt">Adopt</Link>
        </nav>
    )
}

export default Nav