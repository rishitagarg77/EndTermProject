import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = process.env.DB;
  try {
    mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");

    return { connectionInstance: mongoose.connection };
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};

export default Connection;
