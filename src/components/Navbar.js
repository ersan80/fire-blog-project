import  {useContext,useState} from 'react';
import { BrowserRouter, Routes, Route,Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import cwJpeg from "../assets/cw.jpeg"
import styles from "./Navbar.Module.css"
import { fontFamily, fontSize } from '@mui/system';
import { AuthContext } from '../context/AuthContext';
import { LogOut } from '../helpers/firebase';
import Toastify from '../helpers/toastNotify';

export default function MenuAppBar() {

  const {user} = useContext(AuthContext)

  const navigate = useNavigate()
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = ()=>{
      navigate("login")
  }

  const handleImg =()=>{
      navigate("/")
  }

  const handleRegister =()=>{
      navigate("/register")
  }

  const handleNewBlog = ()=>{
    navigate("/newblog")
  }
  const handleProfile=()=>{
    navigate("/profile")

  }
  const handleLogout =()=>{
    LogOut()
    navigate("/")
    
  }
  return (
    <Box sx={{ flexGrow: 1 }} >

      <AppBar position="static" style={{backgroundColor:"rgb(24,101,129)"}}>
        <Toolbar>
         {  <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={cwJpeg} style={{width:"2rem"}} onClick={handleImg}/>
          </IconButton>}
          <Link to="/" className={styles.link} style={{textDecoration:"none", margin:"auto" , }}>
            <Typography style={{color:"white" , fontFamily:"fantasy", fontSize:"2rem"}} variant="h6" noWrap>
              ──── <span>{"<cihan/>"}</span> Blog ────
            </Typography>
          </Link>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {
                user ?(<>
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleNewBlog}>New</MenuItem>
                <MenuItem onClick={handleLogout}>LogOut</MenuItem></>):(<>  
                <MenuItem onClick={handleLogin}>Login</MenuItem>
                <MenuItem onClick={handleRegister}>Register</MenuItem></>)
              }
              
             

              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
