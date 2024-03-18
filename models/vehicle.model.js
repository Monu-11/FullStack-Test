import mongoose from "mongoose";
import { Schema } from "mongoose";

const vehicleSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  booked: {
    type: Boolean,
    default: false,
  },
  bookingStartDate: Date,
  bookingEndDate: Date,
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

export default Vehicle;
