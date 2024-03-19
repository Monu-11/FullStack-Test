import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

interface NameInputProps {
  firstName: string;
  lastName: string;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

const NameInput = ({
  firstName,
  lastName,
  setFirstName,
  setLastName,
}: NameInputProps) => {
  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value);
  };

  const isFirstNameValid = firstName.trim() !== "";
  const isLastNameValid = lastName.trim() !== "";

  return (
    <Box sx={{ width: "40%" }}>
      <TextField
        label="First Name"
        value={firstName}
        onChange={handleFirstNameChange}
        error={!isFirstNameValid}
        helperText={!isFirstNameValid && "First name cannot be empty"}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={handleLastNameChange}
        error={!isLastNameValid}
        helperText={!isLastNameValid && "Last name cannot be empty"}
        fullWidth
        margin="normal"
      />
    </Box>
  );
};

export default NameInput;
