import React from 'react'
import Carousel from './Carousel'
const Home = () => {
    return (
        <div className="homeMain">
            <h2>Finding Forever Homes Since 2009</h2>
            <Carousel />
            <section className="mission">
                <p>Pawesome Pets in Utah is working collaboratively with other animal rescue groups, city shelters and passionate individuals who are all dedicated to the mission of making Utah a no-kill state. We provide these no-kill solutions to reduce the number of homeless cats and dogs in Salt Lake County through education, rehabilitation, and re-homing these pets with the support and cooperation of our community.</p>
            </section>    
            <div className= 'succesStory'>
                <h4>Success Story</h4>
                <h2>Sweetened with Vanilla</h2>
            </div>
            <div className= 'image-container'>
                <div className='image'>
                    <img src='https://www.petfirst.com/wp-content/uploads/2017/08/Kids-and-Pets.jpg' alt="claire and her dog"/>
                    <div className='testimony'>
                        <p>For years, my daughter had been for a pet, but our apartment was too small. Once we moved into our first home, we took the plunge and contacted Pawesome Pets. We found our little sweetheart while looking online.  Now we are all happy and delighted to be together.  Our world is now complete.</p>
                    <h3>-Claire Ebbers & Vanilla</h3>
                 </div>
                </div>
            </div>       
        </div>
    )
}
export default Home