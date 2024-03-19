import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import dayjs, { Dayjs } from "dayjs";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import NameInput from "./component/NameInput";
import NumberOfWheels from "./component/NumberOfWheels";
import VehicleType from "./component/VehicleType";
import DateRangePicker from "./component/DateRangePicker";
import axios from "axios";

const App = (): JSX.Element => {
  const [step, setStep] = useState<number>(1);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [numberOfWheels, setNumberOfWheels] = useState<number | null>(null);
  const [vehicleType, setVehicleType] = useState<string>("");
  const [vehicleId, setVehicleId] = useState<string>("");
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs("2024-03-21"));
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs("2024-03-22"));
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<string>("success");

  const handleNext = () => {
    if (step === 1 && (!firstName || !lastName)) {
      alert("Please enter your name");
      return;
    }

    if (step === 2 && !numberOfWheels) {
      alert("Please select number of wheels");
      return;
    }

    if (step === 3 && !vehicleType) {
      alert("Please select vehicle type");
      return;
    }

    setStep(step + 1);
  };

  const handleSubmit = async () => {
    const form = {
      firstName: firstName,
      lastName: lastName,
      name: vehicleType,
      bookingStartDate: startDate,
      bookingEndDate: endDate,
    };

    try {
      const response = await axios.post(
        `http://localhost:3000/api/v1//book-vehicle/${vehicleId}`,
        form
      );
      const message = response.data.message;
      console.log(message);
      setSnackbarMessage(message);
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
    } catch (error: any) {
      console.error("Error submitting data:", error);
      const errorMessage =
        error.response?.data?.message ||
        "An error occurred while submitting data";
      setSnackbarMessage(errorMessage);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      minHeight={"100vh"}
      margin={"auto"}
      gap={"20px"}
    >
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity as any}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>

      {step === 1 && (
        <NameInput
          firstName={firstName}
          lastName={lastName}
          setFirstName={setFirstName}
          setLastName={setLastName}
        />
      )}
      {step === 2 && (
        <NumberOfWheels
          value={numberOfWheels}
          setNumberOfWheels={setNumberOfWheels}
        />
      )}
      {step === 3 && (
        <VehicleType
          value={vehicleType}
          setVehicleType={setVehicleType}
          numberOfWheels={numberOfWheels}
          setVehicleId={setVehicleId}
        />
      )}
      {step === 4 && (
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      )}
      {step < 4 && (
        <Box sx={{ width: "40%" }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleNext}
          >
            Next
          </Button>
        </Box>
      )}
      {step === 4 && (
        <Box sx={{ width: "50%" }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default App;
