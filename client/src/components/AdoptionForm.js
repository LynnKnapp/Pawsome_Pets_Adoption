import React, {Component} from 'react'

class AdoptionForm extends Component{
    constructor(){
        super()
        this.state={
            name: "",
            emailaddress: "",
            phone: "",
            contactTime: "",   
            animalAdopting: ""

        }
        
    }
    handleChange = e =>{
        this.setState({
        [e.target.name]: e.target.value
        }, () => console.log(this.state))
    }
    handleSubmit = e =>{
        e.preventDefault()
        const submits = `
            name: ${this.state.name},
            emailaddress: ${this.state.emailaddress},
            phone: ${this.state.phone}
            
        `
        alert(submits)
    }
    render(){
        return(
            <div className='contact-form-container'>
              <form className= 'contact-form' onSubmit={this.handleSubmit}>

                <label>Full Name</label>
                <input
                type="text" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange} 
                placeholder="Name"/>
                
                <label>Email Address</label>
              <input
                type="email"
                name="emailaddress"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email Address"/>
                
                <label>Contact Number</label>
             <input
                type="tel" 
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="Contact Number"/>
            <button>Submit</button>       
            </form> 
            </div>
        )
    }
    
}
export default AdoptionForm