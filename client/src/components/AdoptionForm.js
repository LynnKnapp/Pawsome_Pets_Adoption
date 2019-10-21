import React, {Component} from 'react'

class AdoptionForm extends Component{
    constructor(){
        super()
        this.state={
            name: "",
            emailaddress: "",
            usrtel: "",
            contactTime: ""

        }
        
    }
    handleChange = e =>{
        this.setState({
        [e.target.name]: e.target.value
        })
    }
    handleSubmit = e =>{
        e.preventDefault()
        const submits = `
            name: ${this.state.name},
            emailaddress: ${this.state.emailaddress},
            usrtel: ${this.state.usrtel},
            contactTime: ${this.state.contactTime}
        `
        alert(submits)
    }
    render(){
        return(
            <div>
            <h2>Please fill out this form if interested in adopting this pet.</h2>
              <form onSubmit={this.handleSubmit}> 
                Full Name<input
                type="text" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange} 
                placeholder="Name"/>Email Address
              <input
                type="email"
                name="emailaddress"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email Address"/>Contact Number
             <input
                type="tel" 
                name="usrtel"
                value={this.state.usrtel}
                onChange={this.handleChange}
                placeholder="Contact Number"/>
            <select>
                <option placeholder="selectOne">Select pet to adopt</option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
            </select>       
            <select>
                <option placeholder="Best time to contact">Best time to contact</option>
                <option name="contactTime" value="morning">Morning</option>
                <option name="contactTime" value="afternoon">Afternoon</option>
            </select>
            <button onChange={this.handleSubmit}>Submit</button>       
            </form> 
            </div>
        )
    }
    
}
export default AdoptionForm