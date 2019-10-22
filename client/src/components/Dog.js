import React from 'react'
import {Link} from 'react-router-dom'


const Dog = (props) => {    
        return (
            <div className="indDog">
                <h3> Name: {props.name}</h3>
                <img src={props.image} alt='dog'/>
                <h2>Breed: {props.breed}</h2>
                <h3>Gender: {props.gender}</h3>
                <h3>Size: {props.size}</h3>
                <h3>Age: {props.age}</h3>
                {props.shed ? <h4>Sheds: Yes</h4> : <h4>Sheds: No</h4>}
                {props.goodWithKids ? <h4>Good with Kids: Yes!</h4> : <h4> Good with Kids: Unfortunately, No</h4>}
                {props.goodWithPets ? <h4>Good with Other Pets: Yes!</h4> : <h4>Good with Kids: Better kept with no other pets</h4>}
                <Link to={{pathname: '/adoption', state:{animalId: props._id, dogArray: props.dogArray} }}
                >Adopt Me</Link>
            </div>
            
        )
    }

export default Dog