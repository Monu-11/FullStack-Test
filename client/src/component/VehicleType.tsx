import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";

interface Vehicle {
  _id: string;
  type: string;
  name: string;
}

interface VehicleTypeProps {
  value: string;
  setVehicleType: (value: string) => void;
  numberOfWheels?: number | null;
  setVehicleId: (value: string) => void;
}

const VehicleType = ({
  value,
  setVehicleType,
  numberOfWheels,
  setVehicleId,
}: VehicleTypeProps) => {
  const [data, setData] = useState<Vehicle[]>([]);
  const [filterData, setFilterData] = useState<Vehicle[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/v1/all-vehicles"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (numberOfWheels === 2) {
      setFilterData(data.filter((vehicle) => vehicle?.type === "bike"));
    } else if (numberOfWheels === 4) {
      setFilterData(data.filter((vehicle) => vehicle?.type === "car"));
    }
  }, [data, numberOfWheels]);

  return (
    <Box sx={{ width: "40%" }}>
      <Typography variant="h6">Type of Vehicle</Typography>
      <FormControl component="fieldset">
        <RadioGroup
          row
          value={value}
          onChange={(e) => {
            const selectedVehicle = filterData.find(
              (vehicle) => vehicle.name === e.target.value
            );
            setVehicleType(e.target.value);
            setVehicleId(selectedVehicle?._id ?? "");
          }}
        >
          {filterData.map((vehicle: any) => (
            <FormControlLabel
              key={vehicle._id}
              value={vehicle.name}
              control={<Radio />}
              label={vehicle.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default VehicleType;
