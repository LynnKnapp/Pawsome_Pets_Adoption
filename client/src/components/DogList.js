import React, {Component} from 'react'
import Dog from './Dog'
import axios from 'axios'

class DogList extends Component {
    constructor() {
        super()
        this.state = {
            dogs: []
        }
    }

    componentDidMount(){
        this.getDoogies()
    }

    getDoogies = () => {
        axios.get("/dogs")
            .then(res => {
                this.setState({
                    dogs: res.data
                })
            })
            .catch(err => console.log(err))
    }

    

    render() {
        const mappedDogs = this.state.dogs.map(dog => {
            // console.log(dog)
           return <Dog 
                {...dog}
                key = {dog._id}
            />
        })
        return (
            <div>
            {mappedDogs}
            </div>
        )
    }
}
export default DogList