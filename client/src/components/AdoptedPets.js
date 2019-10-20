import React from 'react'

const AdoptedPets = () => {
    return (
        <>
            <h2>They Found Their Forever Home!!</h2>
        <div className="adopt">
            <section className="adoptDog">
                <h1>Dogs</h1>
                <div>
                    <img src="https://images.pexels.com/photos/2055231/pexels-photo-2055231.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Shih Tzu"/>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/341378/pexels-photo-341378.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Camping Family" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1526363269865-60998e11d82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Poodle and a Pair"/>
                </div>
            </section>

            <section className="adoptCat">
                <h1>Cats</h1>
                <div>
                    <img src="https://images.pexels.com/photos/1838549/pexels-photo-1838549.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Lounging Cat"/>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1907666/pexels-photo-1907666.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Cat with Owner"/>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1521305/pexels-photo-1521305.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Cat in Grass"/>
                </div>
            </section>
        </div>
        </>
    )
}

export default AdoptedPets