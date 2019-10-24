import React,{Component,} from 'react'
import axios from 'axios';



class Searchbar extends Component{
    constructor(props){
        super(props)
        this.state={
            search: '',
            searchResults: []
        }
    }

    
    handleChange=(e)=> {
        this.setState({
            search: e.target.value
        })
        
    }
    handleSubmit=(e) => {
        e.preventDefault()
        axios.get(`/animals/search?breed=${this.state.search}`)
            .then(res => {
                this.setState({
                    searchResults: res.data
                })
            }) 
            .catch(err => console.log(err))

        // create a new array from this.state.animals filtering by breed.
        // const filteredPets = this.state.animals.filter((pet) => {
        //     console.log('pet:', pet)
        //     //return true if the search matches an animal
        //     //search - String
        //     //animals - Array of objects
        //     //animal object - name, breed, sex, age, color
        //     //filtered results - Array of specific objects
        //     return true
        // })
            // this.setState(prevState => {
            //     return {
            //         searchResults: {this.state.searchResults}
            //     }
            // }
            // )   
    }

    render(){
         console.log(this.state.searchResults)
         const mappedSearchResults = this.state.searchResults.map(result =>{
           return  <div>
                <h1>{result.name}</h1>
                <img src={result.image} alt='pet' />
                <h1>{result.breed}</h1>
                <h1>{result.gender}</h1>
                <h1>{result.age}</h1>
             </div>
         })
        return(
            <div>
                <h1>Search by Breed</h1>
                <form onSubmit = {this.handleSubmit}>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                </form>
                {mappedSearchResults}
            </div>
        )
    }
}
export default Searchbar