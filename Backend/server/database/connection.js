const mongoose = require('mongoose');

const connectDB = async ()=>{
  try{
  const conn = await mongoose.connect("mongodb://127.0.0.1:27017/empmng");
  console.log(`MongoDB connected: ${conn.connection.host}`);
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }
}
module.exports = connectDB;