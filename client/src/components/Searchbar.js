import React,{Component,} from 'react'
import '../styles/styles1.css'
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

        
    }

    render(){
         console.log(this.state.searchResults)
         const mappedSearchResults = this.state.searchResults.map(result =>{
           return  <div className="indPet">
                <img src={result.image} alt='pet' />
                <h3>{result.name}</h3>
                <h5>{result.breed}</h5>
                <h5>{result.gender}</h5>
                <h5>{result.age}</h5>
             </div>
         })
        return(
            <div className='searchBar'>
                <h1>Search by Breed</h1>
                <div className='form-container'>
                    <form onSubmit = {this.handleSubmit}>
                        <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                    </form>
                </div>
                <div className='searchPet'>
                    <div className="available">
                        {mappedSearchResults}
                    </div>
                </div>   
            </div>
        )
    }
}
export default Searchbar