const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dogSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        default: "unknown"
    },
    size: {
        type: String,
        enum: ["small", "medium", "large", "extra large"]
    },
    age: {
        type: Number
    },
    shed: {
        type: Boolean,
        default: true
    },
    goodWithKids: {
        type: Boolean,
        default: true
    },
    goodWithPets: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        required: true,
    },
    furColor: {
        type: String,
        default: "unknown"
    }
})

module.exports = mongoose.model("Dog", dogSchema)