const express = require('express');
const notes = require('./data/notes')
const dotenv = require('dotenv');
const cors = require('cors');


const app = express();
app.use(cors());
dotenv.config();

app.get('/',(req,res)=>{
res.send('Api is running ');
});

app.get('/api/notes',(req,res)=>{
    res.json(notes);
   
    
});

app.get('/api/notes/:id',(req,res)=>{
    const note = notes.find((n)=> n._id === req.params.id);

    res.send(note);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`we are live @ PORT ${PORT}`))