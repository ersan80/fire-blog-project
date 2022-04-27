
import React, {useContext,useState,useEffect} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BlogContext } from '../context/BlogContext';
import { AuthContext } from '../context/AuthContext';
import { useNavigate ,Link} from 'react-router-dom';
import Toastify from '../helpers/toastNotify';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function ResponsiveGrid() {
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const {useFetch} = useContext(BlogContext)

  const {user} = useContext(AuthContext)
  
  const navigate = useNavigate()

  const {list} = useFetch()







  return (
      <div>
          
    <Box sx={{ flexGrow: 1 }} style={{marginLeft:"5rem" ,}}>
      <Grid container spacing={{ xs: 3, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {list?.map((item,index) => (
           
          <Grid item xs={2} sm={4} md={4} key={item.id}>
               <Card sx={{ maxWidth: 300 }} style={{cursor:"pointer"}} onClick={()=>user ?  navigate(`details/${item.id}`,{ state:{item}}) : Toastify('Please log in to see details')}>
            
            <img src={item.image} alt="" style={{height:"194px", width:"100%"}} />
    
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {item.title}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          ></ExpandMore>
        </CardActions>
      </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
}
