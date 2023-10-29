const express = require('express')
const app = express()
app.get("/",(req,res)=>{
    res.json({"Tasklist":["T1","T2","T3"] })
})

app.listen(5000,()=>{console.log("server started")})