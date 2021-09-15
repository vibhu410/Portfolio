import React ,{useState,useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {style} from "glamor"
import AOS from "aos";
import emailjs, { init, sendForm } from 'emailjs-com';
import ReactSelect from "react-select";
import { useForm ,useFieldArray, Controller} from "react-hook-form";
import { TextField, Container, Paper , Box, Typography, Button,InputAdornment,Checkbox,FormControlLabel, FormGroup,FormLabel, Grid} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MessageIcon from '@material-ui/icons/Message';
import BusinessIcon from '@material-ui/icons/Business';
import { ErrorMessage } from '@hookform/error-message';

import _ from "lodash/fp";
import { makeStyles } from "@material-ui/core/styles";
import { spacing } from '@material-ui/system';
import Navbar from "./Navbar";
import Footer from './Footer';
import contactus from "./co/contactus.png"
init("user_jDKo0Loh96w8eZkXUflhK");
const useStyles = makeStyles((theme) => ({
    root: {
     flexGrow:1,
      height: "overflow",
     
     
      
      paddingRight:"30px",
      paddingLeft:"30px"
    },
    sd: {
     width:"100%",
      [theme.breakpoints.up("md")]:{
         width:"100%"
      }
    },
    g:{
      fontSize:"20px",
      fontWeight:"normal",
      [theme.breakpoints.up("sm")]:{
         fontSize:"30px",
     fontWeight:"normal"
      },
      [theme.breakpoints.up("md")]:{
        fontSize:"40px",
    fontWeight:"normal"
     },
     [theme.breakpoints.up("lg")]:{
      fontSize:"50px",
  fontWeight:"normal"
   }
    },
    sp:{
      width:"70%",
      [theme.breakpoints.up("sm")]:{
        width:"60%",
     },
  [theme.breakpoints.up("md")]:{
     width:"100%",
     height:"600px"
  },
  [theme.breakpoints.up("lg")]:{
    width:"90%",
     
 },
     },
     
    ss: {
      width:"210px",
       [theme.breakpoints.up("sm")]:{
          width:"350px"
       },
       [theme.breakpoints.up("md")]:{
        width:"500px"
     },
     [theme.breakpoints.up("lg")]:{
      width:"650px"
   },
   [theme.breakpoints.up("xl")]:{
    width:"700px"
 },
     },
    sd1: {
      width:"100%",
       [theme.breakpoints.up("md")]:{
          width:"30%"
       }
     },
     paper: {
      
      textAlign: 'center',
     
    },
   
   
   
    mainContainer:{
      minHeight: '0vh',
      backgroundColor:"black",
      backgroundSize: 'cover'
    },
  }));
export default function Contact() {
  const { register,reset, formState, formState: { errors,isSubmitSuccessful},control, handleSubmit,setValue } = useForm({
    criteriaMode: "all", defaultValues: {multipleErrorInput:"",
    multipleErrorInput1:"",multipleErrorInput2:"",multipleErrorInput3:"",multipleErrorInput4:"",multipleErrorInput5:""}
  });
  const [submittedData, setSubmittedData] = React.useState({});
  const styles=style({
      
    ":hover":{
      backgroundColor: "red",
    color:"white",
      boxShadow:"0 10px 25px red "}
  });
  const styles1=style({
    ":hover":{
      backgroundColor: "blue",
    color:"white",
      boxShadow:"0 10px 25px blue "}
  });
  const classes = useStyles();
  useEffect(() => {
    AOS.init();
},[])
  
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ multipleErrorInput:"",
      multipleErrorInput1:"",
      multipleErrorInput2:"",
      multipleErrorInput3:"",
      multipleErrorInput4:"",
      multipleErrorInput5:""
    });
    }
  }, [formState, submittedData, reset]);
  const serviceID="service_id";
  const templateID="template_id";
  const userID="user_jDKo0Loh96w8eZkXUflhK";
  
  const onSubmit = (data) => {
    
    console.log(data);

        emailjs.sendForm(serviceID, templateID,myForm)
    .then(function(response) {
      
       console.log('SUCCESS!', response.status, response.text);
       toast.success(" I will contact you soon!",{
        theme:"colored"
       });
    }, function(error) {
       
       console.log('FAILED...', error);
       toast.error("Network error ! ",{
        theme:"colored"
       });
    });
  }
  return (
    <>
    <Box component="header" className={classes.mainContainer}>
       <Navbar  />
       </Box>
    <div className={classes.root}>
    <Grid container spacing={3}>
    <Grid item xs={12} md={6} >
      <Box className={classes.paper}>
      <img src={contactus} className={classes.sp} data-aos="fade-down"  data-aos-duration="3000" />
      </Box>
    </Grid>
    <Grid item xs={12} md={6}>
    <Box  className={classes.sd} p={4} data-aos="zoom-in-up" data-aos-duration="3000" >
    <Typography className={classes.g} color="secondary" style={{textAlign:"center"}}>Contact Me</Typography>
    <Box component="form" id="myForm" onSubmit={handleSubmit(onSubmit)}>
    <Grid container spacing={4}>
    
    <Grid item md={6} sm={6} xs={12}>
      <div className={classes.paper}>
      <Controller 
      control={control} 
      name="multipleErrorInput"
      render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error }
        }) => <TextField 
        placeholder="Enter Your First Name"
          label="First Name"
          name="multipleErrorInput"
          fullWidth
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle color="secondary" />
              </InputAdornment>
            ),
          }}
          
          margin="normal"
        value={value}
      onChange={onChange}
  
      inputRef={ref}
      error={Boolean(errors.multipleErrorInput)}
          helperText={errors.multipleErrorInput?.message}
      />} 
      rules={{
        required: "This is required.",
        pattern: {
          value: /[A-Za-z]/,
          message: "This input is number only."
        },
        maxLength: {
          value: 11,
          message: "This input must exceed 10 characters"
        }
      } }
      defaultValue=""
    />
    
      </div>
    </Grid>
    <Grid item md={6} sm={6} xs={12}>
      <div className={classes.paper}>
      <Controller 
      control={control} 
      name="multipleErrorInput1"
      render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error }
        }) => <TextField 
        placeholder="Enter Your Last Name"
          label="Last Name"
          name="multipleErrorInput1"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle color="secondary" />
              </InputAdornment>
            ),
          }}
          
          margin="normal"
        value={value}
      onChange={onChange}
      inputRef={ref}
      error={Boolean(errors.multipleErrorInput1)}
          helperText={errors.multipleErrorInput1?.message}
      />} 
      rules={{
        required: "This is required.",
        pattern: {
          value: /[A-Za-z]/,
          message: "This input is number only."
        },
        maxLength: {
          value: 11,
          message: "This input must exceed 10 characters"
        }
      }
    }
      defaultValue=""
    />
   
      </div>
    </Grid>
    <Grid item md={12} sm={12} xs={12}>
      <div className={classes.paper}>
      <Controller 
      control={control} 
      name="multipleErrorInput2"
      render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error }
        }) => <TextField 
        placeholder="Enter Your Email "
          label="Email"
          variant="outlined"
          fullWidth
          name="multipleErrorInput2"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                < EmailIcon color="secondary" />
              </InputAdornment>
            ),
          }}
         
          margin="normal"
        value={value}
      onChange={onChange}
      inputRef={ref}
      error={Boolean(errors.multipleErrorInput2)}
          helperText={errors.multipleErrorInput2?.message}
      />} 
      rules={{
        required: "This is required.",
        pattern: {
          value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          message: "This input is number only."
        },
        maxLength: {
          value: 25,
          message: "This input must exceed 10 characters"
        }
      }
    }
      defaultValue=""
    />
   
      </div>
    </Grid>
    <Grid item md={6} sm={6} xs={12}>
      <div className={classes.paper}>
      <Controller 
      control={control} 
      name="multipleErrorInput3"
      render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error }
        }) => <TextField 
        placeholder="Enter Your Phone Number"
          label="Phone Number"
          variant="outlined"
          fullWidth
          name="multipleErrorInput3"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneIphoneIcon color="secondary" />
              </InputAdornment>
            ),
          }}
          
          margin="normal"
        value={value}
      onChange={onChange}
      inputRef={ref}
      error={Boolean(errors.multipleErrorInput3)}
          helperText={errors.multipleErrorInput3?.message}
      />} 
      rules={{
        required: "This is required.",
        pattern: {
          value: /\d+/,
          message: "This input is number only."
        },
        maxLength: {
          value: 11,
          message: "This input must exceed 10 characters"
        }
      }
    }
      defaultValue=""
    />
   
      </div>
    </Grid>
    <Grid item md={6}sm={6} xs={12}>
      <div className={classes.paper}>
      <Controller 
      control={control} 
      name="multipleErrorInput4"
      render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error }
        }) => <TextField 
        placeholder="Enter Organization Name"
          label="Organization Name"
          variant="outlined"
          fullWidth
          name="multipleErrorInput4"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BusinessIcon color="secondary" />
              </InputAdornment>
            ),
          }}
         
          margin="normal"
        value={value}
      onChange={onChange}
      inputRef={ref}
      error={Boolean(errors.multipleErrorInput4)}
          helperText={errors.multipleErrorInput4?.message} 
      />} 
      rules={{
        required: "This is required.",
        pattern: {
          value: /[A-Za-z]/,
          message: "This input is number only."
        },
        maxLength: {
          value: 10,
          message: "This input must exceed 10 characters"
        }
      }
    }
      defaultValue=""
    />
    
      </div>
    </Grid>
    <Grid item md={12} sm={12} xs={12}>
      <div className={classes.paper}>
      <Controller 
      control={control} 
      name="multipleErrorInput5"
      render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error }
        }) => <TextField 
        placeholder="Enter Your Message"
          label="Message"
          multiline
          name="multipleErrorInput5"
          fullWidth
          rows={4}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                < MessageIcon color="secondary" />
              </InputAdornment>
            ),
          }}
          
          variant="outlined"
          helperText="min 20 char"
          
          margin="normal"
        value={value}
      onChange={onChange}
      inputRef={ref}
      error={Boolean(errors.multipleErrorInput5)}
          helperText={errors.multipleErrorInput5?.message}
      />} 
      rules={{
        required: "This is required.",
        minLength: {
          value: 20,
          message: "This input must have 20 characters"
        }
      }
    }
      defaultValue=""
    />
      
      </div>
    </Grid>
    <Grid item xs={6}>
    <div className={classes.paper}><Button size="large" {...styles} style={{backgroundColor: "rgb(245,0,87)",
    color:"white"}} type="submit"    >
            Submit
          </Button>
          </div>
  </Grid>
  <Grid item xs={6}>
    <div className={classes.paper}>
    <Button size="large"{...styles1} style={{backgroundColor: "rgb(63,81,181)",
        color:"white"}} type="button" onClick={() => {
          reset({
            multipleErrorInput:"",
            multipleErrorInput1:"",
            multipleErrorInput2:"",
            multipleErrorInput3:"",
            multipleErrorInput4:"",
            multipleErrorInput5:""
          });
        }} >
         Reset
        </Button>
    </div>
  </Grid>
    </Grid>
    <br/>
    <ToastContainer />
    
  </Box>
  </Box>
  
    </Grid>
    </Grid>
    
    
    </div>
    <div><Footer /></div>
    </>
  );
}