import React, {Component} from 'react'
import Cat from './Cat'
import axios from 'axios'


class CatList extends Component {
    constructor() {
        super()
        this.state = {
            cats: []
        }
    }

    componentDidMount(){
        this.getKitties()
    }

    getKitties = () => {
        axios.get("/cats")
            .then(res => {
                this.setState({
                    cats: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const mappedCats = this.state.cats.map(cat => {
            // console.log(cat)
            return <Cat
            catArray= {this.state.cats}
                {...cat}
                key = {cat._id} 
                />
        })
        return (
            <>
                {mappedCats}
            </>
        )
    }
}

export default CatList