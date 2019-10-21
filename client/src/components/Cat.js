import React from 'react'
import {Link} from 'react-router-dom'

const Cat = (props) => {

    return (
        <div className="indCat">
            <Link to={{pathname: '/adoption', state:{animalId: props._id, catArray: props.catArray}}}
            >Name: {props.name}</Link>
            <img src={props.image} alt='cat' />
            <h5>Breed: {props.breed}</h5>     
        </div>
    )
}

export default Cat

