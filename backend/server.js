const express = require('express');
const notes = require('./data/notes')
const dotenv = require('dotenv');
const cors = require('cors');
const connectDb = require('./config/db');

    const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');


const app = express();
app.use(cors());
dotenv.config();
connectDb();
app.use(express.json());

app.get('/',(req,res)=>{
res.send('Api is running ');
});

app.get('/api/notes',(req,res)=>{
    res.json(notes);
   
    
});

app.use('/api/users',userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`we are live @ PORT ${PORT}`))