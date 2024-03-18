import express from "express";
import dotenv from "dotenv";
import configureDB from "./config/database.js";
import vehicleRouter from "./routes/vehicle.routes.js";

dotenv.config({
  path: ".env",
});

const app = express();

app.use(express.json());

// database connection

configureDB();

// api routes
app.use("/api/v1", vehicleRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on port: ${process.env.PORT} 🚀`);
});
