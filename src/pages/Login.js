import React from 'react'
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

import registerImg from "../assets/blok.png"
import googleImg from "../assets/google.png"
import { signInUser,googleSignUp } from '../helpers/firebase';
import Toastify from '../helpers/toastNotify';

const Login = () => {
  const navigate = useNavigate()

  const[email,setEmail] = useState()
  const[password,setPassword] = useState()
  
  const handleSubmit =(e)=>{
    e.preventDefault()
    signInUser(email,password,navigate)
    Toastify('Logged in succesfully')
  

  }

  const handleGoogle = () => {
    googleSignUp()
    navigate("/")
    Toastify('Logged in succesfully')
  }

    return (
        <Container maxWidth="sm" style={{borderRadius:"10px", boxShadow:"10px 10px 10px black"}}>
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
            alt="regiter_img"
            src={registerImg}
            sx={{ width: 180, height: 180 }}
            style={{backgroundColor:"rgb(24,101,129)"}}
          />
          <Typography variant="h6" component="h6" sx={{ m: 3 }}  style={{color:"rgb(24,101,129)"}} >
          ──── Login ────
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
                  onChange={(e)=>setEmail(e.target.value)}
                  
                  autoComplete="on"
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
                 style={{backgroundColor:"rgb(24,101,129)"}}
                  variant="contained"
                  color="primary"
                  sx={{m:1}}
                  fullWidth
                  type='submit'
                >
                  login
                </Button>
             
                <Button
                style={{backgroundColor:"white", color:"black"}}
                  variant="contained"
                  color="primary"
                  sx={{m:1}}
                  onClick={handleGoogle}            
                  fullWidth
                  type='submit'
                >
                  with <img src={googleImg} alt="googleImg" style={{width:"50px",marginLeft:"3px"}} />
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
      );
  
}

export default Login