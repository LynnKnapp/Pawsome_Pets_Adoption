import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaw } from '@fortawesome/free-solid-svg-icons'''

const Nav = () => {
    return (
        <nav>   
            <Link to="/"><h1>P<i class="fas fa-paw fa-xs"></i>WESOME PETS</h1></Link>
            <div>   
                <Link to="/available">Pets for Adoption</Link>
                <Link to="/adopt">Pets Recently Adopted</Link>
                <Link to="/about">About Us</Link>
            </div>    
        </nav>
    )
}

export default Nav