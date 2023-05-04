const express = require('express');
const app= express();
const cors = require('cors');
const port = process.env.PORT || 5000;
//load data
const chef = require('./data/data.json');

// cors middleware form express
app.use(cors());

app.get('/',(req,res)=> {
    res.send('palatableMaker-server running');
})

// app listen port number 5000
app.listen(port,()=> {
    console.log(`check-recipe-server api is running ${port}`);
})