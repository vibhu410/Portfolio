import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { v4 as uuidv4 } from 'uuid';
import { Avatar, Grid, Button, Box, Container } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 140,
  },
});
const Menu = ({ items }) => {
  const classes = useStyles();
  return (
    <>
      <Box component="div" style={{ padding: "40px" }}>
        <Grid container spacing={4}>
          {items.map((menuItem, index) => {
            const { id, title, img, desc, price } = menuItem;
            return (
              <Grid key={id} item xs={12} sm={6} md={4}>
                <Card
                  
                  style={{ padding: "15px", backgroundColor: "black" }}
                  data-aos="fade-down"
                  data-aos-duration="3000"
                >
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={img}
                      style={{ height: "300px" }}
                    />
                    <CardContent>
                      <Typography style={{ color: "white" }} variant="h4">
                        {title}
                      </Typography>
                      <Typography style={{ color: "white" }}>{desc}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions></CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Menu;
