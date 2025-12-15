
const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://vdevanathan222:deva1234@cluster0.jiqsgz5.mongodb.net/?appName=Cluster0')

.then(()=>{
    console.log("The server is connected")
})

.catch((Error)=>{
    console.log("Connection failed", Error);
})

module.exports = mongoose.connection