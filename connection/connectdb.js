// connection of database
let mongoose = require('mongoose')
let URI = "mongodb+srv://Nitishbabu:nitish9966@cluster0.tsuqmmv.mongodb.net/"

let
connectdb = async()=>{
try{
let con = mongoose.connect(URI,{useUnifiedTopology :true, useNewUrlParser: true})
  console.log("database is connected with the given URI ")
}

catch(err){
console.log(err)
}}
module.exports = connectdb

