import React, {Component} from 'react'
import DogList from './DogList'
import CatList from './CatList'
import '../styles/availablePet.css'


class AvailablePets extends Component {
    constructor(){
        super()
        this.state={
            changePet: false
        }
    }

    

    togglePet = () => {
        console.log(this.changePet)
        this.setState(prevState =>({
            changePet: !prevState.changePet
        })) 
    }
    render(){
        console.log(this.changePet)
        return (
            <div className="available">
                <button onClick={this.togglePet}> Click for Cat/Dog</button>
                { !this.state.changePet ?
                <>
                    <div>  
                        <DogList />
                    </div>
                </>  
                :
                <>
                    <div>       
                        <CatList />
                    </div>
                </> 
                }      
            </div>
        )
    }
}
    
export default AvailablePets