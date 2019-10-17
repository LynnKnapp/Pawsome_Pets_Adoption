import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <nav>
            
            <h1>P<FontAwesomeIcon icon={faPaw} size="xs" transform={{ rotate: -40 }} />WESOME PETS</h1>
            <div>
                <Link to="/">About</Link>
                <Link to="/available">Available</Link>
                <Link to="/adopt">Adopt</Link>
            </div>
            
        </nav>
    )
}

export default Nav