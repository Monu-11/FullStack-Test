import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import configureDB from "./config/database.js";
import vehicleRouter from "./routes/vehicle.routes.js";

dotenv.config({
  path: ".env",
});

const app = express();

app.use(express.json());
app.use(cors());

// database connection

configureDB();

// api routes
app.use("/api/v1", vehicleRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port: ${process.env.PORT || 3000} 🚀`);
});
