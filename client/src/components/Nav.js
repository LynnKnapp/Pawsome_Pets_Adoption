import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaw } from '@fortawesome/free-solid-svg-icons'''

const Nav = () => {
    return (
        <nav>   
            <Link to="/"><h1>P<i class="fas fa-paw fa-xs"></i>WESOME PETS</h1></Link>
            <div>   
                <Link to="/available">Available</Link>
                <Link to="/adopt">Adopt</Link>
                <Link to="/about">About</Link>
            </div>    
        </nav>
    )
}

export default Nav