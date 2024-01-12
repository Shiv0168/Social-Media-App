import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_STRING);
    console.log(`DB CONNNECTED :) ${connect.connection.name}`);
  } catch (error) {
    console.log(`DB connection error : ${error}`);
    process.exit(1);
  }
};

export default dbConnection;
