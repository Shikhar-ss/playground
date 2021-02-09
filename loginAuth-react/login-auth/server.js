const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use('/login',(req,res)=>{
    console.log("REQUEST",req.body)
    res.send({
        token:'test1234'
    });
});

app.listen(8080, ()=>{
    console.log("API running on /login");
})