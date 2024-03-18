import Vehicle from "../models/vehicle.model.js";

export const allVehicle = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({});
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const bookVehicle = async (req, res) => {
  const { firstName, lastName, name, bookingStartDate, bookingEndDate } =
    req.body;
  const { id } = req.params;
  try {
    const vehicle = await Vehicle.findById(id);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    if (vehicle.booked) {
      return res.status(400).json({ message: "Vehicle already booked" });
    }
    vehicle.firstName = firstName;
    vehicle.lastName = lastName;
    vehicle.name = name;
    vehicle.booked = true;
    vehicle.bookingStartDate = bookingStartDate;
    vehicle.bookingEndDate = bookingEndDate;
    await vehicle.save();
    res.status(201).json({ message: "Booking successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
