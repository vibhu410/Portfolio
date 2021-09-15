import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {style} from "glamor"
import { Typography,Avatar,Grid,Box, Container } from '@material-ui/core';
export default function Cards(props) {
    const {title,content,goe}=props
    const styles=style({
      
      ":hover":{
        backgroundColor: "red",
      color:"white",
        boxShadow:"0 10px 25px red "}
    });
    return (
        <div >
        <Card  style={{  padding:"15px", backgroundColor:"black"}} data-aos="flip-right" data-aos-duration="2000" className="s" >
        <CardContent>
        <Typography style={{color:"white", fontWeight:"bolder",fontSize:"100px", textAlign:"center"}} variant="h3">
            {title}
          </Typography>
          <Typography style={{color:"white"}}>
            {content}
           
          </Typography>
          </CardContent>
    <CardActions>
      <Button {...styles} size="small" style={{backgroundColor: "rgb(245,0,87)",
      color:"white"}} href={goe} target="_blank">Learn More</Button>
    </CardActions>
  </Card>
      
        </div>
    )
}
