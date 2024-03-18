import express from "express";
import { allVehicle, bookVehicle } from "../controller/vehicle.controller.js";
const router = express.Router();

router.get("/all-vehicles", allVehicle);
router.post("/book-vehicle/:id", bookVehicle);

export default router;
