import mongoose from 'mongoose';
//import config from "config";

const dbURI = 'mongodb+srv://f200282:Ahmed9211@cluster0.jtmatto.mongodb.net/zzbondcipher?retryWrites=true&w=majority';

async function connectDB() {
  try {
    await mongoose.connect(dbURI);
    console.log("Connected to database.");
  } catch (error) {
    console.log("Cannot connect to database.", error);
    //process.exit(1);
  }
}
  
  export default connectDB
