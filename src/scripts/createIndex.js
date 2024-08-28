import mongoose from "mongoose";
import connectDB from "../config/db.js";
import { UserModel } from "../models/index.js";

const createIndexes = async () => {
  try {
    await connectDB();

    await UserModel.createIndexes({ email: 1 });
    console.log("Indexes created successfully");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error creating indexes:", error);
    mongoose.connection.close();
  }
};
createIndexes();
