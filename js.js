const express = require('express')
const app = express()
const URI = "/unirse"
const port = 8080
let comidas = []


app.get(URI,(req,res)=>{
    res.setHeader('content-type','text/html')
    let numero = Math.random()
    comidas.push(numero);  
    
})

app.listen(port,()=>{
    console.log('hola mundo');

})