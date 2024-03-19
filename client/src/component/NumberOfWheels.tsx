import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface NumberOfWheelsProps {
  value: number | null;
  setNumberOfWheels: (value: number | null) => void;
}

const NumberOfWheels = ({ value, setNumberOfWheels }: NumberOfWheelsProps) => {
  return (
    <Box sx={{ width: "40%" }}>
      <Typography variant="h6">Number of Wheels</Typography>
      <FormControl component="fieldset">
        <RadioGroup
          row
          value={value?.toString() ?? ""}
          onChange={(e) => setNumberOfWheels(parseInt(e.target.value))}
        >
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="4" control={<Radio />} label="4" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default NumberOfWheels;
