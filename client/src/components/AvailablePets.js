import React from 'react'
import DogList from './DogList'
import CatList from './CatList'

const AvailablePets = () => {

        return (
            <div className="available">
                <button>Change View</button>
                <DogList />
                <CatList />
            </div>
        )
    }

    
export default AvailablePets