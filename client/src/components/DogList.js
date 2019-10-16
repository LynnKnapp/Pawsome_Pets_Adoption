import React, {Component} from 'react'
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
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}
export default DogList