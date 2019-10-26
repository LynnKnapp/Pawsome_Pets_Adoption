require('dotenv').config()
const express =require('express')
const app =express()
const morgan =require('morgan')
const mongoose =require('mongoose')
const PORT =process.env.PORT || 6004
const path = require("path")


app.use(express.json())
app.use(morgan('dev'))
// console.log(process.env.PASSWORD)
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0-ibfpt.mongodb.net/petAdoption?retryWrites=true&w=majority`
,
    {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: false,
        useUnifiedTopology: true

    }, () => console.log('connected to DB'))

app.use('/cats', require('./routes/catRoute.js')) 
app.use('/dogs', require('./routes/dogRoute.js')) 
app.use("/animals",require('./routes/searchRoute.js'))

app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () =>{
    console.log(6004)
})


