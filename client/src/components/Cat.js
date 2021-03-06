import React from 'react'
import {Link} from 'react-router-dom'

const Cat = (props) => {
    return (
        <div className="indPet">
            <img src={props.image} alt='cat' />
             <div className= 'petInfo'>
                <h3>Name: {props.name}</h3>
                <h5>Breed: {props.breed}</h5>
                <h5>Gender: {props.gender}</h5>
                <h5>Age: {props.age}</h5>
                <h5>Color: {props.furColor}</h5>
                {props.goodWithKids ? <h5>Good with Kids: Yes!</h5> : <h5> Good with Kids: Unfortunately, No</h5>}
            {   props.goodWithPets ? <h5>Good with Other Pets: Yes!</h5> : <h5> Good with Pets: Better kept with no other pets</h5>}
             </div>
             <div className='adoptMe'>
                <Link to={{pathname: '/adoption', state:{animalId: props._id, catArray: props.catArray} }}
                >Click Here to Adopt Me</Link>
             </div>   
        </div>
    )
}
export default Cat