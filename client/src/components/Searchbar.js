import React,{Component,} from 'react'
import axios from 'axios';

class Searchbar extends Component{
    constructor(props){
        super(props)
        this.state={
            search: '',
            animals: [],
            
        }
    }
    componentDidMount() { 
          axios.get('/cats')
          .then(res =>{
            console.log('res.data in search for cats',res.data)
            this.setState({
                animals: [res.data]
            })
        })
        .catch(err => console.log(err))
        
        axios.get('/dogs')
        .then(res =>{
            console.log(res.data)
            this.setState({
                animals: [res.data]
            })
        })
        .catch(err => console.log(err))
        
    }
    
    handleChange=(e)=> {
        this.setState({
            search: e.target.value
        })
        
    }
    handleSubmit=(e) => {
        e.preventDefault()
        .then(res =>{
            this.setState(prevState =>({
                search: this.state.search,
                animals: this.state.animals
            }))    
        })
        .catch(err => console.log(err))
    }
    render(){
        console.log(this.state)
        return(
            <div>
            </div>
        )
    }
}
export default Searchbar