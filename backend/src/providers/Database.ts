import mongoose from 'mongoose';
//import config from "config";

const dbURI = 'mongodb+srv://uzairwaseem29:1234567890@cluster0.dl9dqds.mongodb.net/first?retryWrites=true&w=majority';

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
