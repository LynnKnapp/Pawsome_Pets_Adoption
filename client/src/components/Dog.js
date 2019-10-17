import React from 'react'


const Dog = (props) => {
    
        return (
            <div>
                <h3>Name: {props.name}</h3>
                <img src={props.image} alt='dog'/>
                <h5>Breed: {props.breed}</h5>
                <h5>Size: {props.size}</h5>
                <h5>Age: {props.age}</h5>
                <h5>Color: {props.furColor}</h5>
                <h5>Sheds: {props.shed}</h5>
                <h5>Good With Kids: {props.goodWithKids}</h5>
                <h5>Good with Pets: {props.goodWithPets}</h5>
            </div>
        )
    }

export default Dog