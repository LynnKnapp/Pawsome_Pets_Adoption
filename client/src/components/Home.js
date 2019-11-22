import React from 'react'
import Carousel from './Carousel'
import '../styles/home.css'
const Home = () => {
    return (
        <div className="homeMain">
            <h2>Finding Forever Homes Since 2009</h2>
            <Carousel />
            <section className="mission">
                <p>Pawesome Pets in Utah is working collaboratively with other animal rescue groups, city shelters and passionate individuals who are all dedicated to the mission of making Utah a no-kill state. We provide these no-kill solutions to reduce the number of homeless cats and dogs in Salt Lake County through education, rehabilitation, and re-homing these petswith the support and cooperation of our community.</p>
            </section>    
            <div className= 'succesStory'>
                <h4>Success Story</h4>
                <h2>Sweetened with Vanilla</h2>
            </div>
            <div className= 'image'>
                <img src="https://images.unsplash.com/photo-1556935382-a3f3a86d5c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="Claire, her daughter, and her cat, Vanilla"/>
                <p>For years, my daughter had been for a pet, but our apartment was too small. Once we moved into our first home, we took the plunge and contacted Pawesome Pets. We found our little sweetheart while looking online.  Now we are all happy and delighted to be together.  Our world is now complete.
                </p>      
                 <h3>-Claire Ebbers & Vanilla</h3>
            </div>       
        </div>
    )
}
export default Home