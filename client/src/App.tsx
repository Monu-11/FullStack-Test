import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const App = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!name.firstName || !name.lastName) {
      setError("Please enter your name");
      return;
    }
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
      <Box sx={{ width: "50%" }}>
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
      </Box>
      <Box sx={{ width: "50%" }}>
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </Box>

      <Box sx={{ width: "50%" }}>
        {error && <Typography color="error">{error}</Typography>}
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
    </Box>
  );
};

export default App;
