import mongoose from "mongoose";

const configureDB = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb://localhost:27017/fullstack-test`
    );
    console.log(
      `\n🚀 MongoDB connected !! DB HOST: ${connection.connection.host}`
    );
  } catch (error) {
    console.log(`MONGODB connection FAILED`, error);
    process.exit(1);
  }
};

export default configureDB;
