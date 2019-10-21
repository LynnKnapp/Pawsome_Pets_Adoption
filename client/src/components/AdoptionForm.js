import React, {Component} from 'react'

class AdoptionForm extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div>
            <h2>Please fill out this form if interested in adopting a pet.</h2>
              <form>
                <select>
                    <option value="cat">Cat</option>
                    <option value="dog">Dog</option>
                </select>    
                <input
                type="text" 
                name="name" 
                value={name} 
                onChange={handleChange} 
                placeholder="Name"/>
              <input
                type="email"
                name="emailaddress"
                value={email}
                onchange={handleChange}
                placeholder="Email Address"/>
             <input
                type="tel" 
                name="usrtel"
                value={phone}
                onChange={handleChange}
                placeholder="Contact Number"/>
             <input
                type="text"
                name="contact-time"
                value={contact-time}
                onchange={handleChange} 
                placeholder="Best time to contact" />

                
            </form> 
            </div>
        )
    }
    
}
export default AdoptionForm