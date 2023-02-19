const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const port = 3000
const uri = '/h'
let comidas = []


app.get(uri,(req,res)=>{
    
    res.setHeader('Access-Control-Alow-Origin' , '*')
    
    const id = `${Math.random()}`
    res.send(id);
    res.status(200)
})

app.listen(port,function(req,res){
    
})

/*this a repositori about what i have learn of every class SOMETHING THAT I HACE LEARN,

try to check correctly the URL in the App.get

the fecth funtion return a promise

when i have to use res.send() i have to put a string something

the send funtion is the object that return in the fetch/*
