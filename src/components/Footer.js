import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
const useStyles = makeStyles({
  root: {
    
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation  style={{backgroundColor:"black", color:"white"}}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction href={'https://www.linkedin.com/in/vibha-kaushik-5987041b7/'} target="_blank" label="LinkedIn" style={{color:"white"}} icon={<LinkedInIcon />} />
      <BottomNavigationAction href={'https://github.com/vibhu410'} target="_blank" label="GitHub" style={{ color:"white"}} icon={<GitHubIcon />} />
      
    </BottomNavigation>
  );
}
