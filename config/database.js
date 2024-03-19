import mongoose from "mongoose";
// # MONGO_URI=mongodb+srv://singh:singh@cluster0.nkdobkp.mongodb.net
// MONGO_URI=mongodb://localhost:27017/fullstack-test
const configureDB = async () => {
  try {
    const connection = await mongoose.connect(
      `mongodb+srv://singh:singh@cluster0.nkdobkp.mongodb.net/fullstack-test`
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
