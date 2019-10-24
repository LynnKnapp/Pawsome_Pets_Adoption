import React from 'react'
import { Link, withRouter } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaw } from '@fortawesome/free-solid-svg-icons'''

const Nav = (props) => {
    return (
        <nav>   
            <Link className={props.location.pathname === "/" ? "active" : ""} to="/"><h1>P<i className="fas fa-paw fa-xs"></i>WESOME PETS</h1></Link>
            <div>   
<<<<<<< HEAD
                <Link to="/available">Adoption</Link>
                <Link to="/search">Search Pets</Link>
                <Link to="/adopt">Recently Adopted</Link>
                <Link to="/about">About Us</Link>
=======
                <Link className={props.location.pathname === "/available" ? "active" : ""} to="/available">Adoption</Link>
                <Link className={props.location.pathname === "/adopt" ? "active" : ""} to="/adopt">Recently Adopted</Link>
                <Link className={props.location.pathname === "/about" ? "active" : ""} to="/about">About Us</Link>
>>>>>>> 44c7c852d580c83c8f716fb8ff80670b39511976
            </div>
            <div className="donate">
                <Link to="/donate" className="donateBtn">Donate</Link>
            </div>
        </nav>
    )
}

export default withRouter(Nav)