import React, {useState, useEffect} from 'react';
import { Menu,MenuItem} from "@material-ui/core";
import AOS from "aos";
import {style} from "glamor"
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GetAppIcon from '@material-ui/icons/GetApp';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import BuildIcon from '@material-ui/icons/Build';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AssignmentInd, ContactMail, Home, Apps } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import ka from "../avatar/ka.png"
import {Link, useHistory} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  sectionDesktop:{
    display:"none",
    [theme.breakpoints.up("md")]:{
        display:"flex"
    }
},
sectionDesktop1:{
   display:"none",
   [theme.breakpoints.down("sm")]:{
       display:"flex"
   }
},
  root1: {
    flexGrow: 1,
},
menuButton: {
    marginRight: theme.spacing(2),
},
title: {
    flexGrow: 1,
},
list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  appBarTransparent:{
      background:"transparent"
  },
  appBarSolid:{
      backgroundColor:"black"
  }
}));
const menuItems=[
    {
        listIcon:<Home/>,
        listText:"Home",
        listPath:"/portfolio"
    },
    {
      listIcon:<PersonIcon/>,
      listText:"About",
      listPath:"/about"
  },
    {
        listIcon:<BuildIcon/>,
        listText:"Skills",
        listPath:"/skills"
    },
    {
      listIcon:<Apps/>,
      listText:"Projects",
      listPath:"/project"
  },
    {
        listIcon:<ContactMail/>,
        listText:"Contact Me",
        listPath:"/contact"
    }
    
  
]
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
    const classes = useStyles();
    const styles=style({
      
      ":hover":{
        backgroundColor: "red",
      color:"white",
        boxShadow:"0 5px 30px red "}
    });
    useEffect(() => {
      AOS.init();
  },[])
    const [state, setState] = React.useState({
        left: false,
      });
   

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
         <List>
           <ListItem>
           <Avatar alt="Remy Sharp" src={ka} className={classes.large} />
           <h3 style={{textIndent:"30px"}}>Vibha Kaushik</h3>
           </ListItem>
         </List>
         <Divider />
          <List>

            {menuItems.map((lsItem, index) => (
              
              <ListItem button key={index} component={Link} to={lsItem.listPath}>
                <ListItemIcon>{lsItem.listIcon}</ListItemIcon>
                <ListItemText primary={lsItem.listText} />
              </ListItem>
            ))}
          </List>
          <Divider />
          
        </div>
      )
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root1}>
            <AppBar position="fixed" elevation={0} style={{backgroundColor:"black"}}  >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    {[ 'left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                          <MenuIcon style={{fontSize:"35px"}} onClick={toggleDrawer(anchor, true)} />
                          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                          {list(anchor)}
                          </Drawer>
                        </React.Fragment>
                      ))}
                    </IconButton>
                   <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                    >
                    <Typography variant="h6" className={classes.title}  >
                    My Info
                  </Typography>
                  <div className={classes.sectionDesktop}>
                  <Button  {...styles} style={{backgroundColor: "rgb(245,0,87)",color:"white"}} href="https://drive.google.com/file/d/1mqFLFiT7Zq6wWhkY3zpY9jrUNuES2IiD/view?usp=sharing" target="_blank">
                  Resume <GetAppOutlinedIcon/></Button>
                        <Typography variant="h4" style={{paddingLeft:"20px"}} >
                            Portfolio
                        </Typography>
                        </div>
                        <Button  {...styles} style={{backgroundColor: "rgb(245,0,87)",color:"white"}} className={classes.sectionDesktop1}  href="https://drive.google.com/file/d/1mqFLFiT7Zq6wWhkY3zpY9jrUNuES2IiD/view?usp=sharing" target="_blank">
                        Resume
                  
                        </Button>
                    </Grid>
                </Toolbar>
            </AppBar>
            
        </div>
        <Toolbar id="back-to-top-anchor" />
        
      
      <ScrollTop {...props} >
        <Fab {...styles} style={{color:"white", backgroundColor:"rgb(245,0,87)",position:"absolute", bottom:"70px" ,right:"-15px",zIndex:"999"}} size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon  />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
