import mongoose from "mongoose";

const connectToMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connection established");
    
  } catch (error) {
    console.log("Error connecting database", error.message);
  }
};

export default connectToMongodb;
