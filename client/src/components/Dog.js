import React from 'react'


const Dog = (props) => {
    
        return (
            <div>
                <h3>Name: {props.name}</h3>
                <img src={props.image} alt='dog'/>
                <h5>Breed: {props.breed}</h5>
                <h5>Gender: {props.gender}</h5>
                <h5>Size: {props.size}</h5>
                <h5>Age: {props.age}</h5>
                <h5>Color: {props.furColor}</h5>
                {props.shed ? <h5>Sheds: Yes</h5> : <h5>Sheds: No</h5>}
                {props.goodWithKids ? <h5>Good with Kids: Yes!</h5> : <h5> Good with Kids: Unfortunately, No</h5>}
                {props.goodWithPets ? <h5>Good with Other Pets: Yes!</h5> : <h5>Good with Kids: Better kept with no other pets</h5>}
            </div>
        )
    }

export default Dog