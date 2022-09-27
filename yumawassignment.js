const express = require('express');

const app = express()

app.get ("",(req,res)=>{
    
res.send("<h1>Hello Japan Using Node.js</h1>");

})
app.get("/about",(req,res)=>{
    res.send({
        Name:"Yu Yu Maw", 
        Hobby:"Learning new things"
    })

})

app.get("/yuyumaw",(req,res)=>{
    
    res.send("<h1>This is from YuYuMaw Page</h1>");

})

app.get("/cherry",(req,res)=>{
    res.send("<h1>Hello cherry Fool</h1>");
})

app.listen(5000,()=>{
    console.log('Server starting up at: port:5000:');
})