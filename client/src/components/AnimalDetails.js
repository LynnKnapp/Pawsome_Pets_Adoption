import React from 'react'
import { withRouter } from 'react-router-dom'
import AdoptionForm from './AdoptionForm.js'

const AnimalDetails = (props) => {
    console.log(props)
    
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
            <AdoptionForm />    
        </div>
    )
}


export default withRouter(AnimalDetails)