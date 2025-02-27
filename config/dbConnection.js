import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to mongoDB `);
  } catch (error) {
    console.log(`Error in Mongodb Connection ${error}`);
  }
};

export default connectDB;
