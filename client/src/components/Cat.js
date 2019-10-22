import React from 'react'
import {Link} from 'react-router-dom'

const Cat = (props) => {

    return (
        <div className="indCat">
            <h3> Name: {props.name}</h3>
            <img src={props.image} alt='cat' />
            <h2>Breed: {props.breed}</h2> 
            <h3>Gender: {props.gender}</h3>
            <h3>Age:{props.age}</h3>
            {props.goodWithKids ? <h3>Good with Kids: Yes!</h3> : <h3> Good with Kids: Unfortunately, No</h3>}
            {props.goodWithPets ? <h3>Good with Other Pets: Yes!</h3> : <h3> Good with Pets: Better kept with no other pets</h3>}
            <Link to={{pathname: '/adoption', state:{animalId: props._id, catArray: props.catArray} }}
                >Adopt Me</Link>
            
        </div>
    )
}

export default Cat

