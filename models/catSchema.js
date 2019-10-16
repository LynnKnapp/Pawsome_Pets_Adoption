const mongoose = require("mongoose")
const Schema = mongoose.Schema

const catSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        default: "unknown"
    },
    age: {
        type: Number
    },
    goodWithKids: {
        type: Boolean,
        default: false
    },
    goodWithPets: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        required: true
    },
    furColor: {
        type: String,
        default: "unknown"
    }
})

module.exports = mongoose.model("Cat", catSchema)