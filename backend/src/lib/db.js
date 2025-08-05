import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Is Connected:${conn.connection.host}`);
  } catch (error) {
    console.log("Error is connecting with MongoDB", error);
    process.exit(1); // means failure
  }
};
