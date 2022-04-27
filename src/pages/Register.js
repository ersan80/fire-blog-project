import React from "react";

import {useNavigate} from"react-router-dom"
import { useEffect, useState } from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";

import { createUser, googleSignUp } from "../helpers/firebase";

import registerImg from "../assets/blok.png";
import googleImg from "../assets/google.png";

const Register = () => {
  const[email,setEmail]=useState()
  const[password,setPassword] = useState()
  const displayName = `${email}`

  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    createUser(email,password,navigate,displayName)
    console.log(email,password); 
  }

  const handleGoogle = () => {
    googleSignUp(navigate)
  }
  return (
    <Container
      maxWidth="sm"
      style={{ borderRadius: "10px", boxShadow: "10px 10px 10px black" }}
    >
      <Box
        sx={{
          height: "100vh",
          marginTop: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="register_img"
          src={registerImg}
          sx={{ width: 180, height: 180 }}
          style={{ backgroundColor: "rgb(24,101,129)" }}
        />
        <Typography
          variant="h6"
          component="h6"
          sx={{ m: 3 }}
          style={{ color: "rgb(24,101,129)" }}
        >
          ──── Register ────
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="email"
                name="email"
                variant="outlined"
                type="email"
                autoComplete="on"
                onChange={(e)=>setEmail(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="password"
                name="password"
                variant="outlined"
                type="password"
                autoComplete="current-password"
                onChange={(e)=>setPassword(e.target.value)}
                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12} container rowSpacing={0}>
              <Button
                style={{ backgroundColor: "rgb(24,101,129)" }}
                variant="contained"
                color="primary"
                sx={{ m: 1 }}
                fullWidth
                type="submit"
              >
                Register
              </Button>

              <Button
                style={{ backgroundColor: "white", color: "black" }}
                variant="contained"
                color="primary"
                sx={{ m: 1 }}
                fullWidth
                type="submit"
                onClick={handleGoogle}
              >
                with{" "}
                <img
                  src={googleImg}
                  alt="googleImg"
                  style={{ width: "50px", marginLeft: "3px" }}
                />
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
