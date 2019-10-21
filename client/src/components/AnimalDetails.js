import React from 'react'
import { withRouter } from 'react-router-dom'
import AdoptionForm from './AdoptionForm.js'

const AnimalDetails = (props) => {
    
    let currentAnimal

    if(props.location.state.dogArray){
        currentAnimal = props.location.state.dogArray.find(dog => dog._id === props.location.state.animalId)
    } else if(props.location.state.catArray) {
        currentAnimal = props.location.state.catArray.find(cat => cat._id === props.location.state.animalId)
    }

    console.log(currentAnimal)
    
    // console.log(props.location.state.catArray.indexOf(props.location.state.animalId))
    return (
        <div>
            <h1>{currentAnimal.name}</h1>
            <h2>{currentAnimal.breed}</h2>
            <h3>Gender: {currentAnimal.gender}</h3>
            <h3>Age:{currentAnimal.age}</h3>
            {props.goodWithKids ? <h3>Good with Kids: Yes!</h3> : <h3> Good with Kids: Unfortunately, No</h3>}
            {props.goodWithPets ? <h3>Good with Other Pets: Yes!</h3> : <h3> Good with Pets: Better kept with no other pets</h3>}

            <AdoptionForm />    
        </div>
    )
}


export default withRouter(AnimalDetails)