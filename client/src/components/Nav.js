import React from 'react'
import { Link, withRouter } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaw } from '@fortawesome/free-solid-svg-icons'''

const Nav = (props) => {
    return (
        <nav>   
            <Link to="/"><h1>P<i className="fas fa-paw fa-xs"></i>WESOME PETS</h1></Link>
            <div>   
                <Link to="/available">Adoption</Link>
                <Link to="/search">Search Pets</Link>
                <Link to="/adopt">Recently Adopted</Link>
                <Link to="/about">About Us</Link>
            </div>
            <div className="donate">
                <Link to="/donate" className="donateBtn">Donate</Link>
            </div>
        </nav>
    )
}

export default withRouter(Nav)