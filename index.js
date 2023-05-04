const express = require('express');
const app= express();
// const cors = require('cors');
const port = process.env.PORT || 5000;
// load Data
const chefs = require('./data/data.json');

// cors middleware form express
//app.use(cors());

app.get('/',(req,res)=> {
    res.send('palatableMaker-server running');
})
// all chefs and recipes 
app.get('/chefs', (req, res)=>{
    res.send(chefs);
})

//specific chefs
app.get('/chefs/:id',(req,res)=> {
    const id = req.params.id;
    const chefSelected = chefs.find(c=>c._id==id);
    res.send(chefSelected);

})
// app listen port number 5000
app.listen(port,()=> {
    console.log(`check-recipe-server api is running ${port}`);
})