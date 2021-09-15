import React,{useEffect}  from 'react'
import AOS from "aos";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography,Avatar,Grid,Box, Container } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import Navbar from "./Navbar";
import Footer from './Footer';
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
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
        backgroundColor: "#e0e0e0",
        color: "white"
    },
    '&:nth-of-type(even)': {
        backgroundColor: "#fafafa",
        color: "white"
    },
    
  },
}))(TableRow);



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      mainContainer:{
        minHeight: '0vh',
        backgroundColor:"black"
      },
      g:{
        
        fontSize:"40px",
        fontWeight:"normal",
        [theme.breakpoints.up("md")]:{
           
           fontSize:"50px",
       fontWeight:"normal"
        }
      },
      container1:{
     height:'150vh',
      width:'100vw'
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  tableContainer: {
    width: "100%"
  },
}));

export default function skills() {
  const classes = useStyles();
  useEffect(() => {
    AOS.init();
},[])
  const items=[
    {
       
        title:"HTML",
        val:85,
        desc:" is the language we use to make an Web page."
    },
    {
       
        title:"CSS",
        val:80,
        desc:" is the language we use to style a Web page."
    },
    {
       
        title:"Bootstrap",
        val:90,
        desc:" is the most popular CSS Framework for developing responsive and mobile-first websites."
    },
    {
       
        title:"Materialize CSS",
        val:70,
        desc:" is a modern responsive CSS framework based on Material Design by Google."
    },
    {
       
        title:"JavaScript",
        val:80,
        desc:" is the programming language of the Web."
    },
    {
       
        title:"React JS",
        val:90,
        desc:" is a JavaScript library for building user interfaces developed by facebook. React is used to built single page application."
    },
    {
       
        title:"Redux",
        val:85,
        desc:" is an open-source JavaScript library for managing application state."
    },
    {
       
        title:"React-Bootstrap",
        val:70,
        desc:" replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery."
    },
    {
       
        title:"Material Ui",
        val:90,
        desc:"Material-UI is a React UI framework for faster and easier web development."
    },
    {
       
        title:"React-Form-Hook",
        val:90,
        desc:"help us to make performant, flexible and extensible forms with easy-to-use validation."
    },
    {
       
        title:"Formik",
        val:85,
        desc:" help us for building performant, flexible forms with easy-to-use validation in React and React Native. "
    },
  ]
  return (
      <>
      <Box component="div"  >
    <Box component="header" className={classes.mainContainer}>
       <Navbar  />
       </Box>
       <Box className={classes.paper} style={{paddingBottom:"40px"}}>
       <Grid item xs={12} >
       
       <Typography className={classes.g} style={{textJustify:"center",paddingBottom:"20px", color:"black"}}>Skills</Typography>
       </Grid>
         <Container data-aos="zoom-in" data-aos-duration="3000">
         <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table" >
       
        <TableBody>
          {items.map((item) => (
            <StyledTableRow key={item.title}>
              <StyledTableCell style={{textAlign:'center'}}  >
              <Typography style={{color:"black"}}  >
              <b>{item.title}</b> {item.desc}
              </Typography>
              </StyledTableCell>
              <StyledTableCell style={{ width: "400px", minWidth: "1%", maxWidth: "100%" , alignItems:"center"}} > <Box >
              <Typography variant="h6" style={{color:"black"}}><b>{item.title}</b> </Typography>
              <BorderLinearProgress  variant="determinate" value={item.val} style={{border:"1px solid black"}} />
              </Box></StyledTableCell>
             
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
         </Container>
    
    </Box>
 
  
    <div><Footer /></div>
    </Box>
    </>
  );
}
