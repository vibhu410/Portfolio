import React, { useState, useEffect } from "react";
import AOS from "aos";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import "./index.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import { Typography, Avatar, Grid, Box, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  g:{
    
    fontSize:"40px",
    fontWeight:"normal",
    [theme.breakpoints.up("md")]:{
      
       fontSize:"50px",
   fontWeight:"normal"
    }
  },
  mainContainer: {
    minHeight: "0vh",
    backgroundColor: "black",
    backgroundSize: "cover",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const allCategories = ["all", ...new Set(items.map((item) =>  item.category ))];

export default function Projects() {
  const classes = useStyles();
  useEffect(() => {
    AOS.init();
  }, []);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <div className={classes.root}>
        <Box component="div">
          <Box component="header" className={classes.mainContainer}>
            <Navbar />
          </Box>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Box className={classes.paper} className="hei1">
                <Box height="100%" component="section">
                  <Typography
                  className={classes.g}
                    style={{ textAlign: "center", color:"black", padding: "20px" }}
                  >
                    Projects
                  </Typography>
                  <Categories
                    categories={categories}
                    filterItems={filterItems}
                  />
                  <Menu items={menuItems} />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Footer />
        </Box>
      </div>
    </>
  );
}
