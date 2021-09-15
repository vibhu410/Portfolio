import React,{useEffect}  from 'react'
import AOS from "aos";
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { Typography,Avatar,Grid,Box, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Navbar from "./Navbar";
import Footer from './Footer';
import vi from "../avatar/vi.png";
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sd: {
   fontSize:"16px",
     [theme.breakpoints.up("md")]:{
      fontSize:"20px"
     }
   },
   sd1: {
     padding:"0px",
      [theme.breakpoints.up("md")]:{
        padding:"25px"
      }
    },
  root1: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(50),
    },
  },
  mainContainer:{
    minHeight: '0vh',
    backgroundColor:"black"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  g:{
    
    fontSize:"40px",
    fontWeight:"normal",
    [theme.breakpoints.up("md")]:{
      
       fontSize:"50px",
   fontWeight:"normal"
    }
  },
}));

export default function About() {
  const classes = useStyles();
  useEffect(() => {
    AOS.init();
},[])
  return (
    <Box component="div" >
    <Box component="header" className={classes.mainContainer}>
       <Navbar  />
       </Box>
      <Grid container spacing={0}>
        
        <Grid item xs={12} >
          <Paper className={classes.paper} >
          <Grid item xs={12} >
          <Typography className={classes.g} style={{textJustify:"center", color:"black",fontSize:"bolder"}}>About Me</Typography>
          </Grid>
          <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
          <Grid className={classes.paper} >
          <div className={classes.paper} >
          <img src={vi} style={{ width: "100%", height: "120%"}} data-aos="fade-down" data-aos-duration="3000" className="s" alt="..."/>
          </div>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
        <Grid className={classes.paper}>
        <div className={classes.paper} >
        <Box className={classes.sd1}  data-aos="zoom-in" data-aos-duration="3000">
         <Typography variant="h5" style={{color:"black"}}>
         I'm Vibha Kaushik 

         </Typography>
         <Typography variant="h6" style={{textAlign:"justify",color:"black"}} className={classes.sd}>I’m a seasoned frontend developer with a strong sense for aesthetics and interaction. My creative skills are HTML, CSS, JavaScript, React, Redux, Material-UI . <b>HTML</b> is the standard markup language for Web pages. With HTML you can create your own Website. <b>CSS</b> is the language we use to style an HTML document.CSS describes how HTML elements should be displayed. <b>JavaScript</b> is the world's most popular programming language.JavaScript is the programming language of the Web. <b>React</b> is a JavaScript library for building user interfaces developed by facebook. React is used to built single page application. <b>Redux</b> is an open-source JavaScript library for managing application state. <b>Material-UI</b> is a React UI framework for faster and easier web development.</Typography>
        </Box>
        </div>
        </Grid>
        </Grid>
        </Grid>
          </Paper>
        </Grid>
        
      </Grid>
      <div><Footer  /></div>
    </Box>
  );
}
