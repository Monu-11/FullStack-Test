import mongoose from "mongoose";
import Vehicle from "../models/vehicle.model.js";

mongoose.connect("mongodb://localhost:27017/fullstack-test");

const vehiclesData = [
  { type: "car", name: "Hatchback A" },
  { type: "car", name: "SUV B" },
  { type: "car", name: "Sedan C" },
  { type: "bike", name: "Cruiser X" },
  { type: "bike", name: "sports" },
];

async function seedDatabase() {
  try {
    await Vehicle.deleteMany({});
    await Vehicle.insertMany(vehiclesData);
    console.log("Seeding completed successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();
