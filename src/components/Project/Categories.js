import React from "react";
import {style} from "glamor"
import {
  Typography,
  Avatar,
  Grid,
  Button,
  Container,
  Box,
  Card,
} from "@material-ui/core";

const Categories = ({ categories, filterItems }) => {
  const styles=style({
      
    ":hover":{
      backgroundColor: "red",
    color:"white",
      boxShadow:"0 10px 25px red "}
  });
  return (
    <Container
      style={{
        marginBottom: "2rem",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {categories.map((category, index) => {
        return (
          <Grid key={index}>
            <Button {...styles} size="small" style={{backgroundColor: "rgb(245,0,87)",margin: "10px", color:"white"}}
              onClick={() => filterItems(category)}>
              {category}
            </Button>
          </Grid>
        );
      })}
    </Container>
  );
};

export default Categories;
