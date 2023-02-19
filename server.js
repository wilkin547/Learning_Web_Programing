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