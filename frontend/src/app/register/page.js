"use client";

import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Alert,
  Box,
  Link,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleName, setVehicleName] = useState("");
  const [plateNo, setPlateNo] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword || !firstName || !lastName || !vehicleName || !plateNo) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Vehicle Name:", vehicleName);
    console.log("Plate Number:", plateNo);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: grey[100],
        padding: 4,
        borderRadius: 2,
        boxShadow: 5,
        minHeight: "100vh",
        backgroundImage: `url('https://source.unsplash.com/random')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          padding: 4,
          borderRadius: 2,
          boxShadow: 4,
          width: "100%",
          backdropFilter: "blur(10px)", // Adding a blur effect to the background
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: blue[700] }}>
          Register
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            sx={{ bgcolor: grey[50] }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            sx={{ bgcolor: grey[50] }}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ bgcolor: grey[50] }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{ bgcolor: grey[50] }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            sx={{ bgcolor: grey[50] }}
          />
          <TextField
            label="Vehicle Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={vehicleName}
            onChange={(e) => setVehicleName(e.target.value)}
            required
            sx={{ bgcolor: grey[50] }}
          />
          <TextField
            label="Plate Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={plateNo}
            onChange={(e) => setPlateNo(e.target.value)}
            required
            sx={{ bgcolor: grey[50] }}
          />
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, mb: 2, bgcolor: blue[500], '&:hover': { bgcolor: blue[700] } }}
          >
            Register
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Link href="/login" variant="body2" color={blue[500]}>
              Already Have Account
            </Link>
            <Link href="#" variant="body2" color={blue[500]}>
              Forgot Password?
            </Link>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default App;
