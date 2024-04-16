import { useState } from "react";
import { TextField, Box, Button } from "@mui/material";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          size="small"
          sx={{ mb: "1rem" }}
        />
        <TextField
          required
          type="password"
          id="outlined-required"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          size="small"
          sx={{ mb: "1rem" }}
        />
        <Button
          variant="contained"
          onClick={() => handleClick(email, password)}
          sx={{ mb: ".5rem" }}
          aria-label={title}
        >
          {title}
        </Button>
      </Box>
    </>
  );
};

const FormRegister = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <TextField
          required
          id="outlined-required"
          label="Name"
          onChange={(e) => setName(e.target.value)}
          size="small"
          sx={{ mb: "1rem" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Lastname"
          onChange={(e) => setLastname(e.target.value)}
          size="small"
          sx={{ mb: "1rem" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Phone"
          onChange={(e) => setPhone(e.target.value)}
          size="small"
          sx={{ mb: "1rem" }}
        />
        <TextField
          required
          type="date"
          id="outlined-required"
          label="BirthDate"
          onChange={(e) => setBirthDate(e.target.value)}
          size="small"
          sx={{ mb: "1rem" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          size="small"
          sx={{ mb: "1rem" }}
        />
        <TextField
          required
          type="password"
          id="outlined-required"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          size="small"
          sx={{ mb: "1rem" }}
        />
        <Button
          variant="contained"
          onClick={() => handleClick(email, password, name, lastname, phone, birthDate)}
          sx={{ mb: ".5rem" }}
          aria-label={title}
        >
          {title}
        </Button>
      </Box>
    </>
  );
};

export default Form;
export { FormRegister };
