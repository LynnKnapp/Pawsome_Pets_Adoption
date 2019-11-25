import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaw } from '@fortawesome/free-solid-svg-icons'''

const Nav = (props) => {
    return (
        <div className='navbar'> 
            <div className='header'>  
                <Link className={props.location.pathname === "/" ? "active" : ""} to="/"><h1>P<i className="fas fa-paw fa-xs"></i>WESOME PETS</h1></Link>
            </div>
            <div className='links'>
                <Link className={props.location.pathname === "/available" ? "active" : ""} to="/available">Available Pets</Link>
                <Link className={props.location.pathname === "/search" ? "active" : ""} to="/search">Search Pets </Link>
                <Link className={props.location.pathname === "/adopt" ? "active" : ""} to="/adopt">Recently Adopted</Link>
                <Link className={props.location.pathname === "/about" ? "active" : ""} to="/about">About Us </Link>
            </div> 
            <div className='donate'>
                <Link to="/donate" className="donateBtn">Donate</Link> 
            </div>
        </div>
    )
}

export default withRouter(Nav)