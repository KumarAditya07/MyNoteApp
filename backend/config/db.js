const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const connectDb = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            
            
    
        })
        console.log(`Connected to database: ${conn.connection.host}`);

    }catch(error){
     console.error(`Error : ${error.message}`);
     process.exit();
    }
}

module.exports = connectDb;