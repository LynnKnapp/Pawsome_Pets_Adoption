const express = require("express")
const searchRoute = express.Router()
const Dog = require("../models/dogSchema")
const Cat = require("../models/catSchema")

// starts with '/animals'
searchRoute.get("/search", (req, res, next) =>{
    const {breed} =req.query
    const pattern = new RegExp(breed.split(" ").join("\ "))
    Dog.find(
        {breed: {$regex: pattern, $options: "i"}},
        (err, dogs) => {
            if(err){
                res.status(500)
                return next(err)
            }
            if(!dogs.length){
                Cat.find(
                    {breed: {$regex: pattern, $options: "i"}},
                    (err, cats) =>{
                        if(err){
                            res.status(500)
                            return next(err)
                        }
                        if(cats){
                            return res.status(200).send(cats)
                        } else {
                            return res.send('Nothing was found with that search term')
                        }
                    }
                )
            } else {
                return res.status(200).send(dogs)
            }
        }
    )
})

module.exports = searchRoute