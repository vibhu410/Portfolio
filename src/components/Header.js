import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,Avatar,Grid,Box, Container , Paper} from '@material-ui/core';
import wgirl from "../avatar/meet.gif";
import lin from "../avatar/lin.png";
import g from "../avatar/g.png";
import gil from "../avatar/gil.gif";
import Typed from "react-typed";
import Navbar from "./Navbar"
import {style} from "glamor"
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ResponsiveImgMaterialUi from "responsive-img-material-ui";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Footer from './Footer';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { styled } from '@material-ui/core/styles';
import Cards from './Cards';
import { AiFillHtml5} from 'react-icons/ai';
import { SiCss3,SiJavascript,SiReact,SiRedux ,SiMaterialUi} from 'react-icons/si';
const useStyles=makeStyles(theme=>({
    root1: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            avatar1:{
                height:"30vh",
                width:"30vw"
            }
        },
        
        [theme.breakpoints.up('md')]: {
            avatar1:{
                height:"60vh",
                width:"60vw"
            }
        }
      },
      e:{
        padding:"70px",
        [theme.breakpoints.up("md")]:{
           padding:"100px",
        }
      },
      g:{
        padding:"0px",
        fontSize:"40px",
        fontWeight:"normal",
        [theme.breakpoints.up("md")]:{
           paddingTop:"80px",
           fontSize:"50px",
       fontWeight:"normal"
        }
      },
      d:{
        width:"400px", paddingTop:"80px",
        [theme.breakpoints.up("sm")]:{
            position:"absolute",right:"40px",bottom:"30px",width:"700px",paddingTop:"0px",
        },
        [theme.breakpoints.up("md")]:{
          position:"absolute",right:"20px",bottom:"30px",width:"700px",paddingTop:"0px",
      },
      [theme.breakpoints.up("lg")]:{
        position:"absolute",right:"30px",bottom:"20px",width:"500px",paddingTop:"0px",
    },
    [theme.breakpoints.up("xl")]:{
      position:"absolute",right:"40px",bottom:"30px",width:"700px",paddingTop:"0px",
  },
      },
    se:{
        display:"none",
    [theme.breakpoints.up("md")]:{
        display:"block",
    }
    },
    sd:{
      color:"rgb(245,0,87)",
        fontSize:"40px",
        fontWeight:"bold",
    [theme.breakpoints.up("sm")]:{
       fontSize:"50px",
       fontWeight:"bold"
    },
    [theme.breakpoints.up("md")]:{
      fontSize:"60px",
      fontWeight:"bold"
   },
   [theme.breakpoints.up("lg")]:{
    fontSize:"70px",
    fontWeight:"bold"
 },
 [theme.breakpoints.up("xl")]:{
  fontSize:"80px",
  fontWeight:"bold"
},
    },
    sd1:{
      color:"black",
        fontSize:"30px",
        fontWeight:"normal",
    [theme.breakpoints.up("sm")]:{
       fontSize:"35px",
       fontWeight:"bold"
    },
    [theme.breakpoints.up("md")]:{
      fontSize:"40px",
      fontWeight:"bold"
   },
   [theme.breakpoints.up("lg")]:{
    fontSize:"50px",
    fontWeight:"bold"
 },
 [theme.breakpoints.up("xl")]:{
  fontSize:"60px",
  fontWeight:"bold"
},
    },
    sd2:{
      fontSize:"25px",
      fontWeight:"normal",
  [theme.breakpoints.up("sm")]:{
     fontSize:"30px",
     fontWeight:"normal"
  },
  [theme.breakpoints.up("md")]:{
    fontSize:"35px",
    fontWeight:"bold"
 },
 [theme.breakpoints.up("lg")]:{
  fontSize:"40px",
  fontWeight:"bold"
},
[theme.breakpoints.up("xl")]:{
  fontSize:"50px",
  fontWeight:"bold"
},
  },
     paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    avatar:{
        width:"200",
        height:"200"
    },
    se1:{padding:"1%",
    margin:"20px",
    [theme.breakpoints.up("sm")]:{
       padding:"1.5%",
       margin:"20px"}
      },
    se:{
      width:"9%",
      margin:"20px",
      [theme.breakpoints.up("sm")]:{
         width:"10%",
         margin:"20px"}
    },
   sp:{
    width:"60%",
[theme.breakpoints.up("md")]:{
   width:"90%"
},
   },
    mainContainer:{
        height:"650px",
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg1.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      },
}))
export default function Header() {
    const classes = useStyles()
    const history=useHistory();
    const styles=style({
      
      ":hover":{
        backgroundColor: "red",
      color:"white",
        boxShadow:"0 10px 25px red "}
    });
    
    const itms=[
      {
         id:"1",
          title:<AiFillHtml5/>,
          val:"70",
          desc:"HTML is the language we use to make an Web page.",
          goe:"https://www.w3schools.com/html/"
      },
    
      {
        id:"2",
        title:<SiCss3/>,
        val:"70",
        desc:"CSS is the language we use to style a Web page.",
        goe:"https://www.w3schools.com/w3css/defaulT.asp"
    },
    {
        id:"3",
      title:<SiJavascript/>,
      val:"70",
      desc:"JavaScript is the programming language of the Web.",
      goe:"https://www.w3schools.com/js/"
  },

  {
    id:"4",
    title:<SiReact/>,
    val:"70",
    desc:"React is a JavaScript library for building user interfaces developed by facebook. ",
    goe:"https://reactjs.org/"
},{
    id:"5",
  title:<SiRedux/>,
  val:"70",
  desc:"Redux is an open-source JavaScript library for managing application state.",
  goe:"https://redux.js.org/"
},

{
    id:"6",
title:<SiMaterialUi/>,
val:"70",
desc:"Material-UI is a React UI framework for faster and easier web development.",
goe:"https://material-ui.com/"
},
    ]
    return (
       <>
       
        <Box component="div"  >
        <Navbar />
        <Grid container spacing={0} style={{paddingTop:"40px"}}>
        
        <Grid item sm={12} md={7}>
          <div className={classes.paper}>
          <Box data-aos="zoom-in-down" data-aos-duration="3000">
          <Typography className={classes.sd} variant="h1" >
          Vibha Kaushik
          </Typography>
          <Typography className={classes.sd1} variant="h2" >
          B.Tech ( C.S.E )
          </Typography>
          <Typography className={classes.sd2} variant="h3" style={{color:"seagreen"}}>
          <Typed
          strings={[
              'Frontend Developer',
              'React Developer']}
              typeSpeed={40}
              backSpeed={50}
              loop/ >
          </Typography>
        
         <a href="https://www.linkedin.com/in/vibha-kaushik-5987041b7/" >
         <img src={lin}  className={classes.se} /></a>
         <a href="https://github.com/vibhu410">
         <img src={g} className={classes.se} /></a>
         <br/>
         <Button {...styles} onClick={()=>{history.push("/contact")}} className={classes.se1}
         style={{  backgroundColor: "rgb(245,0,87)",
         color:"white", 
        }}>
Contact Me
</Button>

</Box>
        
          </div>
        </Grid>
        <Grid item sm={12} md={5}>
          <div className={classes.paper}><img src={wgirl} className={classes.sp}  /></div>
        </Grid>
        </Grid>

        </Box>



        <Box component="div" className={classes.timeLine}>
            <Typography  align="center" className={classes.g} style={{ color:'black' }}>Skills</Typography>
          </Box>
          
         
         <Box style={{paddingLeft:"40px",paddingRight:"40px",paddingTop:"20px" , paddingBottom:"20px"}} >
          <Grid container spacing={4}  >
    {itms.map((itm) => (
      <Grid item key={itm.id} xs={12} sm={6} lg={4}  >
      <Cards  title={itm.title} content={itm.desc} goe={itm.goe}/>
      </Grid>
      ))}
      </Grid>
     
      </Box>
      <div><Footer /></div>
          
      </>
    )
}
